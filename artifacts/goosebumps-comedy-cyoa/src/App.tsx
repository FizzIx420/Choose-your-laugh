import { useState } from 'react';
import {
  ArrowRight,
  Backpack,
  BookOpen,
  Bookmark,
  Check,
  Eye,
  Library,
  MoonStar,
  Pause,
  Play,
  RotateCcw,
  Search,
  Skull,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { type ReactNode } from 'react';
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

function Welcome({ onBegin }: { onBegin: () => void }) {
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
              A silly-spooky, choose-your-own-adventure paperback that keeps score, remembers your choices, and has absolutely no business being this warm.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-5">
              <button onClick={onBegin} data-testid="button-begin-story" className="focus-ring group inline-flex items-center gap-3 rounded-sm bg-[hsl(var(--secondary))] px-5 py-3.5 font-bold text-[hsl(var(--primary))] transition-transform hover:-translate-y-0.5 active:translate-y-0">
                Open the book <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
               <span className="font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">8 endings · 8 chapters · 320 pages · 0 sensible plans</span>
            </div>
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
  const [sceneId, setSceneId] = useState('start');
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [sound, setSound] = useState(true);
  const [inventory, setInventory] = useState<string[]>([]);
  const [lastConsequence, setLastConsequence] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const scene = fullScenes[sceneId];
  const ending = scene.ending;

  const begin = () => {
    setStarted(true);
    setSceneId('start');
    setHistory([]);
    setInventory([]);
    setLastConsequence('');
  };

  const choose = (choice: Choice) => {
    if (choice.item) setInventory((items) => items.includes(choice.item as string) ? items : [...items, choice.item as string]);
    setLastConsequence(choice.consequence ?? '');
    setHistory((items) => [...items, sceneId]);
    setSceneId(choice.next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    const previous = history[history.length - 1];
    if (!previous) return;
    setHistory((items) => items.slice(0, -1));
    setSceneId(previous);
    setLastConsequence('');
  };

  if (!started) return <Welcome onBegin={() => { setStarted(true); }} />;

  const progress = scene.pageNumber
    ? Math.round((scene.pageNumber / LONG_STORY_PAGES) * 100)
    : Math.min(100, Math.round((history.length / 7) * 100));
  const chapterNumber = Number(scene.chapter.match(/\d+/)?.[0] ?? 4);

  return (
    <main className="book-texture min-h-[100dvh] bg-[hsl(var(--background))]">
      <div className="mx-auto min-h-[100dvh] max-w-[1440px] lg:grid lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-[hsl(var(--border))] bg-[hsl(var(--primary))] p-7 text-[hsl(var(--card))] lg:flex lg:flex-col">
          <Logo />
          <div className="mt-16">
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">Your journey</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-16 w-1 overflow-hidden rounded-full bg-[hsl(var(--sidebar-accent))]"><div className="w-full bg-[hsl(var(--secondary))] transition-[height] duration-500" style={{ height: `${Math.max(7, progress)}%` }} /></div>
              <div><p className="font-serif text-3xl">{chapterNumber}<span className="text-lg text-[hsl(var(--muted-foreground))]">/{totalChapters}</span></p><p className="font-mono text-[9px] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">chapter</p></div>
            </div>
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">Found things</p><Backpack size={15} className="text-[hsl(var(--secondary))]" /></div>
            <div className="mt-4 space-y-2">
              {inventory.length === 0 ? <p className="text-sm italic text-[hsl(var(--muted-foreground))]">Your pockets are suspiciously empty.</p> : inventory.map((item) => <div key={item} className="flex items-center gap-2 text-sm text-[hsl(var(--card))]"><Check size={13} className="text-[hsl(var(--secondary))]" />{item}</div>)}
            </div>
          </div>
          <div className="mt-auto space-y-3 border-t border-[hsl(var(--sidebar-border))] pt-5">
            <button onClick={() => setPaused(true)} data-testid="button-pause-desktop" className="focus-ring flex w-full items-center gap-2 text-left font-mono text-[10px] uppercase tracking-[.13em] text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--secondary))]"><Pause size={14} /> Pause the story</button>
            <button onClick={() => setSound((value) => !value)} data-testid="button-sound-desktop" className="focus-ring flex w-full items-center gap-2 text-left font-mono text-[10px] uppercase tracking-[.13em] text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--secondary))]">{sound ? <Volume2 size={14} /> : <VolumeX size={14} />} {sound ? 'Sound on' : 'Sound off'}</button>
          </div>
        </aside>
        <section className="min-w-0">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 px-5 py-4 backdrop-blur-sm sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 lg:hidden"><Logo compact /></div>
             <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))] lg:flex"><Bookmark size={14} /> {scene.chapter}{scene.pageNumber ? ` · page ${scene.pageNumber} / ${LONG_STORY_PAGES}` : ''}</div>
            <div className="ml-auto flex items-center gap-4">
              <div className="hidden text-right sm:block"><p className="font-mono text-[9px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">Story progress</p><div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className="h-full bg-[hsl(var(--accent))] transition-[width] duration-500" style={{ width: `${Math.max(progress, 5)}%` }} /></div></div>
              <button onClick={() => setPaused(true)} data-testid="button-pause-mobile" className="focus-ring rounded-full p-2 text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--muted))] lg:hidden"><Pause size={18} /></button>
              <button onClick={() => setSound((value) => !value)} data-testid="button-sound-mobile" className="focus-ring rounded-full p-2 text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--muted))]">{sound ? <Volume2 size={18} /> : <VolumeX size={18} />}</button>
            </div>
          </header>
          <div className="mx-auto max-w-4xl px-5 pb-20 pt-10 sm:px-10 sm:pt-16 lg:px-16 lg:pt-20">
            <div key={scene.id} className="page-in">
              <div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] font-medium uppercase tracking-[.18em] text-[hsl(var(--accent))]">{scene.eyebrow}</span><span className="font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">{scene.chapter}</span></div>
              <h1 data-testid="text-scene-title" className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[.97] tracking-[-.045em] text-[hsl(var(--primary))] sm:text-7xl">{scene.title}</h1>
              <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_190px] lg:gap-16">
                <article className="ruled-lines rounded-sm bg-[hsl(var(--card))] px-5 py-7 shadow-[0_2px_0_hsl(var(--border))] sm:px-9 sm:py-9">
                  <div className="space-y-6 font-serif text-xl leading-[1.62] text-[hsl(var(--foreground))] sm:text-[22px]">{scene.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                  <div className="mt-10 flex items-center gap-3 border-t border-[hsl(var(--border))] pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[.1em] text-[hsl(var(--muted-foreground))]"><Eye size={15} className="shrink-0 text-[hsl(var(--accent))]" /> {scene.aside}</div>
                </article>
                <aside className="hidden lg:block"><div className="sticky top-28 space-y-7"><div className="rotate-2 border border-dashed border-[hsl(var(--accent))] bg-[hsl(var(--card))] p-4 text-[hsl(var(--accent))]"><Search size={18} /><p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[.1em]">Narrator’s note</p><p className="mt-2 text-sm font-semibold leading-snug text-[hsl(var(--foreground))]">The plot is thickening. Like library paste.</p></div><div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]"><Library size={16} /><span className="font-mono text-[9px] uppercase tracking-[.1em]">Property of night school</span></div></div></aside>
              </div>
              {lastConsequence && !ending && <div className="reveal mt-7 flex items-center gap-3 border-l-4 border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/20 px-4 py-3 text-sm text-[hsl(var(--foreground))]"><Sparkles size={17} className="shrink-0 text-[hsl(var(--accent))]" /><span><strong className="font-bold">The book notes:</strong> {lastConsequence}</span></div>}
              {ending ? <EndingPanel ending={ending} onReplay={begin} /> : <ChoicePanel choices={scene.choices ?? []} onChoose={choose} />}
            </div>
          </div>
        </section>
      </div>
      {paused && <PauseDialog onResume={() => setPaused(false)} onRestart={begin} onClose={() => setPaused(false)} />}
    </main>
  );
}

function ChoicePanel({ choices, onChoose }: { choices: Choice[]; onChoose: (choice: Choice) => void }) {
  return (
    <section className="reveal reveal-delay-2 mt-12">
      <div className="mb-4 flex items-center justify-between"><h2 className="font-mono text-[10px] font-medium uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))]">What will you do?</h2><span className="font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">Choose carefully-ish</span></div>
      <div className="grid gap-3">{choices.map((choice, index) => <button key={choice.label} onClick={() => onChoose(choice)} data-testid={`button-choice-${index + 1}`} className="focus-ring group relative flex w-full items-center gap-4 overflow-hidden rounded-sm border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 text-left transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--accent))] hover:shadow-[4px_4px_0_hsl(var(--secondary))] active:translate-y-0 sm:p-5"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-xs font-medium ${choice.tone === 'coral' ? 'bg-[hsl(var(--accent))] text-[hsl(var(--card))]' : choice.tone === 'green' ? 'bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]' : 'bg-[hsl(var(--primary))] text-[hsl(var(--card))]'}`}>{String.fromCharCode(65 + index)}</span><span className="min-w-0 flex-1"><span className="block font-semibold text-[hsl(var(--primary))]">{choice.label}</span><span className="mt-1 block text-sm text-[hsl(var(--muted-foreground))]">{choice.note}</span></span><ArrowRight size={18} className="shrink-0 text-[hsl(var(--muted-foreground))] transition-transform group-hover:translate-x-1 group-hover:text-[hsl(var(--accent))]" /></button>)}</div>
    </section>
  );
}

function EndingPanel({ ending, onReplay }: { ending: NonNullable<Scene['ending']>; onReplay: () => void }) {
  const accentClass = ending.accent === 'coral' ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10' : ending.accent === 'green' ? 'border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/15' : 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5';
  return <section className={`stamp-in mt-12 border-2 p-6 sm:p-8 ${accentClass}`}><div className="flex items-start justify-between gap-5"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">{ending.badge}</p><h2 className="mt-3 font-serif text-4xl font-semibold leading-none tracking-[-.04em] text-[hsl(var(--primary))]">{ending.title}</h2></div><div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--secondary))]"><Sparkles size={22} /></div></div><p className="mt-5 max-w-xl text-lg leading-relaxed text-[hsl(var(--foreground))]">{ending.copy}</p><button onClick={onReplay} data-testid="button-replay-story" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-sm bg-[hsl(var(--primary))] px-5 py-3 font-bold text-[hsl(var(--card))] transition-transform hover:-translate-y-0.5"><RotateCcw size={16} /> Read another ending</button></section>;
}

function PauseDialog({ onResume, onRestart, onClose }: { onResume: () => void; onRestart: () => void; onClose: () => void }) {
  return <div className="fixed inset-0 z-30 grid place-items-center bg-[hsl(var(--primary))]/80 px-5 backdrop-blur-sm"><div role="dialog" aria-modal="true" className="relative w-full max-w-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 shadow-[10px_10px_0_hsl(var(--secondary))] sm:p-9"><button onClick={onClose} data-testid="button-close-pause" className="focus-ring absolute right-4 top-4 rounded-full p-1 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"><X size={18} /></button><div className="grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"><Pause size={22} /></div><p className="mt-6 font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--accent))]">Bookmark this moment</p><h2 className="mt-2 font-serif text-4xl font-semibold leading-none tracking-[-.04em] text-[hsl(var(--primary))]">The hallway can wait.</h2><p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">Even haunted books understand snack breaks. Your choices are tucked safely between the pages.</p><div className="mt-7 flex flex-wrap gap-3"><button onClick={onResume} data-testid="button-resume-story" className="focus-ring inline-flex items-center gap-2 rounded-sm bg-[hsl(var(--primary))] px-4 py-3 font-bold text-[hsl(var(--card))]"><Play size={16} /> Continue reading</button><button onClick={onRestart} data-testid="button-restart-story" className="focus-ring inline-flex items-center gap-2 rounded-sm border border-[hsl(var(--border))] px-4 py-3 font-semibold text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]"><RotateCcw size={16} /> Start over</button></div></div></div>;
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