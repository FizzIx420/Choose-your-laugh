export type LongChoice = {
  label: string;
  note: string;
  next: string;
  item?: string;
  consequence?: string;
  tone?: 'green' | 'coral' | 'ink';
};

export type LongPage = {
  id: string;
  pageNumber: number;
  chapter: string;
  eyebrow: string;
  title: string;
  body: string[];
  aside: string;
  choices?: LongChoice[];
  ending?: {
    title: string;
    copy: string;
    badge: string;
    accent: string;
  };
};

export const LONG_STORY_PAGES = 320;
export const LONG_STORY_CHAPTERS = 8;

const chapters = [
  {
    title: 'The Lockers Begin to Gossip',
    setting: 'the after-hours corridor where the lockers trade rumors like very metallic aunties',
    object: 'a locker that keeps clearing its throat',
    menace: 'a rumor with your name on it',
    joke: 'the school mascot, who is a raccoon and has terrible timing',
    twist: 'the hallway is not haunted; it is simply extremely nosy',
  },
  {
    title: 'The Substitute Teacher Is a Fog',
    setting: 'a classroom where the chalk writes its own lesson plan',
    object: 'a attendance sheet with one extra student',
    menace: 'a substitute teacher made entirely of fog',
    joke: 'a worksheet that asks whether you have considered being less dramatic',
    twist: 'the substitute has been marking everyone present for 87 years',
  },
  {
    title: 'The Cafeteria Has a Secret Menu',
    setting: 'the cafeteria after closing, when the trays stack themselves and whisper about pudding',
    object: 'a menu item called THE SPECIAL',
    menace: 'a meatloaf with a surprisingly complicated backstory',
    joke: 'a vending machine that only accepts compliments',
    twist: 'the lunch lady is actually the head of the haunted hallway committee',
  },
  {
    title: 'The Gym Floor Is a Portal',
    setting: 'the gym, where the basketball hoops are pointing at the wrong dimension',
    object: 'a dodgeball that politely asks for your autograph',
    menace: 'a foggy dimension full of competitive ghosts',
    joke: 'the school fight song played by one exhausted kazoo',
    twist: 'the portal leads to a gym that is exactly the same but has better snacks',
  },
  {
    title: 'The Science Fair Escapes',
    setting: 'a science lab where every project has achieved sentience and wants a ribbon',
    object: 'a volcano wearing safety goggles',
    menace: 'a colony of magnets that has unionized',
    joke: 'a robot whose only skill is loudly announcing that it is a robot',
    twist: 'the winning project is a potato with excellent communication skills',
  },
  {
    title: 'The Principal’s Office Is Upside Down',
    setting: 'the principal’s office, currently attached to the ceiling by administrative magic',
    object: 'a stapler that believes it is a tiny judge',
    menace: 'the annual evaluation of your bravery',
    joke: 'a motivational poster featuring a squirrel with a clipboard',
    twist: 'the principal has been waiting all night to ask for a hall pass',
  },
  {
    title: 'The Yearbook Knows Too Much',
    setting: 'the yearbook room, where the photographs blink whenever you look away',
    object: 'a group photo with one extra shadow',
    menace: 'a caption that keeps changing the past',
    joke: 'a camera that refuses to photograph anyone who is being normal',
    twist: 'the yearbook editor is a ghost who hates Comic Sans',
  },
  {
    title: 'The Bell Rings for the End',
    setting: 'the clock tower above the school, where time has misplaced its shoes',
    object: 'a bell rope tied into a suspiciously fancy knot',
    menace: 'the final bell, which is trying to graduate early',
    joke: 'a choir of tiny alarms singing in harmony',
    twist: 'the hallway has been preparing a graduation ceremony for you',
  },
] as const;

const actions = [
  'You negotiate with',
  'You investigate',
  'You apologize to',
  'You challenge',
  'You distract',
  'You follow',
  'You hide behind',
  'You accidentally compliment',
];

const pageTitles = [
  'The clue has a smell',
  'A door opens out of embarrassment',
  'You find a button labeled probably',
  'The floor makes a decision',
  'Someone has underlined the obvious',
  'A suspiciously polite whisper',
  'The emergency plan is mostly snacks',
  'A diagram explains nothing',
  'The janitor’s mop knows the shortcut',
  'You are promoted without applying',
];

const asId = (number: number) => `long-${String(number).padStart(3, '0')}`;

const nextPage = (pageNumber: number, distance: number) =>
  asId(Math.min(LONG_STORY_PAGES, pageNumber + distance));

function makePage(pageNumber: number): LongPage {
  const chapterIndex = Math.min(
    chapters.length - 1,
    Math.floor((pageNumber - 1) / 40),
  );
  const localPage = ((pageNumber - 1) % 40) + 1;
  const chapter = chapters[chapterIndex];
  const action = actions[(pageNumber - 1) % actions.length];
  const title = pageTitles[(pageNumber - 1) % pageTitles.length];
  const itemName = [
    'a hall pass made of toast',
    'the emergency squeaky shoe',
    'a pencil with leadership potential',
    'one extremely official sticker',
    'a pocket-sized flashlight',
    'the cafeteria’s least haunted napkin',
    'a notebook full of suspicious arrows',
    'a tiny silver bell',
  ][(pageNumber - 1) % 8];

  const page: LongPage = {
    id: asId(pageNumber),
    pageNumber,
    chapter: `Chapter ${String(chapterIndex + 1).padStart(2, '0')}`,
    eyebrow: `${chapter.title} · page ${String(localPage).padStart(2, '0')} of 40`,
    title: `${title}.`,
    body: [
      `The story has carried you into ${chapter.setting}. You are on page ${pageNumber} of 320, which sounds impressive until you remember that the book has been counting every time you blink.`,
      `${action} ${chapter.object}. It responds by making a noise that is either a warning or a tiny drum solo. ${chapter.menace} waits nearby, pretending to be part of the scenery and failing because it is wearing a little hat.`,
      `You clutch ${itemName} and try to look like someone with a plan. ${chapter.joke} offers commentary from somewhere behind you. The strangest part is that ${chapter.twist}.`,
    ],
    aside:
      pageNumber % 3 === 0
        ? 'The narrator would like to point out that this was your idea.'
        : pageNumber % 3 === 1
          ? 'A margin note reads: “Still alive-ish. Excellent work.”'
          : 'The book turns one corner ahead of you, which feels unnecessarily confident.',
  };

  if (pageNumber === LONG_STORY_PAGES) {
    page.eyebrow = 'The final bell · page 320 of 320';
    page.title = 'The hallway finally explains itself.';
    page.body = [
      'At the top of the clock tower, every door, locker, lunch tray, and suspiciously confident kazoo lines up in a neat circle. The hallway clears its throat.',
      '“I was never trying to scare you,” it says. “I was trying to find someone willing to read all the way to the end.”',
      'You look at the book. The book looks back in the only way a book can: by having a page that says THANK YOU in very large letters. Then the bell rings, and the entire school applauds with its hinges.',
    ];
    page.ending = {
      title: 'The Long Way Home Ending',
      copy:
        'You made it through 320 story pages, several questionable smells, and at least one object with a management position. The hallway is free, the school is mostly upright, and you are now legally allowed to call yourself a brave-ish reader.',
      badge: 'END 08 / 08',
      accent: 'green',
    };
    return page;
  }

  const branchPoint = localPage % 10 === 0;
  if (branchPoint) {
    page.choices = [
      {
        label: `Turn toward ${chapter.object}`,
        note: 'The obvious route, which is rarely the safe one.',
        next: nextPage(pageNumber, 1),
        item: pageNumber % 20 === 0 ? 'A suspiciously shiny clue' : undefined,
        consequence: 'The story approves of your forward momentum.',
        tone: 'green',
      },
      {
        label: `Follow ${chapter.joke}`,
        note: 'The joke has offered directions. This is how it starts.',
        next: nextPage(pageNumber, 3),
        item: pageNumber % 15 === 0 ? 'A joke with a map inside' : undefined,
        consequence: 'You have chosen the route with the most paperwork.',
        tone: 'coral',
      },
    ];
  } else {
    page.choices = [
      {
        label: 'Turn the page',
        note: 'The hallway is getting longer. Your eyebrows are getting higher.',
        next: nextPage(pageNumber, 1),
        consequence: 'The book makes a small, pleased thump.',
        tone: pageNumber % 2 === 0 ? 'ink' : 'green',
      },
    ];
  }

  return page;
}

export const longScenes: Record<string, LongPage> = Object.fromEntries(
  Array.from({ length: LONG_STORY_PAGES }, (_, index) => {
    const page = makePage(index + 1);
    return [page.id, page];
  }),
) as Record<string, LongPage>;

export const longStart: LongPage = {
  ...longScenes[asId(1)],
  id: 'long-start',
  eyebrow: 'The expanded edition · page 1 of 320',
  title: 'The hallway has 320 pages of problems.',
  body: [
    'Behind the little door marked 13 is not a room. It is a whole extra book, folded into the school like a note passed during math class.',
    'The first page smells like pencil shavings, rain, and a decision you are going to regret in a fun way. A tiny brass sign says: THIS WAY TO THE LONG WAY HOME.',
    'You turn the page. Somewhere far ahead, the final bell clears its throat. Somewhere nearby, the school mascot puts on a hat and begins taking notes.',
  ],
  choices: [
    {
      label: 'Enter the expanded edition',
      note: 'There are 320 pages. The book is very proud of itself.',
      next: asId(2),
      item: 'The expanded-edition bookmark',
      consequence: 'The long story has begun. Pace yourself and distrust the pudding.',
      tone: 'green',
    },
    {
      label: 'Read the warning on the door',
      note: 'It is written in extremely small, judgmental letters.',
      next: asId(12),
      item: 'A warning in tiny handwriting',
      consequence: 'You skipped ahead, which the hallway calls “an intriguing choice.”',
      tone: 'coral',
    },
  ],
};