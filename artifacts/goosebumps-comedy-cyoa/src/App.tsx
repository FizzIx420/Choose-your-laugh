import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Backpack,
  BookOpen,
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Eye,
  Flag,
  Gauge,
  Library,
  MoonStar,
  Pause,
  Play,
  RotateCcw,
  Search,
  Save,
  Settings,
  ShieldCheck,
  Skull,
  Sparkles,
  Trophy,
  UserRound,
  Volume2,
  VolumeX,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react';
import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import {
  LONG_STORY_CHAPTERS,
  LONG_STORY_PAGES,
  longScenes,
  longStart,
} from '@/storyPages';

const queryClient = new QueryClient();

type Choice = {
  label: string;
  note: string;
  next: string;
  item?: string;
  consequence?: string;
  tone?: 'green' | 'coral' | 'ink';
  flag?: string;
  stats?: Partial<Stats>;
};

type Scene = {
  id: string;
  pageNumber?: number;
  chapter: string;
  eyebrow: string;
  title: string;
  body: string[];
  aside?: string;
  choices?: Choice[];
  ending?: { title: string; copy: string; badge: string; accent: string };
};

type Stats = {
  nerve: number;
  wit: number;
  chaos: number;
  laughs: number;
};

type HistorySnapshot = {
  sceneId: string;
  inventory: string[];
  flags: string[];
  stats: Stats;
  lastConsequence: string;
};

type PlayerProfile = {
  name: string;
  title: string;
};

type GameState = {
  sceneId: string;
  profile: PlayerProfile;
  inventory: string[];
  flags: string[];
  history: HistorySnapshot[];
  stats: Stats;
  achievements: string[];
  endings: string[];
  lastConsequence: string;
  choiceCount: number;
  runSeed: number;
};

type Settings = {
  sound: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  textSize: 'normal' | 'large' | 'xl';
  showHints: boolean;
};

const scenes: Record<string, Scene> = {
  start: {
    id: 'start',
    chapter: 'Chapter 01',
    eyebrow: 'The book that should not be checked out',
    title: 'The library closes at 8:03 PM.',
    body: [
      'You know this because the clock above the circulation desk is making a noise like a tiny angry goose.',
      'You also know this because you are standing alone in the school library, holding a paperback with no barcode, no author, and a title stamped in silver ink: THE HAUNTED HALLWAY OF DOOM.',
      'The book is warm. Books should not be warm. Unless they are about volcanoes. This one is about a hallway.',
    ],
    aside: 'A sensible person would put it back. You are holding the next page open.',
    choices: [
      { label: 'Open the cover and read the first page', note: 'The traditional mistake.', next: 'cover', item: 'Borrowed courage', consequence: 'You have begun. The book has noticed.', tone: 'green' },
      { label: 'Knock on the library desk', note: 'Ask an adult. Bold. Possibly useless.', next: 'librarian', item: 'One library stamp', consequence: 'Something behind the desk knocks back.', tone: 'coral' },
    ],
  },
  cover: {
    id: 'cover',
    chapter: 'Chapter 01',
    eyebrow: 'A very official warning',
    title: 'Page one is mostly a warning.',
    body: [
      'WARNING: This story contains one haunted hallway, three questionable decisions, and a smell that may be old cheese.',
      'If you continue, the book will remember your choices. It may also judge your handwriting. Turn the page anyway.',
    ],
    aside: 'The page turn makes a satisfying fwip. The book is showing off.',
    choices: [
      { label: 'Follow the green EXIT sign', note: 'It is blinking in Morse code. Probably.', next: 'hallway', item: 'Glow-in-the-dark bookmark', consequence: 'The sign points deeper inside.', tone: 'green' },
      { label: 'Search the return cart for clues', note: 'A classic library maneuver.', next: 'cart', item: 'A bent brass key', consequence: 'You find something that has been waiting.', tone: 'ink' },
    ],
  },
  librarian: {
    id: 'librarian',
    chapter: 'Chapter 01',
    eyebrow: 'The adult-shaped silhouette',
    title: 'The librarian rises from behind the desk.',
    body: [
      '“Ah,” says Ms. Wicker, who definitely was not there thirty seconds ago. “You found it.”',
      'She slides a library card across the desk. In the borrower field, your name is already written. The due date says: WHEN THE HALLWAY LETS YOU GO.',
      '“Take this,” she says, handing you a brass key. “And remember: if a door asks you a riddle, it is trying to avoid doing its job.”',
    ],
    aside: 'Ms. Wicker returns to alphabetizing the shadows.',
    choices: [
      { label: 'Take the brass key and enter the hallway', note: 'At least the key looks employed.', next: 'hallway', item: 'Ms. Wicker’s brass key', consequence: 'The library doors unlock themselves.', tone: 'green' },
      { label: 'Ask what is at the end', note: 'You have questions. The book has opinions.', next: 'question', consequence: 'The librarian points to a footnote.', tone: 'coral' },
    ],
  },
  cart: {
    id: 'cart',
    chapter: 'Chapter 02',
    eyebrow: 'The return cart has a return policy',
    title: 'A book coughs politely.',
    body: [
      'You freeze. The cough came from a thin red book wedged between A Brief History of Pencils and Advanced Origami for Nervous People.',
      'Inside is a bent brass key and a note: “For the person who comes after the person who came before you.”',
      'This is not helpful, but it is extremely committed to being mysterious.',
    ],
    aside: 'Somewhere, a pencil rolls off a table. It sounds like thunder with a tiny budget.',
    choices: [
      { label: 'Keep the key and head for the hallway', note: 'Key-shaped confidence acquired.', next: 'hallway', item: 'A bent brass key', consequence: 'The return cart gives one approving squeak.', tone: 'green' },
      { label: 'Read Advanced Origami for Nervous People', note: 'Perhaps the answer is a paper crane.', next: 'origami', item: 'A paper crane', consequence: 'Your crane knows a shortcut.', tone: 'coral' },
    ],
  },
  question: {
    id: 'question',
    chapter: 'Chapter 02',
    eyebrow: 'A footnote with a flair for drama',
    title: 'The end is wherever you stop reading.',
    body: [
      '“That is not an answer,” you say.',
      '“Correct,” says Ms. Wicker. “It is a footnote.” She points to the margin. A sentence is scribbled there in pencil: DO NOT TRUST THE DOOR WITH THE EYE.',
      'Naturally, the hallway contains a door with an eye.',
    ],
    aside: 'The book has now underlined the word naturally. Rude.',
    choices: [
      { label: 'Enter the hallway anyway', note: 'You have a key and a warning.', next: 'hallway', item: 'A margin warning', consequence: 'You are prepared-ish.', tone: 'green' },
      { label: 'Close the book very slowly', note: 'A respectable plan, honestly.', next: 'ending-shelved', consequence: 'The book pretends not to look relieved.', tone: 'ink' },
    ],
  },
  origami: {
    id: 'origami',
    chapter: 'Chapter 02',
    eyebrow: 'Paper technology',
    title: 'The crane points at a wall.',
    body: [
      'You fold the instructions into a crane. It immediately develops an attitude and waddles toward a section of wall that looks exactly like every other section of wall.',
      'You press its beak to the bricks. A secret panel opens with the soft sigh of a librarian who has seen this before.',
      'Behind it: a narrow staircase, descending into a pocket-sized moonlit hallway.',
    ],
    aside: 'The crane takes a bow. You clap once. It gets embarrassing.',
    choices: [
      { label: 'Follow the crane downstairs', note: 'It seems to know the way.', next: 'hallway', item: 'A paper crane', consequence: 'Your guide is folded, alert, and smug.', tone: 'green' },
      { label: 'Send the crane ahead', note: 'Delegate the danger.', next: 'crane-scout', consequence: 'The crane returns with a tiny complaint.', tone: 'coral' },
    ],
  },
  'crane-scout': {
    id: 'crane-scout',
    chapter: 'Chapter 02',
    eyebrow: 'A reconnaissance mission',
    title: 'The crane returns wearing a crown.',
    body: [
      'It disappears around the corner. There is a squeak, a distant trumpet, and then the crane returns wearing a crown made from a gum wrapper.',
      'It drops a note at your feet. The note says: THE DOOR IS LONELY. ALSO, PLEASE HURRY.',
      'You decide this is as much intelligence as you are going to get from a paper bird.',
    ],
    aside: 'The crown is honestly a good look.',
    choices: [
      { label: 'Enter the hallway with your royal scout', note: 'Long live the library.', next: 'hallway', item: 'Gum-wrapper crown', consequence: 'The hallway recognizes your rank.', tone: 'green' },
      { label: 'Ask the crane to choose the door', note: 'Leadership has been delegated.', next: 'door', consequence: 'The crane points with its entire body.', tone: 'coral' },
    ],
  },
  hallway: {
    id: 'hallway',
    chapter: 'Chapter 03',
    eyebrow: 'The hallway is longer inside',
    title: 'There are 47 doors. Probably.',
    body: [
      'The hallway stretches ahead beneath flickering lights. Every door has a number, except one, which has a large painted eye and the unmistakable air of a show-off.',
      'At your feet, a school trophy reads: “Congratulations to whoever gets out first.” The winner’s name has been scratched away.',
      'A low voice whispers, “Pick a door.” Then, quieter: “Please. I am very bored.”',
    ],
    aside: 'The book leaves a blank space here for your brave face.',
    choices: [
      { label: 'Try the door marked 13', note: 'A classic. The classics persist.', next: 'door', item: 'Door 13 sticker', consequence: 'The door has been expecting a protagonist.', tone: 'green' },
      { label: 'Open the door with the eye', note: 'You were warned about this exact door.', next: 'eye-door', consequence: 'The eye blinks first.', tone: 'coral' },
      { label: 'Inspect the trophy', note: 'Never ignore suspicious school awards.', next: 'trophy', item: 'A champion’s ribbon', consequence: 'The scratched name begins to reappear.', tone: 'ink' },
      { label: 'Take the marked door into the expanded edition', note: 'It says 320 pages. That seems like a lot of hallway.', next: 'long-start', item: 'Door 13 sticker', consequence: 'The short route has become the long route. The book is delighted.', tone: 'green' },
    ],
  },
  trophy: {
    id: 'trophy',
    chapter: 'Chapter 03',
    eyebrow: 'Extracurricular haunting',
    title: 'The trophy is for outstanding hallway behavior.',
    body: [
      'You polish the trophy with your sleeve. The scratched name shines back: YOU.',
      'The trophy clears its tiny brass throat. “To win,” it says, “walk past the door that knows your name.”',
      'There is only one door that knows your name. It is also humming the school fight song very slowly.',
    ],
    aside: 'The trophy has become your guidance counselor. This is a lot for a Tuesday.',
    choices: [
      { label: 'Walk past the humming door', note: 'Ignore it with purpose.', next: 'end-library', consequence: 'The hallway rewards your composure.', tone: 'green' },
      { label: 'Ask the trophy for a hint', note: 'It has one job and seems thrilled.', next: 'door', consequence: 'The trophy whispers: “Knock twice.”', tone: 'coral' },
    ],
  },
  door: {
    id: 'door',
    chapter: 'Chapter 04',
    eyebrow: 'A door with boundaries',
    title: 'The door asks for a password.',
    body: [
      '“Password?” says the door.',
      'You try “please.” You try “library.” You try the name of the school principal’s cat, which the door calls “a strong guess.”',
      'Then the bent brass key in your pocket warms. The lock has a tiny keyhole shaped like a question mark.',
    ],
    aside: 'The door is trying very hard to seem important.',
    choices: [
      { label: 'Use the brass key', note: 'Finally, a task with instructions.', next: 'end-key', consequence: 'The lock sighs with professional relief.', tone: 'green' },
      { label: 'Tell the door a joke', note: 'What do ghosts read? Boo-ks.', next: 'end-joke', consequence: 'The door laughs despite itself.', tone: 'coral' },
    ],
  },
  'eye-door': {
    id: 'eye-door',
    chapter: 'Chapter 04',
    eyebrow: 'The warning was not decorative',
    title: 'The eye says, “I have been watching.”',
    body: [
      '“That is invasive,” you say.',
      '“I am literally a door with an eye,” it replies. “What did you expect, tasteful curtains?”',
      'It swings open onto a bright reading nook, a plate of biscuits, and a sign that says YOU MAY LEAVE IF YOU CAN ADMIT THIS WAS A BAD IDEA.',
    ],
    aside: 'The biscuits smell like cinnamon and administrative paperwork.',
    choices: [
      { label: 'Admit it was a bad idea', note: 'Honesty is a surprisingly powerful spell.', next: 'end-honest', consequence: 'The eye door nods respectfully.', tone: 'green' },
      { label: 'Take a biscuit and keep exploring', note: 'A snack is not a confession.', next: 'end-biscuit', item: 'A haunted biscuit', consequence: 'The biscuit has a tiny pulse.', tone: 'coral' },
    ],
  },
  'ending-shelved': {
    id: 'ending-shelved',
    chapter: 'The End (for now)',
    eyebrow: 'A responsible conclusion',
    title: 'You put the book back.',
    body: ['You return THE HAUNTED HALLWAY OF DOOM to the shelf. The library lights stop flickering. The angry goose-clock becomes a normal clock.', 'The next morning, the book is gone. In its place is a sticky note: GOOD CHOICE. BORING, BUT GOOD.'],
    ending: { title: 'The Sensible Ending', copy: 'You survive by refusing to be the main character. A rare and powerful skill.', badge: 'END 01 / 07', accent: 'ink' },
  },
  'end-library': {
    id: 'end-library',
    chapter: 'The End',
    eyebrow: 'Outstanding hallway behavior',
    title: 'The hallway gives you a gold star.',
    body: ['You walk past the humming door. It tries three increasingly desperate verses of the fight song, then gives up and becomes a coat closet.', 'The trophy stamps your library card: RETURNED ON TIME. Ms. Wicker is waiting with hot chocolate and absolutely no explanation.'],
    ending: { title: 'The Gold-Star Ending', copy: 'You win by staying calm, staying curious, and not opening the door that literally has an eye.', badge: 'END 04 / 07', accent: 'green' },
  },
  'end-key': {
    id: 'end-key',
    chapter: 'The End',
    eyebrow: 'A key with excellent timing',
    title: 'The door opens onto the moon.',
    body: ['Beyond the door is a moonlit reading room floating above the school. The stars are tiny punctuation marks. The moon asks what you are reading.', 'You hold up the paperback. The moon nods. “Good choice,” it says. “The ending is on the next shelf.”'],
    ending: { title: 'The Moonlit Ending', copy: 'You escape into the sky with a library card, a warm book, and several questions for the astronomy club.', badge: 'END 05 / 07', accent: 'green' },
  },
  'end-joke': {
    id: 'end-joke',
    chapter: 'The End',
    eyebrow: 'Comedy defeats architecture',
    title: 'The door laughs itself off its hinges.',
    body: ['Your joke is not good. It is, in fact, mostly a pun. But the door has been alone for 87 years and will take what it can get.', 'It falls open, revealing the school library. The hallway folds itself into a bookmark and asks if you will visit next Thursday.'],
    ending: { title: 'The Pun Ending', copy: 'You escape using the ancient magic of a joke that should not have worked.', badge: 'END 06 / 07', accent: 'coral' },
  },
  'end-honest': {
    id: 'end-honest',
    chapter: 'The End',
    eyebrow: 'A confession, technically',
    title: 'The eye door applauds with its hinges.',
    body: ['“Correct,” it says. “Most people blame the book.”', 'It gives you a key-shaped cookie and opens a shortcut back to the circulation desk. The next day, you find yourself recommended for the school’s Honesty Award.'],
    ending: { title: 'The Honest Ending', copy: 'The haunted hallway respects a reader who can admit when a decision was questionable.', badge: 'END 02 / 07', accent: 'green' },
  },
  'end-biscuit': {
    id: 'end-biscuit',
    chapter: 'The End',
    eyebrow: 'A snack-related consequence',
    title: 'The biscuit knows the way out.',
    body: ['It wiggles toward the end of the hallway. You follow. At the exit, it turns into a perfectly ordinary biscuit, except for the tiny bite-shaped dent in your backpack.', 'You are home before bedtime. Probably.'],
    ending: { title: 'The Biscuit Ending', copy: 'You leave with a mysterious snack, a suspicious backpack, and no regrets whatsoever.', badge: 'END 03 / 07', accent: 'coral' },
  },
};

const fullScenes: Record<string, Scene> = {
  ...scenes,
  ...longScenes,
  'long-start': longStart,
};

const totalChapters = LONG_STORY_CHAPTERS;

const SAVE_KEY = 'haunted-hallway-save-v2';
const SETTINGS_KEY = 'haunted-hallway-settings-v2';

const rooms = [
  { name: 'Library After Dark', detail: 'Where the books shelve themselves', icon: Library },
  { name: 'Locker Rumor Exchange', detail: 'The metal doors have opinions', icon: MessageIcon },
  { name: 'Cafeteria Special Menu', detail: 'Pudding is now evidence', icon: UtensilsIcon },
  { name: 'Gymnasium Between Dimensions', detail: 'The hoops are pointing elsewhere', icon: CircleIcon },
  { name: 'Science Fair Escape', detail: 'The volcano has a lawyer', icon: FlaskIcon },
  { name: 'Upside-Down Office', detail: 'Administrative magic is pending', icon: BuildingIcon },
  { name: 'Yearbook Room', detail: 'The photographs blink first', icon: CameraIcon },
  { name: 'Clock Tower Finale', detail: 'Time has misplaced its shoes', icon: ClockIcon },
] as const;

const achievementDefinitions = [
  { id: 'first-laugh', label: 'First Laugh', description: 'Make your first questionable choice.', icon: Sparkles },
  { id: 'collector', label: 'Pocket Museum', description: 'Collect three strange objects.', icon: Backpack },
  { id: 'long-haul', label: 'Long Haul', description: 'Reach page 200 of the expanded edition.', icon: Flag },
  { id: 'chaos-agent', label: 'Chaos Agent', description: 'Build five points of chaos.', icon: WandSparkles },
  { id: 'steady-reader', label: 'Steady Reader', description: 'Build five points of nerve.', icon: ShieldCheck },
  { id: 'secret-librarian', label: 'Staff Access', description: 'Find the hidden librarian interaction.', icon: Search },
  { id: 'two-ends', label: 'Curious Again', description: 'Discover two different endings.', icon: RotateCcw },
  { id: 'completionist', label: 'The Whole Shelf', description: 'Discover every ending.', icon: Trophy },
] as const;

const defaultSettings: Settings = {
  sound: true,
  highContrast: false,
  reducedMotion: false,
  textSize: 'normal',
  showHints: true,
};

const defaultStats: Stats = { nerve: 0, wit: 0, chaos: 0, laughs: 0 };

function MessageIcon({ size = 16 }: { size?: number }) {
  return <CircleHelp size={size} />;
}

function UtensilsIcon({ size = 16 }: { size?: number }) {
  return <WandSparkles size={size} />;
}

function CircleIcon({ size = 16 }: { size?: number }) {
  return <Zap size={size} />;
}

function FlaskIcon({ size = 16 }: { size?: number }) {
  return <Gauge size={size} />;
}

function BuildingIcon({ size = 16 }: { size?: number }) {
  return <Bookmark size={size} />;
}

function CameraIcon({ size = 16 }: { size?: number }) {
  return <Eye size={size} />;
}

function ClockIcon({ size = 16 }: { size?: number }) {
  return <MoonStar size={size} />;
}

function safeProfile(name = 'Reader') : PlayerProfile {
  const trimmed = name.trim().slice(0, 20);
  return { name: trimmed || 'Reader', title: 'Brave-ish Reader' };
}

function createDefaultState(profile: PlayerProfile = safeProfile()): GameState {
  return {
    sceneId: 'start',
    profile,
    inventory: [],
    flags: [],
    history: [],
    stats: { ...defaultStats },
    achievements: [],
    endings: [],
    lastConsequence: '',
    choiceCount: 0,
    runSeed: Date.now(),
  };
}

function readSavedGame(): GameState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<GameState>;
    if (!parsed.sceneId || !fullScenes[parsed.sceneId]) return null;
    return {
      ...createDefaultState(),
      ...parsed,
      profile: safeProfile(parsed.profile?.name),
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : [],
      flags: Array.isArray(parsed.flags) ? parsed.flags : [],
      history: Array.isArray(parsed.history) ? parsed.history : [],
      stats: { ...defaultStats, ...(parsed.stats ?? {}) },
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
      endings: Array.isArray(parsed.endings) ? parsed.endings : [],
    };
  } catch {
    return null;
  }
}

function readSettings(): Settings {
  if (typeof window === 'undefined') return defaultSettings;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(SETTINGS_KEY) ?? 'null') as Partial<Settings> | null;
    return { ...defaultSettings, ...(parsed ?? {}) };
  } catch {
    return defaultSettings;
  }
}

function roomForScene(scene: Scene) {
  const chapter = Number(scene.chapter.match(/\d+/)?.[0] ?? 1);
  return rooms[Math.max(0, Math.min(rooms.length - 1, chapter - 1))];
}

function difficultyForScene(scene: Scene) {
  if (!scene.pageNumber) return 1;
  return Math.min(5, Math.max(1, Math.ceil(scene.pageNumber / 64)));
}

function titleForStats(stats: Stats) {
  if (stats.chaos >= stats.nerve + 3) return 'Licensed Menace';
  if (stats.wit >= stats.chaos + 3) return 'Footnote Specialist';
  if (stats.nerve >= 5) return 'Hallway Professional';
  return 'Brave-ish Reader';
}

function unlockedAchievements(state: GameState, scene: Scene) {
  const unlocked = new Set(state.achievements);
  if (state.choiceCount >= 1) unlocked.add('first-laugh');
  if (state.inventory.length >= 3) unlocked.add('collector');
  if ((scene.pageNumber ?? 0) >= 200) unlocked.add('long-haul');
  if (state.stats.chaos >= 5) unlocked.add('chaos-agent');
  if (state.stats.nerve >= 5) unlocked.add('steady-reader');
  if (state.flags.includes('secret-librarian')) unlocked.add('secret-librarian');
  if (state.endings.length >= 2) unlocked.add('two-ends');
  if (state.endings.length >= 8) unlocked.add('completionist');
  return [...unlocked];
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'flex items-center gap-2' : 'flex items-start gap-3'}>
      <div className="grid h-10 w-9 shrink-0 place-items-center rounded-sm bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] shadow-[3px_3px_0_hsl(var(--primary))]">
        <BookOpen size={20} strokeWidth={2.5} />
      </div>
      <div>
        <p className="font-mono text-[9px] font-medium uppercase tracking-[.22em] text-[hsl(var(--secondary))]">After-hours edition</p>
        <p className={`${compact ? 'text-sm' : 'text-base'} font-bold leading-tight tracking-[-.02em] text-[hsl(var(--card))]`}>The Haunted<br className={compact ? 'hidden' : undefined} /> Hallway of Doom</p>
      </div>
    </div>
  );
}

function Welcome({
  onBegin,
  onResume,
  savedState,
}: {
  onBegin: (name: string) => void;
  onResume: () => void;
  savedState: GameState | null;
}) {
  const [name, setName] = useState(savedState?.profile.name ?? '');

  return (
    <main className="book-texture min-h-[100dvh] overflow-hidden bg-[hsl(var(--primary))] text-[hsl(var(--card))]">
      <div className="mx-auto flex min-h-[100dvh] max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[hsl(var(--sidebar-border))] pb-5">
          <Logo compact />
          <span className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--muted))]">Vol. 01 · library copy</span>
        </header>
        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1fr_390px] lg:gap-24 lg:py-20">
          <section className="max-w-3xl">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[hsl(var(--sidebar-border))] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--secondary))]">
              <MoonStar size={13} /> A found book for brave-ish readers
            </div>
            <h1 className="reveal reveal-delay-1 mt-7 max-w-2xl font-serif text-6xl font-semibold leading-[.92] tracking-[-.055em] sm:text-8xl lg:text-[7.5rem]">
              The hallway<br /><span className="text-[hsl(var(--secondary))]">is waiting.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-lg text-lg leading-relaxed text-[hsl(var(--muted))]">
              A silly-spooky, choose-your-own-adventure paperback that keeps score, remembers your choices, and has absolutely no business being this warm. Every run has a different reputation to ruin.
            </p>
            <div className="reveal reveal-delay-3 mt-8 max-w-lg border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-accent))]/45 p-4">
              <label htmlFor="reader-name" className="font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--secondary))]">Who is holding the book?</label>
              <div className="mt-3 flex gap-2">
                <input
                  id="reader-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  onKeyDown={(event) => { if (event.key === 'Enter') onBegin(name); }}
                  maxLength={20}
                  placeholder="Your brave-ish name"
                  className="min-w-0 flex-1 border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--primary))] px-3 py-2.5 text-sm text-[hsl(var(--card))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))]"
                />
                <button onClick={() => onBegin(name)} data-testid="button-begin-story" className="focus-ring group inline-flex shrink-0 items-center gap-2 rounded-sm bg-[hsl(var(--secondary))] px-4 py-3 font-bold text-[hsl(var(--primary))] transition-transform hover:-translate-y-0.5 active:translate-y-0">
                  Open <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              {savedState && (
                <button onClick={onResume} data-testid="button-resume-saved" className="focus-ring mt-3 flex w-full items-center justify-between border-t border-[hsl(var(--sidebar-border))] pt-3 text-left text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--secondary))]">
                  <span><span className="font-bold text-[hsl(var(--card))]">Continue {savedState.profile.name}</span><span className="ml-2 text-xs text-[hsl(var(--muted-foreground))]">page {savedState.sceneId.startsWith('long-') ? fullScenes[savedState.sceneId]?.pageNumber ?? 1 : 'library'}</span></span>
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
            <span className="reveal reveal-delay-3 mt-4 block font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">8 endings · 8 chapters · 320 pages · 0 sensible plans</span>
          </section>
          <section className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:justify-self-end">
            <div className="drift absolute -right-4 -top-7 z-10 grid h-16 w-16 place-items-center rounded-full bg-[hsl(var(--accent))] text-center font-mono text-[9px] font-medium uppercase leading-tight text-[hsl(var(--card))] shadow-lg">Read<br />after<br />dark</div>
            <div className="relative rotate-[-3deg] rounded-[3px] border-l-[10px] border-[hsl(var(--accent))] bg-[hsl(var(--card))] p-7 text-[hsl(var(--primary))] shadow-[14px_18px_0_rgba(14,13,34,.4),0_22px_40px_rgba(14,13,34,.3)]">
              <div className="absolute inset-3 border border-[hsl(var(--primary))]/20" />
              <div className="relative flex min-h-[430px] flex-col justify-between">
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-[.2em]"><span>School library</span><span>Vol. 01</span></div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[hsl(var(--accent))]">A choose-your-own-adventure</p>
                  <h2 className="mt-3 font-serif text-6xl font-semibold leading-[.84] tracking-[-.06em]">The<br />Haunted<br /><em className="text-[hsl(var(--accent))]">Hallway</em><br />of Doom</h2>
                  <div className="mt-7 flex items-center gap-3 border-t border-[hsl(var(--primary))]/20 pt-4 font-mono text-[10px] uppercase tracking-[.14em]"><Skull size={16} /> A library mystery</div>
                </div>
                <div className="flex items-end justify-between"><span className="font-mono text-[9px] uppercase tracking-[.17em]">Property of<br />nobody, apparently</span><Sparkles className="ink-wiggle" size={23} /></div>
              </div>
            </div>
            <p className="mt-9 rotate-[-3deg] text-center font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted))]">Please return this book before it returns itself.</p>
          </section>
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[hsl(var(--sidebar-border))] pt-4 font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">
          <span>For readers who check under the bed anyway</span><span>© The library after closing</span>
        </footer>
      </div>
    </main>
  );
}

function StoryApp() {
  const [savedState] = useState<GameState | null>(() => readSavedGame());
  const [state, setState] = useState<GameState>(() => readSavedGame() ?? createDefaultState());
  const [settings, setSettings] = useState<Settings>(() => readSettings());
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activePanel, setActivePanel] = useState<'profile' | 'map' | 'settings' | null>(null);
  const [locked, setLocked] = useState(false);
  const [notice, setNotice] = useState('');
  const [secretTaps, setSecretTaps] = useState(0);

  const scene = fullScenes[state.sceneId] ?? fullScenes.start;
  const ending = scene.ending;
  const room = roomForScene(scene);
  const difficulty = difficultyForScene(scene);
  const chapterNumber = Number(scene.chapter.match(/\d+/)?.[0] ?? 1);
  const progress = scene.pageNumber
    ? Math.round((scene.pageNumber / LONG_STORY_PAGES) * 100)
    : Math.min(100, Math.round(((chapterNumber - 1) / totalChapters) * 100) + (state.choiceCount > 0 ? 4 : 0));
  const achievements = unlockedAchievements(state, scene);

  useEffect(() => {
    document.title = `${state.profile.name}'s copy · The Haunted Hallway of Doom`;
    if (started && typeof window !== 'undefined') {
      window.localStorage.setItem(SAVE_KEY, JSON.stringify({
        ...state,
        achievements,
      }));
    }
  }, [achievements, started, state]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      document.documentElement.dataset.highContrast = settings.highContrast ? 'true' : 'false';
    }
  }, [settings]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPaused(false);
        setActivePanel(null);
      }
      if (event.key === ' ' && event.target === document.body && started) {
        event.preventDefault();
        setPaused((value) => !value);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [started]);

  const playFeedback = useCallback((kind: 'choice' | 'success' | 'open') => {
    if (!settings.sound || typeof window === 'undefined') return;
    try {
      const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = kind === 'success' ? 'triangle' : 'sine';
      oscillator.frequency.value = kind === 'open' ? 330 : kind === 'success' ? 520 : 220;
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.12);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.13);
    } catch {
      // Audio is a flourish, never a dependency.
    }
  }, [settings.sound]);

  const begin = (name: string) => {
    const profile = safeProfile(name);
    setState(createDefaultState(profile));
    setStarted(true);
    setPaused(false);
    setNotice(`Welcome, ${profile.name}. The book is pretending not to be excited.`);
    playFeedback('open');
  };

  const resume = () => {
    setStarted(true);
    setNotice(`Welcome back, ${state.profile.name}. Your bookmark was found under a suspicious biscuit.`);
  };

  const restart = () => {
    const profile = state.profile;
    setState(createDefaultState(profile));
    setPaused(false);
    setActivePanel(null);
    setNotice('A fresh run begins. The hallway has updated its paperwork.');
    playFeedback('open');
  };

  const choose = (choice: Choice) => {
    if (locked) return;
    setLocked(true);
    const nextScene = fullScenes[choice.next] ? choice.next : 'start';
    const nextSceneData = fullScenes[nextScene];
    const statKey = choice.tone === 'coral' ? 'chaos' : choice.tone === 'ink' ? 'wit' : 'nerve';
    const nextStats = {
      ...state.stats,
      [statKey]: state.stats[statKey] + 1,
      laughs: state.stats.laughs + 1,
      ...choice.stats,
    };
    const nextInventory = choice.item && !state.inventory.includes(choice.item)
      ? [...state.inventory, choice.item]
      : state.inventory;
    const nextFlags = choice.flag && !state.flags.includes(choice.flag)
      ? [...state.flags, choice.flag]
      : state.flags;
    const nextEndings = nextSceneData.ending && !state.endings.includes(nextScene)
      ? [...state.endings, nextScene]
      : state.endings;
    const nextState: GameState = {
      ...state,
      sceneId: nextScene,
      inventory: nextInventory,
      flags: nextFlags,
      stats: nextStats,
      endings: nextEndings,
      achievements: state.achievements,
      lastConsequence: choice.consequence ?? 'The book has filed this under “probably important.”',
      choiceCount: state.choiceCount + 1,
      profile: { ...state.profile, title: titleForStats(nextStats) },
      history: [
        ...state.history,
        {
          sceneId: state.sceneId,
          inventory: [...state.inventory],
          flags: [...state.flags],
          stats: { ...state.stats },
          lastConsequence: state.lastConsequence,
        },
      ].slice(-30),
    };
    nextState.achievements = unlockedAchievements(nextState, nextSceneData);
    setState(nextState);
    setNotice(choice.consequence ?? 'The book has filed this under “probably important.”');
    playFeedback(nextSceneData.ending ? 'success' : 'choice');
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate?.(choice.tone === 'coral' ? 18 : 8);
    window.scrollTo({ top: 0, behavior: settings.reducedMotion ? 'auto' : 'smooth' });
    window.setTimeout(() => setLocked(false), settings.reducedMotion ? 0 : 360);
  };

  const goBack = () => {
    const previous = state.history[state.history.length - 1];
    if (!previous) return;
    setState({
      ...state,
      sceneId: previous.sceneId,
      inventory: previous.inventory,
      flags: previous.flags,
      stats: previous.stats,
      history: state.history.slice(0, -1),
      lastConsequence: previous.lastConsequence,
    });
    setNotice('You turned back one page. The book has made a note in the margin.');
  };

  const discoverSecret = () => {
    const nextTaps = secretTaps + 1;
    setSecretTaps(nextTaps);
    if (nextTaps >= 3 && !state.flags.includes('secret-librarian')) {
      const nextState = {
        ...state,
        flags: [...state.flags, 'secret-librarian'],
        achievements: [...new Set([...state.achievements, 'secret-librarian'])],
        lastConsequence: 'A hidden librarian stamp appears. It says: NICE CLICKING.',
      };
      setState(nextState);
      setNotice('Secret found: staff access unlocked.');
      playFeedback('success');
    }
  };

  const availableChoices = useMemo(() => {
    const base = [...(scene.choices ?? [])];
    if (scene.id === 'hallway' && state.flags.includes('secret-librarian')) {
      base.push({
        label: 'Use the staff-only shortcut',
        note: 'The shortcut is shaped like a very judgmental bookmark.',
        next: 'end-library',
        consequence: 'The librarian stamps your passport: STAFF FAVORITE.',
        tone: 'ink',
        flag: 'staff-favorite',
      });
    }
    return base;
  }, [scene, state.flags]);

  if (!started) {
    return <Welcome onBegin={begin} onResume={resume} savedState={savedState} />;
  }

  return (
    <main className={`book-texture min-h-[100dvh] bg-[hsl(var(--background))] ${settings.reducedMotion ? 'reduce-motion' : ''} text-size-${settings.textSize}`}>
      <div className="mx-auto min-h-[100dvh] max-w-[1440px] lg:grid lg:grid-cols-[270px_1fr]">
        <aside className="hidden border-r border-[hsl(var(--border))] bg-[hsl(var(--primary))] p-7 text-[hsl(var(--card))] lg:flex lg:flex-col">
          <Logo />
          <button onClick={() => setActivePanel('profile')} className="focus-ring mt-9 flex items-center gap-3 border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-accent))]/45 p-3 text-left transition-colors hover:border-[hsl(var(--secondary))]" data-testid="button-profile-desktop">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"><UserRound size={17} /></span>
            <span className="min-w-0"><span className="block truncate font-bold">{state.profile.name}</span><span className="block truncate font-mono text-[9px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">{state.profile.title}</span></span>
          </button>
          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">Your journey</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-16 w-1 overflow-hidden rounded-full bg-[hsl(var(--sidebar-accent))]"><div className="w-full bg-[hsl(var(--secondary))] transition-[height] duration-500" style={{ height: `${Math.max(7, progress)}%` }} /></div>
              <div><p className="font-serif text-3xl">{chapterNumber}<span className="text-lg text-[hsl(var(--muted-foreground))]">/{totalChapters}</span></p><p className="font-mono text-[9px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">{scene.pageNumber ? `page ${scene.pageNumber}/${LONG_STORY_PAGES}` : 'chapter'}</p></div>
            </div>
          </div>
          <div className="mt-9 border border-[hsl(var(--sidebar-border))] p-3">
            <div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">Current room</p><room.icon size={15} className="text-[hsl(var(--secondary))]" /></div>
            <p className="mt-2 font-semibold">{room.name}</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{room.detail}</p>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">Your stats</p><Gauge size={15} className="text-[hsl(var(--secondary))]" /></div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <StatPill label="nerve" value={state.stats.nerve} />
              <StatPill label="wit" value={state.stats.wit} />
              <StatPill label="chaos" value={state.stats.chaos} />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">Found things</p><Backpack size={15} className="text-[hsl(var(--secondary))]" /></div>
            <div className="mt-4 space-y-2">{state.inventory.length === 0 ? <p className="text-sm italic text-[hsl(var(--muted-foreground))]">Your pockets are suspiciously empty.</p> : state.inventory.slice(-5).map((item) => <div key={item} className="flex items-center gap-2 text-sm text-[hsl(var(--card))]"><Check size={13} className="text-[hsl(var(--secondary))]" />{item}</div>)}</div>
          </div>
          <div className="mt-auto space-y-3 border-t border-[hsl(var(--sidebar-border))] pt-5">
            <button onClick={() => setPaused(true)} data-testid="button-pause-desktop" className="focus-ring flex w-full items-center gap-2 text-left font-mono text-[10px] uppercase tracking-[.13em] text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--secondary))]"><Pause size={14} /> Pause the story</button>
            <button onClick={() => setActivePanel('map')} data-testid="button-map-desktop" className="focus-ring flex w-full items-center gap-2 text-left font-mono text-[10px] uppercase tracking-[.13em] text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--secondary))]"><Library size={14} /> Browse rooms</button>
            <button onClick={() => setActivePanel('settings')} data-testid="button-settings-desktop" className="focus-ring flex w-full items-center gap-2 text-left font-mono text-[10px] uppercase tracking-[.13em] text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--secondary))]"><Settings size={14} /> Reading settings</button>
          </div>
        </aside>
        <section className="min-w-0">
          <header className="sticky top-0 z-10 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 px-5 py-3 backdrop-blur-sm sm:px-8 lg:px-12">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3 lg:hidden"><Logo compact /><span className="hidden truncate border-l border-[hsl(var(--border))] pl-3 font-mono text-[9px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))] sm:block">{room.name}</span></div>
              <div className="hidden min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))] lg:flex"><Bookmark size={14} /> <span className="truncate">{scene.chapter}{scene.pageNumber ? ` · page ${scene.pageNumber} / ${LONG_STORY_PAGES}` : ''}</span></div>
              <div className="ml-auto flex items-center gap-1 sm:gap-2">
                <div className="mr-2 hidden text-right sm:block"><p className="font-mono text-[9px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">Story progress</p><div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className="h-full bg-[hsl(var(--accent))] transition-[width] duration-500" style={{ width: `${Math.max(progress, 5)}%` }} /></div></div>
                <button onClick={() => setActivePanel('profile')} aria-label="Open player profile" className="focus-ring rounded-full p-2 text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--muted))] lg:hidden"><UserRound size={18} /></button>
                <button onClick={() => setActivePanel('map')} aria-label="Open room map" className="focus-ring rounded-full p-2 text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--muted))]"><Library size={18} /></button>
                <button onClick={() => setActivePanel('settings')} aria-label="Open reading settings" className="focus-ring rounded-full p-2 text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--muted))]"><Settings size={18} /></button>
                <button onClick={() => setPaused(true)} aria-label="Pause story" data-testid="button-pause-mobile" className="focus-ring rounded-full p-2 text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--muted))]"><Pause size={18} /></button>
                <button onClick={() => setSettings((value) => ({ ...value, sound: !value.sound }))} aria-label={settings.sound ? 'Turn sound off' : 'Turn sound on'} data-testid="button-sound-mobile" className="focus-ring rounded-full p-2 text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--muted))]">{settings.sound ? <Volume2 size={18} /> : <VolumeX size={18} />}</button>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 lg:hidden"><span className="truncate text-xs font-semibold text-[hsl(var(--primary))]">{room.name}</span><span className="shrink-0 font-mono text-[9px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">{state.inventory.length} found · {state.endings.length} endings</span></div>
          </header>
          <div className="mx-auto max-w-4xl px-5 pb-20 pt-8 sm:px-10 sm:pt-14 lg:px-16 lg:pt-20">
            <div key={scene.id} className="page-in">
              <div className="flex flex-wrap items-center justify-between gap-3"><span className="font-mono text-[10px] font-medium uppercase tracking-[.18em] text-[hsl(var(--accent))]">{scene.eyebrow}</span><span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]"><Gauge size={12} /> difficulty {difficulty}/5</span></div>
              <h1 data-testid="text-scene-title" className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[.97] tracking-[-.045em] text-[hsl(var(--primary))] sm:text-7xl">{scene.title}</h1>
              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_190px] lg:gap-16">
                <article className="ruled-lines rounded-sm bg-[hsl(var(--card))] px-5 py-7 shadow-[0_2px_0_hsl(var(--border))] sm:px-9 sm:py-9">
                  <div className="space-y-6 font-serif text-lg leading-[1.68] text-[hsl(var(--foreground))] sm:text-[22px]">{scene.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                  <div className="mt-9 flex items-center gap-3 border-t border-[hsl(var(--border))] pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[.1em] text-[hsl(var(--muted-foreground))]"><Eye size={15} className="shrink-0 text-[hsl(var(--accent))]" /> {scene.aside}</div>
                </article>
                <aside className="hidden lg:block"><div className="sticky top-28 space-y-7"><div className="rotate-2 border border-dashed border-[hsl(var(--accent))] bg-[hsl(var(--card))] p-4 text-[hsl(var(--accent))]"><Search size={18} /><p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[.1em]">Narrator’s note</p><p className="mt-2 text-sm font-semibold leading-snug text-[hsl(var(--foreground))]">The plot is thickening. Like library paste.</p></div><button onDoubleClick={discoverSecret} className="focus-ring flex items-center gap-2 text-left text-[hsl(var(--muted-foreground))]" title="There may be something hidden here"><Library size={16} /><span className="font-mono text-[9px] uppercase tracking-[.1em]">Property of night school</span></button></div></aside>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:hidden">
                <StatPill label="nerve" value={state.stats.nerve} />
                <StatPill label="wit" value={state.stats.wit} />
                <StatPill label="chaos" value={state.stats.chaos} />
              </div>
              {notice && <div role="status" aria-live="polite" className="reveal mt-6 flex items-start gap-3 border-l-4 border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/20 px-4 py-3 text-sm text-[hsl(var(--foreground))]"><Sparkles size={17} className="mt-0.5 shrink-0 text-[hsl(var(--accent))]" /><span><strong className="font-bold">The book notes:</strong> {notice}</span></div>}
              {ending ? <EndingPanel ending={ending} onReplay={restart} stats={state.stats} endingsFound={state.endings.length} /> : <ChoicePanel choices={availableChoices} onChoose={choose} locked={locked} showHints={settings.showHints} />}
              {state.history.length > 0 && <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[hsl(var(--border))] pt-5"><button onClick={goBack} disabled={locked} className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] disabled:opacity-40"><ChevronLeft size={16} /> Re-read the last page</button><span className="font-mono text-[9px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">Autosaved locally · {state.choiceCount} choices made</span></div>}
            </div>
          </div>
        </section>
      </div>
      {paused && <PauseDialog onResume={() => setPaused(false)} onRestart={restart} onClose={() => setPaused(false)} />}
      {activePanel === 'profile' && <ProfileDialog state={state} achievements={achievements} onClose={() => setActivePanel(null)} />}
      {activePanel === 'map' && <MapDialog scene={scene} onClose={() => setActivePanel(null)} />}
      {activePanel === 'settings' && <SettingsDialog settings={settings} setSettings={setSettings} onClose={() => setActivePanel(null)} />}
    </main>
  );
}

function StatPill({ label, value }: { label: string; value: number }) {
  return <div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))]/50 px-2 py-2 text-center"><span className="block font-mono text-[9px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">{label}</span><span className="mt-1 block font-serif text-xl font-semibold text-[hsl(var(--primary))]">{value}</span></div>;
}

function ChoicePanel({
  choices,
  onChoose,
  locked,
  showHints,
}: {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
  locked: boolean;
  showHints: boolean;
}) {
  return (
    <section className="reveal reveal-delay-2 mt-12">
      <div className="mb-4 flex items-center justify-between gap-3"><h2 className="font-mono text-[10px] font-medium uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">What will you do?</h2><span className="font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">{locked ? 'The book is turning…' : 'Choose carefully-ish'}</span></div>
      {choices.length === 0 ? <div className="border border-dashed border-[hsl(var(--accent))] p-5 text-sm text-[hsl(var(--muted-foreground))]">The hallway has misplaced its choices. Try returning to the last page.</div> : <div className="grid gap-3">{choices.map((choice, index) => <button key={choice.label} onClick={() => onChoose(choice)} disabled={locked} data-testid={`button-choice-${index + 1}`} className="focus-ring group relative flex w-full items-center gap-4 overflow-hidden rounded-sm border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 text-left transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--accent))] hover:shadow-[4px_4px_0_hsl(var(--secondary))] active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 sm:p-5"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-xs font-medium ${choice.tone === 'coral' ? 'bg-[hsl(var(--accent))] text-[hsl(var(--card))]' : choice.tone === 'green' ? 'bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]' : 'bg-[hsl(var(--primary))] text-[hsl(var(--card))]'}`}>{String.fromCharCode(65 + index)}</span><span className="min-w-0 flex-1"><span className="block font-semibold text-[hsl(var(--primary))]">{choice.label}</span>{showHints && <span className="mt-1 block text-sm text-[hsl(var(--muted-foreground))]">{choice.note}</span>}</span><ArrowRight size={18} className="shrink-0 text-[hsl(var(--muted-foreground))] transition-transform group-hover:translate-x-1 group-hover:text-[hsl(var(--accent))]" /></button>)}</div>}
    </section>
  );
}

function EndingPanel({ ending, onReplay, stats, endingsFound }: { ending: NonNullable<Scene['ending']>; onReplay: () => void; stats: Stats; endingsFound: number }) {
  const accentClass = ending.accent === 'coral' ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10' : ending.accent === 'green' ? 'border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/15' : 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5';
  return <section className={`stamp-in mt-12 border-2 p-6 sm:p-8 ${accentClass}`}><div className="flex items-start justify-between gap-5"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">{ending.badge}</p><h2 className="mt-3 font-serif text-4xl font-semibold leading-none tracking-[-.04em] text-[hsl(var(--primary))]">{ending.title}</h2></div><div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--secondary))]"><Sparkles size={22} /></div></div><p className="mt-5 max-w-xl text-lg leading-relaxed text-[hsl(var(--foreground))]">{ending.copy}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]"><span>{endingsFound}/8 endings found</span><span>{stats.laughs} laughs survived</span><span>{stats.chaos > stats.nerve ? 'chaos route' : 'steady route'}</span></div><button onClick={onReplay} data-testid="button-replay-story" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-sm bg-[hsl(var(--primary))] px-5 py-3 font-bold text-[hsl(var(--card))] transition-transform hover:-translate-y-0.5"><RotateCcw size={16} /> Read another ending</button></section>;
}

function PauseDialog({ onResume, onRestart, onClose }: { onResume: () => void; onRestart: () => void; onClose: () => void }) {
  return <div className="fixed inset-0 z-30 grid place-items-center bg-[hsl(var(--primary))]/80 px-5 backdrop-blur-sm"><div role="dialog" aria-modal="true" aria-labelledby="pause-title" className="relative w-full max-w-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 shadow-[10px_10px_0_hsl(var(--secondary))] sm:p-9"><button onClick={onClose} aria-label="Close pause dialog" data-testid="button-close-pause" className="focus-ring absolute right-4 top-4 rounded-full p-1 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"><X size={18} /></button><div className="grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"><Pause size={22} /></div><p className="mt-6 font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">Bookmark this moment</p><h2 id="pause-title" className="mt-2 font-serif text-4xl font-semibold leading-none tracking-[-.04em] text-[hsl(var(--primary))]">The hallway can wait.</h2><p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">Even haunted books understand snack breaks. Your choices are tucked safely between the pages, and your progress saves automatically.</p><div className="mt-7 flex flex-wrap gap-3"><button onClick={onResume} data-testid="button-resume-story" className="focus-ring inline-flex items-center gap-2 rounded-sm bg-[hsl(var(--primary))] px-4 py-3 font-bold text-[hsl(var(--card))]"><Play size={16} /> Continue reading</button><button onClick={onRestart} data-testid="button-restart-story" className="focus-ring inline-flex items-center gap-2 rounded-sm border border-[hsl(var(--border))] px-4 py-3 font-semibold text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]"><RotateCcw size={16} /> Start over</button></div></div></div>;
}

function ProfileDialog({ state, achievements, onClose }: { state: GameState; achievements: string[]; onClose: () => void }) {
  return <Overlay onClose={onClose} labelledBy="profile-title"><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">Reader profile</p><h2 id="profile-title" className="mt-2 font-serif text-4xl font-semibold text-[hsl(var(--primary))]">{state.profile.name}</h2><p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{state.profile.title}</p></div><UserRound className="text-[hsl(var(--accent))]" /></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4"><Metric label="choices" value={state.choiceCount} /><Metric label="laughs" value={state.stats.laughs} /><Metric label="found" value={state.inventory.length} /><Metric label="endings" value={state.endings.length} /></div><div className="mt-7"><div className="flex items-center justify-between"><h3 className="font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Challenges</h3><span className="font-mono text-[10px] text-[hsl(var(--muted-foreground))]">{achievements.length}/{achievementDefinitions.length}</span></div><div className="mt-3 grid gap-2 sm:grid-cols-2">{achievementDefinitions.map((achievement) => { const Icon = achievement.icon; const unlocked = achievements.includes(achievement.id); return <div key={achievement.id} className={`flex items-start gap-3 border p-3 ${unlocked ? 'border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/15' : 'border-[hsl(var(--border))] opacity-55'}`}><Icon size={17} className={unlocked ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--muted-foreground))'} /><span><span className="block text-sm font-bold text-[hsl(var(--primary))]">{achievement.label}</span><span className="mt-1 block text-xs text-[hsl(var(--muted-foreground))]">{achievement.description}</span></span></div>; })}</div></div></Overlay>;
}

function MapDialog({ scene, onClose }: { scene: Scene; onClose: () => void }) {
  const activeChapter = Number(scene.chapter.match(/\d+/)?.[0] ?? 1);
  return <Overlay onClose={onClose} labelledBy="map-title"><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">The school after closing</p><h2 id="map-title" className="mt-2 font-serif text-4xl font-semibold text-[hsl(var(--primary))]">Room map</h2><p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">Every room has a different kind of terrible idea.</p></div><Library className="text-[hsl(var(--accent))]" /></div><div className="mt-7 grid gap-2 sm:grid-cols-2">{rooms.map((room, index) => { const Icon = room.icon; const active = index + 1 === activeChapter; return <div key={room.name} className={`flex items-center gap-3 border p-3 ${active ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10' : 'border-[hsl(var(--border))]'}`}><span className={`grid h-8 w-8 place-items-center rounded-full ${active ? 'bg-[hsl(var(--accent))] text-[hsl(var(--card))]' : 'bg-[hsl(var(--muted))] text-[hsl(var(--primary))]'}`}><Icon size={16} /></span><span><span className="block text-sm font-bold text-[hsl(var(--primary))]">{room.name}</span><span className="block text-xs text-[hsl(var(--muted-foreground))]">{active ? 'You are here' : room.detail}</span></span></div>; })}</div></Overlay>;
}

function SettingsDialog({ settings, setSettings, onClose }: { settings: Settings; setSettings: Dispatch<SetStateAction<Settings>>; onClose: () => void }) {
  return <Overlay onClose={onClose} labelledBy="settings-title"><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">Make the book behave</p><h2 id="settings-title" className="mt-2 font-serif text-4xl font-semibold text-[hsl(var(--primary))]">Reading settings</h2></div><Settings className="text-[hsl(var(--accent))]" /></div><div className="mt-7 space-y-3"><ToggleRow label="Sound flourishes" detail="Tiny clicks and chimes. No haunted orchestra." checked={settings.sound} onChange={(checked) => setSettings((value) => ({ ...value, sound: checked }))} /><ToggleRow label="Show choice hints" detail="Hide these if you want to make your own bad decisions." checked={settings.showHints} onChange={(checked) => setSettings((value) => ({ ...value, showHints: checked }))} /><ToggleRow label="High contrast ink" detail="Stronger edges and text for easier reading." checked={settings.highContrast} onChange={(checked) => setSettings((value) => ({ ...value, highContrast: checked }))} /><ToggleRow label="Reduced motion" detail="Keep the page turns calm and sensible." checked={settings.reducedMotion} onChange={(checked) => setSettings((value) => ({ ...value, reducedMotion: checked }))} /></div><div className="mt-7"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Text size</p><div className="mt-3 flex gap-2">{(['normal', 'large', 'xl'] as const).map((size) => <button key={size} onClick={() => setSettings((value) => ({ ...value, textSize: size }))} className={`focus-ring border px-4 py-2 text-sm font-semibold ${settings.textSize === size ? 'border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/20' : 'border-[hsl(var(--border))]'}`}>{size === 'xl' ? 'Large' : size[0].toUpperCase() + size.slice(1)}</button>)}</div></div></Overlay>;
}

function Overlay({ children, onClose, labelledBy }: { children: ReactNode; onClose: () => void; labelledBy: string }) {
  return <div className="fixed inset-0 z-30 grid place-items-center overflow-y-auto bg-[hsl(var(--primary))]/80 px-5 py-8 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div role="dialog" aria-modal="true" aria-labelledby={labelledBy} className="relative w-full max-w-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-[10px_10px_0_hsl(var(--secondary))] sm:p-9"><button onClick={onClose} aria-label="Close panel" className="focus-ring absolute right-4 top-4 rounded-full p-1 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"><X size={18} /></button>{children}</div></div>;
}

function Metric({ label, value }: { label: string; value: number }) {
  return <div className="border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/55 p-3"><span className="block font-mono text-[9px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">{label}</span><span className="mt-1 block font-serif text-2xl font-semibold text-[hsl(var(--primary))]">{value}</span></div>;
}

function ToggleRow({ label, detail, checked, onChange }: { label: string; detail: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return <label className="flex cursor-pointer items-center justify-between gap-4 border border-[hsl(var(--border))] p-4"><span><span className="block text-sm font-bold text-[hsl(var(--primary))]">{label}</span><span className="mt-1 block text-xs text-[hsl(var(--muted-foreground))]">{detail}</span></span><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-5 w-5 accent-[hsl(var(--accent))]" /></label>;
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={StoryApp} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;