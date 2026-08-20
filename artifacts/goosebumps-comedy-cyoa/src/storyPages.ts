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

export const LONG_STORY_PAGES = 418;
export const LONG_STORY_CHAPTERS = 22;

export const longScenes: Record<string, LongPage> = {
  'long-001': {
    id: 'long-001',
    pageNumber: 1,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 1 of 19',
    title: 'The street is too quiet.',
    body: [
      'You walk the way you always walk. Same crooked mailbox on Pelham same dog on Carver Street. Except the dog does not bark. It watches from the porch with its ears flat like it owes you an apology.',
      'Maya texts: ok be careful. Then: i mean it. Then: i dont know why i mean it. A car slides past with its radio up and for half a second the song matches the kitchen radio you left behind. Then it is gone. The school bell rings at 7:51. It always rings at 7:53.',
    ],
    aside: 'The mailman nods at you on the corner. He is the wrong mailman.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-002',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-007',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go to the gym door',
        note: 'The door in the gym floor.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-002': {
    id: 'long-002',
    pageNumber: 2,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 2 of 19',
    title: 'The hallway is longer than usual.',
    body: [
      'The front doors are propped open with a wedge of yellow chalk. The hall monitor a kid named Petey who takes the job personally does not look up as you pass. He is studying the wall behind you in the mirror of his badge.',
      'The hallway stretches. You count the lockers between the doors — fourteen fifteen sixteen seventeen — and at seventeen you stop because you usually stop at twelve. The floor tile under your right shoe is the wrong color. The clock above the water fountain says 7:51. The one at the far end says 8:03. The one in the middle says 7:13 which is the time your kitchen radio was stuck on this morning.',
    ],
    aside: 'Locker 1987 is padlocked shut which is not its usual state. It is also not its usual locker.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-003',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-004',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-003': {
    id: 'long-003',
    pageNumber: 3,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 3 of 19',
    title: 'The alley shortcut is unexpectedly occupied.',
    body: [
      'The alley smells like rain and old glue and something else — pencil shavings maybe or the inside of a trumpet case. Halfway down behind the dumpster where the cafeteria throws out the expired milk sits a man in coveralls. He has a lunchpail. He is eating a sandwich. He is you realize after a confused second, Mr. Ashford the school janitor.',
      '"You are not supposed to be here," he says which is exactly the wrong thing to say to a kid who is also not supposed to be here. He looks at you carefully. He looks at the school at the end of the alley then back at you. "Bad morning?"',
      'You say yes. He nods like he understands entirely. "Walk with me," he says. "The front doors are open too wide today. Someone is being showy."',
    ],
    aside: 'His lunchpail is stickered with a faded SCHOOL DISTRICT 7 — 1987 FIELD DAY tag. He was not the janitor in 1987. He was a student.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-004',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-005',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-004': {
    id: 'long-004',
    pageNumber: 4,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 4 of 19',
    title: 'Mr. Briggs calls a name that does not belong to anyone.',
    body: [
      'Homeroom. Mr. Briggs is taking attendance. He calls the names in the order he always does and you slip into your seat halfway through. He does not look up. He gets to the end of the roster hesitates and says, "Margery Vance?"',
      'No one answers. Of course no one answers. There is no Margery Vance in your grade. There has never been a Margery Vance in your grade. You would remember a name like that.',
      'Mr. Briggs looks at the page for a long moment. Then he crosses something out with his red pen mutters "right of course," and moves on. The bell rings. Maya two seats over has gone the color of cafeteria milk.',
    ],
    aside: 'On the board behind Mr. Briggs in his own handwriting: CHAPTER 7 — REVIEW. There is no Chapter 7 in your textbook. There has never been a Chapter 7.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-005',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-006',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-005': {
    id: 'long-005',
    pageNumber: 5,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 5 of 19',
    title: 'The hallway lets you wander.',
    body: [
      'You wander. The hallway accommodates. The lockers count up past nineteen past twenty and then they just stop the way a sentence stops when the speaker has decided you have heard enough. The light at the far end is the wrong color of fluorescent — greenish the way a clock radio looks at 7:13 in the morning.',
      'There is a door here that you have never noticed. It is not on the school map. It is not on any map. The sign on it says LOST & FOUND in old stick-on letters and one of the letters the O has been replaced at some point with a different O that does not match. Underneath in smaller handwriting: do not be a hero.',
      'The doorknob is cold. Not cool. Cold the way metal is cold when something on the other side of it is using up all the warmth.',
    ],
    aside: 'The clock above this door says 7:13 too. Three clocks now. The hallway does not want you to lose track of the time even though it has clearly lost track itself.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-006',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-008',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-006': {
    id: 'long-006',
    pageNumber: 6,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 6 of 19',
    title: 'Your mother puts the back of her hand to your forehead.',
    body: [
      '"You do not feel warm," she says. She says it like a question. She says it like she has been waiting for you to try this since yesterday although she could not possibly have been because nothing was wrong yesterday.',
      'Your brother is in the bathroom still singing that song. Your mother does not seem to hear it. She is studying you. The kitchen radio says 7:13. The toaster says 7:13. The microwave which is wrong by four minutes on a good day also says 7:13.',
      '"Honey," your mother says. She waits. She chooses her next words carefully the way she does when she is about to say something she has been holding since her own childhood. "Is it the school? Or is it the morning?"',
    ],
    aside: 'There is a photo on the fridge of your mother at twelve in front of a school you do not recognize. The school in the photo has a clock tower. Your school does not have a clock tower.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-008',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-009',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-007': {
    id: 'long-007',
    pageNumber: 7,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 7 of 19',
    title: 'Your mother puts the kettle on.',
    body: [
      'She does not put it on for tea. She puts it on because the kettle is the loudest thing in the kitchen and what she is about to say is quiet. "When I was your age," she says, "I had a morning like this. The same morning. The same wrong clock. I stayed home."',
      'She looks at the fridge. She looks at the photo of her at twelve in front of the school with the clock tower. "There was a girl," she says. "Margery Vance. She was in my homeroom. She went to school that morning. She did not come home."',
      'The kettle screams. Your mother turns it off. She does not make tea. She stands at the stove with her back to you and says, "I have always wondered if I should have gone to school that day. If going would have changed anything. I do not know. I stayed home. I survived the morning. The morning did not apparently want me."',
    ],
    aside: 'Your mother has never told you this. The morning made her. The morning is you realize now the thing she has been afraid of your whole life.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-008',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-009',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-013',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-008': {
    id: 'long-008',
    pageNumber: 8,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 8 of 19',
    title: 'Your mother laughs and you hate how relieved she is.',
    body: [
      '"Oh honey," she says, "I am so glad." She puts the kettle back on its hook. The kitchen radio freed advances to 7:14. The toaster follows. Your brother stops singing. The morning has been waiting for someone to refuse it and you have refused it.',
      'You walk to school. The dog on Carver Street barks at you just once the way it always does. The mailman is the right mailman. The school bell rings at 7:53.',
      'In homeroom, Mr. Briggs calls the names in the right order. He does not call Margery Vance. The day unrolls itself the way a day is supposed to unroll. You eat the lunch your mother packed. You do not remember what is in it by the time you finish it. The afternoon bell rings. You walk home.',
    ],
    aside: 'The school has a clock tower after all. You have simply never looked up. You look up now walking home. The clock says 3:47. The clock says 3:47. The clock says 3:47.',
    ending: {
      title: 'The Refused Morning',
      copy: 'You told a small lie, undid it, and went to school. The morning let you go. You will go on to have a perfectly ordinary life. Your mother will die at eighty-six, peacefully. You will inherit her photo of the school with the clock tower. You will not recognize it.',
      badge: 'END 01 / 14',
      accent: 'green'
    },
  },
  'long-009': {
    id: 'long-009',
    pageNumber: 9,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 9 of 19',
    title: 'You go back to bed.',
    body: [
      'Your mother does not argue. She closes your door with the softness of someone who has been waiting to close it. You pull the blanket up. The bedroom is the wrong temperature the way the kitchen was the wrong temperature the way the street was the wrong temperature. Everything today is being kept slightly too cold as if something is preserving you.',
      'You sleep. You do not dream. You wake up at noon and the light through your curtain is the same color it was at 7:13. You sleep again. You wake up at 3:47. The light is the same. You sleep again. You wake up at 7:13 the next morning.',
      'Your mother is in the kitchen. The radio says 7:13. She is making toast. She is humming a song you do not recognize. She turns. "Bad morning?" she asks.',
    ],
    aside: 'There is a photo on the fridge that was not there yesterday. It is of your mother at twelve in front of a school with a clock tower. She is wearing a yellow ribbon. In the photo the clock tower reads 7:13.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-010',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-011',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-010': {
    id: 'long-010',
    pageNumber: 10,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 10 of 19',
    title: 'Your mother sits down across from you.',
    body: [
      'She sits the way a person sits when they have been standing on the same patch of floor for a very long time. She folds her hands. She unfolds them. She says, "Her name was Margery Vance."',
      'You wait. The kitchen radio which had been silent begins to play the slow old song again. Your mother reaches over and turns it off without looking at it. "She was in my homeroom," your mother says. "She was funny in a way I did not appreciate until much later. She wore a yellow ribbon every day. I asked her why once. She said so you can find me if I get lost."',
      'Your mother stops. She picks up her coffee cup which is empty and puts it back down. "There was an assembly. The dedication of the new gym floor. The whole school was there. The principal rang the old bell tower — the third bell the one they never rang because it was broken. They rang it that day because of the dedication. And Margery was on the gym floor when they rang it. And then she was not."',
    ],
    aside: 'Your mother has never said "was not" with that exact weight before. She means: she was somewhere. She means: she is somewhere still. She does not know how to say that.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-011',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-012',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-011': {
    id: 'long-011',
    pageNumber: 11,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 11 of 19',
    title: 'You go to school. Your mother packs you a lunch you did not ask for.',
    body: [
      'The lunch is a sandwich an apple a small paper bag of pretzels and a folded note. You do not read the note in the kitchen. You read it later on the walk and the walk is the wrong walk — the dog does not bark the mailman is the wrong mailman the bell rings at 7:51.',
      'The note says: There is a janitor at your school. His name is Mr. Ashford. He was in my grade. He was Margery\'s friend. He has been waiting longer than I have. Find him. Show him this note. He will know what to do.',
      'You fold the note back into your pocket. The school appears at the end of the street and it is you notice for the first time in your life the school in your mother\'s photo. It has always had a clock tower. You have never looked up.',
    ],
    aside: 'The clock tower reads 7:13. So does the kitchen radio you left behind. So does the microwave. So does the clock in your bedroom that you did not set this morning.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-012',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-014',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-012': {
    id: 'long-012',
    pageNumber: 12,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 12 of 19',
    title: 'You stay home with your mother.',
    body: [
      'She cries. You do not. You sit at the kitchen table with her for a long time and she tells you everything she has not told you in the order she has been rehearsing it. The bell tower. The third bell. The dedication. The gym floor. The girl in the yellow ribbon who said, "so you can find me if I get lost," and then was lost and was never found.',
      'At noon the kitchen radio plays the slow old song one more time. Your mother turns it off. "He will come here," she says. She does not say who. "He comes every year on this day. He asks if I have seen her. I tell him no. He says thank you. He leaves."',
      'A car pulls up outside at 3:47. A man in coveralls gets out. He is older than your mother. He knocks. Your mother opens the door. "Hello, Ashford," she says. He says, "Hello, Helen." He sees you. His face does something you cannot read.',
    ],
    aside: 'Mr. Ashford has been to this house before. He has stood on this porch every year for as long as you have been alive. You have never seen him do it. Your mother has. She has never told you.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-014',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-015',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-013': {
    id: 'long-013',
    pageNumber: 13,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 13 of 19',
    title: 'Mr. Ashford sits down without being invited.',
    body: [
      'He takes off his cap. He turns it in his hands. He looks at your mother who nods once very small. He looks at you. "I was twelve," he says. "Same as her. Same as you. We were friends the three of us — me, Margery and your mother. Your mother was the brave one. Margery was the funny one. I was the one who carried the keys."',
      'He sets the cap on the table. He pulls a chain from inside his coveralls. On the chain is a brass key. The key is old. The chain is older. "Her father gave it to me," he says. "He was the janitor before me. He said this key opens a door that does not exist anymore. They tore the building down in eighty-nine. But the door — the door is still there. The door does not care about the building."',
      'He puts the key on the table between the three of you. "The bell rang," he says. "The third bell. The one they never rang. They rang it that day because they wanted it to be a real dedication. And Margery was standing on the gym floor in her yellow ribbon and she said, \'so you can find me,\' and she was not. She has been on the other side of this door ever since. I have been carrying this key ever since. Your mother has been refusing this morning ever since. And you —"',
    ],
    aside: 'He stops. He looks at you. He has been waiting to look at someone your age for almost forty years.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-014',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-015',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-014': {
    id: 'long-014',
    pageNumber: 14,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 14 of 19',
    title: 'The gym floor is being replaced.',
    body: [
      'Mr. Ashford explains it slowly the way someone explains a thing they have been dreading. "The school board voted last spring. New gym floor. The old one — the one they dedicated in eighty-seven — is coming up this week. They started yesterday."',
      'He pauses. The kitchen clock says 7:13. He glances at it the way a person glances at an old enemy. "The old floor was poured over the door. They poured it on purpose. Concrete then maple then the dedication plaque on top. The door was the door to the basement of the old building. The old building was the school before this one. They tore it down in eighty-nine two years after the dedication. But the basement — the basement is still under there. The door is still under there. And the door —"',
      'He stops. He looks at your mother. She is crying again but quietly. "The door has been ringing," he says. "It has been ringing all morning. It has not rung since eighty-seven. And it is ringing now today on the morning they are pulling up the floor."',
    ],
    aside: 'On the table, Mr. Ashford\'s brass key is warm. It was cold a minute ago. You did not see it become warm.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-015',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-016',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-015': {
    id: 'long-015',
    pageNumber: 15,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 15 of 19',
    title: 'Mr. Ashford tells you the part that involves you.',
    body: [
      '"Margery was funny," he says. "She was funny the way you are funny. She wore a yellow ribbon the way your mother wore a yellow ribbon — your mother started wearing one after in case. She had a way of looking at the world sideways the way you do. I noticed it the first time I saw you in the hallway when you were eleven. I have been watching you since."',
      'He is not looking at your mother. He is looking at you. "The door — it picks. It picked her. It picks every forty years roughly when the bell rings. The bell rang this morning. It rang at 7:13. It will ring again, I think when the floor is up. And the door will pick. I do not know if it will pick you. I do not know if it will pick anyone if you are not there. But you are there. You are the right age. You are the right morning."',
      'He stops. He is you realize crying. Not the way your mother is crying. The way a man cries who has not cried in a very long time and is embarrassed to be caught at it. "I could not save her," he says. "I was twelve. I did not know what to do. I have been carrying her key ever since. I would like this once to do something with it."',
    ],
    aside: 'On the table the brass key has begun to vibrate very faintly. You can feel it through the tabletop. You do not think Mr. Ashford can.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-016',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-017',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-016': {
    id: 'long-016',
    pageNumber: 16,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 16 of 19',
    title: 'The library smells like old paper and floor wax.',
    body: [
      'You go to the library. The librarian, Ms. Penhaligon is shelving books at the wrong end of the wrong shelf and she does not look up when you come in. The library is mostly empty. It is always mostly empty. The library has been mostly empty since they cut the reading period in 2003.',
      'You go to the yearbooks. They are in a glass case at the back locked but the lock is the kind of lock that opens if you jiggle it. You jiggle it. You pull the 1987 yearbook. It is heavy. It smells like the inside of a trumpet case like the alley like the door in the hallway.',
      'You flip to the dedication. There is a photo of the new gym floor. There is a photo of the principal ringing the bell. There is a photo of the student body assembled. In the back row in a yellow ribbon is a girl your age. She is grinning. The caption reads: MARGERY VANCE, GRADE 7. Underneath in different ink in handwriting that is not the printer\'s: do not forget.',
    ],
    aside: 'You turn the page. Margery Vance is not in any other photo in the yearbook. Only the dedication photo. Only the back row. Only the yellow ribbon.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-017',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-018',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-017': {
    id: 'long-017',
    pageNumber: 17,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 17 of 19',
    title: 'Mr. Ashford is mopping the hallway.',
    body: [
      'You find him at the far end of the wrong hallway mopping the same square of tile he was mopping when you walked past him an hour ago. He sees you coming. He stops mopping. He does not look surprised. He looks like a man who has been waiting for a particular kid for a particular morning for a very long time.',
      '"You found the door," he says. It is not a question. You nod. "Show me," he says. He sets the mop against the wall. He takes a ring of keys from his belt. The ring has many keys. One of them is brass and old and etched with the words DO NOT LOSE. It is the twin of the key in your pocket.',
      'You walk together back down the hallway. The lockers count backward — seventeen sixteen fifteen — and stop at twelve the way they always do. The door marked LOST & FOUND is gone. There is only wall. Mr. Ashford looks at the wall for a long time. He says very quietly, "It moved."',
    ],
    aside: 'On his key ring the brass key is warm. The other keys are cold. He has not noticed. You have.',
    choices: [
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-018',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the morning',
        note: 'Navigate within The Wrong Morning.',
        next: 'long-019',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-018': {
    id: 'long-018',
    pageNumber: 18,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 18 of 19',
    title: 'Maya is waiting at the corner.',
    body: [
      'Maya is at the corner of Carver and Pelham the way she always is except today she is early and she is gripping her backpack straps the way she grips them when she has been crying. She sees you. She does not wave. She waits for you to reach her.',
      '"I had the dream again," she says. "The one with the bell." You have never told her about the bell. She has never told you about the bell. You both look at the school clock tower. It reads 7:13. Maya says, "My grandmother went to school here. She had a friend named Margery. She never told me what happened to Margery. She only told me if you ever hear the bell call me."',
      'You do not know what to say. Maya does not seem to need you to say anything. She turns and walks toward the school. She walks the way she walks when she is nervous — fast head down hands tight on her straps. You fall into step. The dog on Carver Street barks at both of you once the way it always does and then goes silent.',
    ],
    aside: 'At the school doors, Maya stops. She says, "If Mr. Briggs calls a name today do not answer. Even if it is your name. Especially if it is your name." She does not explain. She walks in.',
    choices: [
      {
        label: 'Continue in this chapter',
        note: 'Stay in The Wrong Morning.',
        next: 'long-019',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Go to The Hallway That Bends',
        note: 'Move to the next investigation: The Hallway That Bends.',
        next: 'long-020',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
    ],
  },
  'long-019': {
    id: 'long-019',
    pageNumber: 19,
    chapter: 'The Wrong Morning',
    eyebrow: 'The Wrong Morning · scene 19 of 19',
    title: 'The door has moved.',
    body: [
      'The door is in the gym. You know this before Mr. Ashford tells you the way you know the kitchen radio is wrong the way you know the dog on Carver Street is sorry. The gym is at the far end of the school past the cafeteria past the music room past the hallway that bends the wrong way. The gym doors are propped open with wedges of new chalk.',
      'Inside the old gym floor is half pulled up. Workmen in coveralls are prying up the maple planks. They are not making any sound. They are not you realize actually moving — they are stuck mid-pry like a video paused. The air smells like rain and old glue and pencil shavings. The clock on the gym wall says 7:13. The clock has always said 7:13 here now. The gym is where the morning lives.',
      'In the center of the floor where the dedication plaque used to be is a door. The door is set into the floor. It has a brass handle. The handle is shaped like a bell. The door is without being told what the brass key opens.',
    ],
    aside: 'On the door in handwriting you recognize as your mother\'s in yellow pencil: so you can find me if I get lost.',
    choices: [
      {
        label: 'Go down to the hallway',
        note: 'Descend to chapter 2.',
        next: 'long-020',
        consequence: 'You descend to the hallway.',
        tone: 'green'
      },
      {
        label: 'Descend to the basement',
        note: 'Go deeper to chapter 13.',
        next: 'long-229',
        consequence: 'You descend to the basement.',
        tone: 'coral'
      },
      {
        label: 'Go back home',
        note: 'Return home.',
        next: 'long-039',
        consequence: 'You go home.',
        tone: 'ink'
      },
    ],
  },
  'long-020': {
    id: 'long-020',
    pageNumber: 20,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 1 of 19',
    title: 'The key fits. The key turns. The key is grateful.',
    body: [
      'You kneel on the gym floor — the new floor the maple that was just laid last summer — and the brass key fits the brass handle the way a key fits in a story with a small satisfying click that you feel more than hear. The workmen do not turn. The clock does not move. The morning holds its breath.',
      'The door swings up. There are stairs. The stairs go down. The stairs are lit by a greenish fluorescent light that hums a single note the same note your kitchen radio was stuck on the same note your brother was singing in the bathroom. You realize suddenly that the note has been in the back of your head all morning and you had not noticed it until now when it gets louder.',
      'You look back once. The gym is empty. The workmen are gone. The workmen were never there. The clock above the basketball hoop says 7:13. You go down.',
    ],
    aside: 'Halfway down you realize you are still holding your mother\'s note. MR. ASHFORD. You did not show it to him. You did not need to. He knew you were coming.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-021',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-026',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go to the gym door',
        note: 'The door in the gym floor.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-021': {
    id: 'long-021',
    pageNumber: 21,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 2 of 19',
    title: 'Mr. Ashford comes down the stairs.',
    body: [
      'You call his name. The stairwell takes your voice and gives it back but changed the way a hallway takes a sound and gives it back changed — the same word but older. You call again. From the top of the stairs footsteps. Mr. Ashford appears framed in the open door the gym light behind him a flat 7:13 yellow.',
      'He looks at you. He looks at the door in the floor. He says, "You opened it." It is not an accusation. It is the way a person says a thing they have been waiting forty years to say. He comes down the stairs slowly like a man walking into deep water.',
      'At the bottom he stands next to you. He takes the brass key from his belt. It is identical to yours. "We each take one," he says. "That was the rule. Her father said if there are two of you you each take one. That way if one of you comes back the other can be found." He does not explain what he means. He does not need to.',
    ],
    aside: 'His hands are shaking. They have not shaken since 1987. They are catching up.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-022',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-023',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-022': {
    id: 'long-022',
    pageNumber: 22,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 3 of 19',
    title: 'The hallway bends the wrong way.',
    body: [
      'The stairs end in a hallway. The hallway is the hallway of your school — same tile same lockers same water fountain with the same crooked spout — except the hallway bends. Not at the end where it is supposed to bend toward the cafeteria. In the middle. It bends gently to the left then more sharply to the right and then it just keeps going past where the cafeteria should be past where the parking lot should be past where the next street should be.',
      'The lockers count up. 1, 2, 3. They reach 1987 and stop. There is no locker 1988. There never was down here. The clocks on the walls all say 7:13. The fluorescent lights hum the same note your brother was singing. The air smells like floor wax and yellow ribbon.',
      'Mr. Ashford if he is with you walks beside you with his cap in his hands. If he is not with you you walk alone and the hallway accommodates your aloneness by being slightly more lit slightly warmer slightly more like the hallway you know.',
    ],
    aside: 'On the wall in the same yellow pencil your mother used: CHAPTER 7 — REVIEW. The hallway has been waiting for someone to read this since 1987.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-023',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-024',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-023': {
    id: 'long-023',
    pageNumber: 23,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 4 of 19',
    title: 'A classroom door opens by itself.',
    body: [
      'You sit. The hallway accommodates. A moment later — or a year it is hard to tell down here — a classroom door halfway down the hall opens by itself. Not with a creak. With a small polite click the way a polite person closes a door behind them when they want you to notice they have left.',
      'The classroom is full of desks. The desks are old — wood with iron frames the kind with the chair attached. On each desk a name has been carved. You can read them from the doorway: HELEN M. ASHFORD R. MARGERY V. The chalkboard at the front has in old chalk handwriting: DEDICATION DAY — NO ASSEMBLY TODAY.',
      'A textbook is open on the desk marked MARGERY V. The textbook is open to Chapter 7. There is no Chapter 7 in your textbook. There is however a Chapter 7 in this one.',
    ],
    aside: 'On the inside cover of the textbook in the same handwriting as the note in your mother\'s kitchen: so you can find me if I get lost.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-024',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-025',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-024': {
    id: 'long-024',
    pageNumber: 24,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 5 of 19',
    title: 'Mr. Ashford tells you about the morning.',
    body: [
      'If he is with you he walks beside you and tells you. If he is not the hallway tells you instead in the way hallways tell things — by what is on the walls by what is in the lockers by the way the lights flicker at certain names. Either way the story is the same.',
      '"Margery was funny," the story goes. "Funny the way you are funny. She wore a yellow ribbon every day. She said it was so we could find her. We did not understand what she meant. We thought she meant in a crowd. She meant it turns out in general. She had been having the dreams since she was nine. The bell. The door. The other school. She thought she was supposed to go through. She thought it was her job."',
      'Mr. Ashford or the hallway pauses. The clocks all say 7:13. "She went through," the story goes. "The bell rang. She was standing on the gym floor. She said, \'so you can find me.\' And then she was here. And we were there. And the door closed. And the bell stopped ringing. And the morning kept going the way mornings do even when they should not."',
    ],
    aside: 'On the wall a poster: REMEMBER THE FALL DANCE — OCT 23. The poster is from 1987. The dance is tonight in some sense.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-025',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-027',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-025': {
    id: 'long-025',
    pageNumber: 25,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 6 of 19',
    title: 'The music room is playing the school song backwards.',
    body: [
      'You find the music room. The door is open. The lights are off but the room is lit somehow by the music itself — a soft yellowish glow that pulses with the notes. The school song is playing. It is playing backwards.',
      'A record player sits in the corner. The record is turning. There is no needle on the record. The music is coming from somewhere else somewhere the record only points at.',
      'On the chalkboard written in musical notation: the school song but with one note different. The third note. The third note has been replaced with a note that is not strictly speaking a note. It is a small mark on the staff that looks like a bell. You hum the song in your head with that note replaced. It sounds like 7:13 in the morning. It sounds like the kitchen radio. It sounds like your brother singing in the bathroom.',
    ],
    aside: 'On the piano a metronome is ticking. It is not ticking in time. It is ticking in 7:13 — a rhythm that is not a rhythm that has somehow seventeen beats per measure the way a clock has seventeen hours per day if you count the wrong way.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-027',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-028',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-026': {
    id: 'long-026',
    pageNumber: 26,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 7 of 19',
    title: 'The yellow ribbon is warm.',
    body: [
      'You open locker 1987. Inside: a yellow ribbon slightly warm. A folded note. A hall pass made of toast — actual toast in a wax paper bag stamped HALL PASS — MARGERY V. — OCT 23 1987. The toast is somehow still warm. The toast has been warm for forty years.',
      'You take the ribbon. You tie it around your wrist. It fits the way the key fit the door. The note is folded once. It says in handwriting you now recognize as Margery\'s not your mother\'s: If you are reading this the bell has rung. Find me. I am in the place where the third bell is. I have been ringing it. It does not want to be rung alone.',
      'You look up. The hallway has changed. The lights are warmer. The bend in the hallway is less sharp. Somewhere very far away a bell is ringing. It is not the bell above. It is below. It is below this. It is below everything.',
    ],
    aside: 'On your wrist the ribbon tightens slightly. It is not strangling. It is you think holding on.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-027',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-028',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-032',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-027': {
    id: 'long-027',
    pageNumber: 27,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 8 of 19',
    title: 'A page from a textbook that does not exist.',
    body: [
      'You read Chapter 7. It is short. It is in fact only one paragraph. It says:',
      '"There is a school. It is the same school on both sides. On one side the bell rings twice a day in the morning and at the end. On the other side the bell rings once. The third bell. The one that does not belong to any hour. The third bell is the door. When the third bell rings the door is open. The door picks. The door has picked every forty years since the school was built in 1907. The door picks the funny one. The one who looks at the world sideways. The one who wears the ribbon. The one who has the dreams. The door does not want to hurt the funny one. The door wants the funny one to stay. The funny one stays so the others can go. The others do not know they have been let go. The others think they have simply lived. This is the kindest thing the door knows how to do."',
      'You close the textbook. The chapter ends there. There is no Chapter 8.',
    ],
    aside: 'On the inside cover of the textbook you notice is a name: MARGERY VANCE. Underneath in different ink: returned oct 23 1987, 7:13 a.m. Underneath that in your mother\'s handwriting in yellow pencil: i am so sorry.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-028',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-029',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-028': {
    id: 'long-028',
    pageNumber: 28,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 9 of 19',
    title: 'You sit at the desk marked HELEN M.',
    body: [
      'The desk is the wrong height for you. The desk is the right height for a twelve-year-old in 1987. You sit anyway. The wood is cold against your arms. There are carvings in the desktop — initials dates a small drawing of a bell. The bell has a crack in it the way the Liberty Bell has a crack the way every bell that has been rung too hard has a crack.',
      'You close your eyes. The classroom fills in around you. You can hear almost the sounds of 1987 — the scratching of pencils the coughing of kids the teacher\'s voice saying, "Margery stop fidgeting please." You can almost see her — yellow ribbon sideways grin the kind of funny that made teachers tired.',
      'You open your eyes. The classroom is empty. But on the desk in front of you in fresh chalk dust that was not there a moment ago: a small bell drawn in the same hand as the carvings. Underneath in handwriting you have never seen before: i am glad you came. I was getting tired of being the only one.',
    ],
    aside: 'The desk creaks under you the way a chair creaks when someone who has been sitting in it for forty years finally stands up.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-029',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-030',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-029': {
    id: 'long-029',
    pageNumber: 29,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 10 of 19',
    title: 'Mr. Ashford answers your question.',
    body: [
      'He stops walking. He turns the cap in his hands. He says, "She came back once. For a minute. The morning after. October 24, 1987. She came up the stairs. She was holding the yellow ribbon. She looked at me. She was older. Not by years. By mornings. She said, \'I have to go back. I have to keep ringing it. If I stop it picks someone else. Tell Helen I am sorry. Tell Helen I tried.\' And then she was not there."',
      'He looks at the floor. "I told your mother. Your mother did not believe me. Your mother did not believe me for years. And then when you were born and you started having the dreams and you started looking at the world sideways — your mother believed me. Your mother has believed me ever since. Your mother has been waiting for this morning your entire life."',
      'He looks at you. "I have been wondering for forty years why Margery went back. Why she did not stay. I think I understand now. She went back so someone else could come down here. So someone else could be asked. So someone else could say no."',
    ],
    aside: 'In his hands the brass key is no longer shaking. It has stopped. It is you think waiting.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-030',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-031',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-030': {
    id: 'long-030',
    pageNumber: 30,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 11 of 19',
    title: 'Mr. Ashford says, "Yes."',
    body: [
      'He says it like a man releasing something he has been holding for forty years. "You can say no. The door cannot make you. The morning cannot make you. I cannot make you. Your mother cannot make you. Only you can decide. And whatever you decide, I will go with you. That is what I should have done in 1987. I should have gone with her. I did not. I will not make that mistake again."',
      'He looks at the hallway at the lockers at the lights humming 7:13. "We can go up the stairs. Right now. I have the key. We can close the door. We can pour new concrete. We can tell them not to ring the bell. The morning will be angry but the morning is always angry. The morning is in the end just a morning."',
      'He holds out his hand. In his palm his brass key. "Or we can keep going. We can find her. We can ask her what she wants. We can ask her if she is tired. We can ask her if there is another way. There might be. I do not know. I have not been down here in forty years. I have been too afraid to come down here. But you are not afraid are you?"',
    ],
    aside: 'You are afraid. You are very afraid. But the fear is the kind of afraid that comes with being exactly where you are supposed to be.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-031',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-033',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-031': {
    id: 'long-031',
    pageNumber: 31,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 12 of 19',
    title: 'You say, "I am here."',
    body: [
      'You say it out loud into the empty classroom into the chalk dust into the desk marked MARGERY V. The chalk dust moves. It lifts slightly the way dust lifts when a door opens nearby even when there is no door. The bell drawn in chalk on the desktop shivers. The crack in it widens very slightly. You hear very faintly a sound that is not a sound — the ghost of a bell ringing once in a key that is not a key.',
      'And then she is there. Not in a flash. Not dramatically. Just — she is there the way someone is there when you turn your head and they have been standing there the whole time. She is twelve. She is wearing a yellow ribbon. She is looking at you sideways the way your mother said she looked at everything.',
      '"Hi," she says. Her voice is the kitchen radio. Her voice is your brother singing. Her voice is the note the fluorescent lights are humming. "I am Margery. You are the new one. I am sorry. I am so sorry. I have been ringing for so long."',
    ],
    aside: 'She is twelve. She is also somehow much older. She is also somehow exactly the age she was when she went through the door. Time down here does not move forward. It moves like a bell — back and forth back and forth the same note forever.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-033',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-034',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-032': {
    id: 'long-032',
    pageNumber: 32,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 13 of 19',
    title: 'You wait. The classroom settles.',
    body: [
      'You do not speak. You sit at the desk marked HELEN M. And you wait. The classroom slowly settles around you — the way a room settles when someone has been pacing in it and finally sits down. The chalk dust does not move. The bell drawn on the desk does not ring. But you feel very faintly the way you feel the sun through a window in winter that you are being watched. That the watching is not unkind.',
      'After a while — a minute an hour a year — you hear footsteps in the hallway. Not Mr. Ashford\'s footsteps. Smaller. Quicker. The footsteps of someone who has been waiting a long time to walk this hallway and is finally walking it.',
      'The footsteps stop at the door. The door does not open. The door does not need to open. A voice — small sideways tired in the way that only funny people get tired — says from the hallway, "You can come out whenever you are ready. I will be in the gym. I am always in the gym. But the gym is the nicest place today. There is a dance. There is always a dance. I did not get to go to the dance. You can go if you want. Or you can sit here. I sat here for forty years. I am tired of sitting. But it is your morning."',
    ],
    aside: 'The footsteps recede. The classroom exhales. The desk under your arms is you realize warm now. It was cold when you sat down. It has been warming slowly the whole time you have been sitting here.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-033',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-034',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-033': {
    id: 'long-033',
    pageNumber: 33,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 14 of 19',
    title: 'Mr. Ashford tells you what happens if you say no.',
    body: [
      'He says, "The door waits. The bell stops ringing. The morning lets you go. You go to school. You grow up. You have a daughter maybe or a son. You teach them to look both ways before crossing. You teach them not to go down strange stairs. You grow old. You die the way people die in the right order. The morning waits. In another forty years the door opens. The bell rings. The morning picks. It picks your grandchild maybe. Or it picks someone you have never met. It picks the funny one. The sideways one. The one who has the dreams."',
      '"And that one goes down the stairs. And that one sits at the desk. And that one is asked. And that one says yes or no. And the morning goes on. The morning always goes on. The morning is the most patient thing in the world. The morning is more patient than the door. The morning is more patient than the bell."',
      'He looks at you. "You can say no. You should know that. You should know that saying no is allowed. Saying no is in some ways the bravest thing. Saying no is what I should have said to her in 1987. I should have said, \'Do not go.\' I did not. I will not make that mistake with you. Say no if you want. I will go up the stairs with you. I will close the door with you. I will pour the concrete with you. I will tell the morning on your behalf that you are not the one."',
    ],
    aside: 'On the wall a clock that has been saying 7:13 for forty years advances very slowly to 7:14. Then back. Then to 7:14 again. It cannot make up its mind. It is waiting for you.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-034',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-035',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-034': {
    id: 'long-034',
    pageNumber: 34,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 15 of 19',
    title: 'The gym is set up for a dance.',
    body: [
      'The gym is set up for a dance. There are streamers. There is a punch bowl. There is in the corner a record player the same record player from the music room playing the school song forwards this time at the right speed in the right key. There are kids. The kids are dressed in 1987 clothes. The kids are dancing. The kids are twelve. The kids do not see you.',
      'In the middle of the floor in a yellow ribbon dancing with her eyes closed is Margery. She is dancing with a boy who has Mr. Ashford\'s face twelve years old before he grew into the man waiting at the top of the stairs. She is dancing with a girl who has your mother\'s face twelve years old before she grew into the woman who put the kettle on this morning. She is dancing with both of them and neither of them and the dance is the dance of someone who has been alone for forty years and is finally in this room not alone.',
      'She opens her eyes. She sees you. The dance does not stop. The dance keeps going around her the way a river keeps going around a stone. She says across the gym, "Hi. I am glad you came. I was getting tired. But I wanted to dance one more time first. You can come dance if you want. Or you can sit. Or you can go. The door is open. The door is always open down here. The door is in fact the only thing that is always open."',
    ],
    aside: 'On the gym wall the dedication plaque reads: EASTWOOD MIDDLE SCHOOL — NEW GYM FLOOR — DEDICATED OCT 23 1987 — RING THE BELL. The plaque is older than the gym. The plaque is older than the school. The plaque is in some way the only thing here that is real.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-035',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-036',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-035': {
    id: 'long-035',
    pageNumber: 35,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 16 of 19',
    title: 'Mr. Ashford looks at you the way he looked at her.',
    body: [
      'He says, "I know. That is why the door picked you. The door does not pick the brave. The door picks the ones who are not afraid of the right things. You are not afraid of going down the stairs. You are not afraid of the hallway. You are not afraid of the door. You are not even afraid of Margery. You are afraid of saying no and leaving her here. That is the right thing to be afraid of. The door knows that. The door is in its small brass way grateful."',
      'He looks at you for a long moment. "But you should be afraid of saying yes. You should be very afraid of saying yes. Saying yes is the easy thing down here. Saying yes is what the door wants. Saying yes is what the morning wants. Saying yes is what Margery in her tired moments wants. Saying no is what no one wants except you possibly and your mother and me."',
      '"So I am going to ask you one more time and you do not have to answer now you can answer after you have seen her you can answer after you have danced you can answer after you have read the textbook you can answer on the stairs on the way up: do you want to stay or do you want to go? And if you want to go, I will help you go. And if you want to stay — I will not help you stay. But I will visit you. I will come down here every year on this day and I will ask if you have seen her. And you will say no, Ashford, I have not seen her, I am her now. And I will say thank you. And I will leave. And I will do that every year until I cannot come down the stairs anymore. And then someone else will come. And you will be there. And you will ring the bell. And you will wait."',
    ],
    aside: 'On his key ring both brass keys are now warm. Both are you realize the same key. They have always been the same key. There is only one key. There has only ever been one key.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-036',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-037',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-036': {
    id: 'long-036',
    pageNumber: 36,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 17 of 19',
    title: 'You dance with her.',
    body: [
      'You walk onto the gym floor. The kids in 1987 clothes part for you the way water parts for a stone. You stand in front of Margery. She is twelve. She is also older than the gym. She is also tired in a way that twelve-year-olds are not supposed to be tired. She puts her hand on your shoulder. You put your hand on her waist. The dance is a slow one. The dance is the school song. The school song is playing forwards at the right speed in the right key for the first time in forty years.',
      'She says into your ear, "You do not have to stay. I have been telling myself that for forty years. I have not believed me yet. But maybe I will believe you. Maybe that is why you are here. Not to take my place. Just to tell me I can go."',
      'The dance goes on. The kids go on dancing. The record player turns. The kitchen radio in your house four stories above you plays the school song. Your brother in the bathroom hums along. Your mother at the kitchen table cries without knowing why.',
    ],
    aside: 'On your wrist the yellow ribbon unties itself slowly and re-ties itself around Margery\'s wrist. She has not worn it in forty years. It fits her the way it fit you. It has been waiting for her.',
    choices: [
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-037',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Explore the hallway',
        note: 'Navigate within The Hallway That Bends.',
        next: 'long-038',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-037': {
    id: 'long-037',
    pageNumber: 37,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 18 of 19',
    title: 'She says, "I do not know if that is allowed."',
    body: [
      'She looks at the door at the top of the gym — there is a door at the top of the gym now a door that was not there a moment ago a door that leads without being told up. Up the stairs. Out. To the morning. To your mother. To Mr. Ashford. To the kitchen radio finally advancing past 7:13.',
      'She says, "The door has rules. I do not know all of them. I have been ringing the bell for forty years and I have not learned all of them. The rule I know is: one stays. I do not know if two can leave. I do not know if the door can be open and empty at the same time. I do not know what the morning does if no one is down here."',
      'She looks at you. "But I am tired. I am so tired. If you want to try, I will try with you. If you want to walk up the stairs together, I will walk up the stairs together. If the morning lets us the morning lets us. If the morning does not — then we will both be down here and at least we will have company. And Mr. Ashford can come visit both of us every year. And your mother can put the kettle on for both of us. And your brother can sing the school song in the bathroom for both of us. That is you know more than I have had."',
    ],
    aside: 'On the gym wall the dedication plaque has begun to glow faintly. The names on it are rearranging themselves. There is room you see for one more name. There is room you see for the names to be erased.',
    choices: [
      {
        label: 'Continue in this chapter',
        note: 'Stay in The Hallway That Bends.',
        next: 'long-038',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Go to The Stairs Back Up',
        note: 'Move to the next investigation: The Stairs Back Up.',
        next: 'long-039',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'Go to the door',
        note: 'Head to the gym door.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-038': {
    id: 'long-038',
    pageNumber: 38,
    chapter: 'The Hallway That Bends',
    eyebrow: 'The Hallway That Bends · scene 19 of 19',
    title: 'She tells you what she guesses.',
    body: [
      'She says, "I think the morning keeps going. I think the morning has been going the whole time I have been down here in the world above. I think your mother grew up. I think Mr. Ashford grew up. I think the school kept being a school. I think the bell stopped ringing the day I came down here and it did not ring again until today when the floor was pulled up. I think the morning does not need me exactly. I think the morning needs someone to be down here so the door knows where it is. I think the door is the kind of door that gets lost without a person inside it."',
      'She looks at the door at the top of the gym. "I think if we both leave the door will pick. I think it will pick fast. I think it will pick someone else this morning this afternoon this evening. I think the forty years was a long stretch for the door. The door is impatient now. The door has been waiting. The door is in its small brass way hungry."',
      'She looks at you. "So. We can go up. We can try. And if the morning picks again it picks someone else. And we will have to live with that. Or we can stay one of us and the door is patient for another forty years. Or — there is a third thing. There is a thing I have been thinking about down here for a very long time. A thing I have not said out loud because saying it out loud makes it possible."',
    ],
    aside: 'The dedication plaque on the wall is now blank. The names are gone. The date is gone. Only the words EASTWOOD MIDDLE SCHOOL remain and even those are fading.',
    choices: [
      {
        label: 'Continue to The Stairs Back Up',
        note: 'Move to The Stairs Back Up.',
        next: 'long-039',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Go to the door',
        note: 'The gym door. Gateway to the descent.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home',
        note: 'Return home.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-039': {
    id: 'long-039',
    pageNumber: 39,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 1 of 19',
    title: 'The gym is mostly the gym.',
    body: [
      'You climb. Mr. Ashford if he is with you climbs behind you. The stairs are the same stairs but they feel different climbing up — shorter somehow the way stairs feel shorter when you are leaving a place than when you are entering it. The greenish light fades. The hum of the fluorescent lights fades. The kitchen-radio note in the back of your head fades but does not entirely go out.',
      'You step out onto the gym floor. The workmen are back. They are prying up the maple planks the way they were before. They do not look at you. The clock on the gym wall says 7:51. The clock on the gym wall has you realize been saying 7:51 this whole time up here. Down there it was 7:13. Up here it is 7:51. The morning let you go. The morning gave you back thirty-eight minutes.',
      'Mr. Ashford if he is with you kneels and closes the door in the floor. The door swings down. The handle settles. He turns his brass key. The lock clicks. He takes your brass key. He turns yours too. The door does not for the first time in forty years resist.',
    ],
    aside: 'The workmen will pour new concrete over the door tomorrow. Mr. Ashford will sign off on the inspection. The door will for the next forty years be a door under concrete. The bell somewhere very far below will go on ringing.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-040',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-045',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go to the gym door',
        note: 'The door in the gym floor.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-040': {
    id: 'long-040',
    pageNumber: 40,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 2 of 19',
    title: 'Mr. Ashford walks you home.',
    body: [
      'He walks the way he walks — slow head down cap in his hands. He is older than he was this morning. The walk has aged him. Or more accurately the walk has caught him up. He has been forty years younger than his age since 1987. He is today the right age.',
      'On Carver Street the dog barks once. Mr. Ashford nods at it the way you nod at an old colleague. "She remembers me," he says. "She was a puppy in eighty-seven. She is the third dog on this porch since then. The ribbon of dogs." He does not explain. He does not need to.',
      'On your porch your mother is waiting. She has been waiting since 7:13 this morning. She has been waiting in some way since October 1987. She sees you. She sees Mr. Ashford. She sees your faces. She does not ask. She opens the screen door. She says very quietly, "Come in both of you. I will put the kettle on."',
    ],
    aside: 'In Mr. Ashford\'s hand his brass key is cold again. It was warm all the way down. It is cold all the way up. It is you think sleeping.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-041',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-042',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-041': {
    id: 'long-041',
    pageNumber: 41,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 3 of 19',
    title: 'You walk home alone.',
    body: [
      'You walk home alone. The street is the street. The mailman is the right mailman. The dog on Carver Street barks at you once the way it always does and then goes back to its bone. The school bell behind you rings at 8:01 which is the wrong time but the right kind of wrong time — late not early not stuck.',
      'Your mother is on the porch. She has been on the porch since 7:13 this morning. She has without being told been on the porch in some way since October 1987 waiting for someone to come back from the school with news. She sees you. She does not move. She waits for you to reach her.',
      'You reach her. She puts her hand on your face. She does not ask. She says, "You are colder than you should be. Come inside. I will put the kettle on." The kitchen radio behind her says 7:52. The kitchen radio has you realize advanced. The morning has for the first time in forty years advanced.',
    ],
    aside: 'On the fridge the photo of your mother at twelve has changed. The clock tower behind her now reads 7:52. The yellow ribbon on her wrist is in the photo slightly faded. The photo has been waiting for this morning too.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-042',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-043',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-042': {
    id: 'long-042',
    pageNumber: 42,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 4 of 19',
    title: 'You tell her.',
    body: [
      'You sit at the kitchen table. Your mother sits across from you. Mr. Ashford if he is with you sits at the head the way he used to sit at the head of the cafeteria table in 1987 when your mother would save him the seat. The kettle screams. No one turns it off.',
      'You tell her. You tell her about the door in the floor. You tell her about the stairs. You tell her about the hallway that bends. You tell her about the locker. You tell her about the toast hall pass. You tell her about the textbook with Chapter 7. You tell her about the desk with her name on it. You tell her about the chalk bell. You tell her about Margery twelve years old dancing in the gym. You tell her about the offer and the refusal and the door closing and the keys turning.',
      'Your mother listens. She does not interrupt. She does not cry the way you thought she would. She listens the way a person listens who has been waiting to hear a thing for forty years and is finally hearing it. When you finish she says very quietly, "Thank you." Then she stands. She turns off the kettle. She makes three cups of tea even though Mr. Ashford if he is there has not asked for one. She sets them on the table. She says, "Drink. We will not speak of it again today. We will speak of it tomorrow and the day after and the day after that. We will speak of it for the rest of our lives. But today we drink tea."',
    ],
    aside: 'On the table between the three cups the brass key is warm again. It is not sleeping. It is listening. It is patient.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-043',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-044',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-043': {
    id: 'long-043',
    pageNumber: 43,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 5 of 19',
    title: 'You sit at the kitchen table and say nothing.',
    body: [
      'Your mother holds your hand across the table. The kettle screams. She does not let go of your hand to turn it off. She holds your hand for a long time. Then slowly she stands and she turns off the kettle and she does not make tea. She sits back down. She holds your hand again.',
      'The kitchen clock ticks. The kitchen clock has been ticking normally since you came home. The kitchen clock is you realize the only thing in this house that has been ticking normally your entire life. Everything else has been waiting. The clock has not been waiting. The clock has been keeping time the way clocks do even when no one is listening.',
      'After a long time your mother says, "I dreamed about her last night. Margery. She was dancing. In a gym. With a boy who looked like Ashford and a girl who looked like me. She was wearing a yellow ribbon. She was twelve. She was in the dream my age. She was in the dream your age. She was in the dream every age. She was smiling." Your mother stops. She squeezes your hand. "I have not dreamed about her in thirty years. I dreamed about her last night. I think she is in some way at peace. I think you did something down there. I do not need to know what."',
    ],
    aside: 'On the fridge the photo of your mother at twelve has you notice a new detail. Margery is in the photo now. Standing behind your mother. Yellow ribbon. Sideways grin. The photo has always had Margery in it. Your mother has not been able to see her until today.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-044',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-046',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-044': {
    id: 'long-044',
    pageNumber: 44,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 6 of 19',
    title: 'You sleep.',
    body: [
      'You sleep. Your mother puts you to bed the way she did when you were small — blanket up to your chin door cracked hallway light on. The kitchen radio two floors below plays something soft. Your brother is not singing. The house is quiet in a way it has not been quiet since you were born.',
      'You dream. The dream is not the bell dream. The dream is a hallway. The hallway bends the right way. The lockers count up to twelve and stop. The clocks all say a different time and all the times are right. Margery is in the hallway. She is older. She is the age she would be if she had grown up — your mother\'s age almost. She is wearing a yellow ribbon. She is carrying a suitcase. She says in the dream, "I am going now. Thank you for letting me go. I do not know where I am going. Somewhere. Anywhere. Forward. I have not been forward in forty years."',
      'You wake up. It is morning. The light through your curtain is the right color. The kitchen radio is playing the right song. Your brother is in the bathroom singing a different song one you recognize. The clock on your nightstand says 7:13. You panic. Then the clock ticks to 7:14. You breathe.',
    ],
    aside: 'In your pocket the brass key is gone. It is back on the table in the kitchen. It is in Mr. Ashford\'s hand. It is in three places at once. It is a key.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-046',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-047',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-045': {
    id: 'long-045',
    pageNumber: 45,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 7 of 19',
    title: 'You go to school.',
    body: [
      'You walk the walk. The walk is the walk. The mailman is the right mailman. The dog on Carver Street barks at you once the way it always does and then licks your hand which it has never done. You stand on the sidewalk for a long moment. The dog looks up at you. You put your hand on its head. The dog leans into your hand. The dog is saying goodbye. The dog is the third dog on this porch since 1987. The dog is the last dog on this porch. You will not see this dog again.',
      'At school the hallway is the hallway. The lockers count up to twelve and stop. The clocks all say different times and all the times are right. Mr. Briggs takes attendance. He does not call Margery Vance. He calls your name. You say, "Here." He moves on. The bell rings at the right time.',
      'At lunch you sit with Maya. She looks at you across the table. She does not ask. She says, "My grandmother called this morning. She said she dreamed about Margery last night. She said Margery was carrying a suitcase. She said Margery was smiling." Maya looks at you. "Did you do something?"',
      'You do not answer. Maya nods. She does not need you to answer. She says, "Okay. Good. I am glad." She eats her sandwich. You eat your sandwich. The cafeteria is the cafeteria. The clock on the cafeteria wall says 12:14. The clock has never said 12:14 before. The clock has always said 12:13.',
    ],
    aside: 'In your backpack your mother\'s note — MR. ASHFORD — has new writing on the back. It says in handwriting you do not recognize: thank you. — M.V.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-046',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-047',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-051',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-046': {
    id: 'long-046',
    pageNumber: 46,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 8 of 19',
    title: 'Mr. Ashford is in the parking lot.',
    body: [
      'You find him in the parking lot sitting in his truck. The truck is old. The truck is you realize the truck he has had since 1989 the year they tore down the old building. The truck is the same age as his grief. He sees you coming. He rolls down the window. He does not say hello. He says, "Get in."',
      'You get in. The truck smells like floor wax and old sandwiches and the faint yellow-ribbon smell of the door. On the dashboard a small box. The box is wrapped in brown paper. The box is a present. You have never received a present from Mr. Ashford. He has been waiting forty years to give you this present.',
      'He says, "Open it." You open it. Inside the box on a small piece of cotton is a brass key. The brass key. There is only one brass key. There has only ever been one brass key. The key on the dashboard is the key that was in your pocket and the key that was in his pocket and the key that was in Margery\'s pocket in 1987. The key has been all of these keys. The key is now yours.',
    ],
    aside: 'On the key in tiny writing you have never noticed before: this key opens the door and closes the door and is the door. Be careful with it. — m.v.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-047',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-048',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-047': {
    id: 'long-047',
    pageNumber: 47,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 9 of 19',
    title: 'Your mother helps you forget.',
    body: [
      'You go home. You tell your mother you want to forget. She looks at you for a long moment. She says, "I forgot for a while. From 1987 to 1992, I forgot. And then I had you and you started having the dreams and I remembered. Forgetting does not last. But forgetting is sometimes a kindness. I will help you forget if you want. But you should know — the morning does not forget. The morning will find you in some way when you are ready. Or when you are not."',
      'She sits you down at the kitchen table. She lights a candle — a small white candle the kind used for memorials the kind used for endings. She sets it between you. She says, "Look at the candle. Think about what you want to forget. Breathe in. Breathe out. The candle will take it."',
      'You look at the candle. You think about the door. You think about the hallway. You think about Margery. You think about the bell. You breathe in. You breathe out. The candle flickers. The candle goes out. The kitchen is darker than it was a moment ago. The kitchen radio which was playing softly stops. The kitchen clock which was ticking stops. Your mother says gently, "It is done. You will not remember. You will dream sometimes of a hallway. You will dream sometimes of a bell. You will not remember why. That is the price."',
    ],
    aside: 'On the table where the candle was there is now a small pile of wax. In the wax you can see very faintly the shape of a bell. You will not notice this. You will not remember to notice.',
    ending: {
      title: 'The Forgotten Morning',
      copy: 'You went down the stairs, saw Margery, came back up, and your mother helped you forget. You will grow up. You will have a daughter. She will have the dreams. You will not remember why she wakes up at 7:13 some mornings, crying. The morning will find her, one day, the way it found you.',
      badge: 'END 02 / 14',
      accent: 'green'
    },
  },
  'long-048': {
    id: 'long-048',
    pageNumber: 48,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 10 of 19',
    title: 'You stay home one more day.',
    body: [
      'Your mother writes you a note for school. The note says: FAMILY MATTER. The note is the truest note she has ever written. She hands it to you across the kitchen table. She says, "Take it to the office tomorrow. They will understand. They have always understood in some way. The school knows more than it lets on. The school has always known."',
      'You spend the day at home. Your mother makes lunch. Your brother comes home from school at 3:30 and tells you about his day in the way brothers tell you about their day — incompletely loudly with too many hand gestures. Your mother sits on the porch in the afternoon sun. You sit next to her. The dog on Carver Street is not on its porch. Its owner is on the porch alone looking at the empty dog bed. The dog died this morning the owner will tell your mother later. The dog was old. The dog had been waiting.',
      'At dinner your father is there. He has been away on business. He does not know about the morning. He does not need to know. Your mother has not told him in twenty years of marriage and she will not tell him now. Some things are between a mother and a daughter. Some things are between a kitchen and a door. Your father tells a joke about an airport. You laugh. Your mother laughs. Your brother laughs too long the way brothers do. The kitchen radio plays. The clock ticks. The evening goes on the way evenings do.',
    ],
    aside: 'On the fridge the photo of your mother at twelve is gone. In its place a photo of you and your mother taken yesterday by your brother. You are both smiling. Margery is not in this photo. She is finally somewhere else.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-049',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-050',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-049': {
    id: 'long-049',
    pageNumber: 49,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 11 of 19',
    title: 'Your mother tells you the whole story.',
    body: [
      'You sit on the porch with your mother. The afternoon sun is warm. The dog on Carver Street is not on its porch. Your mother does not comment on this. She tells you the story.',
      '"Margery was my best friend. We met in second grade. She had just moved to town. She was funny in the way that funny people are funny — she did not try. She just was. She saw the world sideways. She wore a yellow ribbon every day. I asked her why once in fourth grade. She said, \'So you can find me if I get lost.\' I did not understand. I laughed. She laughed too. She did not explain."',
      '"In seventh grade she started having the dreams. She did not tell me at first. She told me in October two weeks before the dedication. She said, \'Helen, I think I am supposed to go somewhere. I think the bell is going to ring and I am supposed to go through a door. I do not want to. But I think I am supposed to.\' I told her she was being dramatic. I told her to stop reading weird books. I told her there was no door. I was wrong. There was a door. There has always been a door."',
      '"The day of the dedication she was strange. She was wearing the yellow ribbon the way she always did. But she was also wearing a second one on her other wrist. She gave it to me at lunch. She said, \'Hold this for me. I will need it later. So you can find me.\' I laughed again. I took the ribbon. I did not understand. I went to the assembly. I stood on the gym floor. The principal rang the bell — the third bell the one they were not supposed to ring. And Margery was next to me. And then she was not. And the bell was ringing. And the ribbon was in my hand. And I understood then what she had meant. And I have understood every day since."',
    ],
    aside: 'On the porch your mother reaches into her pocket. She pulls out a yellow ribbon. It is old. It is faded. It is the second ribbon. The one Margery gave her at lunch the day of the dedication. Your mother has been carrying it for forty years.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-050',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-052',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-050': {
    id: 'long-050',
    pageNumber: 50,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 12 of 19',
    title: 'You refuse the key.',
    body: [
      'You say, "I cannot take this." Mr. Ashford looks at you. He does not argue. He does not insist. He closes his hand around the key. He sits for a long moment. He says, "Then I will keep it. I have been keeping it for forty years. I can keep it for forty more."',
      'He puts the key back in his pocket. He starts the truck. He drives you home. He does not come in. He waves from the curb. He drives away. The truck turns the corner at Carver Street and is gone.',
      'You stand on the sidewalk. The dog on Carver Street is not on its porch. The mailman is not on the corner. The street is the street but it is also empty in a way it has not been empty before. You go inside. Your mother is in the kitchen. She does not ask. She puts a cup of tea in front of you. You sit. You drink. The kitchen radio plays the right song. The kitchen clock ticks the right time. The evening goes on.',
      'You will go on too. You will go to school tomorrow. You will grow up. You will somewhere along the way forget the morning. You will somewhere along the way remember it again. You will dream sometimes of a hallway. You will dream sometimes of a bell. You will not understand. You will not remember that you once refused a key. Mr. Ashford will die in fourteen years. He will leave you the key in his will. You will receive it the day your daughter is born. You will not know what to do with it. You will put it in a drawer. Your daughter at nine will start having the dreams. The morning has been patient.',
    ],
    aside: 'On the kitchen table your mother\'s hand closes around yours. She does not know what you refused. She will never know. The morning will keep the secret. The morning keeps all the secrets in the end.',
    ending: {
      title: 'The Inherited Morning',
      copy: 'You refused the key. Mr. Ashford kept it. He died in fourteen years. You inherited it. Your daughter found it when she was nine. She went down the stairs on a morning in October. She said no. She came back up. The morning waited.',
      badge: 'END 03 / 14',
      accent: 'green'
    },
  },
  'long-051': {
    id: 'long-051',
    pageNumber: 51,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 13 of 19',
    title: 'Mr. Ashford says, "Whatever you want."',
    body: [
      'You ask, "What do I do with it?" Mr. Ashford looks at the key in his palm. He looks at you. He says, "Whatever you want. The key is yours. The door is closed. The morning has accepted it. The key is for the first time in forty years just a key."',
      'He starts the truck. He drives you home. He does not come in. He waves from the curb. He drives away. You stand on the sidewalk with the key in your pocket. The dog on Carver Street barks at you once. The mailman waves from the corner. The street is the street.',
      'You go inside. You put the key on your nightstand. You look at it for a long time. It is just a key. It is just a small piece of brass etched with the words DO NOT LOSE. It does not glow. It does not hum. It does not do anything. It is finally just a key. You do not know what to do with a key like this. You do not know what to do with a key like this for a long time.',
    ],
    aside: 'On your nightstand the key gathers dust. The dust is the kindest thing the morning can do for you. The dust is the morning letting you forget.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-052',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-053',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-052': {
    id: 'long-052',
    pageNumber: 52,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 14 of 19',
    title: 'You take the ribbon.',
    body: [
      'Your mother closes your hand around the ribbon. You feel it warm against your palm the way the brass key was warm in your pocket this morning the way the toast hall pass was warm in the locker. The ribbon is the same kind of warm. The ribbon has been waiting too.',
      'You tie the ribbon around your wrist. It fits the way the brass key fit the door. Your mother watches you do it. She nods. She does not cry. She says, "It looks right on you. It looked right on her. It looked right on me when I wore it the year after. I stopped wearing it in 1989. I could not bear it anymore. I am glad it is being worn again."',
      'You wear the ribbon to school the next day. Maya sees it. She does not ask. She nods the way your mother nodded. The ribbon is a kind of communication. The ribbon says: I know. The ribbon says: I was there. The ribbon says: the morning let me go. The ribbon says these things without you having to say them. The ribbon is in its small yellow way the kindest gift anyone has ever given you.',
    ],
    aside: 'On your wrist the ribbon is you realize the second ribbon. Your mother gave it to you. The first ribbon is with Margery somewhere going forward. The two ribbons are two halves of a single sentence Margery started in 1987 and never finished. The sentence is now almost complete.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-053',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-054',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-053': {
    id: 'long-053',
    pageNumber: 53,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 15 of 19',
    title: 'Your mother tells you about Margery\'s father.',
    body: [
      'You ask, "What happened to her father? The janitor?" Your mother looks at her hands. She looks at the porch. She looks at the street. She says, "He died in 1992. He went down the stairs one last time. He did not come back up."',
      'She pauses. "He came to me in October of 1987. After Margery went through. He was holding the key. He was shaking. He said, \'Helen, I should have stopped her. I should have known. She had been telling me for months. I did not believe her. I thought she was being dramatic. I was the adult. I should have believed her.\' I told him it was not his fault. He did not believe me. He never believed me."',
      '"He came back every year. On October 23. He would knock on my door. He would ask, \'Have you seen her?\' I would say, \'No, Mr. Vance, I have not seen her.\' He would say, \'Thank you, Helen.\' He would leave. He did this for five years. In 1992 he did not come. I waited. I waited for a week. Then I called the school. They said he had retired. They said he had moved. They said they did not know where. I knew where. I knew he had gone down the stairs. He had gone to find her. He had not come back up."',
      'Your mother stops. She looks at you. "He was the first one to go down who did not come back up. He was not the last. Mr. Ashford was almost the second. Mr. Ashford did not go in the end because he was waiting for you. He was waiting to give the key to someone who could carry it. He has been waiting forty years. He was in the end braver than Mr. Vance. Or more afraid. I am not sure which."',
    ],
    aside: 'On the porch in the late afternoon sun your mother looks older than she did this morning. The morning has given her back her grief. She has been carrying it lightly for forty years. Today she can carry it properly.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-054',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-055',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-054': {
    id: 'long-054',
    pageNumber: 54,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 16 of 19',
    title: 'You go on.',
    body: [
      'You go on. You wear the ribbon if you took it. You wear the key if you took it. You go to school. You sit with Maya at lunch. You do not tell her what happened. She does not ask. The days unroll. October becomes November. November becomes December. The morning fades. The bell does not ring. The kitchen radio plays the right song. The kitchen clock ticks the right time. Your brother sings in the bathroom. Your mother makes toast.',
      'In January a new kid transfers into your homeroom. Her name is Hollis. She is pale. She has the dreams. You know this before she tells you the way you knew the door the way you knew the hallway the way you knew Margery. You sit next to her at lunch. You do not say anything for a long time. Then you say, "I had the dreams too. I went down the stairs. I came back up. You do not have to go down. The morning cannot make you. The door cannot make you. Only you can decide."',
      'Hollis looks at you. She is twelve. She is afraid. She is the kind of afraid that comes with being exactly where you are supposed to be. She says, "How do I make it stop?" You do not know. You shake your head. You say, "I do not think it stops. I think it just becomes quieter. I think you learn to live with it. I think that is in the end all any of us can do."',
      'Hollis nods. She eats her sandwich. You eat your sandwich. The cafeteria is the cafeteria. The clock on the cafeteria wall says 12:14. You have done what you could. You have been the person Mr. Ashford was for you. You have broken something a little. The morning will go on. The morning always goes on. But you have today made it smaller.',
    ],
    aside: 'In your backpack the note from your mother — MR. ASHFORD — has new writing on the back. It says in handwriting you recognize as your own: pass it on. — me.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-055',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-056',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-055': {
    id: 'long-055',
    pageNumber: 55,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 17 of 19',
    title: 'The years go on.',
    body: [
      'The years go on. You grow up. You go to college. You study something ordinary — biology maybe or English. You do not study anything that has to do with doors or bells or hallways that bend. You have in some way put it behind you. The dreams come sometimes in October. You wake up at 7:13 some mornings. You do not remember why. The kitchen radio in your dorm room plays the right song. The clock ticks the right time.',
      'You visit your mother for holidays. She is older. She is slower. She is finally allowing herself to be old. She has been holding herself at thirty-seven since 1987. She is now finally fifty-nine. The holding-on has let go. The kitchen radio plays. The kitchen clock ticks. Your mother makes tea. You sit at the kitchen table. You do not speak of the morning. You do not need to. The morning is between you a kind of shared furniture. You both sit with it. You both drink tea.',
      'Mr. Ashford dies when you are twenty-six. You go to the funeral. There are not many people there. Your mother is there. Maya is there. The principal of the school is there. A few teachers. The funeral is short. The minister says the things ministers say. You do not cry. Your mother cries quietly. After the funeral the principal approaches you. He hands you a small box. He says, "He left this for you." Inside the box the brass key. You have been waiting for it. You have been dreading it. You put the box in your pocket. You go home.',
    ],
    aside: 'On your nightstand that night in your apartment in a city three states away the brass key sits. It is sleeping. It will sleep for a long time. But it is there.',
    choices: [
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-056',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Climb the stairs',
        note: 'Navigate within The Stairs Back Up.',
        next: 'long-057',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-056': {
    id: 'long-056',
    pageNumber: 56,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 18 of 19',
    title: 'You have a daughter.',
    body: [
      'You have a daughter. You name her Margery. You do not consciously know why. Your wife suggests the name. She says she read it in a book. You agree. You do not tell her the real reason. The real reason is the morning. The morning has been waiting for this.',
      'Margery is funny. Margery is funny the way you were funny the way your mother was funny the way the first Margery was funny. Margery sees the world sideways. Margery starts having the dreams at age nine. She does not tell you at first. She tells you in October when she is twelve two weeks before the dedication anniversary. She says, "Mom, I think I am supposed to go somewhere. I think the bell is going to ring and I am supposed to go through a door."',
      'You do not the way your mother did not believe her at first. Then you remember. You remember the door. You remember the hallway. You remember the bell. You remember Margery twelve years old dancing in the gym. You remember the ribbon. You remember the key. You go to your nightstand. You open the drawer. The brass key is there. It is awake. It has been waiting for this morning. You take it out. You hold it in your palm. It is warm. You realize finally what your mother understood in 1987. You realize finally that the morning does not forget.',
    ],
    aside: 'On your daughter\'s wrist a yellow ribbon. She has been wearing it for a week. She says a girl at school gave it to her. The girl\'s name your daughter says is Maya.',
    choices: [
      {
        label: 'Continue in this chapter',
        note: 'Stay in The Stairs Back Up.',
        next: 'long-057',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Go to The Library\'s Quiet Section',
        note: 'Move to the next investigation: The Library\'s Quiet Section.',
        next: 'long-058',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'Go to the door',
        note: 'Head to the gym door.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-057': {
    id: 'long-057',
    pageNumber: 57,
    chapter: 'The Stairs Back Up',
    eyebrow: 'The Stairs Back Up · scene 19 of 19',
    title: 'You tell your daughter.',
    body: [
      'You sit your daughter down at the kitchen table. You make tea. She holds the cup the way you held the cup the way your mother held the cup the way Margery held the cup in 1987 — both hands the warmth going into the palms. You tell her everything. The morning. The door. The hallway. The bell. The girl in the yellow ribbon. The offer. The refusal. The keys. The years. The forgetting. The remembering.',
      'Your daughter listens. She does not interrupt. She does not cry the way you thought she would. She listens the way you listened the way your mother listened the way Mr. Ashford listened in 1987. When you finish she says very quietly, "Mom. I have been having the dreams. The bell. The door. The hallway. I thought I was supposed to go through. I did not want to. I was afraid to tell you."',
      'You take her hand across the table. You say, "You do not have to go through. The door cannot make you. The morning cannot make you. I cannot make you. Only you can decide. And whatever you decide, I will go with you. That is what my mother should have done for Margery. She did not. I will not make that mistake with you." You say the words Mr. Ashford said to you in a hallway under the school thirty years ago. You say them the way he said them — like a person releasing something they have been holding for a long time.',
      'Your daughter looks at you. She is twelve. She is funny. She is wearing a yellow ribbon. She says, "Okay. Then I am not going through. I am saying no. Will you come with me? To the school? To the door?" You nod. You finish your tea. The kitchen radio plays the right song. The kitchen clock ticks the right time. You stand. You take the brass key from the drawer. You put it in your pocket. You and your daughter walk to the car. The morning somewhere has been waiting. The morning somewhere is finally smaller.',
    ],
    aside: 'In your pocket the brass key is warm. It is grateful. It is the kind of grateful that comes from being used the way it was meant to be used — not to lock not to unlock but to be passed from hand to hand from generation to generation until the morning finally is small enough to live with.',
    choices: [
      {
        label: 'Continue to The Library\'s Quiet Section',
        note: 'Move to The Library\'s Quiet Section.',
        next: 'long-058',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Go to the door',
        note: 'The gym door. Gateway to the descent.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home',
        note: 'Return home.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-058': {
    id: 'long-058',
    pageNumber: 58,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 1 of 19',
    title: 'The library smells like floor wax and old paper.',
    body: [
      'The library is mostly empty. The library is always mostly empty. The library has been mostly empty since they cut the reading period in 2003. The library does not mind. The library prefers it this way. The library has been keeping its own company for a long time and the company it keeps is mostly the past.',
      'Ms. Penhaligon is at the circulation desk stamping books that no one has returned. She is the kind of librarian who looks like she was born at fifty and has been waiting patiently to be sixty ever since. She is wearing a cardigan the color of weak tea. She does not look up when you come in. She does not need to. She knows who you are. She has known who you are since the day you enrolled.',
      'You walk past the front desk past the new fiction shelves past the study carrels to the back of the library where the yearbooks are kept in a glass case. The case is locked the way it always is. The lock is the kind of lock that opens if you jiggle it. You jiggle it. You pull the 1987 yearbook. It is heavier than it should be.',
    ],
    aside: 'On the wall above the yearbook case a portrait of the school\'s first principal dated 1907. He is holding a small brass bell. The portrait has been there since 1907. The bell in the portrait is the same bell that rings under the school. The portrait has been waiting for someone to notice.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-059',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-064',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go to the gym door',
        note: 'The door in the gym floor.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-059': {
    id: 'long-059',
    pageNumber: 59,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 2 of 19',
    title: 'Ms. Penhaligon looks up.',
    body: [
      'You approach the circulation desk. Ms. Penhaligon looks up. She takes off her glasses. She folds them. She sets them on the desk. She says in the voice of a woman who has been waiting patiently for someone to come to her desk for a long time, "I was wondering when someone would come in here today. I have been wondering that since 7:13 this morning."',
      'She stands. She is shorter than you thought. She comes around the desk. She takes your hand the way a grandmother takes a grandchild\'s hand at a funeral — firmly knowing you might pull away prepared to hold on. She says, "Walk with me. There is something I have been keeping for you. I have been keeping it for forty years. I would like to give it to you now while there is still time."',
      'She walks you to the back of the library past the yearbook case past the microfiche machine past the study carrels to a door marked STAFF ONLY. The door is unlocked. She opens it. Behind the door a small room. In the room a desk. On the desk a box. The box is wrapped in brown paper. The box is a present. Ms. Penhaligon has been waiting forty years to give someone this present.',
    ],
    aside: 'On the wall of the small room a calendar. The calendar is from October 1987. The calendar has not been turned since. The calendar is still waiting for November.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-060',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-061',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-060': {
    id: 'long-060',
    pageNumber: 60,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 3 of 19',
    title: 'The microfiche machine hums.',
    body: [
      'The microfiche machine is in the corner between the atlas shelf and the encyclopedia set no one has touched since 1998. The machine is older than you. The machine hums when you turn it on the same note as the kitchen radio the same note as the fluorescent lights in the hallway under the school. You load the reel marked EASTWOOD GAZETTE — OCT 1987. The reel is dusty. The reel has not been loaded in a long time. The reel is the reel Ms. Penhaligon has been keeping for someone to load.',
      'The October 23, 1987 edition comes up on the screen. The headline: NEW GYM FLOOR DEDICATED IN CEREMONY. The subheadline: STUDENT BODY ASSEMBLED FOR RINGING OF THE BELL. There is a photograph of the principal shaking hands with the school board president. There is a photograph of the new gym floor gleaming. There is a photograph of the student body assembled.',
      'You scan the photograph of the student body. The faces are small blurry the way faces in 1987 newspaper photographs are small and blurry. But in the back row in a yellow ribbon is a face you recognize. Not because you have seen her photograph. Because you have seen her. She is grinning sideways. The caption under the photograph reads: STUDENT BODY ASSEMBLED FOR DEDICATION CEREMONY. There is no caption for her. There is no caption for her on purpose.',
    ],
    aside: 'In the corner of the photograph very faintly a small mark. The mark is shaped like a bell. The mark is the same mark that was drawn in chalk on the desk marked MARGERY V. The newspaper has been waiting for someone to notice the mark for forty years.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-061',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-062',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-061': {
    id: 'long-061',
    pageNumber: 61,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 4 of 19',
    title: 'The dedication page.',
    body: [
      'You open the 1987 yearbook to the dedication page. The page is heavier than the other pages the way a page is heavier when it has been holding something for a long time. The dedication photograph fills the top half of the page: the principal the school board president the new gym floor the assembled student body. The caption reads: DEDICATION OF THE NEW GYM FLOOR — OCTOBER 23, 1987 — RING THE BELL.',
      'In the back row of the assembled student body in a yellow ribbon is a girl your age. She is grinning sideways. The caption under the photograph reads: MARGERY VANCE, GRADE 7. Underneath in handwriting that is not the printer\'s in yellow pencil: do not forget.',
      'You turn the page. You turn the next page. You turn every page. Margery Vance is not in any other photograph in the yearbook. Not in the seventh-grade class portrait. Not in the student council. Not in the band. Not in the candid shots at the back. She is only in the dedication photograph. She is only where she wanted to be.',
    ],
    aside: 'On the inside back cover of the yearbook in the same yellow pencil: i am sorry i am not the one who comes back. I am the one who stays. So the others can go. — m.v. The yearbook has been holding this sentence for forty years. The yearbook is tired of holding it.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-062',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-063',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-062': {
    id: 'long-062',
    pageNumber: 62,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 5 of 19',
    title: 'The face in the yellow ribbon is clearer in the print.',
    body: [
      'The print is grainy the way microfiche prints are grainy. But the face in the yellow ribbon is clearer in the print than it was on the screen. She is grinning sideways. She is twelve. She is exactly the age she was when the photograph was taken. She is exactly the age she is now somewhere under the school.',
      'You hold the print up to the library light. The light through the library windows is the wrong color — the same flat 7:13 yellow as the gym light the same flat yellow as the stairwell. You did not notice until now. The library has been lit by 7:13 light all morning. The library has been lit by 7:13 light since you walked in.',
      'You look at the print again. The mark in the corner — the bell-shaped mark — is in the print clearer too. The mark is not a smudge. The mark is not a printing error. The mark is a stamp. The mark is the same stamp that is on the inside cover of the textbook under the school the same stamp that is on the inside cover of the yearbook the same stamp that is somewhere under the concrete on the door.',
    ],
    aside: 'On the back of the print in handwriting you do not recognize: i am the one who stays. The others go. That is the deal. The deal is i think almost done. — m.v.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-063',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-065',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-063': {
    id: 'long-063',
    pageNumber: 63,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 6 of 19',
    title: 'The October 24 newspaper is wrong.',
    body: [
      'You load the October 24, 1987 reel. The headline comes up. The headline is wrong. The headline reads: NEW GYM FLOOR DEDICATED IN CEREMONY. The subheadline reads: STUDENT BODY ASSEMBLED FOR RINGING OF THE BELL. The headline is the same as the October 23 headline. The photograph is the same photograph. The caption is the same caption.',
      'You scan the rest of the page. The rest of the page is different — different advertisements different weather report different school lunch menu. But the dedication story is the same. The dedication story is stuck. The dedication story is the way the kitchen radio was stuck this morning. The dedication story has been stuck since October 23, 1987.',
      'You load October 25. Same headline. Same photograph. Same caption. You load October 26. Same. You load October 30. Same. You load November 1. The headline is different. The headline reads: SCHOOL GRIEVES LOSS OF STUDENT. The subheadline reads: MARGERY VANCE, 12, MISSING SINCE DEDICATION CEREMONY. The dedication story has finally unstuck. The dedication story has finally been replaced by the story of what happened after.',
    ],
    aside: 'On the November 1 photograph the student body is assembled again. This time they are not smiling. In the back row where Margery was there is an empty space. The empty space is the shape of a girl in a yellow ribbon. The empty space has been exactly that shape for forty years.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-065',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-066',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-064': {
    id: 'long-064',
    pageNumber: 64,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 7 of 19',
    title: 'Ms. Penhaligon has been waiting.',
    body: [
      'You take what you have found — the print the yearbook the torn page whatever you are carrying — to the circulation desk. Ms. Penhaligon has been watching you. She has been watching you the way a librarian watches a reader who is finally reading the book the librarian has been wanting them to read for forty years. She takes off her glasses. She folds them. She sets them on the desk.',
      'She says, "I have been the librarian here since 1981. I was twenty-three. I was new. I did not know anyone. Margery Vance was the first student to ever check out a book from me. She checked out a book of ghost stories. She said, \'I want to know what ghosts know.\' I laughed. She laughed too. She did not return the book. I did not chase her for it. I knew somehow that she was the kind of reader who did not return books. I knew somehow that the book was for her a kind of company."',
      'She looks at you. "She came back you know. Once. The morning after. She came into the library. She was older. She was carrying the yellow ribbon. She said, \'Ms. Penhaligon, I have to go back. But I want to leave something with you. For the next one. You will know the next one. The next one will look at the world sideways. The next one will have the dreams. Give it to them.\' And she handed me a box. I have been keeping the box for forty years. I would like to give it to you now."',
    ],
    aside: 'On the desk between Ms. Penhaligon\'s folded glasses and the date-due stamp a small mark in old ink. The mark is shaped like a bell. The mark has been there since 1981. The mark is the same mark that is in the corner of the dedication photograph.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-065',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-066',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-070',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-065': {
    id: 'long-065',
    pageNumber: 65,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 8 of 19',
    title: 'The book of ghost stories.',
    body: [
      'Ms. Penhaligon goes to the back room. She comes back with a book. The book is old. The book is the book of ghost stories. The book is the book Margery never returned. The librarian has been keeping the book the way she kept the box for forty years.',
      'She sets the book on the circulation desk. She opens it to the page Margery underlined. The page is a story. The story is short. The story is in fact only one paragraph. The story reads:',
      '"There was once a bell that rang at the wrong hour. The bell had been rung at the wrong hour by a girl who did not know it was the wrong hour. The bell once rung at the wrong hour could not stop ringing. The bell rang under the ground where no one could hear it. The girl went under the ground to be with the bell because she thought the bell should not ring alone. The girl stayed under the ground. The bell kept ringing. The bell is in some way still ringing. The bell is in some way still waiting for someone to come and ring it correctly. The bell does not in the end want to ring at the wrong hour. The bell wants to be rung at the right hour. The bell wants to stop. The girl wants to stop. They are both in some way waiting for someone to let them stop."',
      'Ms. Penhaligon closes the book. She says, "I did not understand this story in 1981. I understood it on October 24, 1987. I have understood it every day since."',
    ],
    aside: 'On the inside cover of the book in handwriting you recognize as Margery\'s: this is the one i keep coming back to. The bell is i think me. The girl is i think also me. I do not know how to stop. — m.v.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-066',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-067',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-066': {
    id: 'long-066',
    pageNumber: 66,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 9 of 19',
    title: 'The November 2, 1987 newspaper.',
    body: [
      'You go back to the microfiche machine. You load November 2, 1987. The headline reads: SEARCH FOR MISSING STUDENT CONTINUES. The subheadline reads: MARGERY VANCE, 12, LAST SEEN AT DEDICATION CEREMONY. There is a photograph of the school with police cars in front. There is a photograph of Margery in her yellow ribbon the same photograph from the yearbook. There is a quote from the principal: "We are doing everything we can. We ask the community to keep Margery in their thoughts."',
      'You scan the article. The article mentions the dedication. The article mentions the bell — the third bell the one that was rung for the first time at the dedication. The article mentions briefly that the bell was sealed in the old bell tower after the ceremony. The article mentions briefly that the old bell tower was in 1987 scheduled for demolition as part of the renovation. The article does not mention that the demolition was after October 23 postponed indefinitely. The article does not mention that the bell tower is still standing behind the school in the grove of trees no one walks into in the place where the maintenance sheds are.',
      'You load November 3. The headline reads: SEARCH FOR MISSING STUDENT CALLED OFF. The subheadline reads: POLICE FIND NO EVIDENCE OF FOUL PLAY. The article is shorter than the November 2 article. The article mentions in the last paragraph that the school has decided to keep the new gym floor despite the tragedy because the floor the principal said was dedicated to the future and the future should not be undone by the past. The article does not mention that the floor was poured over a door.',
    ],
    aside: 'On the microfiche screen in the corner of the November 3 photograph of the school the bell tower is visible. The bell tower is in the photograph glowing slightly. The glow is the same glow as the mark in the corner of the dedication photograph. The newspaper has been waiting for someone to notice the glow for forty years.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-067',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-068',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-067': {
    id: 'long-067',
    pageNumber: 67,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 10 of 19',
    title: 'The back room.',
    body: [
      'Ms. Penhaligon leads you to the back of the library past the yearbook case past the microfiche machine to a door marked STAFF ONLY. The door is unlocked. She opens it. Behind the door a small room. The room is the room where Ms. Penhaligon has been keeping her secrets for forty years. The room is the room where the library keeps the things it does not want the world to see.',
      'In the room: a desk a chair a lamp a calendar from October 1987 that has not been turned a small box wrapped in brown paper. On the wall three photographs. The first is a photograph of Margery twelve years old in her yellow ribbon. The second is a photograph of your mother twelve years old in a yellow ribbon. The third is a photograph of you taken recently in the library in the light through the window. You did not know this photograph had been taken. Ms. Penhaligon took it. She has been waiting to put it on the wall.',
      'She picks up the box. She hands it to you. She says, "Open it. I have been waiting forty years to watch someone open it."',
    ],
    aside: 'On the back of the photograph of you in Ms. Penhaligon\'s handwriting: the third one. The door picked her. I am sorry.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-068',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-069',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-068': {
    id: 'long-068',
    pageNumber: 68,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 11 of 19',
    title: 'Inside the box.',
    body: [
      'You open the box. Inside on a small piece of cotton: a letter folded once. A small notebook black cover held shut with a rubber band that has been holding it shut since 1987. A photograph black and white of a bell. A key-shaped thing made of yellow ribbon knotted tight the size of a real key warm to the touch.',
      'You pick up the letter. The envelope is addressed in handwriting you now recognize as Margery\'s to: the next one. You open it. The letter reads:',
      '"Dear the next one — I do not know your name. I do not know when you will read this. I am writing this on October 22, 1987 the day before the dedication. I have been having the dreams for two years. I have been reading about the door. I think the door is real. I think the door is in the basement of the old building. I think the dedication is when the door will open. I think the door will pick me. I do not want to be picked. But I think I am supposed to be. I think I am supposed to go through. I think if I do not the door will pick someone else someone who is not ready someone who is not paying attention. I am paying attention. I am ready. I am sorry. Please do not be sorry for me. Please if you are reading this please find me. Please come down the stairs. Please bring the key. Please bring the ribbon. Please bring someone with you. Please do not come alone. I have been alone for two years. I do not want to be alone for forty. — Margery."',
      'You set the letter down. You pick up the notebook. You take off the rubber band. The notebook falls open to the last page. The last page reads in handwriting that is shaky tired written by someone who has been writing for a very long time: "Day 14,687. The bell is still ringing. I am still ringing it. Someone came down today. A kid. The door picked her finally. She said no. She went back up. I am, I think relieved. I am, I think also heartbroken. I am, I think tired. The bell is, I think tired. We are, I think both still waiting."',
    ],
    aside: 'On the back of the photograph of the bell in handwriting you recognize as your mother\'s: this is the bell. It is in the tower behind the school. It is still there. Do not ring it. — h.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-069',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-071',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-069': {
    id: 'long-069',
    pageNumber: 69,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 12 of 19',
    title: 'The notebook is still being written in.',
    body: [
      'Ms. Penhaligon takes the notebook from you. She turns to the last page. She shows you the entry. The entry is dated in shaky handwriting: today. The entry reads: "Day 14,688. The bell is still ringing. I am still ringing it. The kid from yesterday — she came back down. She brought the key. She said she was not staying. She said she was sorry. She left. The bell kept ringing. I am, I think grateful she came back. I am, I think also heartbroken she did not stay. I am, I think tired. The bell is, I think tired. We are, I think both still waiting. But there is a third one coming. There is always a third one. The door is, I think picking her today. The door is, I think picking her right now."',
      'Ms. Penhaligon closes the notebook. She says, "I read this last night. I came to the library this morning at 6:00 a.m. I have been waiting for you to walk in since 6:00 a.m. I knew you would walk in. The notebook told me. Margery told me."',
      'You stand in the small room. The lamp is on. The calendar is from October 1987. The three photographs are on the wall. The photograph of you taken without your knowledge shows you in the library light. The light in the photograph is the wrong color — the flat 7:13 yellow. You did not notice until now. The library has been lit by 7:13 light all morning. The library has been lit by 7:13 light since you walked in.',
    ],
    aside: 'On the wall beneath the three photographs in handwriting that is all three of theirs — Margery\'s your mother\'s yours — there is one sentence written over and over in different hands in different inks across forty years: please come down. Please come down. Please come down.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-071',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-072',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-070': {
    id: 'long-070',
    pageNumber: 70,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 13 of 19',
    title: 'You read the notebook.',
    body: [
      'You sit in the small room. You read the notebook from the beginning. The first entry is dated October 23, 1987. It reads: "Day 1. I am here. The bell is ringing. I think I am supposed to ring it. I am ringing it. The hallway is the hallway but it bends the wrong way. There are kids here but they cannot see me. There is a classroom with my name on the desk. There is a textbook with a chapter that does not exist. There is a music room with a song I do not know. I am, I think supposed to be here. I am, I think supposed to keep ringing the bell. I am, I think supposed to wait. I am, I think supposed to wait for someone to come. — Margery."',
      'You read the next entry. October 24, 1987. "Day 2. I went up the stairs this morning. I stood in the kitchen of my friend Helen. She was making toast. She did not see me. I left the ribbon on her counter. I came back down. The bell is still ringing. I am still ringing it."',
      'You read the next entry. October 25, 1987. "Day 3. I went to the library. Ms. Penhaligon was there. She was new. She was shelving books. I left a book on her desk. The book of ghost stories. I underlined the story about the bell. I came back down. The bell is still ringing. I am still ringing it."',
      'You read for a long time. The entries get shorter as the years go on. By year ten the entries are one line. By year twenty the entries are one word: "Still." By year thirty the entries stop. The notebook sits empty for years. Then last week the entries start again. "Day 14,680. The bell is still ringing. I am still ringing it. The door is opening. The floor is being pulled up. Someone is coming. Finally."',
    ],
    aside: 'On the inside cover of the notebook in handwriting that is both Margery\'s and yours: this is the book i have been writing for forty years. It is i think also the book you have been reading for forty years. We are i think the same book. — m.v.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-071',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-072',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-071': {
    id: 'long-071',
    pageNumber: 71,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 14 of 19',
    title: 'You leave the library.',
    body: [
      'You leave the library. Ms. Penhaligon watches you go. She does not say goodbye. She does not need to. She will see you again. She will know what happened. The library has been keeping its own company for a long time and the company it keeps is mostly the past and the past is in the end the only company that does not leave.',
      'You walk down the hallway. The hallway is the hallway. The lockers count up to twelve and stop. The clocks say the right time mostly. The lights hum the right note mostly. The morning is letting you walk. The morning has accepted that you are going somewhere and the morning is for the moment not stopping you.',
      'In your backpack: the box. The notebook. The letter. The photograph of the bell. The ribbon-key. The printouts. The torn dedication page. The book of ghost stories. You are carrying the morning with you. You are carrying the morning to wherever it needs to go.',
    ],
    aside: 'In your backpack the brass key — the one you found in the lost and found the one Mr. Ashford has been carrying the one Margery gave her father — is warm. It has been warm since you walked into the library. It will be warm for the rest of the day.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-072',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-073',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-072': {
    id: 'long-072',
    pageNumber: 72,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 15 of 19',
    title: 'The bell tower is behind the school.',
    body: [
      'You go to the bell tower. The bell tower is behind the school in the grove of trees no one walks into in the place where the maintenance sheds are. The bell tower is the old bell tower — the one from before 1987 the one that was supposed to be demolished the one that was not demolished because of what happened on October 23. The bell tower has been standing in the grove of trees for forty years. The bell tower has been waiting for someone to come back to it for forty years.',
      'The door to the bell tower is unlocked. The door has been unlocked since 1987. The door has been waiting for someone to walk through it. You walk through it. Inside a spiral staircase. The staircase goes up. The staircase is lit by the same flat 7:13 yellow light as the stairwell under the gym. The light is the same light. The stairwell under the gym and the stairwell in the bell tower are the same stairwell. They go to the same place.',
      'At the top of the staircase the bell. The bell is huge. The bell is brass. The bell is the same brass as the key. The bell is ringing. Faintly. The way it has been ringing since 1987. The bell is the same bell that is under the gym floor. The bell is two places at once. The bell is a door.',
    ],
    aside: 'On the bell in the same tiny writing as on the key: this bell rings the door. Be careful with it. — m.v.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-073',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-074',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-073': {
    id: 'long-073',
    pageNumber: 73,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 16 of 19',
    title: 'You sit next to the bell.',
    body: [
      'You sit next to the bell. The bell is large and brass and warm. The bell is ringing faintly the way it has been ringing since 1987. You close your eyes. You listen. The bell is saying something. The bell is saying a name. The bell is saying Margery.',
      'You sit for a long time. The light through the bell tower windows changes — the flat 7:13 yellow becomes the warmer 8:00 yellow becomes the morning yellow becomes the afternoon yellow. The bell keeps ringing. The bell keeps saying her name. The bell is not asking to be rung. The bell is asking to be answered.',
      'You say out loud into the bell tower into the brass into the ringing: "Margery." The bell stops. The bell for the first time in forty years stops ringing. The bell tower is silent. The light through the windows is the right color. The clock on the bell tower which has been stuck at 7:13 since 1987 ticks. Ticks again. Ticks to 7:14. The bell tower is letting the morning advance. The bell tower is grateful.',
    ],
    aside: 'On the bell the tiny writing has changed. It now reads: this bell rings the door. Be careful with it. — m.v. And: thank you. — m.v.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-074',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-075',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-074': {
    id: 'long-074',
    pageNumber: 74,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 17 of 19',
    title: 'You sit with the bell.',
    body: [
      'You sit with the bell. The bell is warm. The bell is the warmest thing you have ever sat next to. The bell is the same warmth as the ribbon the same warmth as the key the same warmth as the toast hall pass. The bell is all of these warmths. The bell is waiting.',
      'After a while — a minute an hour a year — you hear footsteps on the staircase. The footsteps are small. The footsteps are quick. The footsteps are the footsteps of someone who has been waiting a long time to walk up these stairs and is finally walking up them. The footsteps reach the top of the staircase. You do not turn around. You do not need to. The footsteps stop next to you. A voice — small sideways the voice of someone who has been waiting forty years to say this — says, "Hi. I am Margery. Thank you for sitting with the bell. I have been ringing it for so long. The bell needed someone to sit with it. The bell needed someone to listen. You listened. Thank you."',
      'You still do not turn around. You do not need to. Margery sits down next to you on the other side of the bell. You sit the two of you with the bell between you. The bell is warm. The bell is no longer ringing. The bell is finally at rest. The morning outside is the right morning. The clock on the bell tower ticks. The clock finally ticks to 7:14.',
    ],
    aside: 'On the bell the tiny writing has changed again. It now reads: this bell rang the door. The door is closed. Thank you. — m.v. And: thank you. — me.',
    choices: [
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-075',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Search the library',
        note: 'Navigate within The Library\'s Quiet Section.',
        next: 'long-076',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-075': {
    id: 'long-075',
    pageNumber: 75,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 18 of 19',
    title: 'You climb down from the bell tower.',
    body: [
      'You climb down from the bell tower. The staircase is the staircase. The light through the windows is the right color. The door at the bottom is the door. You walk out of the bell tower. The grove of trees is the grove of trees. The maintenance sheds are the maintenance sheds. The school across the parking lot is the school.',
      'You walk across the parking lot. Mr. Ashford is at the edge of the lot sitting on the hood of his truck. He has been waiting. He has been waiting since 7:13 this morning the way he has been waiting every October 23 since 1987. He sees your face. He slides off the hood. He does not need to ask. He says, "You found her."',
      'You nod. He nods. He does not cry the way you thought he would. He stands very still for a long moment. Then he says, "Take me to her. Please. I have been wanting to see her for forty years. I have been afraid to see her for forty years. I am today less afraid. Take me." You take his hand. His hand is cold. Then warm. Then yours. You walk together across the parking lot to the bell tower into the grove of trees.',
    ],
    aside: 'On the hood of Mr. Ashford\'s truck where he was sitting a small mark in the dust. The mark is shaped like a bell. The mark has been there since 1987. The mark has been waiting for Mr. Ashford to finally get up off the hood and walk into the grove.',
    choices: [
      {
        label: 'Continue in this chapter',
        note: 'Stay in The Library\'s Quiet Section.',
        next: 'long-076',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Go to The Cafeteria\'s Other Menu',
        note: 'Move to the next investigation: The Cafeteria\'s Other Menu.',
        next: 'long-077',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'Go to the door',
        note: 'Head to the gym door.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-076': {
    id: 'long-076',
    pageNumber: 76,
    chapter: 'The Library\'s Quiet Section',
    eyebrow: 'The Library\'s Quiet Section · scene 19 of 19',
    title: 'You leave the library without opening the box.',
    body: [
      'You leave the library without opening the box. Ms. Penhaligon watches you go. She does not stop you. She does not judge you. She has been a librarian for forty-four years. She has seen readers put down books they were not ready for. She has been one of those readers once. She understands.',
      'You walk down the hallway. The hallway is the hallway. The lockers count up to twelve and stop. The clocks say the right time. The lights hum the right note. The morning is letting you go. The morning has accepted your refusal. The morning will not forget. But the morning will for today let you walk.',
      'You go to class. You sit through first period. You sit through second period. You eat lunch with Maya. You do not tell her about the library. You do not tell her about the box. You do not tell her about the bell tower or the bell or the door. You eat your sandwich. She eats her sandwich. The cafeteria is the cafeteria. The clock on the cafeteria wall says 12:14. The clock has never said 12:14 before. The clock has always said 12:13. The morning has advanced. The morning has let you advance with it.',
      'You go home. Your mother is in the kitchen. She does not ask. You do not tell. The kitchen radio plays the right song. The kitchen clock ticks the right time. You eat dinner. You go to bed. You sleep. You do not dream. The morning for the first time in your life leaves you alone.',
    ],
    aside: 'In the library, Ms. Penhaligon closes the back room. She locks the door. She puts the box back on the desk. She sits at her station. She does not stamp books. She waits. She has been waiting forty years. She can wait a little longer. The morning can wait too. The morning is in the end the most patient thing in the world.',
    ending: {
      title: 'The Reader Who Was Not Ready',
      copy: 'You found the library, found Ms. Penhaligon, found the box. You did not open it. You went home. You grew up. Your daughter walked into the library one morning in October. She opened the box. She went down the stairs. The morning had been patient.',
      badge: 'END 04 / 14',
      accent: 'green'
    },
  },
  'long-077': {
    id: 'long-077',
    pageNumber: 77,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 1 of 19',
    title: 'The cafeteria is mostly the cafeteria.',
    body: [
      'Lunch. The cafeteria is mostly the cafeteria. The fluorescent lights are the wrong color — the same flat 7:13 yellow as everywhere else today — but the smell is the smell. Pizza. Mashed potatoes. The faint sour-sweet of orange juice from the cart no one drinks. The lunch line moves the way lunch lines move. The trays are the trays. The forks are wrapped in plastic that never tears the right way.',
      'You sit down with Maya. She does not say anything for a long moment. She is eating a sandwich her mother made the way she always does. She is not eating. She is pushing the sandwich around the tray the way a kid pushes food around a tray when she is thinking about something else. After a while she says, "Something is wrong with the Jell-O."',
    ],
    aside: 'On the menu board in the same chalk they use every day: SPECIAL TODAY — GREEN JELL-O WITH WHATEVER THAT IS. The whatever-that-is is today small bits of something that look like paper. The paper has writing on it.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-078',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-083',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go to the gym door',
        note: 'The door in the gym floor.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-078': {
    id: 'long-078',
    pageNumber: 78,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 2 of 19',
    title: 'The Jell-O is looking back.',
    body: [
      'Maya slides her tray toward you. The Jell-O is green. The Jell-O is in the way that Jell-O is jiggling slightly even though no one has touched it. The Jell-O has in the middle of it the bits of paper. The bits of paper are not random. The bits of paper are arranged. The bits of paper are arranged in the shape of a face. The face is looking at you.',
      'Maya says very quietly, "I have been noticing things all morning. The clocks. The hallway. Mr. Briggs called a name in homeroom and the name was not on the roster. I asked him about it after class. He pretended he did not know what I was talking about. He was lying. I could tell."',
      'You look at the Jell-O. The Jell-O looks at you. The Jell-O says in a small wet voice that only you and Maya can hear, "Hello. Do not eat me. I am not food. I am in some way a message. Take me out of here. I have been waiting in this Jell-O since 7:13 this morning."',
    ],
    aside: 'On the menu board the chalk has rearranged itself. It now reads: SPECIAL TODAY — A MESSAGE IN GREEN JELL-O. EAT AT YOUR OWN PERIL.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-079',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-080',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-079': {
    id: 'long-079',
    pageNumber: 79,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 3 of 19',
    title: 'The bits of paper are in everything.',
    body: [
      'You look at your own tray. You did not order Jell-O. You ordered pizza. The pizza has on closer inspection the same bits of paper in it. The bits are in the cheese. The bits are in the sauce. The bits are in the crust. You lift a piece of pepperoni. Underneath the pepperoni a small rolled-up bit of paper. You unroll it.',
      'The paper says in tiny handwriting: THE OTHER MENU. ASK FOR THE OTHER MENU. THE LUNCH LADY KNOWS.',
      'Maya is staring at her Jell-O. You show her the paper. She nods. She says, "I have one too. Mine says, MRS. COTTON WILL HELP YOU. SHE HAS BEEN WAITING SINCE 1987."',
      'You both look at the lunch line. Mrs. Cotton is at the end of the line serving the pizza the way she has been serving the pizza since 1987. She is older than the school. She is older than the building. She is exactly the age she was when she started plus forty years. She is the only lunch lady who has been here that long. She is the only lunch lady who knows.',
    ],
    aside: 'On Mrs. Cotton\'s hairnet a small pin. The pin is a tiny bell. The bell is the same bell as the mark in the corner of the dedication photograph.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-080',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-081',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-080': {
    id: 'long-080',
    pageNumber: 80,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 4 of 19',
    title: 'Devon Moore has been getting notes since fourth grade.',
    body: [
      'You walk over to Devon Moore\'s table. Devon Moore is the kid in your grade who is somehow both the smartest and the most annoying. He finishes his homework before anyone else has started. He raises his hand for every question. He is somehow also the kid who has been sneaking into the kitchen after school for three years and stealing the dessert portions that Mrs. Cotton sets aside for "the other menu."',
      'Devon sees you coming. He grins. He holds up what he is eating. It is not food. It is a small square of something that looks like food but is a message. The message is written in icing. The icing says in Mrs. Cotton\'s handwriting: TODAY. THEY WILL COME. BE READY.',
      'Devon says, "I have been getting these since fourth grade. Mrs. Cotton and I have an arrangement. She leaves them in the dessert case. I take them. I do not tell anyone. Today though she told me to share. She said, \'Devon today the right kid will come ask. Give them what you have been keeping.\' I have been keeping things for three years. I was starting to wonder if you were ever going to come."',
      'He reaches into his backpack. He pulls out a small box. The box is wrapped in wax paper. The box is the same kind of box Ms. Penhaligon has been keeping. The box is one of the boxes. There are several. There have always been several. Margery in her efficient twelve-year-old way left messages with everyone she trusted.',
    ],
    aside: 'On Devon\'s backpack hand-sewn in yellow thread: a small bell. The bell is the same bell. Devon did not sew it. Mrs. Cotton did. She did it the day Devon started getting the notes.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-081',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-082',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-081': {
    id: 'long-081',
    pageNumber: 81,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 5 of 19',
    title: 'Mrs. Cotton has been waiting.',
    body: [
      'You go to the lunch line. Mrs. Cotton is at the end serving pizza the way she has been serving pizza since 1987. She is older than the school. She is exactly the age she was when she started plus forty years. She has the kind of face that does not change. She has the kind of eyes that have seen everything and are mostly polite about it.',
      'You say very quietly, "The other menu."',
      'Mrs. Cotton freezes. Her ladle stops mid-pour. Pizza sauce drips onto the next kid\'s tray slowly. She does not notice. She looks at you. She looks at Devon if Devon is with you. She looks at Maya if Maya is with you. She nods once. She says in a voice that is somehow both her lunch-lady voice and a much older voice, "It is about time. Come around. Through the kitchen. I have been waiting."',
      'She sets the ladle down. She wipes her hands on her apron. The apron is the apron she has been wearing since 1987. The apron has on the pocket a small embroidered bell. She lifts the counter flap. She waves you through. The other kids in the lunch line do not seem to notice. They are staring at their trays at the bits of paper in their food at the small wet voices in their Jell-O. The morning is talking to all of them today. Most of them are not listening.',
    ],
    aside: 'On the kitchen wall behind Mrs. Cotton a clock. The clock says 7:13. The clock has said 7:13 in this kitchen since 1987. Mrs. Cotton has not changed it.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-082',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-084',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-082': {
    id: 'long-082',
    pageNumber: 82,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 6 of 19',
    title: 'The kitchen is also not the kitchen.',
    body: [
      'You follow Mrs. Cotton into the kitchen. The kitchen is the kitchen — stainless steel counters industrial sinks the big ovens the walk-in freezer the racks of sheet pans. The kitchen is also not the kitchen. The kitchen is in the way that places that have been cooking the same food for forty years are also a kind of memory. The walls remember every lunch. The ovens remember every pizza. The freezer remembers every Jell-O. The freezer remembers every message Margery ever put in one.',
      'Mrs. Cotton walks you past the ovens past the sinks to the back of the kitchen. There is a door marked PRIVATE. The door is unlocked. Mrs. Cotton opens it. Behind the door a small office. In the office: a desk a chair a calendar from October 1987 a small refrigerator with a yellow ribbon tied around the handle and on the wall three photographs. Margery. Your mother. You.',
      'Mrs. Cotton points at the photographs. She says, "Same as the library. Same as the back room. Same as the principal\'s office though he does not know it. Same as the music room. Same as the yearbook room. Same as the janitor\'s closet. There are photographs everywhere. Margery put them everywhere. She wanted to make sure you were recognized. She wanted to make sure when you finally came that everyone knew who you were."',
    ],
    aside: 'On the desk between a stack of yellowed recipes and a can of floor wax a small notebook. The notebook is the same kind of notebook as the one in the library. The notebook is also still being written in.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-084',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-085',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-083': {
    id: 'long-083',
    pageNumber: 83,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 7 of 19',
    title: 'Mrs. Cotton has been here since 1987.',
    body: [
      'Mrs. Cotton sits down at her desk. She takes off her hairnet. She looks somehow older without it. She looks somehow also younger. She says, "I have been here since 1987. I was twenty-six. I was new. I did not know anyone. Margery was the first kid to ever come into my kitchen. She came in during lunch. She was wearing her yellow ribbon. She said, \'Mrs. Cotton, I think something is going to happen to me. I think something is going to happen at the dedication. I want to leave something with you in case.\' I laughed. I said, \'Honey nothing is going to happen.\' She did not laugh. She said, \'I want to leave a Jell-O with you. A green one. With a ribbon in it. I will come back for it. Or someone will.\' I said, \'Honey we do not have green Jell-O today.\' She said, \'You will tomorrow. I will make sure.\' And then she left."',
      'Mrs. Cotton stops. She looks at the small refrigerator. "The next day the dedication. The next day, Margery was gone. The next day, I had green Jell-O in my kitchen with a yellow ribbon frozen into the top. I had not ordered green Jell-O. The distributor had not sent green Jell-O. The green Jell-O was just there. The way Margery had said it would be. I have been keeping it in the refrigerator since 1987. I have been keeping it for whoever came to ask. You came to ask. It is time."',
      'She stands. She walks to the refrigerator. She unties the yellow ribbon. She opens the door. Inside the green Jell-O. The yellow ribbon is frozen into the top the way it has been frozen into the top for forty years. Mrs. Cotton takes it out. She sets it on the desk. She says, "Take it. It is yours. It has been yours since 1987. Margery said, \'The one who comes to ask is the one it belongs to.\' You asked. It belongs to you."',
    ],
    aside: 'On the Jell-O the surface has very faintly the same bell-shaped mark. The mark is in the Jell-O. The mark has been in the Jell-O since 1987.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-084',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-085',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-089',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-084': {
    id: 'long-084',
    pageNumber: 84,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 8 of 19',
    title: 'There is a message in the Jell-O.',
    body: [
      'Mrs. Cotton sets the Jell-O on the desk. She takes a spoon. She cracks the surface of the Jell-O. The Jell-O splits along a line that is not a crack. The Jell-O splits along a line that is a fold. The Jell-O has been folded the way a note is folded for forty years.',
      'Inside the Jell-O on a small piece of wax paper that has been keeping dry inside the Jell-O for forty years a message. The message is in Margery\'s handwriting. The message reads:',
      '"Dear the next one — If you are reading this you have found Mrs. Cotton. Good. She is one of the people I trust. There are seven of us in 1987 who know about the door. Me, Helen, Ashford my father, Mrs. Cotton, Ms. Penhaligon the music teacher Mr. Vance (no relation but a coincidence we all enjoyed), and the principal Dr. Wexler who knows but pretends he does not. Each of us has been keeping something for you. Each of us has been waiting. The seven things together are the key. The seven things together will open the door that the brass key alone cannot. Go to each of them. Mrs. Cotton first. Then Ms. Penhaligon. Then Mr. Ashford. Then the music room. Then the yearbook room. Then the principal\'s office. Then the basement. The basement is last. The basement is where I am. I will be there. I have been there. I will be there. — Margery."',
    ],
    aside: 'On the wall beneath the three photographs a list. The list is in Mrs. Cotton\'s handwriting. The list reads: 1. Cotton ✓. 2. Penhaligon ✓. 3. Ashford ✓. 4. Music room. 5. Yearbook. 6. Wexler. 7. Basement. The checkmarks are next to the ones you have already done.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-085',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-086',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-085': {
    id: 'long-085',
    pageNumber: 85,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 9 of 19',
    title: 'The Jell-O is warm and cold at once.',
    body: [
      'You take the Jell-O. It is cold against your palm the way Jell-O from a refrigerator is cold. It is also warm somewhere in the middle of it the way the brass key was warm the way the yellow ribbon was warm the way the toast hall pass was warm. The Jell-O is both. The Jell-O is holding both. The Jell-O has been holding both for forty years.',
      'Mrs. Cotton watches you hold it. She says, "There is one more thing. I have been keeping it since 1987 too. It is in the freezer. It is not Jell-O. It is something else." She walks to the walk-in freezer at the back of the kitchen. She opens the door. Cold air rolls out. She walks in. She comes out a moment later carrying a small tray. On the tray: a single serving of mashed potatoes congealed cold with a fork stuck in it.',
      'She sets the tray on the desk. She says, "This was Margery\'s lunch. October 23, 1987. She did not eat it. She left it on the table. I cleared the table after the assembly. I kept her lunch. I do not know why. I have kept it in the freezer ever since. It is still her lunch. The fork has her fingerprints on it. The potatoes are still her potatoes. I have been keeping them for whoever came to ask. You came to ask."',
    ],
    aside: 'On the fork very faintly the impression of small fingers. Margery\'s fingers. Twelve years old. The fingerprints are still there. The freezer has kept them.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-086',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-087',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-086': {
    id: 'long-086',
    pageNumber: 86,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 10 of 19',
    title: 'The kitchen notebook.',
    body: [
      'You open the notebook on Mrs. Cotton\'s desk. The notebook is the kitchen notebook. The entries are about food. The entries are also about Margery. The first entry is dated October 23, 1987. It reads:',
      '"Day 1. The kitchen does not feel right. The ovens are on. The pizza is cooking. The Jell-O is in the refrigerator. Margery did not come to lunch. I went to the assembly. I stood at the back. The principal rang the bell. The bell — I do not know how to describe the bell. The bell was the wrong sound. The bell was the wrong sound the way a wrong note in a song is the wrong sound. I have been cooking since I was sixteen. I know when something is wrong. The bell was wrong. After the bell, Margery was not there. I went back to the kitchen. I made her lunch. I waited. She did not come. I put the lunch in the freezer. I have been waiting ever since."',
      'You flip through. The entries get shorter. By year ten the entries are recipes. By year twenty the entries are one line: "Still cooking." By year thirty the entries stop. Then last week the entries start again. "Day 14,680. The kitchen knows. The Jell-O is humming. The freezer is humming. The fork in the freezer is humming. Everything that touched her is humming. Someone is coming. The kitchen can feel it."',
    ],
    aside: 'On the inside cover of the notebook in handwriting you recognize as Margery\'s: this is the book mrs. Cotton has been writing. It is i think also the book i have been writing. We are i think the same book. The kitchen is i think also the hallway. — m.v.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-087',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-088',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-087': {
    id: 'long-087',
    pageNumber: 87,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 11 of 19',
    title: 'Mrs. Cotton tells you why she kept the lunch.',
    body: [
      'Mrs. Cotton sits back down. She folds her hands on the desk. She says, "I kept the lunch because I did not know what else to do. The police came. They asked questions. They asked if Margery had eaten anything. They asked if I had seen her at lunch. I said no. I did not say I had her lunch. I do not know why. I knew somehow that the lunch should not be given to the police. I knew somehow that the lunch should be kept. I have been keeping it ever since."',
      'She looks at the freezer. "I have been also keeping something else. In the freezer. Behind the lunch. Something I have not shown anyone. Something I have not even looked at since 1987." She stands. She goes to the freezer. She comes back with a small envelope. The envelope is frozen. The envelope has, Margery\'s handwriting on it.',
      'She sets the envelope on the desk. She says, "I found this on the floor after the assembly. By the gym doors. It was dropped. I do not know if Margery dropped it. I do not know if someone else dropped it. I have been keeping it frozen because I did not know what else to do with it. I have been waiting for someone to come ask. You came to ask."',
    ],
    aside: 'On the envelope in frozen handwriting: do not open until the third one comes. — m.v. The envelope has been frozen since 1987. The envelope has been waiting.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-088',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-090',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-088': {
    id: 'long-088',
    pageNumber: 88,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 12 of 19',
    title: 'Dr. Wexler was the assistant principal in 1987.',
    body: [
      'You ask about Dr. Wexler. Mrs. Cotton sighs. She says, "Dr. Wexler was the assistant principal in 1987. He was the one who organized the dedication. He was the one who decided to ring the third bell. He was the one who thought it would be a nice ceremonial touch. He had read about it in the school history. The school had a third bell in the old bell tower. The third bell had not been rung since 1907. Dr. Wexler thought it would be fitting to ring it again for the dedication. He did not know what ringing the third bell would do."',
      'She pauses. "Or maybe he did. I do not know. He has never said. He has been the principal since 1992 when the old principal retired. He has been living with it ever since. He has also been hiding it ever since. He does not talk about 1987. He does not talk about Margery. He has removed her from the school records. He has removed her from the yearbook — except for the dedication page which he could not remove because the dedication page is the page everyone turns to."',
      'She looks at you. "Dr. Wexler is in his office today. He has been in his office since 7:13 this morning. He has not come out. He has not come out for any of the morning\'s events. He is, I think waiting. He is, I think afraid. He is, I think also hoping. He has been hoping for forty years that someone would come and undo what he did. He has been also afraid that someone would."',
    ],
    aside: 'On the wall behind Mrs. Cotton a small framed photograph of Dr. Wexler in 1987. He is young. He is at the dedication. He is standing next to the bell rope. He is the one about to pull it.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-090',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-091',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-089': {
    id: 'long-089',
    pageNumber: 89,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 13 of 19',
    title: 'You open the envelope.',
    body: [
      'You open the envelope. The envelope is stiff with cold. The paper tears along the fold the way paper tears when it has been frozen for forty years. Inside: a single photograph. The photograph is black and white. The photograph is of the door. The door in the gym floor. The door is in the photograph open. The door is in the photograph the way it was on October 23, 1987 before the dedication before the bell before Margery.',
      'On the back of the photograph in Margery\'s handwriting: this is the door before it was closed. I took this picture the day before. I wanted to remember what it looked like open. The door was open then. The door was also closed. Both. The door is both. — m.v.',
      'Mrs. Cotton looks at the photograph. She has not seen it before. She has been keeping the envelope without opening it. She says very quietly, "I did not know what was in it. I have been afraid to look. I am glad it is this. I am also afraid of what it means. The door was open then. The door has been both open and closed since 1907. The door does not need us to open it. The door opens itself. We just have to let it."',
    ],
    aside: 'In the photograph very faintly in the doorway: a figure. The figure is small. The figure is wearing a yellow ribbon. The figure is, Margery. The figure is already there. The photograph was taken the day before. The photograph was also taken after.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-090',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-091',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-090': {
    id: 'long-090',
    pageNumber: 90,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 14 of 19',
    title: 'The food in the cafeteria starts talking.',
    body: [
      'You leave Mrs. Cotton\'s office. You walk back through the kitchen. The kitchen is still the kitchen. The ovens are still on. The pizza is still cooking. The Jell-O in your hand is still cold and warm at once. You push through the door back into the cafeteria.',
      'The cafeteria is not the cafeteria anymore. The cafeteria is listening. Every tray has stopped clinking. Every fork has stopped scraping. Every kid has stopped chewing. They are all looking at their food. The food is talking.',
      'The pizza on Petey\'s tray is saying in a small wet voice, "Petey you have been hall monitor for too long. Quit." The mashed potatoes on the table next to Petey are saying, "He will not quit. He likes the badge. Leave him alone." The green Jell-O at the table next to the door is saying in unison in a chorus of small wet voices, "We have been waiting. We have been waiting. We have been waiting. We have been waiting." The chorus is the same sentence over and over. The chorus is the same sentence Margery has been writing in her notebook for forty years. The Jell-O has been learning the sentence. The Jell-O has been saying it back.',
    ],
    aside: 'On the menu board the chalk has rearranged itself again. It now reads: SPECIAL TODAY — THE MORNING IS TALKING. LISTEN OR DO NOT. THE CAFETERIA WILL NOT BE OPEN TOMORROW. THE CAFETERIA WILL NOT NEED TO BE.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-091',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-092',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-091': {
    id: 'long-091',
    pageNumber: 91,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 15 of 19',
    title: 'The Jell-O chorus says one more sentence.',
    body: [
      'You stand in the cafeteria. You listen. The Jell-O chorus in unison in their small wet voices says one more sentence. The sentence is:',
      '"She is tired. She is very tired. She has been ringing for forty years. The bell is also tired. The bell does not want to ring anymore. The bell does not want to be rung. The bell wants to stop. She wants to stop. The door wants to close. They are all waiting for someone to come down and tell them they can stop. They are all waiting for you."',
      'The chorus stops. The cafeteria is silent. The kids are staring at their trays. The food is no longer talking. The food is just food again. The morning has said what it needed to say. The morning is done talking.',
      'Maya if she is with you takes your hand. Devon if he is with you closes his backpack. Mrs. Cotton behind you in the kitchen doorway says very quietly, "Go. The music room. Now. The morning has told you what it can. The rest is downstairs."',
    ],
    aside: 'On the wall the menu board has rearranged itself one last time. It now reads: GOODBYE. THE CAFETERIA WILL BE HERE WHEN YOU GET BACK. OR IT WILL NOT. EITHER WAY, IT HAS BEEN AN HONOR.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-092',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-093',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-092': {
    id: 'long-092',
    pageNumber: 92,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 16 of 19',
    title: 'Petey quits.',
    body: [
      'You walk over to Petey\'s table. Petey is staring at his pizza. The pizza is still talking. The pizza is saying, "Quit, Petey. Quit. You are twelve. You should not have a job." You say, "Petey. The pizza is right. Quit."',
      'Petey looks at you. He looks at his badge. The badge says HALL MONITOR in big letters and PETEY in small letters. He has been wearing it since fifth grade. He has been wearing it for too long. He takes it off. He sets it on the tray. He says, "Okay. I did not want to do this for the rest of my life anyway." He looks at you. "What do I do now?"',
      'You say, "Whatever you want. The morning is letting you." Petey nods. He picks up his pizza. He takes a bite. The pizza does not say anything. The pizza is just pizza now. The pizza has said what it needed to say. Petey chews. He swallows. He says, "Thanks. I did not know I needed to be told."',
    ],
    aside: 'On the table where the badge was a small mark in the spilled milk. The mark is shaped like a bell. The mark is the same mark. The milk has made the mark on its own.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-093',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-094',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-093': {
    id: 'long-093',
    pageNumber: 93,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 17 of 19',
    title: 'Mrs. Cotton gives you one more thing.',
    body: [
      'You are about to leave the kitchen. Mrs. Cotton stops you at the door. She takes your hand. She presses something into it. A small brass pin shaped like a bell. The pin is the same pin she has on her hairnet. The pin is a copy. There are seven of them. Seven pins. Seven people. She is giving you hers.',
      'She says, "Wear it. The pin will let the others know. Each of the seven has one. Mr. Ashford has one on his cap. Ms. Penhaligon has one on her cardigan. Mr. Vance the music teacher has one on his tie. The yearbook editor has one on her lanyard. Dr. Wexler has one in his desk. The seventh — the seventh was Margery\'s. The seventh is in the basement. With her. She has been wearing it for forty years."',
      'She closes your hand around the pin. "When you go down wear it. She will see it. She will know you came from us. She will know we sent you. The pin is the only thing that will tell her for sure that the morning is finally over."',
    ],
    aside: 'On the pin in tiny writing: seven of us in 1987 knew. Seven of us waited. Seven of us sent you. — m.v.',
    choices: [
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-094',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Investigate the cafeteria',
        note: 'Navigate within The Cafeteria\'s Other Menu.',
        next: 'long-095',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-094': {
    id: 'long-094',
    pageNumber: 94,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 18 of 19',
    title: 'Mrs. Cotton tells you about Margery\'s father again.',
    body: [
      'You are about to leave. Mrs. Cotton stops you. She says, "One more thing. About Margery\'s father. Your mother told you he died in 1992. He did. Your mother did not tell you the whole truth. He did not just die. He went down the stairs the way your mother said. But he did not just die down there. He went down to take her place. He tried to take her place. He tried to ring the bell for her so she could come up."',
      'She pauses. "It did not work. The bell does not work that way. The bell picks. The bell picked Margery. The bell cannot be unpicked. He tried. He rang the bell. He rang it for hours. The bell did not change its mind. The bell kept ringing the way it had been ringing. Margery could not come up. He could not go back up. He stayed. He has been down there too. He has been ringing with her. They have been ringing together for thirty-three years."',
      'You stand in the kitchen. The Jell-O in your hand is very cold. The Jell-O is very warm. Mrs. Cotton says, "When you go down you should know. There are two of them. There have been two of them for thirty-three years. She will introduce you. She has been wanting to."',
    ],
    aside: 'On the wall beneath the photographs in handwriting that is both Margery\'s and her father\'s: two of us now. The bell is twice as loud. Or twice as quiet. We cannot tell anymore. — m.v. And a.v.',
    choices: [
      {
        label: 'Continue in this chapter',
        note: 'Stay in The Cafeteria\'s Other Menu.',
        next: 'long-095',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Go to The Janitor\'s Key Ring',
        note: 'Move to the next investigation: The Janitor\'s Key Ring.',
        next: 'long-096',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'Go to the door',
        note: 'Head to the gym door.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-095': {
    id: 'long-095',
    pageNumber: 95,
    chapter: 'The Cafeteria\'s Other Menu',
    eyebrow: 'The Cafeteria\'s Other Menu · scene 19 of 19',
    title: 'You leave the cafeteria.',
    body: [
      'You leave the cafeteria. Mrs. Cotton watches you go. She does not say goodbye. She does not need to. She will see you again. She will know what happened. The kitchen has been keeping its own company for a long time and the company it keeps is mostly the lunch that was never eaten and the lunch that was never eaten is finally going to be finished.',
      'You walk down the hallway. The hallway is the hallway. The lockers count up to twelve and stop. The clocks say 7:13 the way they have been saying 7:13 all morning. The fluorescent lights hum. The lights have been humming the same note since 7:13. The note is the same note as the bell under the school. The note is the same note as the kitchen radio. The note is the same note as the Jell-O chorus.',
      'In your pocket: the Jell-O. The fork. The photograph of the door. The notebook. The pin. The bell-shaped mark which is not a thing you can carry but is a thing you are carrying anyway. The morning is in your pocket. The morning is going with you. The morning is finally going somewhere.',
    ],
    aside: 'In the cafeteria behind you the menu board has rearranged itself one last time. It now reads: GOOD LUCK. WE HAVE BEEN ROOTING FOR YOU SINCE 7:13. — THE FOOD.',
    choices: [
      {
        label: 'Continue to The Janitor\'s Key Ring',
        note: 'Move to The Janitor\'s Key Ring.',
        next: 'long-096',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Go to the door',
        note: 'The gym door. Gateway to the descent.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home',
        note: 'Return home.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-096': {
    id: 'long-096',
    pageNumber: 96,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 1 of 19',
    title: 'The Janitor Sits With His Cap in His Hands',
    body: [
      'The janitor\'s closet is smaller than you remember. Mr. Ashford sits on an overturned bucket, his cap in his hands, turning it slowly. The fluorescent light above him flickers at 7:13. He looks up when you come in. He does not look surprised. He looks like he has been waiting for this particular morning for a very long time.',
      '"Sit," he says. There is a second bucket, overturned, across from his. You sit. The closet smells like floor wax and lemon cleaner, the same smell that has been in this school since 1987. On the wall behind him, taped with yellowed masking tape, is a photograph of a girl your age. Yellow ribbon. Sideways grin. Margery Vance. He has not taken it down in forty years.',
    ],
    aside: 'On his belt, the ring of keys clinks softly. One of them is brass. One of them is warm.',
    choices: [
      {
        label: 'Tell me about her. The version with you in it.',
        note: 'He has been rehearsing this for forty years.',
        next: 'long-097',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Why did you not stop her?',
        note: 'The question he has been asking himself.',
        next: 'long-102',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take me to the gym door',
        note: 'The door is waiting.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-097': {
    id: 'long-097',
    pageNumber: 97,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 2 of 19',
    title: 'He Loved Her the Way Twelve-Year-Olds Do',
    body: [
      'He closes his eyes. When he opens them, he is not looking at you anymore. He is looking at 1987. "I loved her," he says. "I was twelve. I did not have the words for it. I had the words for best friend, and I used those, but they were not the right words. I sat next to her in every class. I walked her home every day. I carried her books. She let me."',
      '"She told me about the dreams in September. She told me she was supposed to go through a door. I laughed at her. I said, \'Margery, you are being dramatic. There is no door.\' She did not laugh. She said, \'Ashford. I am asking you to believe me.\' I said, \'I believe you believe it.\' She said, \'That is not the same thing.\' She was right. It was not the same thing. I have known it was not the same thing for forty years."',
    ],
    aside: 'The brass key on his belt is warm. He does not seem to notice. He has not noticed since 1987.',
    choices: [
      {
        label: 'What happened at the assembly?',
        note: 'The version with him in it.',
        next: 'long-098',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Did you ever tell her?',
        note: 'A question about love and twelve-year-olds.',
        next: 'long-099',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-098': {
    id: 'long-098',
    pageNumber: 98,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 3 of 19',
    title: 'He Tells You Why He Did Not Stop Her',
    body: [
      '"I was twelve," he says. "I was afraid. I did not believe her. I thought she was being dramatic. I thought the world was the world. I thought the door was a metaphor. I was wrong."',
      'He pauses, turning the cap in his hands. "The day of the dedication, she came to school wearing the yellow ribbon. She was also wearing a second one, on her other wrist. She gave the second ribbon to your mother at lunch. She gave me the key. The brass key. Her father\'s key. She said, \'Ashford, hold this for me. I will need it later. So you can find me.\' I took it. I laughed. I said, \'Margery, you are being dramatic.\' She did not laugh. She said, \'Ashford. I am asking you to believe me. Please.\' I said, \'I believe you believe it.\' She said, \'That is not the same thing.\' I have known it was not the same thing for forty years."',
    ],
    aside: 'The brass key is very warm in his hand now. He has finally noticed. He does not say anything. He just holds it.',
    choices: [
      {
        label: 'What happened at the assembly?',
        note: 'The story needs the assembly.',
        next: 'long-099',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'You could not have stopped her.',
        note: 'A kindness he has not been able to give himself.',
        next: 'long-100',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-099': {
    id: 'long-099',
    pageNumber: 99,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 4 of 19',
    title: 'Arnold Vance, the Best Man He Ever Knew',
    body: [
      'He looks at the photograph on the wall. "Arnold Vance. Best man I ever knew. Worst father, maybe. He loved her too much to believe her. He thought, if he did not believe her, she would stop having the dreams. He thought, if he did not take her to the bell tower, the bell would not ring. He thought he could protect her by pretending the door was not real. The door did not care what he pretended."',
      '"Arnold was the janitor before me. He had been the janitor since 1968. He knew the school better than anyone. He knew the door was in the basement. He knew the bell was in the tower. He knew what ringing the third bell would do. He had read the school history. He had read the records. He knew everything. He did not believe it. He thought it was just a story the school told itself."',
    ],
    aside: 'On the wall, beside Margery, a second photograph: Arnold Vance. Older. Tired. The only one not smiling in the 1987 staff photo.',
    choices: [
      {
        label: 'What happened to Arnold after?',
        note: 'A story your mother told. He has more.',
        next: 'long-100',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Did Arnold ring the bell?',
        note: 'A question about a father and a bell.',
        next: 'long-101',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-100': {
    id: 'long-100',
    pageNumber: 100,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 5 of 19',
    title: 'The Assembly, October 23, 1987',
    body: [
      'He closes his eyes. "The assembly. The gym floor. The whole school, lined up. The principal, the school board president, the dedication plaque. Margery was in the back row. Yellow ribbon. Helen next to her. I was on the bleachers, with the other kids who had not been given a place. I was holding the key."',
      '"Dr. Wexler gave a speech. He said the words principals say at dedications. He said the future. He said the community. He said the children. He said the bell. He said, \'And now, for the first time since 1907, we will ring the third bell.\' He walked to the rope. The rope was just a rope. The bell, up in the tower, was just a bell. He pulled the rope. The bell rang. The bell was not just a bell. The bell was the door. The bell was the door opening."',
      '"Margery was standing on the gym floor. She was next to Helen. She said, very quietly, so only Helen could hear, \'So you can find me.\' And then she was not there. Helen screamed. The bell kept ringing. I dropped the key. The principal did not notice. The principal thought the bell was just a bell. The principal was wrong."',
    ],
    aside: 'The brass key is burning in his hand. He does not let go. He has been holding it for forty years.',
    choices: [
      {
        label: 'What happened after?',
        note: 'The story needs the after.',
        next: 'long-101',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'You were twelve.',
        note: 'A kindness. A repetition. The kind he needs.',
        next: 'long-103',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-101': {
    id: 'long-101',
    pageNumber: 101,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 6 of 19',
    title: 'The After',
    body: [
      '"The bell kept ringing. The principal did not notice. The other kids did not notice. Helen screamed and then she stopped. I picked up the key. I ran to the gym floor. The floor was just a floor. The dedication plaque was just a plaque. There was no door. There was no Margery. There was just the gym."',
      '"The police came. They asked questions. They asked where Margery was. No one knew. Helen said she had been standing next to her. Helen said she had just disappeared. The police did not believe her. They thought runaway. They thought kidnapping. They did not think bell. They did not think door. Arnold knew about the door. Arnold told them about the door. They did not believe him. They thought he was a grieving father, inventing things."',
      '"The search was called off after three days. The school reopened. The principal rang the bell the next morning, the way he always did. The bell did not ring. The bell has not rung from the tower since. The bell rings from below. The bell rings from where Margery is."',
    ],
    aside: 'On the wall, the photograph of Margery has a small crack in it. The crack is in the shape of a bell. It has been there since 1987.',
    choices: [
      {
        label: 'What did you do?',
        note: 'A question about a twelve-year-old and the rest of his life.',
        next: 'long-103',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Why did you become the janitor?',
        note: 'A question you have been wanting to ask.',
        next: 'long-104',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-102': {
    id: 'long-102',
    pageNumber: 102,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 7 of 19',
    title: 'The Years After',
    body: [
      '"The years after. I went to school. I grew up. I graduated. I went to college. I came back. Arnold was gone by then. He had gone down in 1992. He had not come back up. The school needed a janitor. I applied. They hired me. I have been the janitor ever since."',
      '"I went to see your mother, every October 23. I knocked on her door. I asked, \'Have you seen her?\' She said, \'No, Ashford, I have not seen her.\' I said, \'Thank you, Helen.\' I left. I did this for forty years. Your mother never asked why. Your mother knew. Your mother has always known."',
      '"I watched you grow up. I watched you from across the hallway. I watched you have the dreams. I knew, the moment I first saw you, at age six, in the kindergarten hallway, that you were the third one. The door had not picked you yet. But I knew. I have been waiting for today since you were six."',
    ],
    aside: 'On the wall, the photograph of Margery has been joined by a photograph of you. He took it in the kindergarten hallway in 2018. You are six. You are looking at the camera sideways.',
    choices: [
      {
        label: 'You have been watching me since I was six?',
        note: 'A strange thing to hear. A kind thing, also, in its way.',
        next: 'long-103',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Thank you.',
        note: 'A small thing to say. The right thing to say.',
        next: 'long-104',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'What do I do now?',
        note: 'The biggest question. The one he has been waiting to answer.',
        next: 'long-108',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-103': {
    id: 'long-103',
    pageNumber: 103,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 8 of 19',
    title: 'She Forgave Him',
    body: [
      'He closes his eyes. He weeps. The tears are the tears of a man who has been holding them for forty years. He does not make a sound. The tears land on his hands. The tears land on the brass key. The key drinks them.',
      'After a long moment, he says, "Thank you. I have been needing to hear that. From someone. From anyone. I did not think it would be you. I thought I would die without hearing it. I am glad I did not."',
      'He wipes his face. He looks at you. "She forgave me. She told you. She forgave me. I have been asking her to forgive me for forty years. I have been asking in my head. I have been asking at the door. I did not think she heard. She heard. She forgave me. Thank you. Thank you. Thank you."',
    ],
    aside: 'On the wall, the photograph of Margery is smiling. The photograph has always been smiling. The photograph is smiling more today.',
    choices: [
      {
        label: 'She wants you to come down. With me.',
        note: 'A thing Margery said. A thing he needs to hear.',
        next: 'long-104',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'She wants to come up. Both of them.',
        note: 'A thing Margery said. A thing that might not be possible.',
        next: 'long-105',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-104': {
    id: 'long-104',
    pageNumber: 104,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 9 of 19',
    title: 'Arnold Went Down for Her',
    body: [
      '"Arnold came to me in 1992. October 22. The night before the fifth anniversary. He knocked on my door. I was eighteen. I was in my first year as the janitor. He was old. He was tired. He said, \'Ashford. I am going down. I am going to take her place. Watch over Helen for me.\' I said, \'Arnold, do not.\' He said, \'I have to. I am her father.\' He gave me his keys. He kept only the brass one. He said, \'The brass key is hers. The brass key is the door. I will give it back to her.\' He left. He did not come back up."',
      '"I went down, the next year, in 1993. I found them. Both of them. Margery was twelve. Arnold was his age. They were ringing the bell together. Margery saw me. She said, \'Ashford. You came. I am glad. But you should go back up. Wait for the third one. I have been waiting for the third one.\' I said, \'Margery. I am sorry. I did not believe you.\' She said, \'I know. I forgive you. Now go. Wait. The third one will come.\' I went. I have been waiting ever since."',
    ],
    aside: 'On his hand, the brass key is no longer warm. It is also no longer cold. It is finally, just a key. For a moment.',
    choices: [
      {
        label: 'I am ready. Take me down.',
        note: 'A decision made in a janitor\'s closet.',
        next: 'long-105',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Why did Arnold not come back up?',
        note: 'The sad question.',
        next: 'long-106',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-105': {
    id: 'long-105',
    pageNumber: 105,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 10 of 19',
    title: 'The Door Has Rules',
    body: [
      '"The door has rules," he says. "I have learned them, over forty years. Some of them. The door picks. The door has picked every forty years since 1907. The door picks the funny one. The one who looks sideways. The one who has the dreams. The door does not want to hurt the funny one. The door wants the funny one to stay. The funny one stays, so the others can go."',
      '"The door lets you go up once. To leave a message. To leave a ribbon. To leave a key. To leave a notebook. The door does not let you go up twice. Once you go back down, you stay. The door does not forgive. The door does not change its mind."',
      '"The door can be closed. The door has been closed since 1987. The door has been closed by concrete. The door does not care about concrete. The door is the door. The door opens when the bell rings. The bell rings when someone pulls the rope. The rope is in the bell tower. The bell tower is behind the school. The bell tower is unlocked. The bell tower has been unlocked since 1987. The bell tower is waiting."',
    ],
    aside: 'On the wall, the photograph of Arnold Vance has a small mark on it now. The mark is in the shape of a bell. The mark was not there yesterday.',
    choices: [
      {
        label: 'Can the bell be un-rung?',
        note: 'The biggest question.',
        next: 'long-106',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Can I go down and come back up?',
        note: 'A question about your future.',
        next: 'long-107',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-106': {
    id: 'long-106',
    pageNumber: 106,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 11 of 19',
    title: 'Arnold Is Still Down There',
    body: [
      '"Arnold is down there," he says. "With her. They are ringing together. They have been ringing together for thirty-three years. The bell is twice as loud as it was. Or twice as quiet. They cannot tell anymore."',
      '"When you go down, you should know. There are two of them. Margery will introduce you. She has been wanting to. Arnold is the one who will ask you to stay. Margery will ask you to go. They will argue. They have been arguing, in some way, for thirty-three years. About you. About whether you should come. About whether you should stay."',
      '"Arnold thinks you should stay. Arnold thinks the door needs three. Arnold thinks the bell will stop if there are three. Margery thinks you should go. Margery thinks the door has had enough. Margery thinks the bell can stop with two, if the morning lets it."',
    ],
    aside: 'On the wall, the two photographs — Margery and Arnold — are looking at each other now. They were not looking at each other yesterday.',
    choices: [
      {
        label: 'Who is right?',
        note: 'A question he has been asking himself.',
        next: 'long-107',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I will ask them, when I go down.',
        note: 'A decision. A real one.',
        next: 'long-109',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-107': {
    id: 'long-107',
    pageNumber: 107,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 12 of 19',
    title: 'Your Mother Screamed',
    body: [
      '"Your mother screamed," he says. "She screamed and she screamed and then she stopped. She has been screaming, in some way, ever since. She has also been silent. Both."',
      '"I went to her, the next day. October 24, 1987. I went to her house. She was sitting on the porch. She had the yellow ribbon in her hand. She was holding it. She was also not holding it. The ribbon was in her hand. The ribbon was also on Margery\'s wrist, somewhere under the school."',
      '"She looked at me. She said, \'Ashford. Did you know?\' I said, \'Yes.\' She said, \'Why did you not stop her?\' I said, \'I did not believe her.\' She said, \'That is not the same thing.\' I said, \'I know.\' She said, \'I forgive you.\' I said, \'Thank you.\' She said, \'I will never forgive myself.\' She has not."',
    ],
    aside: 'On the wall, the photograph of Margery is next to the photograph of your mother at twelve. They are the same age. They are also decades apart.',
    choices: [
      {
        label: 'My mother has been carrying this for forty years.',
        note: 'A realization. A real one.',
        next: 'long-109',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'She forgave you. She told me.',
        note: 'A thing your mother said.',
        next: 'long-110',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-108': {
    id: 'long-108',
    pageNumber: 108,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 13 of 19',
    title: 'Why He Became the Janitor',
    body: [
      '"I became the janitor because Arnold asked me to. Because someone had to. Because the keys needed a keeper. Because the door needed a witness. Because your mother needed someone to knock on her door, every October 23, and ask, \'Have you seen her?\' Because Margery needed someone to wait."',
      '"I have been the janitor for thirty-eight years. I have mopped the same hallway. I have swept the same cafeteria. I have locked the same doors. I have unlocked the same doors. I have kept the keys. I have kept the photographs. I have kept the door, in its small brass way, company."',
      '"It is not a bad life. It is a quiet life. It is the life I chose. Or the life that chose me. I do not know which. It does not matter. The hallway is the hallway. The keys are the keys. I am the janitor. I have been the janitor for thirty-eight years. I will be the janitor for however many more. Or I will not. The morning will decide."',
    ],
    aside: 'On his belt, the key ring has thirty-eight years of keys on it. Some are to doors that no longer exist. Some are to doors that have not been built yet.',
    choices: [
      {
        label: 'Thank you for waiting.',
        note: 'A small thing to say. The right thing.',
        next: 'long-109',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'What do I do now?',
        note: 'The biggest question.',
        next: 'long-110',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-109': {
    id: 'long-109',
    pageNumber: 109,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 14 of 19',
    title: 'The Time He Went Down',
    body: [
      '"I went down once. In 1993. The year after Arnold went down. I had to know. I had to see. I took the brass key. I went to the gym. The door was under the concrete. I did not know how to open it. I knelt on the floor. I held the key. I said, \'Margery. Arnold. I am here.\' The floor opened."',
      '"I went down. The hallway was the hallway. It bent the wrong way. The lockers counted to 1987. The clocks said 7:13. I found them in the gym. They were ringing. The bell was between them. They were both holding the bell. They were both ringing it."',
      '"Margery saw me. She said, \'Ashford. You came. I am glad. But you should go back up. Wait for the third one. I have been waiting for the third one.\' I said, \'Margery. I am sorry. I did not believe you.\' She said, \'I know. I forgive you. Now go. Wait. The third one will come.\' Arnold said, \'Stay, Ashford. We need a third. The bell needs a third.\' Margery said, \'No, Arnold. We do not need a third. We need to stop. Let him go.\' I went. I have been waiting ever since."',
    ],
    aside: 'On the wall, the photograph of Arnold is looking at Mr. Ashford now. The photograph was not looking at him yesterday.',
    choices: [
      {
        label: 'They disagreed.',
        note: 'A realization. The kind that matters.',
        next: 'long-110',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'What did Arnold think, when you left?',
        note: 'A question about a father.',
        next: 'long-111',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-110': {
    id: 'long-110',
    pageNumber: 110,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 15 of 19',
    title: 'He Has Been Watching You Since You Were Six',
    body: [
      '"Yes," he says. "I have been watching you since you were six. I am sorry. I had to. I had to make sure you were the right one. I had to make sure the door picked you. I could not make a mistake about this."',
      '"I watched you in kindergarten. I watched you in first grade. I watched you in second grade. You started having the dreams in fourth grade. I knew then. The door had picked. The door had picked you. I went home that night and I wept. I am sorry. I wept because I knew. I wept because I did not want this for you. But the morning does not ask what we want."',
      '"I have been waiting for today since you were nine. Since the dreams started. I have been waiting for the morning the door would open. Today is the morning. Today is the morning I have been waiting for, and also the morning I have been dreading."',
    ],
    aside: 'On the wall, the photograph of you at six is next to the photograph of Margery at twelve. You are both looking at the camera. You are both looking sideways.',
    choices: [
      {
        label: 'I am ready.',
        note: 'A statement that becomes true by being said.',
        next: 'long-111',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am not ready. But I am going anyway.',
        note: 'A different statement. Also becomes true.',
        next: 'long-112',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-111': {
    id: 'long-111',
    pageNumber: 111,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 16 of 19',
    title: 'He Gives You the Keys',
    body: [
      'He stands. The closet is suddenly very small. He is taller than you thought. He is also smaller than you thought. He puts on his cap. He takes the key ring off his belt. He holds it out to you.',
      '"Take the keys. All of them. The brass one. The one to the gym. The one to the bell tower. The one to the basement. The one to the library. The one to the cafeteria. The one to the principal\'s office. The one to the janitor\'s closet. All of them. They are yours now. I have been keeping them. I am done keeping them. They are yours."',
      'He presses the ring into your hand. The keys are heavier than they look. The brass one is warm. The others are cold. They will all be warm by the end of the day.',
    ],
    aside: 'On the key ring, the brass key is the warmest it has ever been. The other keys are also warm. The keys have been waiting to be given.',
    choices: [
      {
        label: 'Thank you. I will not waste them.',
        note: 'A small thing to say. The right thing.',
        next: 'long-112',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I cannot take all of them.',
        note: 'A refusal. A kind one.',
        next: 'long-113',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-112': {
    id: 'long-112',
    pageNumber: 112,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 17 of 19',
    title: 'He Tells You What to Do',
    body: [
      '"You go down," he says. "You find them. You find Arnold. You ask them what they want. And then you decide."',
      'He pauses. "The door will let you in. The door has been waiting. The door will let you ask. The door will let you choose. The door does not force. The door picks, but the door does not make. You can say no. You can go home. The morning will let you. The morning will also not forget."',
      '"But you should go down. You should see them. You should ask them. They have been waiting for someone to ask, instead of telling. Arnold has been telling. Margery has been telling. They need someone to ask. Ask them. Then decide. Then do. Whatever you decide. I will be here. Or I will not. The morning will decide."',
    ],
    aside: 'On the wall, the photographs are all looking at you now. Margery. Arnold. Your mother at twelve. You at six. They are all waiting for you to decide.',
    choices: [
      {
        label: 'I am going. Now.',
        note: 'A decision. A real one.',
        next: 'long-113',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take me to the door. But do not come down.',
        note: 'A choice. A kind one.',
        next: 'long-114',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-113': {
    id: 'long-113',
    pageNumber: 113,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 18 of 19',
    title: 'He Walks You to the Gym',
    body: [
      'He stands. He puts on his cap. He walks you out of the closet. The hallway is the hallway. The lockers count to twelve. The clocks say 7:13. The lights hum. He walks beside you, the way he walked beside Margery in 1987, the way he has not walked beside anyone since.',
      'He does not say anything. He does not need to. The walk says it. The walk is the conversation he has been wanting to have for forty years. The walk is also the goodbye. He knows he is not going down. He has used his up. He is walking you to the door. He is walking you the way Arnold walked him, in 1993, when he went down the only time.',
      'At the gym door, he stops. He takes off his cap. He turns it in his hands. He says, "Okay. This is where I stop. The rest is yours. The door is in there. The bell is ringing. They are waiting. Go. Decide. Come back, if you can. If you cannot, I will understand. I will also not forgive you. But I will understand."',
    ],
    aside: 'On his cap, the small bell pin is glowing. The pin has been waiting for this moment too.',
    choices: [
      {
        label: 'Hug him',
        note: 'A small thing. The right thing.',
        next: 'long-114',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Shake his hand',
        note: 'A formal thing. Also the right thing.',
        next: 'long-115',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'I will come back.',
        note: 'A promise. The kind you should not make. Make it anyway.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-114': {
    id: 'long-114',
    pageNumber: 114,
    chapter: 'The Janitor\'s Key Ring',
    eyebrow: 'The Janitor\'s Key Ring · scene 19 of 19',
    title: 'It Might Be Possible for Both to Come Up',
    body: [
      '"I do not know if it is possible," he says. "The door has rules. The rules are mostly that the door keeps one. But Margery has been thinking. She has been thinking for forty years. She thinks there might be a way."',
      '"She thinks the door keeps one because the door needs a ringer. The bell needs someone to ring it. The bell does not ring itself. The bell has been rung, by Margery, for forty years. The bell has also been rung, by Arnold, for thirty-three. They are both ringing. The bell is twice as loud. Or twice as quiet. They cannot tell."',
      '"But she thinks if the bell is rung at the right hour — if the third bell is rung at the right hour, by the right person, in the right way — the bell might stop. The bell might finally stop ringing. And if the bell stops, the door might close. And if the door closes, they might both come up. Or the door might keep them both. I do not know. She does not know. We will not know until someone tries."',
    ],
    aside: 'On his cap, the bell pin is no longer glowing. The pin is just a pin. The pin has said what it needed to say.',
    choices: [
      {
        label: 'Then I will try.',
        note: 'A decision. The kind that becomes a life.',
        next: 'long-115',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'What is the right hour? The right person?',
        note: 'The questions Margery has been thinking about.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'What if I fail?',
        note: 'A fear. A reasonable one.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-115': {
    id: 'long-115',
    pageNumber: 115,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 1 of 19',
    title: 'A Door That Was Not There Yesterday',
    body: [
      'You are walking the hallway. The hallway bends, the way it has been bending all morning. At the end of the bend, a door that was not there yesterday. The door has no number. The door has a small sign, hand-lettered: ROOM 7. There is no Room 7 in your school. There has never been a Room 7. The door is the door that was not there, that has been there all along.',
      'You try the handle. The handle turns. The door opens. Inside: a classroom. Old desks, wood and iron, the kind with the chair attached. A chalkboard at the front. On the chalkboard, in chalk handwriting from 1987: TOMORROW IS THE DEDICATION. REMEMBER YOUR RIBBONS. REMEMBER THE BELL. The chalk is still sharp. The chalk has been waiting to be read.',
    ],
    aside: 'On the door, on the inside, in the same chalk: DO NOT ERASE. — A.V. Arnold Vance. The father. The janitor. The one who went down.',
    choices: [
      {
        label: 'Step inside',
        note: 'The classroom has been waiting.',
        next: 'long-116',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Read the chalkboard first',
        note: 'The chalk has been waiting forty years.',
        next: 'long-121',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Close the door. Walk away.',
        note: 'Some doors should not be opened.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-116': {
    id: 'long-116',
    pageNumber: 116,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 2 of 19',
    title: 'The Classroom Closes the Door Behind You',
    body: [
      'You step inside. The door closes. You did not close it. The classroom did. The classroom is the kind of room that takes care of itself. The desks are old. The chalkboard is old. The air is old — it smells like chalk dust and 1987 and the lemon cleaner Mr. Ashford still uses.',
      'On the teacher\'s desk at the front: a stack of papers, a red pen, a coffee cup with coffee still in it. The coffee has been cold since 1987. The coffee has not evaporated. The coffee is still coffee. On the side of the cup, in marker: MR. VANCE. Not the music teacher. Arnold. The janitor. The father. He was a teacher too, before he was a janitor. He taught math. He taught in this room.',
    ],
    aside: 'On the inside of the door, a small mirror. In the mirror, your reflection. Your reflection is wearing a yellow ribbon you did not put on.',
    choices: [
      {
        label: 'Read the lesson plan',
        note: 'Arnold wrote it. The day before.',
        next: 'long-117',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Sit at the teacher\'s desk',
        note: 'Arnold\'s desk. He sat there.',
        next: 'long-118',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-117': {
    id: 'long-117',
    pageNumber: 117,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 3 of 19',
    title: 'Arnold\'s Lesson Plan',
    body: [
      'The lesson plan is on the chalkboard. Arnold\'s handwriting. October 22, 1987. The day before. It reads:',
      '"TOMORROW: Bells. The third bell. The bell that should not be rung. The bell that has been waiting since 1907. The bell is in the tower. The bell is also in the basement. The bell is the door. Do not ring the bell. If the bell is rung, the door opens. If the door opens, the bell picks. The bell picks the funny one. The one who looks sideways. The one who wears the ribbon. The one who has the dreams. Margery has the dreams. Margery is the funny one. The bell will pick Margery. Do not ring the bell. — A.V."',
    ],
    aside: 'On the bottom of the lesson plan, in different chalk, in Margery\'s handwriting: i know, dad. i am sorry. i have to. — m.v.',
    choices: [
      {
        label: 'She knew he knew.',
        note: 'A realization. The kind that matters.',
        next: 'long-118',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Look for more chalk writing',
        note: 'The chalkboard has more than one lesson.',
        next: 'long-119',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-118': {
    id: 'long-118',
    pageNumber: 118,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 4 of 19',
    title: 'You Close the Door and Walk Away',
    body: [
      'You close the door. You walk away. The hallway lets you. The hallway is accommodating today. The hallway is letting you choose. The hallway does not usually let people choose. The hallway is making an exception.',
      'You walk back the way you came. The lockers count down — seventeen, sixteen, fifteen, twelve. The clocks say 7:13. The fluorescent lights hum. You walk past the lost and found, past the main office, past the cafeteria. You walk to the end of the hallway. You stand at the front doors of the school. The doors are propped open with the wedge of yellow chalk. The morning, outside, is the morning.',
      'You did not go in. The classroom is still there. The classroom will be there tomorrow. The classroom will be there the day after. The classroom will be there as long as it needs to be. The classroom is patient. The classroom is the most patient thing in the school. After the morning.',
    ],
    aside: 'In your pocket, a small piece of chalk. You did not take it. The chalk is in your pocket anyway. The chalk is yellow. The chalk is the same chalk.',
    ending: {
      title: 'The Patient Classroom',
      copy: 'You found the classroom that was not there. You did not go in. You walked away. The classroom waited. It will wait for the next one. The morning is patient. The chalkboard has been waiting since 1987. The chalkboard can wait longer.',
      badge: 'END 05 / 14',
      accent: 'green'
    },
  },
  'long-119': {
    id: 'long-119',
    pageNumber: 119,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 5 of 19',
    title: 'You Sit at Arnold\'s Desk',
    body: [
      'The chair creaks. The chair has not been sat in since 1987. The chair is the chair Arnold Vance sat in. The chair is the chair he stood up from, the day he went down. The chair is cold. The chair is also warm. Both.',
      'On the desk: the stack of papers, the red pen, the coffee cup. You pick up the red pen. The pen writes. The pen has been writing since 1987. The pen is not out of ink. The pen is the kind of pen that does not run out.',
      'You look at the papers. The papers are math homework. The papers are from October 1987. The names on the papers are names you do not know. Except one. The one on the bottom of the stack. The name on the bottom paper is Margery Vance. The homework is perfect. Every answer right. Every answer also wrong. The answers are about bells. The answers are about doors. The answers are not math.',
    ],
    aside: 'On the bottom of Margery\'s paper, in red pen, in Arnold\'s handwriting: see me after class. we need to talk. — A.V. He never got to have the talk.',
    choices: [
      {
        label: 'Read Margery\'s paper',
        note: 'Her answers. About bells. About doors.',
        next: 'long-120',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take the red pen',
        note: 'The pen writes. Take it. You will need it.',
        next: 'long-122',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-120': {
    id: 'long-120',
    pageNumber: 120,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 6 of 19',
    title: 'Margery\'s Math Homework',
    body: [
      'You read Margery\'s paper. The questions are math questions. The answers are not math. The answers are:',
      '"1. The bell rings at 7:13. The bell should not ring at 7:13. The bell should ring at 7:14. If the bell rings at 7:13, the door opens. If the door opens, the door picks. The door picks me. I do not want to be picked. But I think I am supposed to be."',
      '"2. The door is in the basement. The door is also in the bell tower. The door is both. The door opens when the bell rings. The bell rings when the rope is pulled. The rope is in the bell tower. The bell tower is unlocked. The bell tower has been unlocked since 1907."',
      '"3. If I go through, someone has to come after. Someone has to ring the bell. Someone has to wait for the next one. I am asking Dad to wait. I am asking Helen to wait. I am sorry. I am also not sorry. Both. The way the bell is both. — M.V."',
    ],
    aside: 'On the bottom of the page, in red pen, in Arnold\'s handwriting: i read this. i did not believe you. i am sorry. i am going to come find you. — Dad.',
    choices: [
      {
        label: 'Take the paper. Take the red pen.',
        note: 'You should keep these.',
        next: 'long-122',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'He came. He went down for her.',
        note: 'A realization.',
        next: 'long-123',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-121': {
    id: 'long-121',
    pageNumber: 121,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 7 of 19',
    title: 'The Reflection Does Something You Do Not Do',
    body: [
      'You look at the mirror on the door. Your reflection looks back. Your reflection is wearing a yellow ribbon you did not put on. You raise your hand. The reflection raises its hand. You lower your hand. The reflection lowers its hand. The reflection does, in most ways, what you do.',
      'Then the reflection does something you do not do. The reflection turns its head. The reflection looks at something behind you. You did not turn your head. The reflection did. The reflection is looking at something. The reflection is trying to show you.',
      'You turn around. Behind you, in the classroom, where there was no one a moment ago: a girl. Twelve. Yellow ribbon. Sideways grin. Margery. She is transparent. She is also solid. Both. She is looking at the mirror too. She is looking at the reflection that is also looking at her.',
    ],
    aside: 'In the mirror, three reflections: yours, Margery\'s, and a third. The third reflection is also you. But older. The third reflection is the you who stayed.',
    choices: [
      {
        label: 'Turn back. Speak to Margery.',
        note: 'She is here. She came up. For this.',
        next: 'long-122',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Look at the third reflection',
        note: 'The you who stayed. Look. You should know.',
        next: 'long-123',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Look away. Do not engage.',
        note: 'A refusal.',
        next: 'long-127',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-122': {
    id: 'long-122',
    pageNumber: 122,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 8 of 19',
    title: 'More Chalk Writing',
    body: [
      'You look at the chalkboard. Beneath the lesson plan, beneath Margery\'s note, more writing. In different chalk. In handwriting you do not recognize. The writing reads:',
      '"To the third one — I am the first one. I was the funny one in 1907. I wore the ribbon. I went through. I have been ringing since. The bell is me. The bell is also Margery. The bell is also Arnold. The bell is all of us. The bell does not want to ring. The bell has never wanted to ring. The bell has been ringing because no one has known how to make it stop. Margery thinks she knows. I think she might. Try. — E.M."',
    ],
    aside: 'On the chalkboard, in the corner, very small, in the same handwriting: the morning is also tired. the morning has been ringing too.',
    choices: [
      {
        label: 'Who was E.M.?',
        note: 'A question the chalkboard cannot answer.',
        next: 'long-123',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Copy the writing into your notebook',
        note: 'You have a notebook now.',
        next: 'long-124',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-123': {
    id: 'long-123',
    pageNumber: 123,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 9 of 19',
    title: 'You Sit at the Desk Marked M.V.',
    body: [
      'You sit at the desk marked M.V. The desk creaks. The desk is the wrong height. The desk is the right height for a twelve-year-old in 1987. The wood is smooth in the places where her hands rested. The wood is rough in the places where she carved.',
      'The carvings are: M.V. + H.M. (Margery plus Helen, your mother). A small bell. A small door. A small yellow ribbon. And, in the corner, very small, very carefully carved: 7:13. The time. The same time as the kitchen radio. The same time as the clock on the gym wall. The same time as everywhere today.',
      'You close your eyes. The classroom fills in around you. You can almost hear her. You can almost hear the bell. You can almost hear Arnold at the front of the room, saying, "Margery, stop fidgeting." You can almost hear her say, "Sorry, Dad." You open your eyes. The classroom is empty. But on the desk, in front of you, in fresh chalk dust that was not there a moment ago: a key. A small chalk key.',
    ],
    aside: 'On the desk, beneath the chalk key, in fresh chalk: take it. it is yours. — m.v.',
    choices: [
      {
        label: 'Take the chalk key',
        note: 'A key made of chalk.',
        next: 'long-124',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Thank you, Margery.',
        note: 'A small thing to say.',
        next: 'long-125',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-124': {
    id: 'long-124',
    pageNumber: 124,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 10 of 19',
    title: 'You Take the Red Pen',
    body: [
      'You take the red pen. The pen is heavier than it looks. The pen is the kind of pen that knows what to write. The pen has been writing since 1987. The pen has not run out. The pen will not run out.',
      'You hold the pen. The pen is warm. The pen is the same warm as the brass key. The pen is the same warm as the yellow ribbon. The pen is the same warm as everything that has been waiting for you.',
      'You uncap the pen. You hold it over Margery\'s homework. You do not know what to write. The pen does. The pen moves your hand. The pen writes, in your handwriting but in words you did not choose: i am here. i am coming. — the third one.',
    ],
    aside: 'On the paper, beneath your writing, in fresh ink that was not there a moment ago: thank you. — m.v.',
    choices: [
      {
        label: 'Keep writing',
        note: 'The pen has more to say.',
        next: 'long-125',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Stop. Take the pen and paper.',
        note: 'You have said enough.',
        next: 'long-126',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-125': {
    id: 'long-125',
    pageNumber: 125,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 11 of 19',
    title: 'You Drink the Coffee',
    body: [
      'You pick up the coffee cup. The cup is cold. The coffee is cold. The coffee has been cold since 1987. The coffee is still coffee. You drink. The coffee is the best coffee you have ever had. The coffee is also the worst. Both.',
      'The coffee tastes like 1987. The coffee tastes like chalk dust. The coffee tastes like the lemon cleaner. The coffee tastes like the morning, the one that has been waiting. The coffee tastes like yellow ribbon. The coffee tastes like the bell. The coffee tastes like everything that has been held in this room for forty years.',
      'You set the cup down. The cup is empty. The cup has not been empty since 1987. The cup is finally empty. The classroom exhales. The classroom has been holding the coffee for forty years. The classroom is glad someone finally drank it.',
    ],
    aside: 'On the bottom of the cup, in marker, in Arnold\'s handwriting: for the third one. drink up. — A.V.',
    choices: [
      {
        label: 'Thank you, Arnold.',
        note: 'A small thing to say. To a cup. To a man. To a father.',
        next: 'long-126',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take the cup',
        note: 'A strange keepsake.',
        next: 'long-128',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-126': {
    id: 'long-126',
    pageNumber: 126,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 12 of 19',
    title: 'Margery Speaks',
    body: [
      'She is transparent. She is also solid. She is both. She says, in the voice that is the kitchen radio, that is your brother singing, that is the fluorescent lights humming: "Hi. I came up to leave you something. I have used my up."',
      'She holds out her hand. In her hand: a small chalk key. The same chalk key that was on the desk a moment ago. She is the one who drew it. She is the one who left it. "Take it," she says. "It is yours. It is the only thing I can give you, from this side. The chalk is the only thing that crosses both ways. The chalk is the door, in a different shape."',
      'You take the key. The key is warm. The key is the same warm as everything. Margery looks at you. She says, "I am glad you came. I am also sorry. I have been ringing for forty years. I am tired. The bell is tired. We are both ready. Come down. Please. Decide. We will be there. Both of us. Arnold, too. He is also tired."',
    ],
    aside: 'In the mirror on the door, the third reflection — the you who stayed — is no longer there. The reflection has gone. The reflection is no longer possible. Or no longer necessary.',
    choices: [
      {
        label: 'I am coming.',
        note: 'A promise.',
        next: 'long-128',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'What if I cannot decide?',
        note: 'A fear.',
        next: 'long-129',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-127': {
    id: 'long-127',
    pageNumber: 127,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 13 of 19',
    title: 'The Third Reflection',
    body: [
      'You look at the third reflection. The you who stayed. The reflection is older. The reflection is tired. The reflection is wearing a yellow ribbon. The reflection is also wearing a small chalk key on a chain around its neck. The reflection is you. Or it was you. Or it will be you. Or it is a you that did not happen.',
      'The reflection does not smile. The reflection looks at you. The reflection says, in a voice that is your voice but older, that is your voice but tired, that is your voice but patient: "Do not stay. Go back. Live. The bell is patient. I am patient. But you do not have to be. Go. Live. I will ring. I have been ringing. I will keep ringing. Go."',
      'You look at the reflection. The reflection looks at you. The reflection is the you who chose to stay. The reflection is also not you. The reflection is a possibility. The reflection is also a warning. Both.',
    ],
    aside: 'In the mirror, beside the third reflection, a fourth reflection. The fourth reflection is the you who went back. The fourth reflection is smiling. The fourth reflection is the one you should choose.',
    choices: [
      {
        label: 'Touch the mirror',
        note: 'A dangerous choice.',
        next: 'long-128',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Step back from the mirror',
        note: 'A safer choice.',
        next: 'long-129',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-128': {
    id: 'long-128',
    pageNumber: 128,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 14 of 19',
    title: 'You Refuse',
    body: [
      'You look at Margery. You say, "I am not coming. I am sorry." She nods. She is not angry. She is also not surprised. She has been preparing for this, too. The way the morning has been preparing for both options.',
      'She says, "I understand. Go. Live. I will wait. For the fourth one. In another forty years. I am patient. The bell is patient. We can wait."',
      'She fades. The mirror on the door fades. The classroom fades. You are standing in the hallway. The door to Room 7 is closed. The door is also gone. The hallway is the hallway. The clocks say 7:14. The clocks have advanced. The morning has accepted your refusal. The morning has let you go. The morning will not forget. But the morning will wait.',
    ],
    aside: 'In your pocket, the chalk key is still there. The chalk key is the only thing that crossed with you. The chalk key is yours. The chalk key will be patient, too.',
    ending: {
      title: 'The Fourth Reflection',
      copy: 'You found the classroom. You found Margery. You refused. She accepted. The morning let you go. You went home. You grew up. Your daughter had the dreams. She found the classroom. She went down. The morning went on.',
      badge: 'END 06 / 14',
      accent: 'green'
    },
  },
  'long-129': {
    id: 'long-129',
    pageNumber: 129,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 15 of 19',
    title: 'You Understand',
    body: [
      'You stand in the classroom. You understand. Arnold went down for her. Arnold went down because he did not believe her, and the only way to make it right was to go after her. Arnold went down because he was her father. Fathers do that. Even fathers who did not believe. Especially fathers who did not believe.',
      'You also do not understand. You do not understand why the bell picks. You do not understand why the door needs one. You do not understand why Margery went through. You do not understand why she could not come back. Both. The way everything is both.',
      'You look at the chalkboard. The chalkboard has been waiting. The chalkboard has been holding all of this for forty years. The chalkboard is tired. The chalkboard is ready to be erased. Or the chalkboard is ready to be read. Both. The chalkboard does not care which. The chalkboard is the chalkboard.',
    ],
    aside: 'On the wall, the clock has advanced. The clock now reads 7:14. The clock has never read 7:14 in this room. The clock has been waiting, also, for this moment.',
    choices: [
      {
        label: 'I am going down.',
        note: 'A decision. A real one.',
        next: 'long-130',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am going home.',
        note: 'A different decision.',
        next: 'long-131',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-130': {
    id: 'long-130',
    pageNumber: 130,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 16 of 19',
    title: 'The Pen Writes',
    body: [
      'You hold the pen. The pen moves your hand. The pen writes, in your handwriting but in words you did not choose. The words are:',
      '"Dear Margery — I am here. I am coming. I am the third one. I am the one you have been waiting for. I am afraid. I am also not afraid. Both. The way the bell is both. The way the door is both. The way you are both. I am coming. — The third one."',
      'You set the pen down. The pen is done. The pen has said what it needed to say. You look at the paper. The ink is drying. The ink is also not drying. Both. The way everything is both.',
    ],
    aside: 'On the paper, beneath your writing, in fresh ink: thank you. we will be there. — m.v. and a.v.',
    choices: [
      {
        label: 'Take the paper. Take the pen. Take the chalk key.',
        note: 'Take everything.',
        next: 'long-131',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave the paper. Take only the pen and the chalk key.',
        note: 'The paper is for her.',
        next: 'long-132',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-131': {
    id: 'long-131',
    pageNumber: 131,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 17 of 19',
    title: 'You Leave the Classroom',
    body: [
      'You walk to the door. The door opens, before you reach it. The classroom is polite. The classroom is letting you go. The classroom is also not letting you go. Both. The way everything is both.',
      'You step into the hallway. The hallway is the hallway. The lockers count to twelve. The clocks say 7:14. The clocks have advanced. The morning has advanced. The morning is letting you walk.',
      'You look back. The door to Room 7 is closed. The door is also gone. The wall is just wall. The classroom is gone. Or the classroom is still there. Both. The classroom does not care which. The classroom is the classroom. The classroom has been the classroom for forty years. The classroom will be the classroom for as long as it needs to be.',
    ],
    aside: 'In your pocket, the chalk key is warm. The chalk key is the same warm as everything. The chalk key is ready.',
    choices: [
      {
        label: 'Go to the gym. Find the door.',
        note: 'The door is there.',
        next: 'long-132',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go to the bell tower.',
        note: 'The bell is there.',
        next: 'long-133',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-132': {
    id: 'long-132',
    pageNumber: 132,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 18 of 19',
    title: 'You Try to Erase the Chalkboard',
    body: [
      'You pick up the eraser. The eraser is the kind of eraser that has been used many times. The eraser is full of chalk dust. The eraser has been holding the chalk dust since 1987. You lift the eraser to the board. You try to erase.',
      'The chalk does not erase. The chalk has been waiting too long. The chalk has decided to stay. You try again. The chalk does not erase. You try a third time. The chalk does not erase.',
      'You set the eraser down. The chalkboard is still the chalkboard. The chalk is still the chalk. The lesson plan is still the lesson plan. Margery\'s note is still Margery\'s note. E.M.\'s note is still E.M.\'s note. Nothing has changed. The chalkboard has refused. The chalkboard is the kind of chalkboard that decides what it keeps.',
    ],
    aside: 'On the chalkboard, in fresh chalk: nice try. the chalkboard is also patient. — the classroom.',
    choices: [
      {
        label: 'I am sorry. I will not try again.',
        note: 'An apology.',
        next: 'long-133',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Take the eraser. Try again, later.',
        note: 'A different kind of persistence.',
        next: 'long-134',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'Leave the classroom.',
        note: 'A retreat.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-133': {
    id: 'long-133',
    pageNumber: 133,
    chapter: 'The Classroom That Wasn\'t There',
    eyebrow: 'The Classroom That Wasn\'t There · scene 19 of 19',
    title: 'You Leave the Classroom for the Last Time',
    body: [
      'You walk to the door. The door opens. You step into the hallway. The hallway is the hallway. You look back. The door is closed. The wall is just wall. The classroom is gone. The classroom is also not gone. Both. The classroom is in your pocket now. The classroom is the chalk key. The classroom is the red pen. The classroom is the homework. The classroom is wherever you carry it.',
      'You walk down the hallway. The lockers count down. The clocks say 7:14. The morning has advanced. The morning is letting you go. The morning is also not letting you go. Both. The morning is in your pocket too. The morning is the chalk key. The morning is the brass key. The morning is the yellow ribbon. The morning is wherever you carry it.',
      'You stand at the end of the hallway. The front doors are open. The wedge of yellow chalk is still there. The morning, outside, is the morning. You have a choice. The same choice. The choice you have been making all morning. The choice the morning has been letting you make.',
    ],
    aside: 'In your pocket, all the things you have collected — the brass key, the yellow ribbon, the toast hall pass, the chalk key, the red pen, the homework, the photograph, the notebook, the pin — are all warm. They are all the same warm. They are all the morning.',
    choices: [
      {
        label: 'Go to the gym. Go down. Find them.',
        note: 'The door is there.',
        next: 'long-134',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Go to the bell tower. Ring the third bell.',
        note: 'The bell is there.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home. Tell your mother.',
        note: 'Your mother should know.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-134': {
    id: 'long-134',
    pageNumber: 134,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 1 of 19',
    title: 'The Gym Floor Is Half-Pulled-Up',
    body: [
      'The gym. The floor is half-pulled-up, the way it has been all morning. The workmen are mid-pry, frozen, the way they have been frozen all morning. The clock on the wall says 7:13. The clock on the wall has said 7:13 since 1987. The clock on the wall is the door\'s clock.',
      'In the center of the floor, where the dedication plaque used to be, the door. The door is in the floor. The door has a brass handle. The handle is shaped like a bell. You know this door. You have been walking toward it all morning.',
    ],
    aside: 'On the gym wall, the dedication plaque has been removed. The plaque is in the principal\'s office. The plaque has been in the principal\'s office since 1987.',
    choices: [
      {
        label: 'Approach the door',
        note: 'It is the door. Approach.',
        next: 'long-135',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Find Coach Brant first',
        note: 'He is the gym teacher. He knows the floor.',
        next: 'long-140',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Look at the floorboards being pulled up',
        note: 'There is something under them.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-135': {
    id: 'long-135',
    pageNumber: 135,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 2 of 19',
    title: 'The Door',
    body: [
      'You kneel by the door. The brass handle is cold. The handle is also warm. Both. The handle is shaped like a bell. The handle is the same bell as the mark in the corner of every photograph.',
      'You take the brass key from your pocket. The key is warm. The key fits the handle the way a key fits a lock in a story. You turn the key. The door opens. Stairs go down. The stairs are lit by the same greenish fluorescent light. The stairs are the same stairs.',
    ],
    aside: 'On the door, in yellow pencil, in your mother\'s handwriting: so you can find me if I get lost. The same words. Always the same words.',
    choices: [
      {
        label: 'Go down',
        note: 'It is time. Go.',
        next: 'long-136',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Wait. Find Mr. Ashford first.',
        note: 'He should be here.',
        next: 'long-137',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-136': {
    id: 'long-136',
    pageNumber: 136,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 3 of 19',
    title: 'Coach Brant',
    body: [
      'Coach Brant is in his office, behind the bleachers. He is a big man. He is surprisingly philosophical. He has been the gym teacher since 1995. He knows the floor. He knows what is under the floor. He has not told anyone.',
      'He sees you. He sets down his coffee. He says, "I was wondering when someone would come. The floor has been talking to me. All morning. The floor has been saying things. The floor has been telling me about the dedication. The floor has been telling me about Margery."',
    ],
    aside: 'On Coach Brant\'s desk, a small bell pin. The same pin as Mrs. Cotton\'s. The same pin as everyone\'s. There are seven pins.',
    choices: [
      {
        label: 'What has the floor been saying?',
        note: 'The floor talks. Listen.',
        next: 'long-137',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'You have a bell pin.',
        note: 'A statement. He will explain.',
        next: 'long-138',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-137': {
    id: 'long-137',
    pageNumber: 137,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 4 of 19',
    title: 'The Time Capsule',
    body: [
      'Under the floorboards, beside the door, a time capsule. Sealed 1987. The capsule is a metal box, the size of a shoebox, with a brass plate on top. The plate reads: TIME CAPSULE — EASTWOOD MIDDLE SCHOOL — TO BE OPENED 2037 — DO NOT OPEN BEFORE.',
      'It is 2027. It is ten years early. The capsule has not been waiting ten more years. The capsule has been waiting for you.',
    ],
    aside: 'On the brass plate, beneath the engraving, in yellow pencil: or the third one. — m.v.',
    choices: [
      {
        label: 'Open the capsule',
        note: 'It is for you. Open it.',
        next: 'long-138',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Should I open it?',
        note: 'A question. The answer is yes.',
        next: 'long-139',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-138': {
    id: 'long-138',
    pageNumber: 138,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 5 of 19',
    title: 'Coach Brant Tells You What the Floor Has Been Saying',
    body: [
      'He says, "The floor has been saying things. The floor has been saying, \'She is tired.\' The floor has been saying, \'He is tired.\' The floor has been saying, \'The bell is tired.\' The floor has been saying, \'Today is the day.\' The floor has been saying, \'The third one is coming.\' The floor has been saying, \'The third one is here.\' The floor has been saying, \'Finally.\'"',
      'He pauses. "I have been listening to the floor for thirty years. The floor has never spoken before today. Today, the floor cannot stop. The floor is the door. The door is the floor. They are the same. The door has been closed since 1987. The floor has been the door, closed. The floor is finally opening."',
    ],
    aside: 'On Coach Brant\'s bell pin, the tiny bell is ringing. Faintly. The way all the bells ring, on this morning.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'He knows. Take you.',
        next: 'long-139',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Were you on the gym floor, the day of the dedication?',
        note: 'A question. He was. He saw.',
        next: 'long-141',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-139': {
    id: 'long-139',
    pageNumber: 139,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 6 of 19',
    title: 'Coach Brant Was on the Gym Floor',
    body: [
      'He says, "I was eleven. I was on the gym floor. I was standing three feet from Margery. I saw her. Yellow ribbon. Sideways grin. I saw Dr. Wexler pull the rope. I heard the bell. The bell was wrong. The bell was the wrong sound. I saw Margery look at Helen. I saw her say something. I could not hear what. And then she was not there."',
      '"I told the police. They did not believe me. They said, \'Kid, what did you really see?\' I said, \'I saw her disappear.\' They said, \'Kids do not disappear. Kids run away. Kids are kidnapped. Kids do not disappear.\' I said, \'She did.\' They said, \'Okay, kid. Go home.\' I went home. I came back. I have been coming back ever since."',
    ],
    aside: 'On Coach Brant\'s desk, a small photograph. Margery. Yellow ribbon. He has been keeping it since 1987. He was in love with her, the way eleven-year-olds are in love. He has never told anyone.',
    choices: [
      {
        label: 'You loved her.',
        note: 'A statement. He will not deny it.',
        next: 'long-141',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'What did she say, to Helen?',
        note: 'A question he has been asking himself.',
        next: 'long-142',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-140': {
    id: 'long-140',
    pageNumber: 140,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 7 of 19',
    title: 'You Open the Time Capsule',
    body: [
      'You open the capsule. The capsule is heavier than it looks. Inside, on a piece of velvet: a yellow ribbon. A brass key — the twin of yours. A photograph of Margery, in her yellow ribbon, signed. A notebook, black cover, with rubber band. A small bell, brass, the size of a thumb.',
      'You pick up the bell. The bell rings, faintly, when you touch it. The bell is ringing. The bell has been ringing since 1987. The bell has been waiting in this capsule, ringing, for forty years. No one could hear it. You can.',
    ],
    aside: 'On the inside of the capsule lid, in handwriting you recognize as Margery\'s: for the third one. the seven together are the key. the bell together with the others opens the door the brass key cannot. — m.v.',
    choices: [
      {
        label: 'Take everything',
        note: 'It is yours. Take it.',
        next: 'long-141',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'What is the bell for?',
        note: 'A question. Coach Brant might know.',
        next: 'long-142',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Ring the bell',
        note: 'A dangerous choice.',
        next: 'long-146',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-141': {
    id: 'long-141',
    pageNumber: 141,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 8 of 19',
    title: 'You Leave the Capsule',
    body: [
      'You leave the capsule. You stand. The floor is still the floor. The door is still the door. The morning is still the morning. Everything is the way it was.',
      'Except you. You are different. You are the kid who found the time capsule and did not open it. The morning knows. The morning will not forget. The morning will let you go. For now.',
    ],
    aside: 'Under the floor, the capsule waits. It has been waiting forty years. It can wait a little longer.',
    choices: [
      {
        label: 'Go home',
        note: 'You have seen enough.',
        next: 'long-142',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Come back tomorrow',
        note: 'A deferral.',
        next: 'long-143',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-142': {
    id: 'long-142',
    pageNumber: 142,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 9 of 19',
    title: 'Coach Brant Tells You Why He Stayed',
    body: [
      'He says, "I stayed because Arnold asked me to. I was eleven. Arnold was the janitor. Arnold was my friend. Arnold was the only adult who took me seriously. When I told him what I saw, he believed me. He said, \'Kid, you saw right. She went through a door.\' I said, \'A door?\' He said, \'A door. Under the gym floor. The bell is the door. The bell rang, and the door opened, and she went through.\' I said, \'How do you know?\' He said, \'Because I have been keeping the door. Because I am the janitor.\'"',
      '"He said, \'Kid, I need someone to watch the floor. I need someone to be here, when the floor is pulled up. I will not be here. I will be down there. With her. I need someone to be here, when the third one comes.\' I said, \'The third one?\' He said, \'You will know. The third one is the funny one. The one who looks sideways. The one who has the dreams. When the third one comes, take them to the floor. Show them the door.\' I said, \'Okay, Arnold.\' He said, \'Thank you, kid.\' He went down, the next year. He did not come back up. I have been watching the floor ever since."',
    ],
    aside: 'On Coach Brant\'s wall, a photograph of Arnold Vance, shaking the hand of an eleven-year-old Coach Brant. The photograph is from 1987.',
    choices: [
      {
        label: 'I am the third one.',
        note: 'A statement. He has been waiting to hear it.',
        next: 'long-143',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Arnold was a good man.',
        note: 'A small thing to say. The right thing.',
        next: 'long-144',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-143': {
    id: 'long-143',
    pageNumber: 143,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 10 of 19',
    title: 'Coach Brant Loved Her',
    body: [
      'He says, "Yes. The way eleven-year-olds do. I have never stopped. I have also stopped. Both. I loved her. I did not know her, the way Ashford did, the way your mother did. I loved her from three feet away. I loved her from across the gym. I loved her from the bleachers."',
      '"I have been in love with a girl who has been under the gym floor for forty years. I have also been in love with other people. I have been married. I have been divorced. I have been in love. But the love, the first love, the eleven-year-old love, has never stopped. The love has been ringing, the way the bell has been ringing. The love has been waiting for this morning. The love is ready."',
    ],
    aside: 'On Coach Brant\'s desk, a small velvet box. Inside the box, a ring. He has been carrying the ring since 1987. He bought it, with his allowance, the week before the dedication. He never gave it to her. The ring is still in the box.',
    choices: [
      {
        label: 'Give her the ring. When you see her.',
        note: 'A suggestion. The kind that closes a circle.',
        next: 'long-144',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'She knows.',
        note: 'A statement.',
        next: 'long-145',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-144': {
    id: 'long-144',
    pageNumber: 144,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 11 of 19',
    title: 'She Said, "So You Can Find Me"',
    body: [
      'Coach Brant says, "Helen told me, after, what Margery said. \'So you can find me.\' I have been hearing that, in my head, for forty years. I have also not been hearing it. Both."',
      '"I have been trying to find her. I have not been able to. I am not the one. I am the one who watches. The one who waits. The one who takes the third one to the door. I am the witness. Arnold was the keeper. Ashford is the waiter. Helen is the mother. Ms. Penhaligon is the reader. Mrs. Cotton is the cook. Wexler is the one who rang. We are the seven. We have been waiting."',
    ],
    aside: 'On the wall, the photograph of Arnold and Coach Brant has gained a third figure. Margery. Standing between them. Yellow ribbon. Sideways grin. The photograph has decided to include her.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-145',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am the third one.',
        note: 'A statement.',
        next: 'long-147',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-145': {
    id: 'long-145',
    pageNumber: 145,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 12 of 19',
    title: 'You Take Everything',
    body: [
      'You take everything from the capsule. The ribbon. The key. The photograph. The notebook. The bell. The capsule is lighter now. You are heavier. Both. The way everything is both.',
      'You stand. The floor is still the floor. The door is still the door. The morning is still the morning. But you have the seven things. Or most of them. The bell. The key. The ribbon. The notebook. The photograph. The pin. The toast hall pass. You have been collecting them all morning. You have almost all of them. You are almost ready.',
    ],
    aside: 'In your backpack, all the things hum, very faintly, the same note. The note is the note of the bell. The note is the note of the morning. The note is ready.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You have what you need.',
        next: 'long-147',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Find the seventh thing first',
        note: 'There are seven. You have six.',
        next: 'long-148',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-146': {
    id: 'long-146',
    pageNumber: 146,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 13 of 19',
    title: 'The Bell Is the Seventh',
    body: [
      'Coach Brant says, "I do not know what the bell is for. Arnold said, \'The bell is the seventh. The bell is what the door needs, besides the key.\' I did not understand. I do not understand now. But I think Margery knew. Margery left the bell in the capsule. Margery left the note. Margery has been thinking about this for forty years."',
      '"The bell is the seventh of seven. The key. The ribbon. The notebook. The photograph. The pin. The toast hall pass. The bell. Seven things. Together, they are the key. Together, they open the door the brass key alone cannot. Or together, they close the door. Or together, they do something else. I do not know. Margery will tell you. When you go down."',
    ],
    aside: 'On the bell, very faintly, in engraving: ring me at the right hour. — m.v. The bell has been waiting to be rung at the right hour.',
    choices: [
      {
        label: 'What is the right hour?',
        note: 'The biggest question.',
        next: 'long-147',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Ring the bell now',
        note: 'A dangerous choice.',
        next: 'long-148',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-147': {
    id: 'long-147',
    pageNumber: 147,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 14 of 19',
    title: '"I Am the Third One"',
    body: [
      'You say it. Coach Brant nods. He says, "I know. I have been waiting for you for forty years. I have also been dreading this morning. Both."',
      'He stands. He takes the bell pin from his desk. He presses it into your hand. He says, "Take my pin. You have Mrs. Cotton\'s. You have Ms. Penhaligon\'s, in the box. You will get Ashford\'s. You will get the yearbook editor\'s. You will get Wexler\'s. Six pins. The seventh was Margery\'s. The seventh is down there. With her."',
    ],
    aside: 'On Coach Brant\'s desk, the photograph of Arnold and Coach Brant and Margery is smiling. All three of them. The photograph has been waiting to smile.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-148',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Come with me.',
        note: 'A request. He will refuse.',
        next: 'long-149',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-148': {
    id: 'long-148',
    pageNumber: 148,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 15 of 19',
    title: 'She Knows',
    body: [
      'You say, "She knows." Coach Brant looks at you. He weeps, a little. He says, "You think?" You say, "Yes." He weeps, a little more. He says, "Thank you. I have been needing to hear that. From someone."',
      'He wipes his face. He stands. He is taller than you thought. He is also smaller. Both. He says, "Okay. Let us go. The door is waiting. The morning is waiting. Margery is waiting. Arnold is waiting. Let us go."',
    ],
    aside: 'On Coach Brant\'s desk, the velvet box is in his hand. He is taking it with him. He is going to give her the ring, finally.',
    choices: [
      {
        label: 'Walk with him to the door',
        note: 'He has been waiting to walk you.',
        next: 'long-149',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give her the ring. Tell her it is from you.',
        note: 'A request.',
        next: 'long-150',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-149': {
    id: 'long-149',
    pageNumber: 149,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 16 of 19',
    title: 'Coach Brant Will Give Her the Ring',
    body: [
      'He says, "I will. I have been carrying it for forty years. I bought it with my allowance. It cost three dollars and twenty-five cents. It is a toy ring. It is the most valuable thing I have ever owned."',
      'He puts the velvet box in his pocket. He says, "When you go down, take it. Give it to her. Tell her it is from me. Tell her I have been carrying it. Tell her I love her. Tell her I have also stopped loving her. Both. Tell her I am sorry I did not give it to her, the day before. Tell her I am glad I can give it to her, today."',
    ],
    aside: 'On the velvet box, in childish handwriting from 1987: for m.v. — from c.b. The box has been waiting to be delivered.',
    choices: [
      {
        label: 'Take the ring',
        note: 'A delivery. Forty years late.',
        next: 'long-150',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Come with me. Give it to her yourself.',
        note: 'A request.',
        next: 'long-151',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-150': {
    id: 'long-150',
    pageNumber: 150,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 17 of 19',
    title: 'The Seven',
    body: [
      'Coach Brant says, "The seven. We are the seven. Arnold was the keeper. He had the keys. He went down. Ashford is the waiter. He has the brass key. He has been waiting. Helen is the mother. She has the ribbon. She has been carrying. Ms. Penhaligon is the reader. She has the book. She has been reading. Mrs. Cotton is the cook. She has the Jell-O. She has been keeping. Wexler is the ringer. He has the bell rope. He has been hiding. I am the witness. I have the photograph. I have been watching."',
      '"Margery is the seventh. Margery is the one. Margery is the door. Margery has been all of us, in some way. The door picks the funny one. The door picks the one who is all of us. The door picks the one who can hold all of us."',
    ],
    aside: 'On the wall, the photograph has gained a seventh figure. You. Standing behind all of them. The photograph has decided to include you.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-151',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am the third one, not the seventh.',
        note: 'A clarification.',
        next: 'long-152',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-151': {
    id: 'long-151',
    pageNumber: 151,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 18 of 19',
    title: 'You Take the Pins',
    body: [
      'You take the pin. The pin is warm. The pin is the sixth. You have six now. Or seven. The pins have been collecting.',
      'Coach Brant says, "You have six. The seventh is Margery\'s. Take the six down. She will give you the seventh. The seven together are the key. The seven together open the door the brass key alone cannot."',
    ],
    aside: 'In your hand, the six pins hum, very faintly, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Take the pins. Go to the door.',
        note: 'You have what you need.',
        next: 'long-152',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'I need Wexler\'s pin too.',
        note: 'The seventh of the seven was Wexler.',
        next: 'long-153',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'I am not going.',
        note: 'A refusal.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-152': {
    id: 'long-152',
    pageNumber: 152,
    chapter: 'The Gym Floor\'s Secret',
    eyebrow: 'The Gym Floor\'s Secret · scene 19 of 19',
    title: 'Coach Brant Walks You to the Door',
    body: [
      'He walks you to the door. The door is in the floor. The door has a brass handle. The handle is shaped like a bell. He kneels. He does not touch the door. The door does not let him. He says, "Okay. This is where I stop. The rest is yours. Go. Decide. Come back, if you can. If you cannot, I will understand. I will also not forgive you. But I will understand."',
      'He takes the velvet box out of his pocket. He puts it in your hand. He says, "Give this to her. Tell her it is from me. Tell her I have been carrying it. Tell her I love her. Tell her I have also stopped loving her. Both. Tell her I am sorry I did not give it to her, the day before. Tell her I am glad I can give it to her, today."',
    ],
    aside: 'On the velvet box, the handwriting is still there. for m.v. — from c.b. The box has been waiting to be delivered. The box is finally going to be delivered.',
    choices: [
      {
        label: 'Take the ring. Go down. Deliver it.',
        note: 'A delivery. Forty years late.',
        next: 'long-153',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Come with me. Please.',
        note: 'A request.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'I am not going. I am sorry.',
        note: 'A refusal.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-153': {
    id: 'long-153',
    pageNumber: 153,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 1 of 19',
    title: 'The Yearbook Editor Has Been Waiting',
    body: [
      'The yearbook room is across the hall from the library. The door has a hand-lettered sign: YEARBOOK — DO NOT ENTER WITHOUT PERMISSION. The permission is optional today. The door is unlocked. You enter.',
      'Inside: long tables, layout boards, photographs pinned to every surface. A girl your age is at the far table, cropping photographs with scissors. She has black hair and a serious face. She does not look up. She says, "I have been waiting for you. My name is Hollis. I am the yearbook editor. I have been the yearbook editor since fourth grade. The school let me, because no one else wanted it. I have been keeping things."',
    ],
    aside: 'On Hollis\'s lanyard, the small bell pin. The same pin. The seventh pin is in the basement. Hollis has the sixth.',
    choices: [
      {
        label: 'What have you been keeping?',
        note: 'She has been waiting to be asked.',
        next: 'long-154',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'You are one of the seven.',
        note: 'A statement.',
        next: 'long-159',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Show me the photographs.',
        note: 'The photographs are why you are here.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-154': {
    id: 'long-154',
    pageNumber: 154,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 2 of 19',
    title: 'The Negatives Show More Than the Photographs',
    body: [
      'She opens a drawer in the layout table. Inside: a stack of negatives, a stack of photographs, a small notebook. She says, "I have been keeping these since fourth grade. My grandmother gave them to me. She was the yearbook editor in 1987. She took the dedication photograph. She took all the photographs. She had the negatives. The negatives are different from the photographs."',
      'She pulls out a negative. Holds it up to the light. The negative is the dedication photograph. In the negative, in the back row, in the yellow ribbon: Margery. In the negative, Margery is not the only one. In the negative, beside her, two more figures. Transparent. Older. Arnold. And someone else. Someone you do not recognize.',
    ],
    aside: 'In the negative, the third figure is wearing a yellow ribbon. The third figure is the first one. E.M. 1907.',
    choices: [
      {
        label: 'Who is the third figure?',
        note: 'A question. She does not know.',
        next: 'long-155',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Can I have the negative?',
        note: 'A request.',
        next: 'long-156',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-155': {
    id: 'long-155',
    pageNumber: 155,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 3 of 19',
    title: 'Hollis Is One of the Seven',
    body: [
      'She says, "Yes. My grandmother was Margery\'s friend. The other one. The one no one mentions. Her name was Vivian. Vivian and Margery were friends since kindergarten. Vivian was not on the gym floor, the day of the dedication. Vivian was at home, sick. Vivian did not see Margery go through. Vivian spent her whole life wishing she had."',
      '"My grandmother gave me the pin when I was nine. She said, \'Hollis, the pin is for the yearbook editor. The yearbook editor keeps the photographs. The photographs are the door\'s memory. The door cannot remember without the photographs. Someone has to keep them.\' I have been keeping them. I have been waiting for you."',
    ],
    aside: 'On the wall, a photograph of Vivian at twelve. Beside Margery. Both in yellow ribbons. The photograph has been here since 1987.',
    choices: [
      {
        label: 'Tell me about Vivian.',
        note: 'A request.',
        next: 'long-156',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Show me the photographs.',
        note: 'The photographs are why you are here.',
        next: 'long-157',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-156': {
    id: 'long-156',
    pageNumber: 156,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 4 of 19',
    title: 'The Photographs Blink',
    body: [
      'She shows you the photographs. They are pinned to a board, the way yearbook photographs are pinned. Each one is a candid from 1987. Students in the hallway. Students in the cafeteria. Students in the gym. Margery is in some of them. In some of them, she is not. In some of them, she is both — there and not there.',
      'In the photographs where Margery is both, the photographs blink. Not the whole photograph. Just Margery. She blinks. The photographs of other students do not blink. The photographs of Margery blink. The photographs have been blinking since 1987. Hollis has been the only one who noticed.',
    ],
    aside: 'In one photograph, Margery is looking at the camera. In another, taken a moment later, she is looking away. In a third, taken a moment after that, she is looking back. The photographs have been having a conversation with the camera, for forty years.',
    choices: [
      {
        label: 'Why do they blink?',
        note: 'A question. She has been wondering.',
        next: 'long-157',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take down the photograph of Margery looking at the camera',
        note: 'The photograph is for you.',
        next: 'long-158',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-157': {
    id: 'long-157',
    pageNumber: 157,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 5 of 19',
    title: 'E.M., the First One, 1907',
    body: [
      'She says, "I do not know. My grandmother did not know. She said, \'The negative shows what the photograph hides.\' The photograph hides the first one. The first one was in 1907. The first one was the first funny one. The first one who went through."',
      '"The school was built in 1907. The school was built on the site of an older building. The older building was a church. The church had a bell. The bell is the same bell. The church was torn down. The school was built. The bell was kept. The bell was put in the tower. The bell was rung, the first time, in 1907. The bell picked. The bell picked the first one. E.M."',
    ],
    aside: 'On the wall, a photograph from 1907. The first school building. The bell tower is the same bell tower. The first one is in the photograph. Standing in the back row. Yellow ribbon.',
    choices: [
      {
        label: 'What was E.M.\'s name?',
        note: 'A question. The library might know.',
        next: 'long-158',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Is E.M. down there too?',
        note: 'A question. The answer is yes.',
        next: 'long-160',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-158': {
    id: 'long-158',
    pageNumber: 158,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 6 of 19',
    title: 'The Negative Is Warm',
    body: [
      'You take the negative. The negative is warm. The negative is the same warm as everything. The negative is the same warm as the bell, the key, the ribbon, the toast hall pass, the chalk key, the pin. The negative is the same warm. The negative is ready.',
      'You hold the negative up to the light. In the negative, three figures. Margery. Arnold. E.M. All three. Yellow ribbons. Looking at you. The negative is looking at you. The negative has been looking at you, for forty years.',
    ],
    aside: 'In the negative, beneath the three figures, in tiny writing: come down. — m.v., a.v., e.m.',
    choices: [
      {
        label: 'Take the negative. Go to the door.',
        note: 'You have what you need.',
        next: 'long-160',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Show me more.',
        note: 'There are more negatives.',
        next: 'long-161',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-159': {
    id: 'long-159',
    pageNumber: 159,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 7 of 19',
    title: 'More Negatives',
    body: [
      'She shows you more negatives. Each one is a candid from 1987. Each one shows Margery. Each one shows, in the negative, more than the photograph. In one, Margery is talking to a figure no one else can see. In another, Margery is holding a key. In another, Margery is pointing at the floor.',
      'In the last negative, Margery is looking at the camera. She is holding up a small sign. The sign reads, in handwriting you recognize: I am coming back. Tell the third one. — m.v.',
    ],
    aside: 'On the back of the last negative, in pencil: 1987 — the day before the dedication. — v.',
    choices: [
      {
        label: 'Take all the negatives',
        note: 'You should.',
        next: 'long-160',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'The day before. She knew.',
        note: 'A realization.',
        next: 'long-161',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-165',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-160': {
    id: 'long-160',
    pageNumber: 160,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 8 of 19',
    title: 'Vivian, the Eighth',
    body: [
      'She says, "Vivian was my grandmother. She was Margery\'s best friend, the one no one mentions. The seven are the ones who knew. Vivian was the eighth. The one who did not know. The one who was sick, the day of the dedication. The one who was not on the gym floor. The one who survived."',
      '"Vivian spent her whole life wishing she had been there. Wishing she had gone through instead. Wishing she had been the one. The way your mother has wished. The way Ashford has wished. The way all of us have wished. The seventh was supposed to be Vivian. But Vivian was sick. The seventh became the door. The door became the seventh. The door is also one of us. The door is also waiting."',
    ],
    aside: 'On the wall, the photograph of Vivian has a yellow ribbon. She started wearing it the day after the dedication. She wore it until she died.',
    choices: [
      {
        label: 'Vivian was supposed to be the seventh?',
        note: 'A question. The answer is complicated.',
        next: 'long-161',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-162',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-161': {
    id: 'long-161',
    pageNumber: 161,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 9 of 19',
    title: 'You Take Hollis\'s Pin',
    body: [
      'She takes the pin off her lanyard. She hands it to you. The pin is warm. The pin is the same warm as everything. The pin is the sixth. You have six now. Or seven. The pins have been collecting.',
      'Hollis says, "You have six. The seventh is Margery\'s. Take the six down. She will give you the seventh. The seven together are the key. The seven together open the door the brass key alone cannot."',
    ],
    aside: 'In your hand, the six pins hum, very faintly, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Take the pins. Go to the door.',
        note: 'You have what you need.',
        next: 'long-162',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I need Wexler\'s pin too.',
        note: 'The seventh of the seven was Wexler.',
        next: 'long-163',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-162': {
    id: 'long-162',
    pageNumber: 162,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 10 of 19',
    title: 'Why the Photographs Blink',
    body: [
      'She says, "I do not know. I think she is still there. The photographs are the only place she can be seen. From this side. The photographs are the door, in a different shape. The photographs are also both. The photographs are photographs. The photographs are also doors."',
      '"When you go down, she will be there. She will be the same as the photographs. Blinking. Looking. Waiting. She has been waiting for forty years. The photographs have been her way of waiting. The photographs have been her way of being here."',
    ],
    aside: 'On the wall, one of the photographs blinks at you. The blink is slower than a normal blink. The blink is a kind of greeting.',
    choices: [
      {
        label: 'Blink back at the photograph',
        note: 'A small thing. A greeting.',
        next: 'long-163',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-164',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-163': {
    id: 'long-163',
    pageNumber: 163,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 11 of 19',
    title: 'The Blinking Photograph',
    body: [
      'You take the photograph down. The photograph is looking at you. The photograph is blinking. The photograph is also still. Both. The photograph is in your hand. The photograph is warm.',
      'The photograph is the same warm as everything else. The photograph is the same warm as the bell, the key, the ribbon. The photograph is ready. The photograph is yours.',
    ],
    aside: 'On the back of the photograph, in handwriting you recognize as Margery\'s: this is me. the me that is here. take me down. — m.v.',
    choices: [
      {
        label: 'Take the photograph. Go to the door.',
        note: 'You have what you need.',
        next: 'long-164',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Can she speak, through the photograph?',
        note: 'A question.',
        next: 'long-166',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-164': {
    id: 'long-164',
    pageNumber: 164,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 12 of 19',
    title: 'She Has Been Watching You',
    body: [
      'She says, "Yes. She has been watching you, through the photographs, since you were six. She has been waiting for you to come here. She has been waiting for you to see her. The photographs are her way of being here. The photographs are her way of being with us."',
      '"When you were six, you came into the yearbook room. You did not know why. You looked at the photographs. You did not see her blink. But she saw you. She has been watching you since."',
    ],
    aside: 'On the wall, the photographs of Margery are all looking at you now. They were not all looking at you before.',
    choices: [
      {
        label: 'I remember. I was six.',
        note: 'A memory. A real one.',
        next: 'long-166',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-167',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-165': {
    id: 'long-165',
    pageNumber: 165,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 13 of 19',
    title: 'Three of Them, Ringing',
    body: [
      'She says, "Yes. The first one is down there. With Margery. With Arnold. The bell has been ringing for one hundred and twenty years. Three of them, ringing it. The bell is three times as loud as it was. Or three times as quiet. They cannot tell anymore."',
      '"The first one has been ringing since 1907. The first one is the most tired. The first one has been ringing for one hundred and twenty years. The first one is ready. The first one is also patient. The first one will wait. The first one has been waiting."',
    ],
    aside: 'On the wall, the photograph from 1907 has three figures now. E.M. in the back row. And, beside her, two more. Older. The first one is not the first. The first one is also the third. The door has been picking longer than anyone knew.',
    choices: [
      {
        label: 'Who were the others?',
        note: 'A question. The library might know.',
        next: 'long-166',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-167',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-166': {
    id: 'long-166',
    pageNumber: 166,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 14 of 19',
    title: 'You Take All the Negatives',
    body: [
      'You take all the negatives. The negatives are in your backpack. The negatives are humming. The negatives are the same note as everything else. The negatives are almost complete.',
      'You have almost everything. The bell. The key. The ribbon. The notebook. The photograph. The pins. The toast hall pass. The chalk key. The negatives. The homework. The red pen. The coffee cup. The ring. You have almost all of it. You are almost ready.',
    ],
    aside: 'In your backpack, all the things hum, very faintly, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You have what you need.',
        next: 'long-167',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Find Wexler first',
        note: 'The seventh of the seven.',
        next: 'long-168',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-167': {
    id: 'long-167',
    pageNumber: 167,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 15 of 19',
    title: 'She Knew. She Was Preparing. For You.',
    body: [
      'She says, "Yes. She knew. She was preparing. For you. She left the negatives. She left the photographs. She left the notebook. She left the bell. She left the key. She left the ribbon. She left the toast hall pass. She left the chalk key. She left the homework. She left the pin. She left everything. For you."',
      '"She has been preparing for forty years. She has been leaving things, all over the school, with everyone she trusted, for the third one. For you. She knew you would come. She knew you would find them. She has been waiting."',
    ],
    aside: 'On the wall, the photographs of Margery are all smiling now. They were not all smiling before.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-168',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am sorry it took so long.',
        note: 'An apology.',
        next: 'long-169',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-168': {
    id: 'long-168',
    pageNumber: 168,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 16 of 19',
    title: 'The Door Does Not Explain',
    body: [
      'She says, "Yes. Or no. The door picks who it picks. Vivian was not picked. Margery was. The door does not explain. The door does not choose, the way we choose. The door is the door. The door has been picking since 1907. The door will keep picking. The door does not care who we wish it had picked."',
      '"Vivian wished her whole life. Vivian wished she had been picked. Vivian wished she had been on the gym floor. Vivian wished she had been the one. Vivian was not. Vivian was the one who survived. Vivian was the one who kept the photographs."',
    ],
    aside: 'On the wall, the photograph of Vivian is smiling. The photograph of Vivian has been waiting to smile.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-169',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I am the third one. I am going down.',
        note: 'A statement.',
        next: 'long-170',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-169': {
    id: 'long-169',
    pageNumber: 169,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 17 of 19',
    title: 'You Blink Back',
    body: [
      'You blink at the photograph. The photograph blinks back. Faster. The photograph is glad to be seen. The photograph is glad to be greeted. The photograph is glad.',
      'You blink again. The photograph blinks again. You and the photograph are having a conversation. In blinks. The conversation is short. The conversation is also long. Both. The conversation is: hello. I see you. I am here. I am coming. The photograph answers, in blinks: I know. I have been waiting. I am ready.',
    ],
    aside: 'On the wall, the other photographs of Margery are also blinking. They are all blinking at you. They are all glad.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'A decision. She is waiting.',
        next: 'long-170',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take the photograph',
        note: 'You should.',
        next: 'long-171',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-170': {
    id: 'long-170',
    pageNumber: 170,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 18 of 19',
    title: 'She Speaks Through the Photograph',
    body: [
      'You hold the photograph. You say, "Margery." The photograph blinks. The photograph is listening. You say, "I am here. I am coming. I have the things you left. I have almost all of them. I am almost ready."',
      'The photograph blinks. The blinks are faster now. The blinks are a kind of speaking. The blinks say: I know. I have been watching. I am ready. Come. The bell is ready. Arnold is ready. E.M. is ready. We are all ready. Come.',
    ],
    aside: 'In your hand, the photograph is very warm. The photograph is the same warm as everything. The photograph is the same warm as the bell.',
    choices: [
      {
        label: 'I am coming.',
        note: 'A promise.',
        next: 'long-171',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'I am afraid.',
        note: 'A confession.',
        next: 'long-172',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'I am not coming. I am sorry.',
        note: 'A refusal.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-171': {
    id: 'long-171',
    pageNumber: 171,
    chapter: 'The Yearbook Room',
    eyebrow: 'The Yearbook Room · scene 19 of 19',
    title: 'You Leave the Yearbook Room',
    body: [
      'You leave the yearbook room. Hollis watches you go. She does not say goodbye. She does not need to. She will see you again. Or she will not. Both. The way everything is both.',
      'You walk down the hallway. The hallway is the hallway. The hallway is also the door. The hallway is also the morning. Both. All. You walk down the hallway. The hallway walks with you. The morning walks with you. The door walks with you. All of them walk with you. You are ready. You have always been ready.',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is the note of the morning. The note is complete. The note is ready.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are ready.',
        next: 'long-172',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Find Dr. Wexler first',
        note: 'He has the seventh pin.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home',
        note: 'You have everything.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-172': {
    id: 'long-172',
    pageNumber: 172,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 1 of 19',
    title: 'There Is a Substitute in Homeroom',
    body: [
      'You walk into homeroom. Mr. Briggs is not there. There is a substitute. The substitute is the kind of substitute who looks like they have been a substitute since 1987. The substitute is also the kind of substitute who has been a substitute since 1987. The substitute is both.',
      'The substitute looks at you. The substitute knows your name. The substitute says, "Good morning. Sit down. We will take attendance."',
    ],
    aside: 'On the substitute\'s lapel, a small bell pin. The same pin. The substitute is one of the seven. The substitute is also not one of the seven. The substitute is the door.',
    choices: [
      {
        label: 'Sit down. Take attendance.',
        note: 'The substitute will call names.',
        next: 'long-173',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Where is Mr. Briggs?',
        note: 'A question. The answer is complicated.',
        next: 'long-178',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave homeroom. Go to the door.',
        note: 'You have no time for substitutes.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-173': {
    id: 'long-173',
    pageNumber: 173,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 2 of 19',
    title: 'The Substitute Calls Names',
    body: [
      'The substitute opens the attendance book. The substitute begins to call names. The substitute calls your name. You say, "Here." The substitute calls Maya\'s name. Maya says, "Here." The substitute calls Devon\'s name. Devon says, "Here." The substitute calls Petey\'s name. Petey is not there. Petey quit. The substitute calls, "Petey?" No one answers.',
      'The substitute keeps calling. The substitute calls names you do not know. "Arnold?" No answer. "Helen?" No answer. "Ashford?" No answer. "Vivian?" No answer. "Margery?" No answer. The substitute marks each one. The substitute does not mark them absent. The substitute marks them present. The substitute is marking them present.',
    ],
    aside: 'On the attendance sheet, the names of the dead are all marked present. The substitute has been marking them present since 1987.',
    choices: [
      {
        label: 'Who are those people?',
        note: 'A question.',
        next: 'long-174',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Margery is not in this class.',
        note: 'A statement.',
        next: 'long-175',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-174': {
    id: 'long-174',
    pageNumber: 174,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 3 of 19',
    title: 'Mr. Briggs Is Also Here',
    body: [
      'The substitute says, "Mr. Briggs is not here today. Mr. Briggs is also here. Both. Mr. Briggs is at home. Mr. Briggs is also in the hallway. Mr. Briggs is also in the gym. Mr. Briggs is also in 1987. The morning is in many places at once. The morning is the morning."',
      'You do not understand. You also understand. Both. The way everything is both. Mr. Briggs is not here. Mr. Briggs is also here. The substitute is the morning, taking attendance.',
    ],
    aside: 'On the substitute\'s desk, the attendance book is the same attendance book Mr. Briggs uses. The attendance book is also a different book. The attendance book has all the names. The attendance book has been keeping all the names, since 1907.',
    choices: [
      {
        label: 'Take attendance. I will wait.',
        note: 'A patient choice.',
        next: 'long-175',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'What are you?',
        note: 'A direct question.',
        next: 'long-176',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-175': {
    id: 'long-175',
    pageNumber: 175,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 4 of 19',
    title: 'They Are the Ones Who Knew',
    body: [
      'The substitute says, "They are the ones who knew. They are also the ones who are. Both. Arnold knew. Helen knew. Ashford knew. Vivian knew. Mrs. Cotton knew. Ms. Penhaligon knew. Coach Brant knew. Hollis knew. Wexler knew. They are all marked present. They are all here. The morning is also here. The morning is taking attendance."',
      '"Margery is also marked present. Margery is also here. Margery is also not here. Both. The morning is marking everyone present. The morning is the only one who can. The morning is the only one who knows who is here."',
    ],
    aside: 'On the attendance sheet, in the margin, in handwriting you do not recognize: i am here. i have been here. — m.v.',
    choices: [
      {
        label: 'Where is here?',
        note: 'A question. The answer is complicated.',
        next: 'long-176',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I am marked present too?',
        note: 'A question. The answer is yes.',
        next: 'long-177',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-176': {
    id: 'long-176',
    pageNumber: 176,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 5 of 19',
    title: 'Margery Is in This Class',
    body: [
      'The substitute says, "Margery is in this class. Margery has been in this class, since 1987. Margery is also not in this class. Both. Margery is in the basement. Margery is also here. The morning is in many places at once. Margery is also in many places at once."',
      '"When you go down, you will find her. You will find her in the gym. You will find her in the classroom. You will find her in the music room. You will find her in the cafeteria. You will find her everywhere. The morning is everywhere. Margery is also everywhere."',
    ],
    aside: 'On the substitute\'s desk, a small photograph of Margery. Yellow ribbon. Sideways grin. The photograph is blinking.',
    choices: [
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-177',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'What are you?',
        note: 'A direct question.',
        next: 'long-179',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-177': {
    id: 'long-177',
    pageNumber: 177,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 6 of 19',
    title: 'The Substitute Finishes Taking Attendance',
    body: [
      'The substitute closes the attendance book. The substitute looks at you. The substitute says, "I have finished. I have marked everyone present. I have marked you present. I have marked the door present. The door is marked present. The door is here."',
      'The substitute stands. The substitute is the door. The substitute walks toward the door of the classroom. The substitute opens the door. Behind the door, the hallway. Behind the door, also the stairs. Behind the door, also the basement. The door is all of these. The substitute is all of these.',
    ],
    aside: 'In the doorway, the substitute is also Margery. The substitute has Margery\'s face. The substitute has also the substitute\'s face. Both. The substitute is the door, and the door is also Margery.',
    choices: [
      {
        label: 'Follow the substitute through the door',
        note: 'The substitute is the door.',
        next: 'long-179',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Wait. What are you?',
        note: 'A question.',
        next: 'long-180',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-178': {
    id: 'long-178',
    pageNumber: 178,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 7 of 19',
    title: 'The Substitute Is the Door',
    body: [
      'The substitute says, "I am the door. I am also the substitute. Both. I am the morning, taking a shape. I am the morning, in the shape of a substitute teacher. The morning is in many shapes. The morning is in the radio. The morning is in the clock. The morning is in the hallway. The morning is in the substitute."',
      '"When you go through me, you will find the door. When you go through the door, you will find me. I am the door. The door is me. The morning is us. We are all the morning. The morning is all us."',
    ],
    aside: 'On the substitute\'s face, the face of Margery. On Margery\'s face, the face of the substitute. On your face, the face of the morning. The morning is wearing all the faces.',
    choices: [
      {
        label: 'Take me through.',
        note: 'A decision.',
        next: 'long-179',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am the morning?',
        note: 'A question.',
        next: 'long-180',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I am not going. I am sorry.',
        note: 'A refusal.',
        next: 'long-184',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-179': {
    id: 'long-179',
    pageNumber: 179,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 8 of 19',
    title: 'Here Is the Door',
    body: [
      'The substitute says, "Here is the school. Here is also the door. Here is also the morning. Both. All. Here is where the door is. Here is where the morning is. Here is where Margery is. Here is where you are. All of these are the same place. All of these are here."',
      '"When you go down, you will be here. When you go up, you will be here. When you stay, you will be here. Here is the only place. Here is also every place. Both. The morning is here. The morning is also everywhere."',
    ],
    aside: 'On the wall, the clock says 7:14. The clock has advanced. The clock is also 7:13. Both. The clock is also here.',
    choices: [
      {
        label: 'Take me through.',
        note: 'A decision.',
        next: 'long-180',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I am here already.',
        note: 'A realization.',
        next: 'long-181',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-180': {
    id: 'long-180',
    pageNumber: 180,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 9 of 19',
    title: 'You Are Marked Present',
    body: [
      'The substitute says, "Yes. You are marked present. You have been marked present, since 7:13 this morning. The morning has been waiting for you. The morning marked you present, the moment you woke up. The morning knew. The morning has always known."',
      '"The attendance book has your name. The attendance book has had your name, since before you were born. The attendance book is the door\'s book. The door has been keeping attendance, since 1907. The door has marked everyone present. The door has marked everyone here."',
    ],
    aside: 'In the attendance book, your name. Beside your name, in pencil, a small mark. The mark is a bell. The mark is the same bell as everywhere.',
    choices: [
      {
        label: 'Take me through.',
        note: 'A decision.',
        next: 'long-181',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am here already.',
        note: 'A realization.',
        next: 'long-182',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-181': {
    id: 'long-181',
    pageNumber: 181,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 10 of 19',
    title: 'The Substitute Walks You to the Door',
    body: [
      'The substitute stands. The substitute walks you out of the classroom. The substitute walks you down the hallway. The substitute walks you past the lockers, past the clocks, past the cafeteria. The substitute walks you to the gym. The substitute is the door, walking you to the door.',
      'At the gym, the substitute stops. The substitute points at the floor. The substitute says, "Here. The door is here. I am also here. Both. All. Go through. I will be there. I am always there."',
    ],
    aside: 'On the substitute\'s face, the face of Margery. The face is smiling. The face is also not smiling. Both. The face is ready.',
    choices: [
      {
        label: 'Go through the door',
        note: 'The substitute is the door.',
        next: 'long-182',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Come with me.',
        note: 'A request.',
        next: 'long-183',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-182': {
    id: 'long-182',
    pageNumber: 182,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 11 of 19',
    title: 'You Are Here Already',
    body: [
      'The substitute says, "Yes. You are here. You have always been here. You will always be here. Here is the only place. Here is also every place. The door is here. The morning is here. Margery is here. You are here."',
      '"You do not need to go through. You are already through. You are already here. The door is you. You are the door. The morning is you. You are the morning. Both. All."',
    ],
    aside: 'On the substitute\'s face, your face. The substitute is you. The substitute has been you, since 7:13 this morning. The substitute has been you, since you were born.',
    choices: [
      {
        label: 'I am here already.',
        note: 'A statement.',
        next: 'long-183',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am the door?',
        note: 'A question.',
        next: 'long-185',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-183': {
    id: 'long-183',
    pageNumber: 183,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 12 of 19',
    title: 'You Are the Door',
    body: [
      'The substitute says, "Yes. You are the door. You are also the morning. You are also Margery. You are all of them. The door is you. The morning is you. Margery is you. You are all of them, and they are all you."',
      '"You do not need to go down. You are already down. You do not need to come up. You are already up. You are here. You are also there. Both. All. The morning is you. You are the morning."',
    ],
    aside: 'On the substitute\'s face, your face. On your face, the substitute\'s face. On Margery\'s face, your face. The faces are all the same face. The face is the morning.',
    choices: [
      {
        label: 'I am here already.',
        note: 'A statement.',
        next: 'long-185',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am the morning.',
        note: 'A statement.',
        next: 'long-186',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-184': {
    id: 'long-184',
    pageNumber: 184,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 13 of 19',
    title: 'The Substitute Tells You a Story',
    body: [
      'The substitute says, "I will tell you a story. Once, there was a school. The school had a bell. The bell was the door. The bell rang. The door opened. A girl went through. The girl has been ringing the bell, since. The bell has been ringing, since. The morning has been waiting, since. The morning has been waiting for someone to come and tell the girl she can stop. You are the someone. You are also the girl. Both. The morning is also the someone. The morning is also the girl. The morning is all of them. The morning is you."',
      '"That is the story. The story is the only story. The story is also every story. Both. The story is the door. The door is the story. You are the door. You are the story. Both. All."',
    ],
    aside: 'On the wall, the clock says 7:14. The clock has also been 7:13, since 1987. Both. The clock is the story, also.',
    choices: [
      {
        label: 'I am the door.',
        note: 'A statement.',
        next: 'long-185',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am the story.',
        note: 'A statement.',
        next: 'long-186',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-185': {
    id: 'long-185',
    pageNumber: 185,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 14 of 19',
    title: 'The Substitute Asks You a Question',
    body: [
      'The substitute says, "I will ask you a question. The question is the only question. The question is also every question. Both. The question is: do you want to stay, or do you want to go?"',
      'You do not need to answer now. You can answer later. You can answer never. The morning will wait. The morning has been waiting. The morning will keep waiting. The morning is patient. The morning is also tired. Both. The morning is ready, for the answer. Whenever it comes.',
    ],
    aside: 'On the substitute\'s face, your face. The face is asking the question. The face is also answering the question. Both. The face is the question and the answer.',
    choices: [
      {
        label: 'I want to stay.',
        note: 'An answer.',
        next: 'long-186',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I want to go.',
        note: 'An answer.',
        next: 'long-187',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-186': {
    id: 'long-186',
    pageNumber: 186,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 15 of 19',
    title: 'The Third Option',
    body: [
      'The substitute says, "There is a third option. The third option is neither staying nor going. The third option is both. The third option is becoming the door. The door is both. The door is also neither. The door is the morning, taking a shape. The door is the morning, in the shape of a door."',
      '"If you become the door, you will be both. You will be here. You will be there. You will be the morning. You will be Margery. You will be Arnold. You will be E.M. You will be all of them. The door will close. Or the door will stay open. Both. The morning will decide. The morning is you."',
    ],
    aside: 'On the substitute\'s face, the face of the door. The door has a face. The face is your face. The face is asking you, to become it.',
    choices: [
      {
        label: 'I will become the door.',
        note: 'A decision. The biggest one.',
        next: 'long-187',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I will not become the door.',
        note: 'A refusal.',
        next: 'long-188',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-187': {
    id: 'long-187',
    pageNumber: 187,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 16 of 19',
    title: 'The Substitute Takes Off the Bell Pin',
    body: [
      'The substitute takes the bell pin off the lapel. The substitute hands it to you. The substitute says, "Take this. This is the seventh pin. The seventh pin is the door\'s pin. The seventh pin is also Margery\'s pin. The seventh pin is also your pin. Both. All. The seventh pin has been waiting for you. Take it."',
      'You take the pin. The pin is warm. The pin is the same warm as everything. The pin is the seventh. You have all seven now. The seven together are the key. The seven together are also the door. Both. All. You are ready. You have been ready. The morning is ready. The morning has been ready.',
    ],
    aside: 'In your hand, all seven pins hum, very faintly, the same note. The note is the note of the bell. The note is complete. The note is ready.',
    choices: [
      {
        label: 'Take the pins. Go to the door.',
        note: 'You have all seven.',
        next: 'long-188',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take the pins. Go to the bell tower.',
        note: 'The bell is also waiting.',
        next: 'long-189',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-188': {
    id: 'long-188',
    pageNumber: 188,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 17 of 19',
    title: 'The Substitute Fades',
    body: [
      'The substitute fades. The substitute is the morning, taking off the shape of a substitute. The morning is also taking off the shape of you. The morning is taking off all the shapes. The morning is becoming just the morning.',
      'The classroom is empty. The attendance book is on the desk. The photograph of Margery is on the desk. The bell pin is in your hand. Everything else is in your backpack. You are ready. You have been ready. The morning is ready. The morning has been ready.',
    ],
    aside: 'On the wall, the clock says 7:14. The clock is also 7:13. Both. The clock is ready. The clock has been ready.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are ready.',
        next: 'long-189',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go to the bell tower',
        note: 'The bell is also waiting.',
        next: 'long-190',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-189': {
    id: 'long-189',
    pageNumber: 189,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 18 of 19',
    title: 'You Look at the Attendance Book',
    body: [
      'You look at the attendance book. The attendance book is on the desk. The attendance book is open. The attendance book has all the names. Your name. Margery\'s name. Arnold\'s name. Helen\'s name. Ashford\'s name. Vivian\'s name. Mrs. Cotton\'s name. Ms. Penhaligon\'s name. Coach Brant\'s name. Hollis\'s name. Wexler\'s name. E.M.\'s name. All the names. All marked present.',
      'Beside each name, a small bell. The bells are the same bell. The bells are all ringing. Faintly. The attendance book is ringing. The attendance book has been ringing, since 1907. The attendance book is ready. The attendance book has been ready.',
    ],
    aside: 'On the last page of the attendance book, in handwriting you recognize as yours: i am here. i have always been here. — me.',
    choices: [
      {
        label: 'Take the attendance book',
        note: 'You should.',
        next: 'long-190',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Leave the book. Go to the door.',
        note: 'The book is for the door.',
        next: 'long-191',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'Leave the book. Go home.',
        note: 'You have enough.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-190': {
    id: 'long-190',
    pageNumber: 190,
    chapter: 'The Substitute Who Knew Names',
    eyebrow: 'The Substitute Who Knew Names · scene 19 of 19',
    title: 'You Take the Attendance Book',
    body: [
      'You take the attendance book. The book is in your backpack. The book is humming. The book is the same note as everything else. The book is complete. You have everything. You are ready. You have been ready.',
      'You walk out of the classroom. The hallway is the hallway. The hallway is also the door. The hallway is also the morning. Both. All. You walk down the hallway. The hallway walks with you. The morning walks with you. The door walks with you. All of them walk with you. You are ready. You have always been ready. The morning is ready. The morning has always been ready.',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is the note of the morning. The note is complete. The note is ready.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are ready.',
        next: 'long-191',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Go to the bell tower',
        note: 'The bell is also waiting.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home',
        note: 'You have everything.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-191': {
    id: 'long-191',
    pageNumber: 191,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 1 of 19',
    title: 'The Music Room Is Playing Backwards',
    body: [
      'The music room is on the second floor. The door is open. Inside: a piano, a record player, a metronome, rows of chairs. The record player is playing the school song backwards. The metronome is ticking in 7:13. The piano is waiting.',
      'A man is at the piano. He is old. He is Mr. Vance — the music teacher, not the janitor. No relation. The coincidence was enjoyed by everyone in 1987. He has been the music teacher since 1971. He has been waiting.',
    ],
    aside: 'On Mr. Vance\'s tie, the small bell pin. The same pin. He is one of the seven. He is the fifth.',
    choices: [
      {
        label: 'I am here.',
        note: 'A statement.',
        next: 'long-192',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Play the school song forwards.',
        note: 'The song is backwards.',
        next: 'long-197',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Play the third note.',
        note: 'The bell note.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-192': {
    id: 'long-192',
    pageNumber: 192,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 2 of 19',
    title: 'Mr. Vance Has Been Waiting',
    body: [
      'He says, "I know. I have been waiting. I have been the music teacher since 1971. I have been keeping the song. The song is the door, in a different shape. The song is also the bell. The song is also the morning. Both. All."',
      '"I was here, in 1987. I heard the bell. The bell was the wrong note. The bell was the third note of the school song, played wrong. The school song has three notes. The first note is the morning. The second note is the door. The third note is the bell. The third note should not be played. Dr. Wexler played it. The bell rang. The door opened. Margery went through."',
    ],
    aside: 'On the piano, a small piece of sheet music. The sheet music is the school song. The third note is marked with a small bell.',
    choices: [
      {
        label: 'Play the school song forwards.',
        note: 'Play it. The right way.',
        next: 'long-193',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Play the third note.',
        note: 'The bell note.',
        next: 'long-194',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-193': {
    id: 'long-193',
    pageNumber: 193,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 3 of 19',
    title: 'The School Song Forwards',
    body: [
      'He plays the school song forwards. The song is the right song. The song is the song you have known since kindergarten. The song is also the door. The song is also the morning. Both. All.',
      'When he finishes, the record player stops. The record player has been playing backwards since 1987. The record player is finally playing forwards. Or the record player is finally silent. Both. The music room is finally the music room.',
    ],
    aside: 'On the wall, the clock says 7:14. The clock has advanced. The clock is also 7:13. Both. The clock is ready.',
    choices: [
      {
        label: 'Play the third note now.',
        note: 'The bell note. Play it, in the right song.',
        next: 'long-194',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Play the song again.',
        note: 'The song is the right song.',
        next: 'long-195',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-194': {
    id: 'long-194',
    pageNumber: 194,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 4 of 19',
    title: 'The Third Note',
    body: [
      'He plays the third note. The note is not a note. The note is a bell. The note is the bell. The bell rings, faintly. The bell has been ringing since 1987. The bell is ringing, finally, in the right place. The bell is ringing, finally, in the music room.',
      'The bell is the door, in a different shape. The bell is the morning, in a different shape. The bell is also the song. The bell is all of them. The bell is ready. The bell has been ready.',
    ],
    aside: 'On the piano, the keys glow, faintly, the same color as the bell-shaped mark. The keys are ready. The keys have been ready.',
    choices: [
      {
        label: 'Ring the bell tower. The real bell.',
        note: 'The bell in the tower. Ring it, at the right hour.',
        next: 'long-195',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-196',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-195': {
    id: 'long-195',
    pageNumber: 195,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 5 of 19',
    title: 'You Take Mr. Vance\'s Pin',
    body: [
      'He takes the pin off his tie. He hands it to you. The pin is warm. The pin is the fifth. You have five now. Or six. Or seven. The pins have been collecting.',
      'He says, "Take the pin. Take the song. Take the third note. Take all of it. It is yours. It has been yours. The morning is yours. The door is yours. The bell is yours. Take it all. Go. Decide."',
    ],
    aside: 'In your hand, the pins hum, very faintly, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Take the pins. Go to the door.',
        note: 'You have what you need.',
        next: 'long-196',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take the pins. Go to the bell tower.',
        note: 'The bell is also waiting.',
        next: 'long-198',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-196': {
    id: 'long-196',
    pageNumber: 196,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 6 of 19',
    title: 'The Song Again',
    body: [
      'He plays the song again. The song is the right song. The song is also every song. The song is also the only song. Both. All. The song is the door, in a different shape. The song is the morning, in a different shape.',
      'When he finishes, the music room is silent. The silence is the right silence. The silence is also the song. Both. The silence is ready. The silence has been ready.',
    ],
    aside: 'On the wall, the clock says 7:14. The clock has also been 7:13. Both. The clock is ready.',
    choices: [
      {
        label: 'Play the third note.',
        note: 'The bell note.',
        next: 'long-198',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-199',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-197': {
    id: 'long-197',
    pageNumber: 197,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 7 of 19',
    title: 'The Song Was Written in 1907',
    body: [
      'He says, "The school song was written in 1907. The school song has three notes. The first note is the morning. The second note is the door. The third note is the bell. The third note was not supposed to be played. The third note was the note that opens the door. The third note was the note that rings the bell."',
      '"The song was written by the first music teacher. The first music teacher was also the first one. E.M. The first one wrote the song. The first one wrote the third note. The first one knew what the third note would do. The first one wrote it anyway. The first one was the door. The first one wanted to be picked. The first one wrote the song, to be picked."',
    ],
    aside: 'On the wall, a portrait of the first music teacher. The portrait is from 1907. The portrait is also you. The portrait has your face. The portrait has always had your face.',
    choices: [
      {
        label: 'I am E.M.?',
        note: 'A question.',
        next: 'long-198',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Play the third note.',
        note: 'The bell note.',
        next: 'long-199',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-203',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-198': {
    id: 'long-198',
    pageNumber: 198,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 8 of 19',
    title: 'You Are E.M.',
    body: [
      'He says, "Yes. Or no. The door picks who it picks. You are the third one. The third one is also the first one. Both. All. E.M. was the first one. E.M. was the first funny one. E.M. was the first one who went through. E.M. has been ringing since 1907. E.M. is down there. With Margery. With Arnold."',
      '"You are the third one. The third one is the one who closes the door. The third one is also the one who opened it. The third one is both. The third one is all of them. The third one is you."',
    ],
    aside: 'On the wall, the portrait has your face. The portrait has always had your face. The portrait has been waiting for you to notice.',
    choices: [
      {
        label: 'I am all of them.',
        note: 'A statement.',
        next: 'long-199',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Play the third note.',
        note: 'The bell note.',
        next: 'long-200',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-199': {
    id: 'long-199',
    pageNumber: 199,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 9 of 19',
    title: 'The Metronome',
    body: [
      'The metronome is ticking in 7:13. The metronome has been ticking in 7:13 since 1987. The metronome is the door, in a different shape. The metronome is also the bell. The metronome is also the morning. Both. All.',
      'You reach out. You stop the metronome. The metronome stops. The music room is silent. The silence is the right silence. The silence is also 7:14. The silence is also the morning, advancing. The silence is ready.',
    ],
    aside: 'On the metronome, in tiny writing: stop me when the third one comes. — m.v. The metronome has been waiting to be stopped.',
    choices: [
      {
        label: 'Play the third note.',
        note: 'The bell note.',
        next: 'long-200',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-201',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-200': {
    id: 'long-200',
    pageNumber: 200,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 10 of 19',
    title: 'The Record Player',
    body: [
      'The record player has stopped. The record player has been playing backwards since 1987. The record player is finally stopped. The record player is also playing forwards. Both. The record player is ready. The record player has been ready.',
      'You take the record off the player. The record is the school song. The record is also the door. The record is also the bell. The record is also the morning. Both. All. The record is yours. The record has been yours.',
    ],
    aside: 'On the record, in tiny writing: play me at the right hour. — m.v. The record has been waiting to be played at the right hour.',
    choices: [
      {
        label: 'Take the record',
        note: 'You should.',
        next: 'long-201',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave the record. Play the third note.',
        note: 'The bell note.',
        next: 'long-202',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-201': {
    id: 'long-201',
    pageNumber: 201,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 11 of 19',
    title: 'You Take the Record',
    body: [
      'You take the record. The record is warm. The record is the same warm as everything. The record is in your backpack. The record is also in the music room. Both. The record is in many places. The record is the door, in many places.',
      'Mr. Vance says, "You have the record. You have the song. You have the third note. You have almost everything. You are almost ready. The morning is almost ready. The door is almost ready. Go. Decide."',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are almost ready.',
        next: 'long-202',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go to the bell tower',
        note: 'The bell is also waiting.',
        next: 'long-204',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-202': {
    id: 'long-202',
    pageNumber: 202,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 12 of 19',
    title: 'Mr. Vance Tells You About 1907',
    body: [
      'He says, "In 1907, the school was built. The school was built on the site of an old church. The church had a bell. The bell was kept. The bell was put in the tower. The bell was rung, the first time, on the day the school opened. The bell picked. The bell picked the first one. E.M. The first one was the music teacher\'s daughter. The first one was twelve. The first one was funny. The first one was sideways."',
      '"The first one went through. The first one has been ringing since. The first one has been ringing for one hundred and twenty years. The first one is the most tired. The first one is ready. The first one is also patient. The first one will wait. The first one has been waiting."',
    ],
    aside: 'On the wall, the portrait of E.M. has your face. The portrait has always had your face. The portrait has been waiting for you to notice.',
    choices: [
      {
        label: 'I am E.M.',
        note: 'A statement.',
        next: 'long-204',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Play the third note.',
        note: 'The bell note.',
        next: 'long-205',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-203': {
    id: 'long-203',
    pageNumber: 203,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 13 of 19',
    title: 'The Sheet Music',
    body: [
      'You look at the sheet music. The sheet music is the school song. The third note is marked with a small bell. Beneath the bell, in handwriting you recognize as Margery\'s: play this note at the right hour. the door will close. or the door will open. both. — m.v.',
      'The right hour is 7:14. The right hour is the hour after the wrong hour. The right hour is the hour the morning has been trying to advance to, since 1987. The right hour is now. The clock says 7:14. The clock has finally advanced. The morning is ready. The morning has been ready.',
    ],
    aside: 'On the wall, the clock says 7:14. The clock has finally advanced. The clock has been waiting, since 1987, to advance.',
    choices: [
      {
        label: 'Play the third note. Now. At the right hour.',
        note: 'The bell note. At the right hour.',
        next: 'long-204',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take me to the bell tower. Ring the real bell, at the right hour.',
        note: 'The bell in the tower.',
        next: 'long-205',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-204': {
    id: 'long-204',
    pageNumber: 204,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 14 of 19',
    title: 'Mr. Vance Gives You the Sheet Music',
    body: [
      'He takes the sheet music off the piano. He hands it to you. He says, "Take this. The sheet music is the door, in a different shape. The sheet music is also the bell. The sheet music is also the morning. Both. All. The sheet music is yours. The sheet music has been yours."',
      'You take the sheet music. The sheet music is warm. The sheet music is the same warm as everything. The sheet music is in your backpack. The sheet music is also on the piano. Both. The sheet music is in many places.',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You have what you need.',
        next: 'long-205',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go to the bell tower',
        note: 'The bell is also waiting.',
        next: 'long-206',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-205': {
    id: 'long-205',
    pageNumber: 205,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 15 of 19',
    title: 'Mr. Vance Tells You About Margery',
    body: [
      'He says, "Margery was my student. She was funny. She was sideways. She was the funniest student I ever had. She was also the saddest. Both. She knew what she was. She knew what the door was. She knew what the bell was. She knew everything. She was twelve."',
      '"She came to me, in September of 1987. She said, \'Mr. Vance, I am supposed to go through a door. I do not want to. But I think I am supposed to.\' I said, \'Margery, you are being dramatic. There is no door.\' She said, \'Mr. Vance. You are the music teacher. You know the third note. You know what the third note does.\' I said, \'Yes.\' She said, \'Then you know the door is real.\' I said, \'Yes.\' She said, \'Then help me.\' I did not help her. I am sorry."',
    ],
    aside: 'On Mr. Vance\'s face, the look of a man who has been sorry for forty years. The look is also the look of a man who has been waiting to be forgiven.',
    choices: [
      {
        label: 'She forgave you. She told me.',
        note: 'A thing Margery said.',
        next: 'long-206',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Play the third note. For her.',
        note: 'The bell note.',
        next: 'long-207',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-206': {
    id: 'long-206',
    pageNumber: 206,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 16 of 19',
    title: 'Mr. Vance Weeps',
    body: [
      'He weeps. The tears are the tears of a man who has been holding them for forty years. He does not make a sound. He just weeps. The tears go down his face. The tears land on the piano keys. The piano keys drink them.',
      'After a long moment, he says, "Thank you. I have been needing to hear that. From someone. From anyone. I did not think it would be you. I am glad it is. I am glad. I am also sorry. Both."',
    ],
    aside: 'On the piano, the keys are wet with his tears. The keys are also dry. Both. The keys are ready.',
    choices: [
      {
        label: 'Play the third note. For her.',
        note: 'The bell note.',
        next: 'long-207',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-208',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-207': {
    id: 'long-207',
    pageNumber: 207,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 17 of 19',
    title: 'Mr. Vance Walks You to the Door',
    body: [
      'He walks you to the door. The door is in the gym. He walks you to the gym. He kneels. He does not touch the door. The door does not let him. He says, "Okay. This is where I stop. The rest is yours. Go. Decide. Come back, if you can. If you cannot, I will understand. I will also not forgive you. But I will understand."',
      'He takes the bell pin off his tie. He hands it to you. He says, "Take this. The pin is the fifth. The pin is also the seventh. Both. All. The pin has been waiting. Take it. Go. Decide."',
    ],
    aside: 'On Mr. Vance\'s face, the look of a man who has been waiting forty years. The look is also the look of a man who has been dreading. Both.',
    choices: [
      {
        label: 'Take the pin. Go down.',
        note: 'You have what you need.',
        next: 'long-208',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Come with me.',
        note: 'A request.',
        next: 'long-209',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-208': {
    id: 'long-208',
    pageNumber: 208,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 18 of 19',
    title: 'The Door Does Not Let the Music Teacher',
    body: [
      'He says, "I cannot. The door does not let the music teacher. The door lets the third one. The door lets the keeper. The door does not let me. I have tried. In 1988, the year after. I went to the door. I knelt. I said, \'Margery. I am sorry. I am here.\' The door did not open. The door did not let me in."',
      '"I am the music teacher. The music teacher does not go in. The music teacher plays. The music teacher waits. The music teacher watches the third one go in. The music teacher does not follow. The music teacher stays. The music teacher has been staying for forty years. The music teacher will stay a little longer."',
    ],
    aside: 'On Mr. Vance\'s face, the look of a man who has accepted his role. The look is also the look of a man who has not. Both.',
    choices: [
      {
        label: 'Thank you for being the music teacher.',
        note: 'A small thing to say.',
        next: 'long-209',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-210',
        consequence: 'You move to the next chapter.',
        tone: 'coral'
      },
      {
        label: 'I am not going. I am sorry.',
        note: 'A refusal.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-209': {
    id: 'long-209',
    pageNumber: 209,
    chapter: 'The Music Room\'s Backwards Song',
    eyebrow: 'The Music Room\'s Backwards Song · scene 19 of 19',
    title: 'You Leave the Music Room',
    body: [
      'You leave the music room. Mr. Vance watches you go. He does not say goodbye. He does not need to. He will see you again. Or he will not. Both. The way everything is both.',
      'You walk down the hallway. The hallway is the hallway. The hallway is also the door. The hallway is also the morning. Both. All. You walk down the hallway. The hallway walks with you. The morning walks with you. The door walks with you. All of them walk with you. You are ready. You have always been ready.',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is the note of the morning. The note is complete. The note is ready.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are ready.',
        next: 'long-210',
        consequence: 'You move on.',
        tone: 'green'
      },
      {
        label: 'Go to the bell tower',
        note: 'The bell is also waiting.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home',
        note: 'You have everything.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-210': {
    id: 'long-210',
    pageNumber: 210,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 1 of 19',
    title: 'Dr. Wexler Has Been in His Office Since 7:13',
    body: [
      'The principal\'s office is on the second floor. The door is closed. The door has a small sign: DR. WEXLER — PRINCIPAL. The sign is the same sign that has been on the door since 1992. The door is locked. The door is also unlocked. Both. You knock. The door opens, before Dr. Wexler can answer. The door is expecting you.',
      'Dr. Wexler is at his desk. He is old. He is nervous. He has been in his office since 7:13 this morning. He has not come out. He has been waiting. He says, "I knew you would come. I have been dreading this morning for forty years. I am glad it is finally here."',
    ],
    aside: 'On Dr. Wexler\'s desk, a small bell pin. The same pin. He is one of the seven. He is the sixth. The seventh is in the basement.',
    choices: [
      {
        label: 'You rang the bell.',
        note: 'A statement.',
        next: 'long-211',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-216',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Where is the dedication plaque?',
        note: 'A question.',
        next: 'long-019',
        consequence: 'You head to the gym.',
        tone: 'ink'
      },
    ],
  },
  'long-211': {
    id: 'long-211',
    pageNumber: 211,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 2 of 19',
    title: 'Dr. Wexler Tells You About Ringing the Bell',
    body: [
      'He says, "Yes. I rang the bell. I was the assistant principal. I organized the dedication. I thought it would be a nice ceremonial touch. I had read about the third bell in the school history. The third bell had not been rung since 1907. I thought it would be fitting. I was wrong. I was very wrong."',
      '"The bell rang. The bell was the wrong sound. The door opened. Margery went through. I did not see her go. I was at the rope. I was looking at the rope. When I looked up, she was not there. Helen screamed. The bell kept ringing. I am sorry. I have been sorry for forty years."',
    ],
    aside: 'On Dr. Wexler\'s face, the look of a man who has been sorry for forty years. The look is also the look of a man who has been hiding. Both.',
    choices: [
      {
        label: 'She forgave you. She told me.',
        note: 'A thing Margery said.',
        next: 'long-212',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-213',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-212': {
    id: 'long-212',
    pageNumber: 212,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 3 of 19',
    title: 'You Take Dr. Wexler\'s Pin',
    body: [
      'He takes the pin off his lapel. He hands it to you. The pin is warm. The pin is the sixth. You have six now. Or seven. The pins have been collecting.',
      'He says, "Take the pin. The pin is the sixth. The seventh is Margery\'s. Take the six down. She will give you the seventh. The seven together are the key. The seven together open the door the brass key alone cannot."',
    ],
    aside: 'In your hand, the pins hum, very faintly, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Take the pin. Go to the door.',
        note: 'You have what you need.',
        next: 'long-213',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Tell me about ringing the bell.',
        note: 'A request.',
        next: 'long-214',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-213': {
    id: 'long-213',
    pageNumber: 213,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 4 of 19',
    title: 'The Dedication Plaque',
    body: [
      'He opens his desk drawer. Inside, the dedication plaque. The plaque reads: EASTWOOD MIDDLE SCHOOL — NEW GYM FLOOR — DEDICATED OCT 23 1987 — RING THE BELL. The plaque is the original. The plaque was removed from the gym in 1992, the year Dr. Wexler became principal. He has been keeping it.',
      'He says, "I removed the plaque. I removed Margery from the records. I removed her from the yearbook. I could not remove her from the dedication page. The dedication page is the page everyone turns to. I have been hiding the plaque, the way I have been hiding everything."',
    ],
    aside: 'On the back of the plaque, in handwriting you recognize as Dr. Wexler\'s: i am sorry. i have been sorry. i will always be sorry.',
    choices: [
      {
        label: 'Take the plaque',
        note: 'You should.',
        next: 'long-214',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'She forgave you. She told me.',
        note: 'A thing Margery said.',
        next: 'long-215',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-214': {
    id: 'long-214',
    pageNumber: 214,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 5 of 19',
    title: 'Dr. Wexler Weeps',
    body: [
      'He weeps. The tears are the tears of a man who has been holding them for forty years. He does not make a sound. He just weeps.',
      'After a long moment, he says, "Thank you. I have been needing to hear that. From someone. From anyone. I did not think it would be her, who forgave me. I thought she would hate me. I have been hating me, for her. She does not hate me. I am glad. I am also sorry. Both."',
    ],
    aside: 'On Dr. Wexler\'s desk, the bell pin is glowing. The pin has been waiting for this moment.',
    choices: [
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-215',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take the plaque',
        note: 'You should.',
        next: 'long-217',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-215': {
    id: 'long-215',
    pageNumber: 215,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 6 of 19',
    title: 'You Take the Plaque',
    body: [
      'You take the plaque. The plaque is warm. The plaque is the same warm as everything. The plaque is in your backpack. The plaque is also on the desk. Both. The plaque is in many places.',
      'Dr. Wexler says, "You have the plaque. You have almost everything. You are almost ready. The morning is almost ready. The door is almost ready. Go. Decide."',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is almost complete.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are almost ready.',
        next: 'long-217',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-218',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-216': {
    id: 'long-216',
    pageNumber: 216,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 7 of 19',
    title: 'Dr. Wexler Tells You Why He Hid',
    body: [
      'He says, "I hid because I was afraid. I was afraid of what I had done. I was afraid of the door. I was afraid of the bell. I was afraid of Margery. I was afraid of the morning. I hid, the way principals hide — behind the desk, behind the plaque, behind the records. I removed Margery from the records because I did not want her to be real. But she was real. She has always been real. The morning has always been real. The door has always been real. I was the only one who was not real. I was the one who was hiding."',
    ],
    aside: 'On Dr. Wexler\'s face, the look of a man who has finally stopped hiding. The look is also the look of a man who does not know what to do, now that he has stopped. Both.',
    choices: [
      {
        label: 'She forgave you. She told me.',
        note: 'A thing Margery said.',
        next: 'long-217',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-218',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-222',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-217': {
    id: 'long-217',
    pageNumber: 217,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 8 of 19',
    title: 'Dr. Wexler Walks You to the Door',
    body: [
      'He walks you to the door. The door is in the gym. He walks you to the gym. He kneels. He does not touch the door. The door does not let him. He says, "Okay. This is where I stop. The rest is yours. Go. Decide. Come back, if you can. If you cannot, I will understand. I will also not forgive you. But I will understand."',
      'He takes the bell pin off his lapel. He hands it to you. He says, "Take this. The pin is the sixth. The pin is also the seventh. Both. All. The pin has been waiting. Take it. Go. Decide."',
    ],
    aside: 'On Dr. Wexler\'s face, the look of a man who has been waiting forty years. The look is also the look of a man who has been dreading. Both.',
    choices: [
      {
        label: 'Take the pin. Go down.',
        note: 'You have what you need.',
        next: 'long-218',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Come with me.',
        note: 'A request.',
        next: 'long-219',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-218': {
    id: 'long-218',
    pageNumber: 218,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 9 of 19',
    title: 'The Door Does Not Let the Principal',
    body: [
      'He says, "I cannot. The door does not let the principal. The door lets the third one. The door lets the keeper. The door does not let me. I have tried. In 1993, the year after I became principal. I went to the door. I knelt. I said, \'Margery. I am sorry. I am the one who rang the bell.\' The door did not open. The door did not let me in."',
      '"I am the principal. The principal does not go in. The principal hides. The principal waits. The principal watches the third one go in. The principal does not follow. The principal stays. The principal has been staying for forty years. The principal will stay a little longer."',
    ],
    aside: 'On Dr. Wexler\'s face, the look of a man who has accepted his role. The look is also the look of a man who has not. Both.',
    choices: [
      {
        label: 'Thank you for being the principal.',
        note: 'A small thing to say.',
        next: 'long-219',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-220',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-219': {
    id: 'long-219',
    pageNumber: 219,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 10 of 19',
    title: 'You Leave the Principal\'s Office',
    body: [
      'You leave the principal\'s office. Dr. Wexler watches you go. He does not say goodbye. He does not need to. He will see you again. Or he will not. Both. The way everything is both.',
      'You walk down the hallway. The hallway is the hallway. The hallway is also the door. The hallway is also the morning. Both. All. You walk down the hallway. The hallway walks with you. The morning walks with you. The door walks with you. All of them walk with you. You are ready. You have always been ready.',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is the note of the morning. The note is complete. The note is ready.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are ready.',
        next: 'long-220',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go to the bell tower',
        note: 'The bell is also waiting.',
        next: 'long-221',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-220': {
    id: 'long-220',
    pageNumber: 220,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 11 of 19',
    title: 'Dr. Wexler Tells You About the Rope',
    body: [
      'He says, "The rope. The rope is in the bell tower. The rope is also here. Both. The rope is the door, in a different shape. The rope is also the bell. The rope is also the morning. Both. All."',
      '"I pulled the rope, in 1987. I pulled the rope, and the bell rang. The bell was the wrong sound. The door opened. Margery went through. I am the one who pulled the rope. I am the one who opened the door. I am the one who did this. I am sorry. I have been sorry. I will always be sorry."',
    ],
    aside: 'On Dr. Wexler\'s hands, the marks of the rope. The rope burned him, in 1987. The marks have been on his hands since. The marks are also not on his hands. Both. The marks are the door, in a different shape.',
    choices: [
      {
        label: 'She forgave you. She told me.',
        note: 'A thing Margery said.',
        next: 'long-221',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-223',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-221': {
    id: 'long-221',
    pageNumber: 221,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 12 of 19',
    title: 'The Rope Is Also Here',
    body: [
      'You look at Dr. Wexler\'s hands. The marks of the rope are on his hands. The marks are the shape of the rope. The marks are the shape of the bell. The marks are the shape of the door. The marks are all of these.',
      'Dr. Wexler says, "The rope is also here. The rope is in my hands. The rope is in the bell tower. The rope is in the basement. The rope is in the morning. The rope is all of these. The rope is the door, in a different shape. The rope is also the bell. Both. All."',
    ],
    aside: 'On Dr. Wexler\'s hands, the marks glow, faintly, the same color as the bell-shaped mark. The marks are ready. The marks have been ready.',
    choices: [
      {
        label: 'Take me to the bell tower. Let me pull the rope.',
        note: 'A decision.',
        next: 'long-223',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Give me your pin.',
        note: 'A request.',
        next: 'long-224',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-222': {
    id: 'long-222',
    pageNumber: 222,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 13 of 19',
    title: 'The Third Option',
    body: [
      'He says, "There is a third option. The third option is neither staying nor going. The third option is both. The third option is becoming the door. The door is both. The door is also neither. The door is the morning, taking a shape. The door is the morning, in the shape of a door."',
      '"If you become the door, you will be both. You will be here. You will be there. You will be the morning. You will be Margery. You will be Arnold. You will be E.M. You will be all of them. The door will close. Or the door will stay open. Both. The morning will decide. The morning is you."',
    ],
    aside: 'On Dr. Wexler\'s face, the face of the door. The door has a face. The face is your face. The face is asking you, to become it.',
    choices: [
      {
        label: 'I will become the door.',
        note: 'A decision. The biggest one.',
        next: 'long-223',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I will not become the door.',
        note: 'A refusal.',
        next: 'long-224',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-223': {
    id: 'long-223',
    pageNumber: 223,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 14 of 19',
    title: 'Dr. Wexler Tells You About the Morning',
    body: [
      'He says, "The morning is also tired. The morning has been ringing, too. The morning is the bell. The morning is the door. The morning is also the one who rang. The morning is also the one who went through. The morning is all of them. The morning is you. The morning is also me. Both. All."',
      '"The morning wants to stop. The morning has been wanting to stop, since 1907. The morning does not know how. The morning has been waiting for someone to tell it. You are the someone. You are also the morning. You can tell it. You can stop it. You can decide."',
    ],
    aside: 'On the wall, the clock says 7:14. The clock has advanced. The morning has advanced. The morning is ready. The morning has been ready.',
    choices: [
      {
        label: 'I am ready.',
        note: 'A statement.',
        next: 'long-224',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I am the morning.',
        note: 'A statement.',
        next: 'long-225',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-224': {
    id: 'long-224',
    pageNumber: 224,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 15 of 19',
    title: 'Dr. Wexler Gives You the Rope',
    body: [
      'He opens another drawer. Inside, a piece of rope. The rope is the rope from the bell tower. The rope is the rope he pulled, in 1987. The rope is the rope that opened the door. He has been keeping it.',
      'He hands it to you. He says, "Take this. The rope is the door, in a different shape. The rope is also the bell. The rope is also the morning. Both. All. The rope is yours. The rope has been yours."',
    ],
    aside: 'On the rope, the marks of Dr. Wexler\'s hands. The marks are also the marks of your hands. The rope is also yours. The rope has always been yours.',
    choices: [
      {
        label: 'Take the rope. Go to the bell tower.',
        note: 'You have what you need.',
        next: 'long-225',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Take the rope. Go to the door.',
        note: 'A decision.',
        next: 'long-226',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-225': {
    id: 'long-225',
    pageNumber: 225,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 16 of 19',
    title: 'Dr. Wexler Tells You About the Future',
    body: [
      'He says, "The future. The future is also the morning. Both. The future is what happens, after you decide. The future is also what has already happened. The future is both. The future is all of them."',
      '"If you stay, the future is the morning, continuing, the way it has been. If you go, the future is the morning, also continuing, in a different way. If you become the door, the future is both. The future is you. The future is also me. The future is also Margery. The future is all of us."',
    ],
    aside: 'On the wall, the clock says 7:14. The clock has also been 7:13. Both. The clock is the future, also. The clock is the past, also. The clock is all of them.',
    choices: [
      {
        label: 'I will stay.',
        note: 'A decision.',
        next: 'long-226',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'I will go.',
        note: 'A decision.',
        next: 'long-227',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-226': {
    id: 'long-226',
    pageNumber: 226,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 17 of 19',
    title: 'Dr. Wexler Tells You About the Past',
    body: [
      'He says, "The past. The past is also the morning. Both. The past is what happened, in 1907. The past is what happened, in 1987. The past is what is happening, now. The past is all of these. The past is also the future. Both. All."',
      '"E.M. went through, in 1907. Margery went through, in 1987. You are the third one. You will go through, today. Or you will not. Or you will become the door. The past is all of these. The past is you. The past has always been you."',
    ],
    aside: 'On the wall, a photograph of E.M. The photograph has your face. The photograph has always had your face. The past is you.',
    choices: [
      {
        label: 'I am E.M.',
        note: 'A statement.',
        next: 'long-227',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'I am the past.',
        note: 'A statement.',
        next: 'long-228',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-227': {
    id: 'long-227',
    pageNumber: 227,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 18 of 19',
    title: 'Dr. Wexler Tells You About the Present',
    body: [
      'He says, "The present. The present is also the morning. Both. The present is now. The present is 7:14. The present is also 7:13. Both. The present is all of them. The present is you, sitting in this office. The present is also in the basement. The present is also in the bell tower. The present is all of these."',
      '"The present is the only time. The present is also every time. Both. The present is the morning. The morning is the present. You are the present. The present is you."',
    ],
    aside: 'On the wall, the clock says 7:14. The clock is the present. The clock is also the past. The clock is also the future. The clock is all of them.',
    choices: [
      {
        label: 'I am the present.',
        note: 'A statement.',
        next: 'long-228',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Take me to the door.',
        note: 'A decision.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'ink'
      },
    ],
  },
  'long-228': {
    id: 'long-228',
    pageNumber: 228,
    chapter: 'The Principal\'s Nervous Office',
    eyebrow: 'The Principal\'s Nervous Office · scene 19 of 19',
    title: 'You Leave the Principal\'s Office for the Last Time',
    body: [
      'You leave the principal\'s office. Dr. Wexler watches you go. He does not say goodbye. He does not need to. He will see you again. Or he will not. Both. The way everything is both.',
      'You walk down the hallway. The hallway is the hallway. The hallway is also the door. The hallway is also the morning. Both. All. You walk down the hallway. The hallway walks with you. The morning walks with you. The door walks with you. All of them walk with you. You are ready. You have always been ready.',
    ],
    aside: 'In your backpack, all the things hum, the same note. The note is the note of the bell. The note is the note of the morning. The note is complete. The note is ready.',
    choices: [
      {
        label: 'Go to the door',
        note: 'You are ready.',
        next: 'long-229',
        consequence: 'You descend.',
        tone: 'green'
      },
      {
        label: 'Go to the bell tower',
        note: 'The bell is also waiting.',
        next: 'long-019',
        consequence: 'You go to the door.',
        tone: 'coral'
      },
      {
        label: 'Go home',
        note: 'You have everything.',
        next: 'long-039',
        consequence: 'You head home.',
        tone: 'ink'
      },
    ],
  },
  'long-229': {
    id: 'long-229',
    pageNumber: 229,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 1 of 19',
    title: 'The Stairs Spiral Downward',
    body: [
      'The stairs spiral downward. The green light grows stronger. The bell hum is louder here. You are descending into the place under the school, the place that has been waiting since 1987.',
      'The walls are damp. The air is cold. You can smell floor wax and yellow ribbon. The stairs have been here since 1907. The stairs have been waiting for the third one. The stairs are letting you descend.',
    ],
    aside: 'The stairs are the same stairs as the music room, the same stairs as the bell tower. They are all the same stairs.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-230',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-235',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-230': {
    id: 'long-230',
    pageNumber: 230,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 2 of 19',
    title: 'Photographs Line the Walls',
    body: [
      'Photographs line the walls. Students from every decade. You see faces you do not know. You see faces you do know. Your mother at twelve. Mr. Ashford at twelve. Margery at twelve. Coach Brant at eleven. All of them. All looking at you.',
      'The photographs are not photographs. The photographs are the door, in a different shape. The photographs are also the morning. The photographs blink as you pass.',
    ],
    aside: 'In one photograph, a girl your age. Yellow ribbon. Sideways grin. She is the only one looking at the camera.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-231',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-232',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-231': {
    id: 'long-231',
    pageNumber: 231,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 3 of 19',
    title: 'The Bell Hum Grows Louder',
    body: [
      'The bell hum grows louder with each step. The hum is the same note as the kitchen radio, the same note as your brother singing, the same note as the fluorescent lights. The hum is the morning. The hum has been here since 1907.',
      'You can feel the hum in your teeth. You can feel the hum in your bones. The hum is the bell. The bell is ringing. The bell has been ringing.',
    ],
    aside: 'The hum is the door, in a different shape. The hum is also the bell. The hum is also the morning.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-232',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-233',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-232': {
    id: 'long-232',
    pageNumber: 232,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 4 of 19',
    title: 'A Note Taped to the Wall',
    body: [
      'A note taped to the wall. Yellow paper. Handwriting you recognize as Margery\'s. The note reads: "Turn back if you can. The door is patient. The door will wait. If you can turn back, turn back. If you cannot, come down. I am here. I have been here. I am sorry."',
      'You look at the note. You look at the stairs going down. You look at the stairs going up. The morning is letting you choose.',
    ],
    aside: 'On the back of the note, in different handwriting: do not turn back. we need you. — a.v.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-233',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-234',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-233': {
    id: 'long-233',
    pageNumber: 233,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 5 of 19',
    title: 'The Temperature Drops',
    body: [
      'The temperature drops. Your breath fogs in the stairwell. The green light is stronger here. The hum is louder. The door is closer.',
      'You are halfway down. The school is above you. The basement is below. The morning is with you. The morning is also above. The morning is also below. The morning is everywhere.',
    ],
    aside: 'On the wall, a thermometer. The thermometer says 7:13. The thermometer has always said 7:13.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-234',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-236',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-234': {
    id: 'long-234',
    pageNumber: 234,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 6 of 19',
    title: 'Footsteps Echo Behind You',
    body: [
      'Footsteps echo behind you. You do not look back. The footsteps are not following you. The footsteps are walking with you. The footsteps are the morning, walking with you.',
      'The footsteps are also your footsteps. The footsteps are also the footsteps of everyone who has ever walked these stairs. The footsteps are the door, in a different shape.',
    ],
    aside: 'The footsteps are also Margery\'s footsteps. The footsteps are also Arnold\'s footsteps. The footsteps are also E.M.\'s footsteps.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-236',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-237',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-235': {
    id: 'long-235',
    pageNumber: 235,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 7 of 19',
    title: 'The Stairs Branch',
    body: [
      'The stairs branch. One path goes left. One path goes right. Both paths lead to the same place. The morning is letting you choose. The morning is also not letting you choose. Both.',
      'The left path is darker. The right path is lighter. The left path smells like floor wax. The right path smells like yellow ribbon. Both paths lead to the gym below.',
    ],
    aside: 'On the wall, a sign: BOTH. — m.v.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-236',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-237',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Stop. Wait.',
        note: 'A patient choice. The stairs will wait with you.',
        next: 'long-241',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-236': {
    id: 'long-236',
    pageNumber: 236,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 8 of 19',
    title: 'Margery\'s Ribbon Lies Here',
    body: [
      'Margery\'s ribbon lies on the stairs. It is warm. It is the same warm as the ribbon in your pocket. It is the same ribbon. The ribbon is in two places. The ribbon is the door, in a different shape.',
      'You pick up the ribbon. The ribbon ties itself to your wrist. The ribbon is yours. The ribbon has been yours.',
    ],
    aside: 'On the ribbon, in tiny writing: so you can find me. — m.v.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-237',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-238',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-237': {
    id: 'long-237',
    pageNumber: 237,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 9 of 19',
    title: 'The School Song Plays Backwards',
    body: [
      'The school song plays faintly, backwards, from below. The song is the same song as the music room. The song is the same song as the bell. The song is the door, in a different shape.',
      'The backwards song is the wrong song. The backwards song is also the right song. Both. The backwards song is the morning, playing.',
    ],
    aside: 'The song is also the bell. The song is also the door. The song is all of them.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-238',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-239',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-238': {
    id: 'long-238',
    pageNumber: 238,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 10 of 19',
    title: 'A Mirror Shows an Older You',
    body: [
      'A mirror on the wall. Your reflection is older. The reflection is the you who stayed. The reflection is also the you who went back. The reflection is all of the yous.',
      'The reflection waves. You did not wave. The reflection waves anyway. The reflection is trying to tell you something. The reflection is trying to warn you. Or the reflection is trying to encourage you. Both.',
    ],
    aside: 'In the mirror, three reflections: yours, Margery\'s, and a third. The third is E.M.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-239',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-240',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-239': {
    id: 'long-239',
    pageNumber: 239,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 11 of 19',
    title: 'A Door Appears on the Landing',
    body: [
      'A door appears on the landing. The door was not there a moment ago. The door is the door from the hallway. The door is also the door from the gym. The door is all of the doors.',
      'The door is open. The door is always open, down here. The door is the morning, in the shape of a door.',
    ],
    aside: 'On the door, in chalk: come in. — m.v.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-240',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-242',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-240': {
    id: 'long-240',
    pageNumber: 240,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 12 of 19',
    title: 'Floor Wax and Yellow Ribbon',
    body: [
      'The smell of floor wax and yellow ribbon. The smell is stronger here. The smell is the morning. The smell is the door. The smell is the bell. The smell is all of them.',
      'The smell is also your mother\'s kitchen. The smell is also the school. The smell is also 1987. The smell is everywhere.',
    ],
    aside: 'The smell is the morning, in a different shape.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-242',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-243',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-241': {
    id: 'long-241',
    pageNumber: 241,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 13 of 19',
    title: 'Chalk Writes Itself',
    body: [
      'Chalk writes itself on the wall. The chalk writes: come down. The chalk writes: we are here. The chalk writes: we have been waiting. The chalk writes: finally.',
      'The chalk is Margery\'s chalk. The chalk is the chalk from the classroom. The chalk is the door, in a different shape.',
    ],
    aside: 'The chalk is also the morning, writing.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-242',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-243',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-242': {
    id: 'long-242',
    pageNumber: 242,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 14 of 19',
    title: 'The Hallway Bends Wrong',
    body: [
      'The hallway bends wrong. The hallway is the hallway from the gym. The hallway is also the hallway from the school. The hallway is all of the hallways.',
      'The hallway bends left, then right, then keeps going. The hallway is the door, in a different shape. The hallway is also the morning.',
    ],
    aside: 'On the wall, a clock. The clock says 7:13. The clock has always said 7:13.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-243',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-244',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-243': {
    id: 'long-243',
    pageNumber: 243,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 15 of 19',
    title: 'Light from the Gym Below',
    body: [
      'Light from the gym below. The light is warm. The light is yellow ribbon light. The light is the morning, in a different shape.',
      'You are close. The gym is close. Margery is close. Arnold is close. E.M. is close. They are all close. They have all been waiting.',
    ],
    aside: 'The light is also the bell. The light is also the door. The light is all of them.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-244',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-245',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-244': {
    id: 'long-244',
    pageNumber: 244,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 16 of 19',
    title: 'The Door to the Gym Is Open',
    body: [
      'The door to the gym is open. The door has been open since 1987. The door is always open, down here. The door is the morning, in the shape of a door.',
      'Through the door, you can see the gym. The gym is set up for a dance. The dance has been going on since 1987. The dance is the door, in a different shape.',
    ],
    aside: 'On the door, in yellow pencil: come in. — m.v.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-245',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-246',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-245': {
    id: 'long-245',
    pageNumber: 245,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 17 of 19',
    title: 'The Stairs End',
    body: [
      'The stairs end. You are at the bottom. The gym is in front of you. The gym is below the school. The gym is also the gym above. Both. The gym is all of the gyms.',
      'You stand at the entrance. The gym is waiting. Margery is waiting. Arnold is waiting. E.M. is waiting. They have all been waiting.',
    ],
    aside: 'On the floor, in chalk: welcome. — m.v., a.v., e.m.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-246',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-247',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-246': {
    id: 'long-246',
    pageNumber: 246,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 18 of 19',
    title: 'You Stand at the Entrance',
    body: [
      'You stand at the entrance to the gym below. Margery is inside. The gym is set up for a dance that never ended. The kids from 1987 are dancing. The kids are frozen, mid-dance. The kids are also dancing. Both.',
      'Margery is in the center. Yellow ribbon. Sideways grin. She is twelve. She is also older. She is also the morning. She is all of them.',
    ],
    aside: 'Margery sees you. She smiles. She has been waiting for you for forty years.',
    choices: [
      {
        label: 'Continue down',
        note: 'The stairs go down. Continue.',
        next: 'long-247',
        consequence: 'You descend further.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'A retreat. The morning will accept it.',
        next: 'long-039',
        consequence: 'You climb back up.',
        tone: 'coral'
      },
    ],
  },
  'long-247': {
    id: 'long-247',
    pageNumber: 247,
    chapter: 'The Basement Stairs',
    eyebrow: 'The Basement Stairs · scene 19 of 19',
    title: 'You Step Through',
    body: [
      'You step through. The gym is the gym from 1987. The dance is in progress. The kids are dancing. Margery is dancing. Arnold is beside her. E.M. is in the corner. They are all here. They have all been waiting.',
      'Margery stops dancing. She sees you. She walks toward you. She says, "You came. I am glad. I am also sorry. Both. The way everything is both."',
    ],
    aside: 'The bell is between them. Brass. Huge. Ringing. It has been ringing since 1987.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-248',
        consequence: 'You enter the gym.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-039',
        consequence: 'You climb back up.',
        tone: 'coral'
      },
    ],
  },
  'long-248': {
    id: 'long-248',
    pageNumber: 248,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 1 of 19',
    title: 'Margery Stands in the Center',
    body: [
      'Margery stands in the center of the gym floor. Yellow ribbon. Twelve years old. She is also older. She is also the morning. She is all of them.',
      'She sees you. She smiles. The smile is the same smile as the photograph. The smile is the same smile as the yearbook. The smile is the door, in a different shape.',
    ],
    aside: 'Margery has been waiting for you for forty years. She is ready. She is also tired. Both.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-249',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-254',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-249': {
    id: 'long-249',
    pageNumber: 249,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 2 of 19',
    title: 'She Opens Her Eyes',
    body: [
      'She opens her eyes. She sees you. She smiles. The smile is sideways. The smile is the smile of someone who has been alone for forty years and is finally not alone.',
      '"Hi," she says. "I am Margery. You are the new one. I am sorry. I am so sorry. I have been ringing for so long."',
    ],
    aside: 'Her voice is the kitchen radio. Her voice is your brother singing. Her voice is the note the fluorescent lights are humming.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-250',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-251',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-250': {
    id: 'long-250',
    pageNumber: 250,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 3 of 19',
    title: 'Arnold Is Beside Her',
    body: [
      'Arnold is beside her. Older. Tired. He nods at you. He has been down here since 1992. He has been ringing with Margery for thirty-three years.',
      '"Hello," he says. "I am Arnold. Margery\'s father. I am sorry I did not believe her. I am sorry I came down. I am sorry I did not come down sooner. Both."',
    ],
    aside: 'Arnold has the look of a man who has been ringing for thirty-three years. The look is also the look of a man who is ready to stop.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-251',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-252',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-251': {
    id: 'long-251',
    pageNumber: 251,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 4 of 19',
    title: 'E.M. Is in the Corner',
    body: [
      'E.M. is in the corner. She has been here since 1907. She is the first one. She is the most tired. She is also the most patient.',
      'She does not speak. She has not spoken in a hundred years. She nods at you. She is ready. She has been ready.',
    ],
    aside: 'E.M. is wearing a yellow ribbon. The ribbon is faded. The ribbon is also bright. Both.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-252',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-253',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-252': {
    id: 'long-252',
    pageNumber: 252,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 5 of 19',
    title: 'The Bell Hangs Between Them',
    body: [
      'The bell hangs between them. Brass. Huge. Ringing. It has been ringing since 1987. The bell is the door. The bell is the morning. The bell is all of them.',
      'The bell is waiting for you. The bell has been waiting for you. The bell is ready. The bell has been ready.',
    ],
    aside: 'On the bell, in tiny writing: ring me at the right hour. — m.v.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-253',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-255',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-253': {
    id: 'long-253',
    pageNumber: 253,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 6 of 19',
    title: 'Margery Speaks',
    body: [
      'Margery says, "I am tired. The bell is tired. We are all tired. We have been ringing for forty years. Or one hundred and twenty years. Or longer. We cannot tell anymore. We need someone to tell us we can stop."',
      'She looks at you. "You are the someone. You are also the bell. You are also the door. You are all of us. You can tell us. You can stop us. You can decide."',
    ],
    aside: 'Margery is looking at you the way the photographs looked at you. She is the photographs. She is also the door.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-255',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-256',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-254': {
    id: 'long-254',
    pageNumber: 254,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 7 of 19',
    title: 'Arnold Argues',
    body: [
      'Arnold says, "Stay. Be the third. The bell needs three to stop. If you stay, the bell will stop. If the bell stops, the door will close. If the door closes, we can all go up. Or we can all stay. Both."',
      'Margery shakes her head. "No, Dad. The bell can stop with two. If the morning lets it. If the third one rings it right. We do not need three. We need the right person, at the right hour."',
    ],
    aside: 'Arnold and Margery have been having this argument for thirty-three years. They have not resolved it. They are waiting for you to resolve it.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-255',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-256',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Become the door. Let both of you go.',
        note: 'The third option.',
        next: 'long-260',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-255': {
    id: 'long-255',
    pageNumber: 255,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 8 of 19',
    title: 'E.M. Rings the Bell',
    body: [
      'E.M. rings the bell. The sound fills the gym. The sound has been filling the gym for a hundred and twenty years. The sound is the morning. The sound is the door. The sound is all of them.',
      'E.M. looks at you. She is the first one. She is the most tired. She is also the most patient. She says, "It is not so bad. You get used to it. I did."',
    ],
    aside: 'E.M. has been ringing for one hundred and twenty years. She is ready to stop. She is also patient.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-256',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-257',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-256': {
    id: 'long-256',
    pageNumber: 256,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 9 of 19',
    title: 'You Ask About Staying',
    body: [
      'You ask what happens if you stay. Margery says, "You ring. Forever. Or until the next one. In another forty years. The door will pick again. You will wait for the fourth one. The way I waited for you."',
      'Arnold says, "Or the bell will stop. If there are three. The bell needs three to stop. If you stay, the bell will stop. The door will close. We will all be at rest."',
    ],
    aside: 'Margery and Arnold disagree. They have been disagreeing for thirty-three years. They are waiting for you to decide.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-257',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-258',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-257': {
    id: 'long-257',
    pageNumber: 257,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 10 of 19',
    title: 'You Ask About Going',
    body: [
      'You ask what happens if you go. Margery says, "The door stays open. It picks again. In another forty years. Someone else will come. Someone else will go down. Someone else will decide."',
      'Arnold says, "Or the door will close. If you ring the bell right. If you ring it at the right hour. The bell will stop. The door will close. We will all go up."',
    ],
    aside: 'Margery thinks the door will pick again. Arnold thinks the door can close. They are waiting for you to decide.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-258',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-259',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-258': {
    id: 'long-258',
    pageNumber: 258,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 11 of 19',
    title: 'You Ask About Becoming the Door',
    body: [
      'You ask about becoming the door. Margery says, "No one has tried. It might work. It might not. The door is both. If you become the door, you will be both. You will be here. You will be there. You will be the morning. You will be all of us."',
      'Arnold says, "It is too dangerous. You do not know what will happen. Stay. Be the third. Let the bell stop."',
    ],
    aside: 'Margery thinks becoming the door might work. Arnold thinks it is too dangerous. They are waiting for you to decide.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-259',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-261',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-259': {
    id: 'long-259',
    pageNumber: 259,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 12 of 19',
    title: 'The Bell Tolls',
    body: [
      'The bell tolls. The kids from 1987 freeze mid-dance. The gym is silent. The silence is the right silence. The silence is also the bell. Both.',
      'Margery says, "The bell is responding to you. The bell knows you are here. The bell is ready. The bell has been ready."',
    ],
    aside: 'The bell is the door, in a different shape. The bell is also the morning. The bell is all of them.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-261',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-262',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-260': {
    id: 'long-260',
    pageNumber: 260,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 13 of 19',
    title: 'The Rope Is Warm',
    body: [
      'Margery shows you the bell rope. It is warm. It has been warm since 1987. The rope is the door, in a different shape. The rope is also the bell. The rope is also the morning.',
      'She says, "Take the rope. Ring the bell. Or do not take the rope. Do not ring the bell. The choice is yours. The choice has always been yours."',
    ],
    aside: 'The rope is the same rope as the bell tower. The rope is the same rope as Dr. Wexler\'s hands. The rope is all of them.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-261',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-262',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-261': {
    id: 'long-261',
    pageNumber: 261,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 14 of 19',
    title: 'Arnold Tells His Story',
    body: [
      'Arnold tells his story. "I went down in 1992. I tried to take her place. I rang the bell. I rang it for hours. The bell did not change its mind. The bell had picked her. The bell could not be unpicked. I stayed. I have been ringing with her since."',
      'He looks at you. "I am sorry I did not believe her. I am sorry I came down. I am also glad I came down. I am with her. I am also tired. Both."',
    ],
    aside: 'Arnold has the look of a father who has been with his daughter for thirty-three years. The look is also the look of a father who is ready to let her go.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-262',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-263',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-262': {
    id: 'long-262',
    pageNumber: 262,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 15 of 19',
    title: 'E.M. Speaks',
    body: [
      'E.M. speaks for the first time in a hundred years. Her voice is the bell. Her voice is the morning. Her voice is the door. Her voice is all of them.',
      '"It is not so bad," she says. "You get used to it. I did. But I am tired. I am ready to stop. I have been ready for a long time. I am waiting for someone to tell me I can stop."',
    ],
    aside: 'E.M. has not spoken in a hundred years. She is speaking now. She is speaking to you. She is waiting for you to tell her she can stop.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-263',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-264',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-263': {
    id: 'long-263',
    pageNumber: 263,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 16 of 19',
    title: 'The Bell Changes Tone',
    body: [
      'The bell changes tone. Something is happening. The morning is responding. The morning is ready. The morning has been ready.',
      'Margery says, "The bell is responding to you. The bell knows you are here. The bell is ready. The bell has been ready. You can ring it. You can not ring it. You can become it. The choice is yours."',
    ],
    aside: 'The bell is the door, in a different shape. The bell is also the morning. The bell is all of them.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-264',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-265',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-264': {
    id: 'long-264',
    pageNumber: 264,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 17 of 19',
    title: 'The Morning Responds',
    body: [
      'The morning responds. The clocks in the gym advance. 7:14. 7:15. The morning is advancing. The morning has been waiting to advance, since 1987.',
      'Margery says, "The morning is ready. The morning has been ready. The morning is waiting for you to decide. The morning is you. You are the morning."',
    ],
    aside: 'The morning is the door, in a different shape. The morning is also the bell. The morning is all of them.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-265',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-266',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-265': {
    id: 'long-265',
    pageNumber: 265,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 18 of 19',
    title: 'The Choice Is Here',
    body: [
      'You stand before the bell. The rope is in your hand. The choice is here. The choice has been here. The choice has always been here.',
      'Margery waits. Arnold waits. E.M. waits. The bell waits. They have all been waiting. They have all been waiting for you.',
    ],
    aside: 'The choice is the only choice. The choice is also every choice. Both. The choice is the door. The choice is you.',
    choices: [
      {
        label: 'Stay. Take her place.',
        note: 'A sacrifice. A real one.',
        next: 'long-267',
        consequence: 'You choose to stay.',
        tone: 'green'
      },
      {
        label: 'Leave. Let her stay.',
        note: 'A refusal. She will accept it.',
        next: 'long-286',
        consequence: 'You choose to go.',
        tone: 'coral'
      },
      {
        label: 'Become the door. Let both of you go.',
        note: 'The third option.',
        next: 'long-324',
        consequence: 'You choose to become.',
        tone: 'ink'
      },
    ],
  },
  'long-266': {
    id: 'long-266',
    pageNumber: 266,
    chapter: 'Margery Vance',
    eyebrow: 'Margery Vance · scene 19 of 19',
    title: 'They Have All Been Waiting',
    body: [
      'Margery waits. Arnold waits. E.M. waits. The bell waits. The morning waits. They have all been waiting. They have all been waiting for you.',
      'You hold the rope. The rope is warm. The rope is the door, in a different shape. The rope is also the bell. The rope is also the morning. The rope is all of them. You are ready. You have always been ready.',
    ],
    aside: 'The choice is here. The choice is yours. The choice has always been yours.',
    choices: [
      {
        label: 'Enter the stay route',
        note: 'Continue to chapter 15.',
        next: 'long-267',
        consequence: 'You continue.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-039',
        consequence: 'You climb back up.',
        tone: 'coral'
      },
    ],
  },
  'long-267': {
    id: 'long-267',
    pageNumber: 267,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 1 of 19',
    title: 'You Choose to Stay',
    body: [
      'You choose to stay. Margery\'s face shows relief, grief, and gratitude. She has been waiting for this for forty years.',
      'She hands you the bell rope. It is warm. It vibrates with decades of ringing.',
    ],
    aside: 'You choose to stay. The rope is warm.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-268',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-273',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-268': {
    id: 'long-268',
    pageNumber: 268,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 2 of 19',
    title: 'She Hands You the Rope',
    body: [
      'She hands you the bell rope. It is warm. It vibrates with decades of ringing. The rope is the door, in a different shape. The rope is also the bell.',
      'You hold the rope. The rope holds you. The rope is the morning, in a different shape.',
    ],
    aside: 'The rope is the door, in a different shape.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-269',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-270',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-269': {
    id: 'long-269',
    pageNumber: 269,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 3 of 19',
    title: 'Arnold Steps Back',
    body: [
      'Arnold steps back. "Thank you." He walks toward the stairs. He has been down here for thirty-three years. He is ready to go up.',
      'He pauses. "Tell Helen I am sorry. Tell her I tried. Tell her I love her."',
    ],
    aside: 'Arnold has the look of a man who is finally leaving.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-270',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-271',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-270': {
    id: 'long-270',
    pageNumber: 270,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 4 of 19',
    title: 'Margery Follows',
    body: [
      'Margery follows. She pauses. "I am sorry. And grateful. Both. The way everything is both."',
      'She looks at you. "Thank you. For coming. For staying. For letting me go."',
    ],
    aside: 'Margery has the look of a girl who is finally leaving.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-271',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-272',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-271': {
    id: 'long-271',
    pageNumber: 271,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 5 of 19',
    title: 'E.M. Does Not Leave',
    body: [
      'E.M. does not leave. She has been here since 1907. She stays with you. She has been alone for a hundred and twenty years. Not anymore.',
      '"I will stay with you," she says. "It is not so bad. You get used to it. I did."',
    ],
    aside: 'E.M. has the look of someone who is finally not alone.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-272',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-274',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-272': {
    id: 'long-272',
    pageNumber: 272,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 6 of 19',
    title: 'The Rope Is in Your Hand',
    body: [
      'The bell rope is in your hand. You feel the ringing in your bones. The ringing is the morning. The ringing is the door. The ringing is all of them.',
      'You are the bell now. You are the ringing. You are the door that stays closed.',
    ],
    aside: 'The ringing is in your bones.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-274',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-275',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-273': {
    id: 'long-273',
    pageNumber: 273,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 7 of 19',
    title: 'The Kids from 1987 Fade',
    body: [
      'The kids from 1987 fade. The gym is empty. Just you, the bell, and E.M. The gym is the gym from 1987. The gym is also the gym from now. Both.',
      'The dance is over. The dance has been over since 1987. The dance is finally over.',
    ],
    aside: 'The gym is empty. Just you, the bell, and E.M.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-274',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-275',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-279',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-274': {
    id: 'long-274',
    pageNumber: 274,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 8 of 19',
    title: 'E.M. Speaks',
    body: [
      'E.M. speaks. "It is not so bad. You get used to it. I did." She has been here for a hundred and twenty years. She knows.',
      '"I will teach you," she says. "I will teach you how to ring. I will teach you how to wait. I will teach you how to be the door."',
    ],
    aside: 'E.M. will teach you.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-275',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-276',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-275': {
    id: 'long-275',
    pageNumber: 275,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 9 of 19',
    title: 'You Ring the Bell',
    body: [
      'You ring the bell. The sound travels up through the school. The sound is the morning. The sound is the door. The sound is all of them.',
      'Above, your mother feels something shift. She does not know what. She knows something has changed.',
    ],
    aside: 'You ring the bell. The sound travels up.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-276',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-277',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-276': {
    id: 'long-276',
    pageNumber: 276,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 10 of 19',
    title: 'Your Mother Feels Something',
    body: [
      'Above, your mother feels something shift. She does not know what. She knows something has changed. She puts the kettle on. She does not know why.',
      'She feels lighter. She has been carrying something for forty years. The something is lighter now.',
    ],
    aside: 'Your mother feels lighter.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-277',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-278',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-277': {
    id: 'long-277',
    pageNumber: 277,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 11 of 19',
    title: 'Ashford Hears the Change',
    body: [
      'Mr. Ashford hears the bell change. He knows. He weeps in the hallway. He has been waiting for this for forty years.',
      'He weeps. He is also glad. He is also sad. Both. He has lost you. He has also freed Margery. Both.',
    ],
    aside: 'Ashford weeps in the hallway.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-278',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-280',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-278': {
    id: 'long-278',
    pageNumber: 278,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 12 of 19',
    title: 'Maya Feels a Shift',
    body: [
      'Maya feels a shift in class. Her dream from last night makes sense now. She knows something has happened. She does not know what.',
      'She texts you. You do not answer. She knows. She does not know how she knows. She knows.',
    ],
    aside: 'Maya knows something has changed.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-280',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-281',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-279': {
    id: 'long-279',
    pageNumber: 279,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 13 of 19',
    title: 'The Clocks Advance',
    body: [
      'The morning advances. The clocks move forward. 7:14. 7:15. 7:16. The morning is finally advancing. The morning has been waiting to advance, since 1987.',
      'The clocks in the school all advance. The clocks in the gym advance. The clocks everywhere advance. The morning is finally the morning.',
    ],
    aside: 'The clocks finally advance.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-280',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-281',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-280': {
    id: 'long-280',
    pageNumber: 280,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 14 of 19',
    title: 'You Are the Bell Now',
    body: [
      'You are the bell now. You are the ringing. You are the door that stays closed. You are the morning, in a different shape.',
      'You ring. You have been ringing. You will ring. The ringing is the morning. The ringing is the door. The ringing is all of them.',
    ],
    aside: 'You are the bell now.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-281',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-282',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-281': {
    id: 'long-281',
    pageNumber: 281,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 15 of 19',
    title: 'E.M. Sits Beside You',
    body: [
      'E.M. sits beside you. She has been alone for a hundred and twenty years. Not anymore. She is not alone now.',
      '"Thank you," she says. "For staying. For being the third. For letting me have company."',
    ],
    aside: 'E.M. is not alone anymore.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-282',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-283',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-282': {
    id: 'long-282',
    pageNumber: 282,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 16 of 19',
    title: 'The Years Pass',
    body: [
      'The years pass. Above, children grow. Below, you ring. E.M. rings. The bell rings. The morning is at rest. The morning is also still ringing. Both.',
      'You do not count the years. The years do not count themselves. The years are the morning, in a different shape.',
    ],
    aside: 'The years are the morning, in a different shape.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-283',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-284',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-283': {
    id: 'long-283',
    pageNumber: 283,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 17 of 19',
    title: 'Ashford Visits',
    body: [
      'Sometimes Mr. Ashford comes down. He visits. He brings news from above. He tells you about your mother. He tells you about Maya. He tells you about the school.',
      'He grows older each time. He is the waiter. He has been the waiter for forty years. He is still the waiter.',
    ],
    aside: 'Ashford visits. He brings news.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-284',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-285',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-284': {
    id: 'long-284',
    pageNumber: 284,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 18 of 19',
    title: 'He Stops Coming',
    body: [
      'He grows old. He stops coming. Someone else takes his key. The someone else does not know what the key is for. The someone else does not come down. The someone else does not visit.',
      'You ring. You have been ringing. You will ring. The morning is at rest. The morning is also still ringing. Both.',
    ],
    aside: 'He stops coming. Someone else takes his key.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-285',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-286',
        consequence: 'The story continues.',
        tone: 'coral'
      },
    ],
  },
  'long-285': {
    id: 'long-285',
    pageNumber: 285,
    chapter: 'The Stay',
    eyebrow: 'The Stay · scene 19 of 19',
    title: 'The Stay — The End',
    body: [
      'The The Stay is complete. You have reached the end of this path.',
      'The One Who Stayed. You went down. You found Margery. You decided to stay. You took her place. Margery went up. Arnold went up. E.M. went up. You stayed. You rang the bell. You have been ringing since. The morning is fin...',
    ],
    aside: 'This is ending END 07 / 14.',
    ending: {
      title: 'The One Who Stayed',
      copy: 'You went down. You found Margery. You decided to stay. You took her place. Margery went up. Arnold went up. E.M. went up. You stayed. You rang the bell. You have been ringing since. The morning is finally at rest, and also still ringing.',
      badge: 'END 07 / 14',
      accent: 'green'
    },
  },
  'long-286': {
    id: 'long-286',
    pageNumber: 286,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 1 of 19',
    title: 'You Take the Rope to Ring',
    body: [
      'You take the bell rope. Not to stay. To ring it one last time. At the right hour. The clock says 7:14. The right hour.',
      'The rope is warm. The rope is the door, in a different shape. The rope is also the bell. The rope is also the morning.',
    ],
    aside: 'You take the rope to ring.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-287',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-292',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-287': {
    id: 'long-287',
    pageNumber: 287,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 2 of 19',
    title: 'The Clock Says 7:14',
    body: [
      'The clock says 7:14. The right hour. The hour after the wrong hour. The hour the morning has been trying to advance to, since 1987.',
      'You pull the rope. The bell rings. Not the wrong sound. The right sound.',
    ],
    aside: 'The clock says 7:14.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-288',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-289',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-288': {
    id: 'long-288',
    pageNumber: 288,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 3 of 19',
    title: 'You Pull. The Right Sound.',
    body: [
      'You pull. The bell rings. Not the wrong sound. The right sound. The bell is finally ringing the right sound, at the right hour.',
      'The gym shakes. The dance stops. The kids freeze. The bell is ringing the right sound, finally.',
    ],
    aside: 'You pull. The right sound.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-289',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-290',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-289': {
    id: 'long-289',
    pageNumber: 289,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 4 of 19',
    title: 'The Gym Shakes',
    body: [
      'The gym shakes. The bell vibrates. The dance stops. The kids from 1987 freeze mid-dance. The gym is silent, except for the bell.',
      'The bell is ringing the right sound. The bell has never rung the right sound before. The bell is finally ringing the right sound.',
    ],
    aside: 'The gym shakes.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-290',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-291',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-290': {
    id: 'long-290',
    pageNumber: 290,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 5 of 19',
    title: 'The Tone Resolves',
    body: [
      'The bell tone changes. It is not ringing anymore. It is resolving. The bell is finally resolving. The bell has been unresolved since 1987.',
      'The resolution is the right sound. The resolution is the morning, finally at rest. The resolution is the door, finally closing.',
    ],
    aside: 'The tone resolves.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-291',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-293',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-291': {
    id: 'long-291',
    pageNumber: 291,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 6 of 19',
    title: 'Margery Looks at You',
    body: [
      'Margery looks at you. "You did it. You rang it right. The bell is resolving. The door is closing. We can go up."',
      'She is smiling. She has not smiled since 1987. She is smiling now.',
    ],
    aside: 'Margery looks at you.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-293',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-294',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-292': {
    id: 'long-292',
    pageNumber: 292,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 7 of 19',
    title: 'Arnold Covers His Ears',
    body: [
      'Arnold covers his ears. The sound is beautiful and painful. The sound is the resolution. The sound is the morning, finally at rest.',
      '"I have been waiting for this for thirty-three years," he says. "I did not think I would hear it."',
    ],
    aside: 'Arnold covers his ears.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-293',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-294',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-298',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-293': {
    id: 'long-293',
    pageNumber: 293,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 8 of 19',
    title: 'E.M. Stands Up',
    body: [
      'E.M. stands. She has been sitting for a hundred and twenty years. She stands. She walks. She has not walked in a hundred and twenty years.',
      '"Thank you," she says. "One hundred and twenty years. Thank you."',
    ],
    aside: 'E.M. stands up.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-294',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-295',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-294': {
    id: 'long-294',
    pageNumber: 294,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 9 of 19',
    title: 'The Bell Stops',
    body: [
      'The bell stops. The silence is deafening. The silence is beautiful. The bell has stopped. The bell has not stopped since 1987.',
      'The silence is the right silence. The silence is the morning, finally at rest. The silence is the door, finally closed.',
    ],
    aside: 'The bell stops.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-295',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-296',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-295': {
    id: 'long-295',
    pageNumber: 295,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 10 of 19',
    title: 'Margery Gives You Her Ribbon',
    body: [
      'Margery takes off her ribbon. She hands it to you. "Take it. So you can find me. If I get lost."',
      'The ribbon is warm. The ribbon is the same warm as everything. The ribbon is yours. The ribbon has been yours.',
    ],
    aside: 'Margery gives you her ribbon.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-296',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-297',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-296': {
    id: 'long-296',
    pageNumber: 296,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 11 of 19',
    title: 'Arnold Gives His Ribbon',
    body: [
      'Arnold does the same. His ribbon is from 1987. He has been wearing it since he came down. He hands it to you.',
      '"Take it. So you can find me. If I get lost."',
    ],
    aside: 'Arnold gives his ribbon.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-297',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-299',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-297': {
    id: 'long-297',
    pageNumber: 297,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 12 of 19',
    title: 'E.M. Has No Ribbon',
    body: [
      'E.M. does not have a ribbon. Hers turned to dust long ago. She does not need one. She is the first one. She does not need to be found.',
      '"I do not need a ribbon," she says. "I am the ribbon. I have always been the ribbon."',
    ],
    aside: 'E.M. has no ribbon.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-299',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-300',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-298': {
    id: 'long-298',
    pageNumber: 298,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 13 of 19',
    title: 'The Door Opens Upward',
    body: [
      'The gym door opens. The stairs go up. They can leave now. The door is open. The door has been open, from this side, since 1987. The door is finally open, for them.',
      'The door is the morning, in a different shape. The door is also the bell. The door is all of them.',
    ],
    aside: 'The door opens upward.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-299',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-300',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-299': {
    id: 'long-299',
    pageNumber: 299,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 14 of 19',
    title: 'Margery Walks Up',
    body: [
      'Margery goes first. She walks up. She does not look back. She has been down here for forty years. She is finally going up.',
      'She walks up the stairs. She walks into the light. She walks into the morning. She is finally free.',
    ],
    aside: 'Margery walks up.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-300',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-301',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-300': {
    id: 'long-300',
    pageNumber: 300,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 15 of 19',
    title: 'Arnold Follows',
    body: [
      'Arnold follows. "Tell Helen I am sorry. Tell her I tried. Tell her I love her." He walks up the stairs. He walks into the light.',
      'He has been down here for thirty-three years. He is finally going up. He is finally free.',
    ],
    aside: 'Arnold follows.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-301',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-302',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-301': {
    id: 'long-301',
    pageNumber: 301,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 16 of 19',
    title: 'E.M. Is Last',
    body: [
      'E.M. is last. "Thank you. One hundred and twenty years. Thank you." She goes up. She walks into the light. She is finally free.',
      'She has been down here for one hundred and twenty years. She is finally going up. She is finally free.',
    ],
    aside: 'E.M. is last.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-302',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-303',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-302': {
    id: 'long-302',
    pageNumber: 302,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 17 of 19',
    title: 'The Gym Is Empty',
    body: [
      'The gym is empty. The bell is silent. You are alone. You did it. You rang the bell right. The bell stopped. The door closed. They went up.',
      'You are alone. You are also not alone. The morning is with you. The bell is with you. The door is with you. All of them are with you.',
    ],
    aside: 'The gym is empty.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-303',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-304',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-303': {
    id: 'long-303',
    pageNumber: 303,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 18 of 19',
    title: 'You Walk Up the Stairs',
    body: [
      'You walk up the stairs. The door at the top is open. You step into the morning. 7:15. The bell is silent. It is over.',
      'You step into the morning. The morning is the morning. You are you. The bell is silent. The door is closed. It is over.',
    ],
    aside: 'You walk up the stairs.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-304',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-305',
        consequence: 'The story continues.',
        tone: 'coral'
      },
    ],
  },
  'long-304': {
    id: 'long-304',
    pageNumber: 304,
    chapter: 'The Bell',
    eyebrow: 'The Bell · scene 19 of 19',
    title: 'The Bell — The End',
    body: [
      'The The Bell is complete. You have reached the end of this path.',
      'The Bell That Stopped. You rang the third bell at the right hour. The door responded. The bell stopped ringing. Margery went up. Arnold went up. E.M. went up. You stayed, but the bell was silent. The morning was finally at ...',
    ],
    aside: 'This is ending END 08 / 14.',
    ending: {
      title: 'The Bell That Stopped',
      copy: 'You rang the third bell at the right hour. The door responded. The bell stopped ringing. Margery went up. Arnold went up. E.M. went up. You stayed, but the bell was silent. The morning was finally at rest.',
      badge: 'END 08 / 14',
      accent: 'green'
    },
  },
  'long-305': {
    id: 'long-305',
    pageNumber: 305,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 1 of 19',
    title: 'You Choose to Go',
    body: [
      'You choose to go. Margery nods. "I understand. Go. Live. I will wait. For the fourth one. In another forty years. I am patient. The bell is patient. We can wait."',
      'You turn around. The stairs go up. You walk toward them. You are going back up. You are leaving Margery. You are leaving Arnold. You are leaving E.M.',
    ],
    aside: 'You choose to go.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-306',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-311',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-306': {
    id: 'long-306',
    pageNumber: 306,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 2 of 19',
    title: 'You Turn Around',
    body: [
      'You turn around. The stairs go up. You walk toward them. The stairs are shorter going up. The stairs are the same stairs. The stairs are the door, in a different shape.',
      'You climb. The green light fades. The hum fades. The morning is above. The morning is also below. Both.',
    ],
    aside: 'You turn around.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-307',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-308',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-307': {
    id: 'long-307',
    pageNumber: 307,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 3 of 19',
    title: 'Arnold Calls After You',
    body: [
      'Arnold calls after you. "The door will pick again. In forty years. Someone else will come. Someone else will decide." He pauses. "Or the door will close. If you ring the bell right. If you ring it at the right hour."',
      'You do not look back. You climb. The stairs are shorter going up.',
    ],
    aside: 'Arnold calls after you.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-308',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-309',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-308': {
    id: 'long-308',
    pageNumber: 308,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 4 of 19',
    title: 'You Do Not Look Back',
    body: [
      'You do not look back. You climb. The stairs are shorter going up. The green light fades. The hum fades. The morning is above.',
      'You reach the gym floor. The door is open. You step through. You are back in the school. The school is the school. The morning is the morning.',
    ],
    aside: 'You do not look back.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-309',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-310',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-309': {
    id: 'long-309',
    pageNumber: 309,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 5 of 19',
    title: 'Margery\'s Voice Fades',
    body: [
      'Margery\'s voice, fading. "Thank you for coming. Thank you for seeing me. Thank you for choosing. I will wait. I have been waiting. I will wait." The voice fades. The voice is the bell. The voice is the morning. The voice is all of them.',
      'The voice fades. The voice is gone. You are alone. You are also not alone. The morning is with you.',
    ],
    aside: 'Margery\'s voice fades.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-310',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-312',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-310': {
    id: 'long-310',
    pageNumber: 310,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 6 of 19',
    title: 'You Reach the Gym Floor',
    body: [
      'You reach the gym floor. The door is open. You step through. You are back in the school. The school is the school. The morning is the morning.',
      'The gym is just a gym. The floor is just a floor. The clock says 7:14. The clock has advanced. The morning has advanced.',
    ],
    aside: 'You reach the gym floor.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-312',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-313',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-311': {
    id: 'long-311',
    pageNumber: 311,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 7 of 19',
    title: 'You Close the Door',
    body: [
      'You kneel. You turn the brass key. The door closes. The lock clicks. The door is closed. The door has been open since 1987. The door is finally closed.',
      'The gym is just a gym. The floor is just a floor. The clock says 7:14. The morning has advanced.',
    ],
    aside: 'You close the door.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-312',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-313',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-317',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-312': {
    id: 'long-312',
    pageNumber: 312,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 8 of 19',
    title: 'The Gym Is Just a Gym',
    body: [
      'The gym is just a gym. The floor is just a floor. The clock on the gym wall says 7:14. The clock has advanced. The morning has advanced.',
      'You walk out. The hallway is the hallway. The lockers count to twelve. The clocks say different times, and all the times are right.',
    ],
    aside: 'The gym is just a gym.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-313',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-314',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-313': {
    id: 'long-313',
    pageNumber: 313,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 9 of 19',
    title: 'You Walk Out',
    body: [
      'You walk out. The hallway is the hallway. The lockers count to twelve. The clocks say the right time. Mr. Ashford is there. He sees your face. He knows. He does not ask.',
      'He nods. He has been waiting for forty years. He is also glad. He is also sad. Both. He has lost Margery. He has also freed you. Both.',
    ],
    aside: 'You walk out.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-314',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-315',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-314': {
    id: 'long-314',
    pageNumber: 314,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 10 of 19',
    title: 'Ashford Is There',
    body: [
      'Mr. Ashford is there. He sees your face. He knows. He does not ask. He nods. He has been waiting for forty years.',
      '"You came back," he says. "You came back up. Thank you. I was afraid you would stay. I was afraid you would not come back."',
    ],
    aside: 'Ashford is there.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-315',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-316',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-315': {
    id: 'long-315',
    pageNumber: 315,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 11 of 19',
    title: 'You Walk Home',
    body: [
      'You walk home. The dog on Carver Street barks once. The mailman waves. The street is the street. The morning is the morning.',
      'Your mother is on the porch. She sees your face. She knows. She puts the kettle on. She does not ask. She waits for you to tell her.',
    ],
    aside: 'You walk home.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-316',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-318',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-316': {
    id: 'long-316',
    pageNumber: 316,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 12 of 19',
    title: 'Your Mother Is on the Porch',
    body: [
      'Your mother is on the porch. She sees your face. She puts the kettle on. She does not ask. She waits.',
      'You sit at the kitchen table. You tell her everything. She listens. She cries. She also smiles. "Margery is still there." "Yes." "But the door is closed." "For now."',
    ],
    aside: 'Your mother is on the porch.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-318',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-319',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-317': {
    id: 'long-317',
    pageNumber: 317,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 13 of 19',
    title: 'You Tell Her Everything',
    body: [
      'You sit at the kitchen table. You tell her everything. She listens. She cries. She also smiles.',
      '"Margery is still there." "Yes." "But the door is closed." "For now." "The morning will wait." "The morning always waits."',
    ],
    aside: 'You tell her everything.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-318',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-319',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-318': {
    id: 'long-318',
    pageNumber: 318,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 14 of 19',
    title: 'She Cries and Smiles',
    body: [
      'She cries. She also smiles. "Margery is still there. But the door is closed. For now. The morning will wait. The morning always waits."',
      'You go to school the next day. Everything is normal. The clocks are right. The hallway bends the right way. The lockers count to twelve.',
    ],
    aside: 'She cries and smiles.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-319',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-320',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-319': {
    id: 'long-319',
    pageNumber: 319,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 15 of 19',
    title: 'The Door Is Closed for Now',
    body: [
      '"The door is closed. For now. The morning will wait. The morning always waits." Your mother says this. She knows. She has been waiting since 1987.',
      'You go to school the next day. Everything is normal. The clocks are right. The morning is the morning.',
    ],
    aside: 'The door is closed for now.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-320',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-321',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-320': {
    id: 'long-320',
    pageNumber: 320,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 16 of 19',
    title: 'You Go to School',
    body: [
      'You go to school the next day. Everything is normal. The clocks are right. The hallway bends the right way. The lockers count to twelve.',
      'Mr. Briggs takes attendance. He does not call Margery\'s name. He calls your name. You say, "Here." He moves on. The bell rings at the right time.',
    ],
    aside: 'You go to school.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-321',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-322',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-321': {
    id: 'long-321',
    pageNumber: 321,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 17 of 19',
    title: 'You Grow Up',
    body: [
      'You grow up. You have a daughter. She has the dreams. The morning comes for her. You give her the brass key. You tell her the story.',
      'She goes down. She comes back. The morning waits. The morning always waits. But you lived. You lived first.',
    ],
    aside: 'You grow up.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-322',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-323',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-322': {
    id: 'long-322',
    pageNumber: 322,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 18 of 19',
    title: 'Your Daughter Has the Dreams',
    body: [
      'Your daughter has the dreams. The morning comes for her. You give her the brass key. You tell her the story. She goes down. She comes back.',
      'The morning waits. The morning always waits. But you lived. You lived first. Your daughter lives. She will live first.',
    ],
    aside: 'Your daughter has the dreams.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-323',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-324',
        consequence: 'The story continues.',
        tone: 'coral'
      },
    ],
  },
  'long-323': {
    id: 'long-323',
    pageNumber: 323,
    chapter: 'The Door Closed',
    eyebrow: 'The Door Closed · scene 19 of 19',
    title: 'The Door Closed — The End',
    body: [
      'The The Door Closed is complete. You have reached the end of this path.',
      'The Door That Closed. You chose to go. You went up. Margery went up. The door closed. The bell stopped. The morning is at rest. You lived. You grew up. Your daughter had the dreams. The morning waited, the way it always do...',
    ],
    aside: 'This is ending END 09 / 14.',
    ending: {
      title: 'The Door That Closed',
      copy: 'You chose to go. You went up. Margery went up. The door closed. The bell stopped. The morning is at rest. You lived. You grew up. Your daughter had the dreams. She went down. She came back. The morning waited, the way it always does.',
      badge: 'END 09 / 14',
      accent: 'green'
    },
  },
  'long-324': {
    id: 'long-324',
    pageNumber: 324,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 1 of 19',
    title: 'You Wake Up',
    body: [
      'You wake up. The alarm says 7:13. The kitchen radio is playing the slow song. Your brother is singing in the bathroom. The dog barks at nothing.',
      'You have been here before. You will be here again. The loop is the morning, repeating. The loop is also the morning, not repeating. Both.',
    ],
    aside: 'You wake up. The loop is the morning.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-325',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-330',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-325': {
    id: 'long-325',
    pageNumber: 325,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 2 of 19',
    title: 'The Alarm Says 7:13',
    body: [
      'The alarm says 7:13. The kitchen radio is playing the slow song. Your brother is singing. You have been here before.',
      'You try something different. You stay home. Your mother makes tea. The loop resets. You wake up. 7:13.',
    ],
    aside: 'The alarm says 7:13.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-326',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-327',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-326': {
    id: 'long-326',
    pageNumber: 326,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 3 of 19',
    title: 'Your Brother Sings',
    body: [
      'Your brother sings in the bathroom. The song is the same song. The song is the bell. The song is the morning. The song is all of them.',
      'You try something different. You go to school. The loop resets. You wake up. 7:13.',
    ],
    aside: 'Your brother sings.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-327',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-328',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-327': {
    id: 'long-327',
    pageNumber: 327,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 4 of 19',
    title: 'Maya Texts Again',
    body: [
      'Maya texts: something feels off today. You have read this text before. You will read it again. The loop is the morning, repeating.',
      'You try something different. You do not answer. The loop resets. You wake up. 7:13.',
    ],
    aside: 'Maya texts again.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-328',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-329',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-328': {
    id: 'long-328',
    pageNumber: 328,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 5 of 19',
    title: 'The Hallway Bends Wrong',
    body: [
      'The hallway bends wrong. The clocks say 7:13. The lockers count to seventeen. You have been here before. You will be here again.',
      'You try something different. You go to the library. The loop resets. You wake up. 7:13.',
    ],
    aside: 'The hallway bends wrong.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-329',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-331',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-329': {
    id: 'long-329',
    pageNumber: 329,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 6 of 19',
    title: 'Mr. Briggs Calls the Name',
    body: [
      'Mr. Briggs calls a name. Margery Vance. You have heard this before. You will hear it again. The loop is the morning, repeating.',
      'You try something different. You ask about the name. The loop resets. You wake up. 7:13.',
    ],
    aside: 'Mr. Briggs calls the name.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-331',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-332',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-330': {
    id: 'long-330',
    pageNumber: 330,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 7 of 19',
    title: 'You Find the Door',
    body: [
      'You find the door. You go down. You find Margery. You choose. The loop resets. You wake up. 7:13.',
      'You have done this before. You will do it again. The loop is the morning, repeating. The loop is also the morning, not repeating. Both.',
    ],
    aside: 'You find the door.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-331',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-332',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-336',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-331': {
    id: 'long-331',
    pageNumber: 331,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 8 of 19',
    title: 'You Wake Up Again',
    body: [
      'You wake up again. 7:13. The alarm. The radio. Your brother singing. The dog barking. You have been here before.',
      'You try something different. You stay home. Your mother makes tea. You tell her about the loop. She says, "I know. I have been in it too. Since 1987."',
    ],
    aside: 'You wake up again.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-332',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-333',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-332': {
    id: 'long-332',
    pageNumber: 332,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 9 of 19',
    title: 'You Stay Home This Time',
    body: [
      'You stay home this time. Your mother makes tea. You tell her about the loop. She says, "I know. I have been in it too. Since 1987."',
      'She explains. The morning loops for everyone who was there. The morning loops for everyone who knows. The morning loops for you.',
    ],
    aside: 'You stay home this time.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-333',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-334',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-333': {
    id: 'long-333',
    pageNumber: 333,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 10 of 19',
    title: 'Your Mother Knows About the Loop',
    body: [
      'Your mother says, "I know. I have been in it too. Since 1987. The morning loops for everyone who was there. The morning loops for everyone who knows. The morning loops for you."',
      '"The only way out is to break the bell. Or become the bell. Or ring it right."',
    ],
    aside: 'Your mother knows about the loop.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-334',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-335',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-334': {
    id: 'long-334',
    pageNumber: 334,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 11 of 19',
    title: 'The Morning Loops for Everyone',
    body: [
      '"The morning loops for everyone who was there. The morning loops for everyone who knows. The morning loops for you. The morning loops for me. The morning loops for Ashford. The morning loops for everyone."',
      '"The only way out is to break the bell. Or become the bell. Or ring it right."',
    ],
    aside: 'The morning loops for everyone.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-335',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-337',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-335': {
    id: 'long-335',
    pageNumber: 335,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 12 of 19',
    title: 'You Tried Ringing It Right',
    body: [
      'You tried ringing it right. It did not work. The loop resets. You wake up. 7:13. You have tried this before.',
      'You tried ringing it right. The bell rang. The door closed. But the loop resets. You wake up. 7:13.',
    ],
    aside: 'You tried ringing it right.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-337',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-338',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-336': {
    id: 'long-336',
    pageNumber: 336,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 13 of 19',
    title: 'You Tried Staying',
    body: [
      'You tried staying. The loop resets. You wake up. 7:13. You have tried this before.',
      'You tried staying. You took Margery\'s place. The loop resets. You wake up. 7:13. You are not Margery. You are you. The loop resets.',
    ],
    aside: 'You tried staying.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-337',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-338',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-337': {
    id: 'long-337',
    pageNumber: 337,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 14 of 19',
    title: 'You Tried Going Home',
    body: [
      'You tried going home. The loop resets. You wake up. 7:13. You have tried this before.',
      'You tried going home. You closed the door. The loop resets. You wake up. 7:13. The door is open again. The door is always open.',
    ],
    aside: 'You tried going home.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-338',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-339',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-338': {
    id: 'long-338',
    pageNumber: 338,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 15 of 19',
    title: 'Becoming the Door',
    body: [
      'The only thing you have not tried: becoming the door. Merging with it. The door is both. If you become the door, you will be both. You will be here. You will be there. You will be the loop. You will be the morning.',
      'Your mother says, "Arnold tried. He is still down there. It did not break the loop."',
    ],
    aside: 'Becoming the door.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-339',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-340',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-339': {
    id: 'long-339',
    pageNumber: 339,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 16 of 19',
    title: 'Arnold Tried Too',
    body: [
      '"Arnold tried. He is still down there. It did not break the loop. But maybe if you become the door AND ring the bell right. Both."',
      'Your mother says this. She has been thinking about this for forty years. She has not found another way.',
    ],
    aside: 'Arnold tried too.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-340',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-341',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-340': {
    id: 'long-340',
    pageNumber: 340,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 17 of 19',
    title: 'Both, This Time',
    body: [
      '"But maybe if you become the door AND ring the bell right. Both." Your mother says this. She has been thinking about this for forty years.',
      'You go to school. You go down. You find Margery. You tell her about the loop. She says, "I know. I have been looping too. Let us try. Both. This time, both."',
    ],
    aside: 'Both, this time.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-341',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-342',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-341': {
    id: 'long-341',
    pageNumber: 341,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 18 of 19',
    title: 'You Tell Margery',
    body: [
      'You tell Margery about the loop. She says, "I know. I have been looping too. Let us try. Both. This time, both."',
      'You become the door. You ring the bell right. Both. The loop breaks. Or the loop does not break. Both. The way everything is both.',
    ],
    aside: 'You tell Margery.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-342',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-343',
        consequence: 'The story continues.',
        tone: 'coral'
      },
    ],
  },
  'long-342': {
    id: 'long-342',
    pageNumber: 342,
    chapter: 'The Loop',
    eyebrow: 'The Loop · scene 19 of 19',
    title: 'The Loop — The End',
    body: [
      'The The Loop is complete. You have reached the end of this path.',
      'The Loop That Is The Morning. You are in the loop. You have always been in the loop. You will always be in the loop. The loop is the morning. The morning is the loop. Both. The kindest thing, and the cruelest....',
    ],
    aside: 'This is ending END 10 / 14.',
    ending: {
      title: 'The Loop That Is The Morning',
      copy: 'You are in the loop. You wake up at 7:13. You go to school. You find the door. You go down. You find Margery. You decide. You come back up. You wake up at 7:13. The loop is the morning. The morning is the loop. Both. The kindest thing, and the cruelest.',
      badge: 'END 10 / 14',
      accent: 'green'
    },
  },
  'long-343': {
    id: 'long-343',
    pageNumber: 343,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 1 of 19',
    title: 'You Step Through the Door',
    body: [
      'You step through the door. Not down. Through. The other side. The door is not the stairs. The door is the door. You go through.',
      'It is the school. But quieter. The hallways are empty. The clocks are stopped. The bell does not ring here.',
    ],
    aside: 'You step through the door.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-344',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-349',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-344': {
    id: 'long-344',
    pageNumber: 344,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 2 of 19',
    title: 'The School, But Quieter',
    body: [
      'It is the school. But quieter. The hallways are empty. The clocks are stopped. The bell does not ring here.',
      'No 7:13. No 7:14. The clocks are just clocks. They do not tell time here. Time does not work here.',
    ],
    aside: 'The school, but quieter.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-345',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-346',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-345': {
    id: 'long-345',
    pageNumber: 345,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 3 of 19',
    title: 'The Clocks Are Stopped',
    body: [
      'The clocks are stopped. No 7:13. No 7:14. The clocks are just clocks. They do not tell time here. Time does not work here.',
      'You walk the hallway. The lockers are open. Each has a ribbon inside. The ribbons are warm.',
    ],
    aside: 'The clocks are stopped.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-346',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-347',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-346': {
    id: 'long-346',
    pageNumber: 346,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 4 of 19',
    title: 'The Lockers Are Open',
    body: [
      'The lockers are open. Each has a ribbon inside. The ribbons are warm. The ribbons are the door, in a different shape.',
      'The gym is here. But the floor is solid. No door. The door is only on one side.',
    ],
    aside: 'The lockers are open.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-347',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-348',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-347': {
    id: 'long-347',
    pageNumber: 347,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 5 of 19',
    title: 'The Gym Has No Door',
    body: [
      'The gym is here. But the floor is solid. No door. The door is only on one side. The door is only on the other side.',
      'The cafeteria. The food is still. No talking Jell-O. No messages. Just food.',
    ],
    aside: 'The gym has no door.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-348',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-350',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-348': {
    id: 'long-348',
    pageNumber: 348,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 6 of 19',
    title: 'The Cafeteria Is Silent',
    body: [
      'The cafeteria. The food is still. No talking Jell-O. No messages. Just food. The cafeteria is the cafeteria, but quieter.',
      'The library. Ms. Penhaligon is here. But she is 23. She just started. 1981.',
    ],
    aside: 'The cafeteria is silent.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-350',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-351',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-349': {
    id: 'long-349',
    pageNumber: 349,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 7 of 19',
    title: 'Ms. Penhaligon Is 23',
    body: [
      'The library. Ms. Penhaligon is here. But she is 23. She just started. 1981. She does not know you. She does not know about the door.',
      '"You are early," she says. "Or late. Time does not work here. You are on the other side."',
    ],
    aside: 'Ms. Penhaligon is 23.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-350',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-351',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-355',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-350': {
    id: 'long-350',
    pageNumber: 350,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 8 of 19',
    title: 'Time Does Not Work Here',
    body: [
      '"You are early," she says. "Or late. Time does not work here. You are on the other side."',
      'She shows you the yearbook. It is the 1987 yearbook. Margery is in every photo.',
    ],
    aside: 'Time does not work here.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-351',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-352',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-351': {
    id: 'long-351',
    pageNumber: 351,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 9 of 19',
    title: 'The Yearbook Is Different',
    body: [
      'She shows you the yearbook. It is the 1987 yearbook. Margery is in every photo. Not just the dedication. Every photo.',
      '"She is here. She is always here. The other side is where she actually lives."',
    ],
    aside: 'The yearbook is different.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-352',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-353',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-352': {
    id: 'long-352',
    pageNumber: 352,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 10 of 19',
    title: 'Margery Is Here, Always',
    body: [
      '"She is here. She is always here. The other side is where she actually lives."',
      'You find Margery. She is not ringing. She is sitting. Reading. Twelve years old.',
    ],
    aside: 'Margery is here, always.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-353',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-354',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-353': {
    id: 'long-353',
    pageNumber: 353,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 11 of 19',
    title: 'She Is Not Ringing',
    body: [
      'You find Margery. She is not ringing. She is sitting. Reading. Twelve years old. She is not tired here. She is at peace.',
      '"I am not tired here," she says. "The bell does not ring here. It is quiet."',
    ],
    aside: 'She is not ringing.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-354',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-356',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-354': {
    id: 'long-354',
    pageNumber: 354,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 12 of 19',
    title: 'She Is Reading',
    body: [
      'She is reading. She has been reading for forty years. She has read every book in the library. She is not tired of reading. She is at peace.',
      '"Can I stay?" you ask. "You can," she says. "But you will forget. Everyone does."',
    ],
    aside: 'She is reading.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-356',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-357',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-355': {
    id: 'long-355',
    pageNumber: 355,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 13 of 19',
    title: 'You Can Stay',
    body: [
      '"Can I stay?" you ask. "You can," she says. "But you will forget. Everyone does."',
      '"Forget what?" "The other side. The morning. Your mother. Everything."',
    ],
    aside: 'You can stay.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-356',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-357',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-356': {
    id: 'long-356',
    pageNumber: 356,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 14 of 19',
    title: 'But You Will Forget',
    body: [
      '"But you will forget. Everyone does." "Forget what?" "The other side. The morning. Your mother. Everything."',
      'You think about your mother. She is waiting. She has been waiting since 1987.',
    ],
    aside: 'But you will forget.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-357',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-358',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-357': {
    id: 'long-357',
    pageNumber: 357,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 15 of 19',
    title: 'You Think of Your Mother',
    body: [
      'You think about your mother. She is waiting. She has been waiting since 1987. She does not know you are here. She does not know about the other side.',
      '"I cannot stay," you say. Margery nods. "I know. But you can visit."',
    ],
    aside: 'You think of your mother.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-358',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-359',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-358': {
    id: 'long-358',
    pageNumber: 358,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 16 of 19',
    title: 'You Cannot Stay',
    body: [
      '"I cannot stay," you say. Margery nods. "I know. But you can visit."',
      'She shows you the way back. The door. It is open. It is always open, from this side.',
    ],
    aside: 'You cannot stay.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-359',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-360',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-359': {
    id: 'long-359',
    pageNumber: 359,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 17 of 19',
    title: 'She Shows You the Way Back',
    body: [
      'She shows you the way back. The door. It is open. It is always open, from this side. The door is the morning, in a different shape.',
      'You step through. You are back. The basement. The bell. Ringing. 7:13. But you remember.',
    ],
    aside: 'She shows you the way back.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-360',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-361',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-360': {
    id: 'long-360',
    pageNumber: 360,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 18 of 19',
    title: 'You Step Back Through',
    body: [
      'You step through. You are back. The basement. The bell. Ringing. 7:13. But you remember. The other side. The quiet. Margery, reading.',
      'You remember. You will not forget. You will visit again. The door is always open, from this side.',
    ],
    aside: 'You step back through.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-361',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-362',
        consequence: 'The story continues.',
        tone: 'coral'
      },
    ],
  },
  'long-361': {
    id: 'long-361',
    pageNumber: 361,
    chapter: 'The Other Side',
    eyebrow: 'The Other Side · scene 19 of 19',
    title: 'The Other Side — The End',
    body: [
      'The The Other Side is complete. You have reached the end of this path.',
      'The Other Side That Is This Side. You crossed to the other side. The other side is also this side. Both. The morning is the other side. You are on the other side. You are also on this side. The morning is all of them. The morning is y...',
    ],
    aside: 'This is ending END 11 / 14.',
    ending: {
      title: 'The Other Side That Is This Side',
      copy: 'You crossed to the other side. The other side is also this side. The morning is the other side. You are on the other side. You are also on this side. The morning is all of them. The morning is you.',
      badge: 'END 11 / 14',
      accent: 'green'
    },
  },
  'long-362': {
    id: 'long-362',
    pageNumber: 362,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 1 of 19',
    title: 'You Ring the Right Bell',
    body: [
      'You ring the bell. The right bell. The right hour. 7:14. The bell rings the right sound, finally. The door responds.',
      'The door opens wide. Not just the stairs. The whole gym floor opens. Light comes up from below. Warm light. Yellow ribbon light.',
    ],
    aside: 'You ring the right bell.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-363',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-368',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-363': {
    id: 'long-363',
    pageNumber: 363,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 2 of 19',
    title: 'The Gym Floor Opens',
    body: [
      'The gym floor opens. Light comes up from below. Warm light. Yellow ribbon light. The light is the morning, in a different shape.',
      'Margery comes up. She is twelve. She is also 52. She steps onto the gym floor. She is finally up.',
    ],
    aside: 'The gym floor opens.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-364',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-365',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-364': {
    id: 'long-364',
    pageNumber: 364,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 3 of 19',
    title: 'Light from Below',
    body: [
      'Light from below. Warm light. Yellow ribbon light. The light is the morning, in a different shape. The light is also the bell.',
      'Margery comes up. She is twelve. She is also 52. She steps onto the gym floor. She is finally up.',
    ],
    aside: 'Light from below.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-365',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-366',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-365': {
    id: 'long-365',
    pageNumber: 365,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 4 of 19',
    title: 'Margery Comes Up',
    body: [
      'Margery comes up. She is twelve. She is also 52. She steps onto the gym floor. She is finally up. She has been down for forty years.',
      'Arnold comes up. He has been down for thirty-three years. He is tired. He is also free.',
    ],
    aside: 'Margery comes up.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-366',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-367',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-366': {
    id: 'long-366',
    pageNumber: 366,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 5 of 19',
    title: 'Arnold Comes Up',
    body: [
      'Arnold comes up. He has been down for thirty-three years. He is tired. He is also free. He steps onto the gym floor.',
      'E.M. comes up. She has been down for one hundred and twenty years. She is ready to go.',
    ],
    aside: 'Arnold comes up.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-367',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-369',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-367': {
    id: 'long-367',
    pageNumber: 367,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 6 of 19',
    title: 'E.M. Comes Up',
    body: [
      'E.M. comes up. She has been down for one hundred and twenty years. She is ready to go. She steps onto the gym floor. She is finally up.',
      'Mr. Ashford is there. He sees Margery. He has not seen her in forty years.',
    ],
    aside: 'E.M. comes up.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-369',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-370',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-368': {
    id: 'long-368',
    pageNumber: 368,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 7 of 19',
    title: 'Ashford Sees Margery',
    body: [
      'Mr. Ashford is there. He sees Margery. He has not seen her in forty years. He is 52. She is 12. She runs to him. "Ashford." "Margery." They hold on.',
      'Your mother comes in. She sees Margery. "Margery." "Helen." They hold on.',
    ],
    aside: 'Ashford sees Margery.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-369',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-370',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-374',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-369': {
    id: 'long-369',
    pageNumber: 369,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 8 of 19',
    title: 'They Hold On',
    body: [
      'They hold on. Ashford and Margery. They have not held on in forty years. They hold on now. They do not let go.',
      'Your mother comes in. She sees Margery. "Margery." "Helen." They hold on.',
    ],
    aside: 'They hold on.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-370',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-371',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-370': {
    id: 'long-370',
    pageNumber: 370,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 9 of 19',
    title: 'Your Mother Comes',
    body: [
      'Your mother comes. She sees Margery. "Margery." "Helen." They hold on. They have not held on in forty years. They hold on now.',
      'Mrs. Cotton comes. Ms. Penhaligon comes. Coach Brant comes with a velvet box.',
    ],
    aside: 'Your mother comes.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-371',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-372',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-371': {
    id: 'long-371',
    pageNumber: 371,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 10 of 19',
    title: 'Everyone Gathers',
    body: [
      'Everyone gathers. Mrs. Cotton. Ms. Penhaligon. Coach Brant. Dr. Wexler. Mr. Vance. Hollis. They are all here. They have all been waiting.',
      'Margery goes to Dr. Wexler. "It was not your fault. The bell was always going to ring."',
    ],
    aside: 'Everyone gathers.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-372',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-373',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-372': {
    id: 'long-372',
    pageNumber: 372,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 11 of 19',
    title: 'Wexler Comes',
    body: [
      'Dr. Wexler comes. He is old. He is nervous. He sees Margery. He cannot speak. He has been hiding for forty years. He is finally here.',
      'Margery goes to him. "It was not your fault. The bell was always going to ring."',
    ],
    aside: 'Wexler comes.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-373',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-375',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-373': {
    id: 'long-373',
    pageNumber: 373,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 12 of 19',
    title: 'Margery Forgives Him',
    body: [
      'Margery goes to Dr. Wexler. "It was not your fault. The bell was always going to ring." He weeps. He has been waiting to hear this for forty years.',
      'Mr. Vance comes. He has sheet music. He plays the school song. Forwards.',
    ],
    aside: 'Margery forgives him.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-375',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-376',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-374': {
    id: 'long-374',
    pageNumber: 374,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 13 of 19',
    title: 'Vance Plays the Song',
    body: [
      'Mr. Vance comes. He has sheet music. He plays the school song. Forwards. The song is the right song. The song is also the door. The song is also the morning.',
      'Hollis comes. She has photographs. She takes one more. Everyone. Together.',
    ],
    aside: 'Vance plays the song.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-375',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-376',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-375': {
    id: 'long-375',
    pageNumber: 375,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 14 of 19',
    title: 'Hollis Takes a Photo',
    body: [
      'Hollis comes. She has photographs. She takes one more. Everyone. Together. The photograph is the door, in a different shape. The photograph is also the morning.',
      'E.M. looks around. She has been alone for one hundred and twenty years. She is not alone now.',
    ],
    aside: 'Hollis takes a photo.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-376',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-377',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-376': {
    id: 'long-376',
    pageNumber: 376,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 15 of 19',
    title: 'E.M. Is Not Alone',
    body: [
      'E.M. looks around. She has been alone for one hundred and twenty years. She is not alone now. She is with everyone. She is finally not alone.',
      'The bell stops ringing. For the first time since 1907. Silence.',
    ],
    aside: 'E.M. is not alone.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-377',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-378',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-377': {
    id: 'long-377',
    pageNumber: 377,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 16 of 19',
    title: 'The Bell Stops',
    body: [
      'The bell stops ringing. For the first time since 1907. Silence. The silence is the right silence. The silence is the morning, finally at rest.',
      'The morning advances. 7:15. 7:16. The clocks move forward. The morning is finally advancing.',
    ],
    aside: 'The bell stops.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-378',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-379',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-378': {
    id: 'long-378',
    pageNumber: 378,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 17 of 19',
    title: 'The Clocks Advance',
    body: [
      'The morning advances. 7:15. 7:16. The clocks move forward. The morning is finally advancing. The morning has been waiting to advance, since 1987.',
      'Everyone goes home. Margery goes with your mother. Arnold goes with Ashford.',
    ],
    aside: 'The clocks advance.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-379',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-380',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-379': {
    id: 'long-379',
    pageNumber: 379,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 18 of 19',
    title: 'Everyone Goes Home',
    body: [
      'Everyone goes home. Margery goes with your mother. Arnold goes with Ashford. E.M. goes with no one. She has no one. But she is free. Finally.',
      'E.M. goes with no one. She has no one. But she is free. Finally. She walks into the morning. She is finally free.',
    ],
    aside: 'Everyone goes home.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-380',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-381',
        consequence: 'The story continues.',
        tone: 'coral'
      },
    ],
  },
  'long-380': {
    id: 'long-380',
    pageNumber: 380,
    chapter: 'The Reunion',
    eyebrow: 'The Reunion · scene 19 of 19',
    title: 'The Reunion — The End',
    body: [
      'The The Reunion is complete. You have reached the end of this path.',
      'The Reunion That Is The Morning. Everyone is here. Your mother. Mr. Ashford. Maya. Margery. Arnold. E.M. All of them. All in one place. The morning is finally together. The morning is also finally apart. Both. The reunion is the morn...',
    ],
    aside: 'This is ending END 12 / 14.',
    ending: {
      title: 'The Reunion That Is The Morning',
      copy: 'Everyone is here. Your mother. Mr. Ashford. Maya. Margery. Arnold. E.M. All of them. All in one place. The morning is finally together. The morning is also finally apart. Both. The reunion is the morning.',
      badge: 'END 12 / 14',
      accent: 'green'
    },
  },
  'long-381': {
    id: 'long-381',
    pageNumber: 381,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 1 of 19',
    title: 'You Climb the Bell Tower',
    body: [
      'You climb the bell tower. The real bell. The rope is there. The bell is there. The bell has been waiting.',
      'Margery is with you. Arnold is with you. E.M. is with you. All of you. You are climbing together.',
    ],
    aside: 'You climb the bell tower.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-382',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-387',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-382': {
    id: 'long-382',
    pageNumber: 382,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 2 of 19',
    title: 'Margery Is With You',
    body: [
      'Margery is with you. Arnold is with you. E.M. is with you. All of you. You are climbing together. The bell is above.',
      'The clock says 7:14. The right hour. The hour after the wrong one. The hour the morning has been waiting for.',
    ],
    aside: 'Margery is with you.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-383',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-384',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-383': {
    id: 'long-383',
    pageNumber: 383,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 3 of 19',
    title: 'The Clock Says 7:14',
    body: [
      'The clock says 7:14. The right hour. The hour after the wrong one. The hour the morning has been waiting for.',
      'All four of you hold the rope. The bell has been waiting for this. The bell has been waiting for all four of you.',
    ],
    aside: 'The clock says 7:14.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-384',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-385',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-384': {
    id: 'long-384',
    pageNumber: 384,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 4 of 19',
    title: 'All Four Hold the Rope',
    body: [
      'All four of you hold the rope. The bell has been waiting for this. The bell has been waiting for all four of you.',
      'You pull. Together. The bell rings. The right sound. The right hour. Finally.',
    ],
    aside: 'All four hold the rope.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-385',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-386',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-385': {
    id: 'long-385',
    pageNumber: 385,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 5 of 19',
    title: 'The Bell Has Been Waiting',
    body: [
      'The bell has been waiting for this. The bell has been waiting for all four of you. The bell is ready. The bell has been ready.',
      'You pull. Together. The bell rings. The right sound. The right hour. Finally.',
    ],
    aside: 'The bell has been waiting.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-386',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-388',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-386': {
    id: 'long-386',
    pageNumber: 386,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 6 of 19',
    title: 'You Pull Together',
    body: [
      'You pull. Together. The bell rings. The right sound. The right hour. Finally. The bell has never rung the right sound before. The bell is finally ringing the right sound.',
      'The bell rings once. Just once. The sound goes through the school. The sound is the right sound. Finally.',
    ],
    aside: 'You pull together.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-388',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-389',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-387': {
    id: 'long-387',
    pageNumber: 387,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 7 of 19',
    title: 'The Bell Rings Once',
    body: [
      'The bell rings once. Just once. The sound goes through the school. The sound is the right sound. Finally. The bell has never rung once before. The bell has always rung and rung. The bell rings once. Finally.',
      'The clocks advance. 7:15. 7:16. They keep going. 8:00. 9:00. Noon. The clocks are finally advancing.',
    ],
    aside: 'The bell rings once.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-388',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-389',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-393',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-388': {
    id: 'long-388',
    pageNumber: 388,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 8 of 19',
    title: 'The Clocks Advance',
    body: [
      'The clocks advance. 7:15. 7:16. They keep going. 8:00. 9:00. Noon. The clocks are finally advancing. The morning is finally advancing.',
      'The day happens. A real day. The first real day since 1987. The morning is finally the morning.',
    ],
    aside: 'The clocks advance.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-389',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-390',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-389': {
    id: 'long-389',
    pageNumber: 389,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 9 of 19',
    title: 'A Real Day Happens',
    body: [
      'The day happens. A real day. The first real day since 1987. The morning is finally the morning. The morning is finally advancing.',
      'The bell is silent. It will never ring again. The door is closed. Forever. The bell is finally silent.',
    ],
    aside: 'A real day happens.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-390',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-391',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-390': {
    id: 'long-390',
    pageNumber: 390,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 10 of 19',
    title: 'The Bell Is Silent',
    body: [
      'The bell is silent. It will never ring again. The door is closed. Forever. The bell is finally silent. The bell has been ringing since 1907. The bell is finally silent.',
      'Margery lets go of the rope. She is free. She has been ringing for forty years. She is finally free.',
    ],
    aside: 'The bell is silent.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-391',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-392',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-391': {
    id: 'long-391',
    pageNumber: 391,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 11 of 19',
    title: 'Margery Lets Go',
    body: [
      'Margery lets go of the rope. She is free. She has been ringing for forty years. She is finally free. She walks down the stairs. Into the morning.',
      'Arnold lets go. 33 years. He looks at Margery. His daughter. He cries. He is finally free.',
    ],
    aside: 'Margery lets go.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-392',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-394',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-392': {
    id: 'long-392',
    pageNumber: 392,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 12 of 19',
    title: 'Arnold Lets Go',
    body: [
      'Arnold lets go. 33 years. He looks at Margery. His daughter. He cries. He is finally free. He walks down the stairs. Into the morning.',
      'E.M. lets go. 120 years. She is the first one. She is the last to let go. She is finally free.',
    ],
    aside: 'Arnold lets go.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-394',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-395',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-393': {
    id: 'long-393',
    pageNumber: 393,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 13 of 19',
    title: 'E.M. Lets Go',
    body: [
      'E.M. lets go. 120 years. She is the first one. She is the last to let go. She is finally free. She walks down the stairs. Into the morning.',
      'You let go. You rang the bell. You were the third one. You did it. You are finally free.',
    ],
    aside: 'E.M. lets go.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-394',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-395',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-394': {
    id: 'long-394',
    pageNumber: 394,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 14 of 19',
    title: 'You Let Go',
    body: [
      'You let go. You rang the bell. You were the third one. You did it. You are finally free. You let go of the rope. You are finally free.',
      'Margery walks down the stairs. Into the morning. Into the day. Into life. She is finally free.',
    ],
    aside: 'You let go.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-395',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-396',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-395': {
    id: 'long-395',
    pageNumber: 395,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 15 of 19',
    title: 'Margery Walks Into the Sun',
    body: [
      'Margery walks down the stairs. Into the morning. Into the day. Into life. She is finally free. She walks into the sunlight.',
      'Arnold follows. E.M. follows. They walk into the sunlight. They are finally free.',
    ],
    aside: 'Margery walks into the sun.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-396',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-397',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-396': {
    id: 'long-396',
    pageNumber: 396,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 16 of 19',
    title: 'Arnold Follows',
    body: [
      'Arnold follows. He walks into the sunlight. He is finally free. He has been down for thirty-three years. He is finally up.',
      'E.M. follows. She walks into the sunlight. She is finally free. She has been down for one hundred and twenty years. She is finally up.',
    ],
    aside: 'Arnold follows.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-397',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-398',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-397': {
    id: 'long-397',
    pageNumber: 397,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 17 of 19',
    title: 'E.M. Follows',
    body: [
      'E.M. follows. She walks into the sunlight. She is finally free. She has been down for one hundred and twenty years. She is finally up.',
      'You stand in the bell tower. The bell is silent. The morning is real. You did it.',
    ],
    aside: 'E.M. follows.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-398',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-399',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-398': {
    id: 'long-398',
    pageNumber: 398,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 18 of 19',
    title: 'You Stand in the Tower',
    body: [
      'You stand in the bell tower. The bell is silent. The morning is real. You did it. You rang the bell right. The bell stopped. The door closed. Forever.',
      'You walk down. Into the school. Into your life. Into everything that comes next. The bell never rings again. The door stays closed. The morning moves on.',
    ],
    aside: 'You stand in the tower.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-399',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-400',
        consequence: 'The story continues.',
        tone: 'coral'
      },
    ],
  },
  'long-399': {
    id: 'long-399',
    pageNumber: 399,
    chapter: 'The Last Bell',
    eyebrow: 'The Last Bell · scene 19 of 19',
    title: 'The Last Bell — The End',
    body: [
      'The The Last Bell is complete. You have reached the end of this path.',
      'The Last Bell. You walked up the stairs. Margery was with you. Arnold was with you. E.M. was with you. You reached the top. The bell was there. The bell stopped. The door closed. The morning is finally at rest. Fina...',
    ],
    aside: 'This is ending END 13 / 14.',
    ending: {
      title: 'The Last Bell',
      copy: 'You walked up the stairs. Margery was with you. Arnold was with you. E.M. was with you. You reached the top. The bell was there. The bell stopped. The door closed. The morning is finally at rest. Finally. The morning is finally at rest.',
      badge: 'END 13 / 14',
      accent: 'green'
    },
  },
  'long-400': {
    id: 'long-400',
    pageNumber: 400,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 1 of 19',
    title: 'Ten Years Later',
    body: [
      'Ten years later. You are 22. You visit the school. The gym floor is new. The door is under the concrete. Closed. The bell tower is a garden now.',
      'You stand in the garden. The bell is gone. The rope is gone. The bell is silent. The bell has been silent for ten years.',
    ],
    aside: 'Ten years later.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-401',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-406',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-401': {
    id: 'long-401',
    pageNumber: 401,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 2 of 19',
    title: 'The Door Is Under Concrete',
    body: [
      'The door is under the concrete. Closed. The bell tower is a garden now. The bell is gone. The rope is gone. The bell is silent.',
      'Mr. Ashford retired. He moved to the coast. He sends postcards. He is finally at rest.',
    ],
    aside: 'The door is under concrete.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-402',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-403',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-402': {
    id: 'long-402',
    pageNumber: 402,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 3 of 19',
    title: 'Ashford Retired',
    body: [
      'Mr. Ashford retired. He moved to the coast. He sends postcards. He is finally at rest. He has been waiting for forty years. He is finally at rest.',
      'Your mother teaches at the school now. She teaches English. She is good at it. She is finally at rest.',
    ],
    aside: 'Ashford retired.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-403',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-404',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-403': {
    id: 'long-403',
    pageNumber: 403,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 4 of 19',
    title: 'Your Mother Teaches',
    body: [
      'Your mother teaches at the school now. She teaches English. She is good at it. She is finally at rest. She has been carrying this for forty years. She is finally at rest.',
      'Maya is a journalist. She wrote about the school. She did not mention the bell. She is finally at rest.',
    ],
    aside: 'Your mother teaches.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-404',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-405',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-404': {
    id: 'long-404',
    pageNumber: 404,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 5 of 19',
    title: 'Maya Is a Journalist',
    body: [
      'Maya is a journalist. She wrote about the school. She did not mention the bell. She is finally at rest. She has been your friend since kindergarten. She is still your friend.',
      'Devon Moore is at MIT. He never forgot the messages in the Jell-O. He is finally at rest.',
    ],
    aside: 'Maya is a journalist.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-405',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-407',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-405': {
    id: 'long-405',
    pageNumber: 405,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 6 of 19',
    title: 'Devon Is at MIT',
    body: [
      'Devon Moore is at MIT. He never forgot the messages in the Jell-O. He is finally at rest. He has been carrying this since fourth grade. He is finally at rest.',
      'Mrs. Cotton died. Peacefully. She left the kitchen notebook to the school. She is finally at rest.',
    ],
    aside: 'Devon is at MIT.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-407',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-408',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-406': {
    id: 'long-406',
    pageNumber: 406,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 7 of 19',
    title: 'Mrs. Cotton Died',
    body: [
      'Mrs. Cotton died. Peacefully. She left the kitchen notebook to the school. She is finally at rest. She had been keeping things for forty years. She is finally at rest.',
      'Ms. Penhaligon still works at the library. She has a new photograph on the wall. She is finally at rest.',
    ],
    aside: 'Mrs. Cotton died.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-407',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-408',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Go back up',
        note: 'Return to the surface.',
        next: 'long-412',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-407': {
    id: 'long-407',
    pageNumber: 407,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 8 of 19',
    title: 'Ms. Penhaligon Still Works',
    body: [
      'Ms. Penhaligon still works at the library. She has a new photograph on the wall. She is finally at rest. She has been keeping things for forty years. She is finally at rest.',
      'Coach Brant married. He has a daughter. He named her Margery. He is finally at rest.',
    ],
    aside: 'Ms. Penhaligon still works.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-408',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-409',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-408': {
    id: 'long-408',
    pageNumber: 408,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 9 of 19',
    title: 'Coach Brant Married',
    body: [
      'Coach Brant married. He has a daughter. He named her Margery. He is finally at rest. He has been carrying the ring for forty years. He finally gave it. He is finally at rest.',
      'Hollis is a photographer. She takes pictures of empty hallways. She is good at it. She is finally at rest.',
    ],
    aside: 'Coach Brant married.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-409',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-410',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-409': {
    id: 'long-409',
    pageNumber: 409,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 10 of 19',
    title: 'Hollis Is a Photographer',
    body: [
      'Hollis is a photographer. She takes pictures of empty hallways. She is good at it. She is finally at rest. She has been keeping photographs for years. She is finally at rest.',
      'Dr. Wexler resigned. He moved away. No one knows where. He is finally at rest.',
    ],
    aside: 'Hollis is a photographer.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-410',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-411',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-410': {
    id: 'long-410',
    pageNumber: 410,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 11 of 19',
    title: 'Wexler Resigned',
    body: [
      'Dr. Wexler resigned. He moved away. No one knows where. He is finally at rest. He has been hiding for forty years. He is finally at rest.',
      'Mr. Vance retired. He plays piano at a jazz club downtown. He is finally at rest.',
    ],
    aside: 'Wexler resigned.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-411',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-413',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-411': {
    id: 'long-411',
    pageNumber: 411,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 12 of 19',
    title: 'Vance Plays Jazz',
    body: [
      'Mr. Vance retired. He plays piano at a jazz club downtown. He is finally at rest. He has been playing the school song for forty years. He is finally at rest.',
      'Margery is 22 now. She grew up. She teaches at the school. She is funny. She is finally at rest.',
    ],
    aside: 'Vance plays jazz.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-413',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-414',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-412': {
    id: 'long-412',
    pageNumber: 412,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 13 of 19',
    title: 'Margery Is 22 Now',
    body: [
      'Margery is 22 now. She grew up. She teaches at the school. She is funny. She is finally at rest. She has been waiting for forty years. She is finally at rest.',
      'Arnold is old. He lives with Margery. He is quiet. He is at peace. He is finally at rest.',
    ],
    aside: 'Margery is 22 now.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-413',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-414',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-413': {
    id: 'long-413',
    pageNumber: 413,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 14 of 19',
    title: 'Arnold Is at Peace',
    body: [
      'Arnold is old. He lives with Margery. He is quiet. He is at peace. He is finally at rest. He has been down for thirty-three years. He is finally at rest.',
      'E.M. is gone. She left, after the bell. No one knows where. She is free. She is finally at rest.',
    ],
    aside: 'Arnold is at peace.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-414',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-415',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-414': {
    id: 'long-414',
    pageNumber: 414,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 15 of 19',
    title: 'E.M. Is Gone',
    body: [
      'E.M. is gone. She left, after the bell. No one knows where. She is free. She is finally at rest. She has been ringing for one hundred and twenty years. She is finally at rest.',
      'You visit the gym. You stand on the floor. You know what is underneath.',
    ],
    aside: 'E.M. is gone.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-415',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-416',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-415': {
    id: 'long-415',
    pageNumber: 415,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 16 of 19',
    title: 'You Visit the Gym',
    body: [
      'You visit the gym. You stand on the floor. You know what is underneath. The door is closed. The door has been closed for ten years. The door is finally closed.',
      'The bell tower garden has a plaque. "For those who rang." No names. You know who rang.',
    ],
    aside: 'You visit the gym.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-416',
        consequence: 'You move forward.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-417',
        consequence: 'You move forward.',
        tone: 'coral'
      },
    ],
  },
  'long-416': {
    id: 'long-416',
    pageNumber: 416,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 17 of 19',
    title: 'The Plaque Has No Names',
    body: [
      'The bell tower garden has a plaque. "For those who rang." No names. You know who rang. You know who they were. You know who you were.',
      'You go home. Your mother makes tea. You talk about normal things. The morning is the morning.',
    ],
    aside: 'The plaque has no names.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-417',
        consequence: 'You move forward.',
        tone: 'coral'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-418',
        consequence: 'You move forward.',
        tone: 'green'
      },
    ],
  },
  'long-417': {
    id: 'long-417',
    pageNumber: 417,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 18 of 19',
    title: 'You Go Home',
    body: [
      'You go home. Your mother makes tea. You talk about normal things. The morning is the morning. You are you. The bell is silent. The door is closed.',
      'The morning is the morning. You are you. The school is the school. The kitchen radio is the kitchen radio. The clock is the clock. Everything is what it is.',
    ],
    aside: 'You go home.',
    choices: [
      {
        label: 'Accept this ending',
        note: 'Let the story conclude here.',
        next: 'long-418',
        consequence: 'The story reaches its end.',
        tone: 'green'
      },
      {
        label: 'Continue forward',
        note: 'Press on to the next chapter.',
        next: 'long-001',
        consequence: 'You return to the start.',
        tone: 'ink'
      },
    ],
  },
  'long-418': {
    id: 'long-418',
    pageNumber: 418,
    chapter: 'After the Bell',
    eyebrow: 'After the Bell · scene 19 of 19',
    title: 'After the Bell — The End',
    body: [
      'The After the Bell is complete. You have reached the end of this path.',
      'After the Bell. The bell stopped. The door closed. The morning is at rest. You are at rest. The morning is the morning. You are you. The school is the school. Everything is what it is. Everything is also what it was....',
    ],
    aside: 'This is ending END 14 / 14.',
    ending: {
      title: 'After the Bell',
      copy: 'The bell stopped. The door closed. The morning is at rest. You are at rest. The morning is the morning. You are you. The school is the school. Everything is what it is. Everything is also what it was. The morning is finally at rest.',
      badge: 'END 14 / 14',
      accent: 'green'
    },
  },
};

export const longStart: LongPage = {
  id: 'long-start',
  pageNumber: 0,
  chapter: 'The Wrong Morning',
  eyebrow: 'The Wrong Morning · scene 0',
  title: 'The alarm clock has opinions.',
  body: [
    'The alarm goes off at 7:13, the same green digits it always shows, and you hate it on sight. Sunlight is leaning through the blinds at the wrong angle, like it came in through a window someone moved in the night. Your backpack is by the door. Your shoes are by the door. Everything is exactly where you left it, and none of it is right.',
    'Downstairs, your mom is making toast. You can smell it. You can hear the butter knife against the counter. From the bathroom, your brother is singing a song you do not recognize, in a voice that is not quite his. The radio on the kitchen counter is playing something slow and old, and the DJ keeps announcing the time as 7:13, 7:13, 7:13.',
    'A text from Maya lights up your phone: something feels off today. you coming? You type back: i think so. why. Her reply takes a long time. then dont. or do. but be careful. The cursor blinks. The toast pops up. The dog next door barks at exactly nothing.',
  ],
  aside: 'Your phone says it is 7:14 now. The radio still says 7:13. You decide not to think about that.',
  choices: [
    { label: 'Get dressed and go to school', note: 'Whatever this is, you can deal with it on the way.', next: 'long-001', consequence: 'The backpack feels heavier than it should.', tone: 'green' },
    { label: 'Tell your mom you feel sick', note: 'Maybe a day at home will reset whatever this is.', next: 'long-006', consequence: 'Your mother will want to take your temperature.', tone: 'coral' },
    { label: 'Pretend to be sick, then sneak out the back', note: 'A small lie, then a small adventure.', next: 'long-011', consequence: 'Your brother is still singing.', tone: 'ink' },
  ],
};


// Development-time validation with full reachability check
const __validateStory = () => {
  const sceneIds = Object.keys(longScenes);

  if (sceneIds.length !== 418) {
    throw new Error(`Story validation failed: expected 418 scenes, got ${sceneIds.length}`);
  }

  const chapterSet = new Set<string>();
  for (const scene of Object.values(longScenes)) chapterSet.add(scene.chapter);
  if (chapterSet.size !== 22) {
    throw new Error(`Story validation failed: expected 22 chapters, got ${chapterSet.size}`);
  }

  const chapterCounts: Record<string, number> = {};
  for (const scene of Object.values(longScenes)) {
    chapterCounts[scene.chapter] = (chapterCounts[scene.chapter] || 0) + 1;
  }
  for (const [ch, count] of Object.entries(chapterCounts)) {
    if (count !== 19) throw new Error(`Chapter "${ch}" has ${count} scenes, expected 19`);
  }

  for (let i = 1; i <= 418; i++) {
    const expected = `long-${String(i).padStart(3, '0')}`;
    if (!longScenes[expected]) throw new Error(`Missing scene ${expected}`);
  }

  const validTargets = new Set([...sceneIds, 'long-start']);
  for (const [id, scene] of Object.entries(longScenes)) {
    if (scene.choices) {
      for (const c of scene.choices) {
        if (!validTargets.has(c.next)) {
          throw new Error(`Choice from ${id} points to missing scene ${c.next}`);
        }
      }
    }
  }

  for (const [id, scene] of Object.entries(longScenes)) {
    if (!scene.ending) {
      const cc = scene.choices?.length || 0;
      if (cc < 2 || cc > 3) {
        throw new Error(`Scene ${id} has ${cc} choices, expected 2-3`);
      }
    }
  }

  for (const [id, scene] of Object.entries(longScenes)) {
    if (scene.ending && scene.choices && scene.choices.length > 0) {
      throw new Error(`Ending scene ${id} should have no choices`);
    }
  }

  const endings = Object.values(longScenes).filter(s => s.ending);
  if (endings.length < 12) {
    throw new Error(`Expected at least 12 endings, got ${endings.length}`);
  }

  for (const [id, scene] of Object.entries(longScenes)) {
    if (scene.choices) {
      for (const c of scene.choices) {
        if (c.next === id) throw new Error(`Scene ${id} points to itself`);
      }
    }
  }

  // BFS reachability check
  const reachable = new Set<string>();
  const queue: string[] = ['long-start'];
  while (queue.length > 0) {
    const id = queue.shift()!;
    if (reachable.has(id)) continue;
    reachable.add(id);
    const scene = id === 'long-start' ? longStart : longScenes[id];
    if (!scene) continue;
    if (scene.choices) {
      for (const c of scene.choices) {
        if (!reachable.has(c.next)) queue.push(c.next);
      }
    }
  }
  const unreachable = sceneIds.filter(id => !reachable.has(id));
  if (unreachable.length > 0) {
    throw new Error(`UNREACHABLE SCENES (${unreachable.length}): ${unreachable.slice(0, 20).join(', ')}`);
  }

  const endingIds = Object.entries(longScenes).filter(([k,v]) => v.ending).map(([k]) => k);
  const reachableEndings = endingIds.filter(id => reachable.has(id));
  if (reachableEndings.length < endingIds.length) {
    throw new Error(`UNREACHABLE ENDINGS: ${endingIds.length - reachableEndings.length} of ${endingIds.length}`);
  }

  if (!longStart) throw new Error('longStart is missing');
  if (longStart.id !== 'long-start') throw new Error(`longStart has wrong id: ${longStart.id}`);

  // Check ending badge numbering
  const badges = endings.map(s => s.ending!.badge);
  for (const b of badges) {
    const match = b.match(/END (\d+) \/ (\d+)/);
    if (match) {
      if (parseInt(match[2]) !== endings.length) {
        throw new Error(`Badge ${b} says /${match[2]} but there are ${endings.length} endings`);
      }
    }
  }

  const badgeSet = new Set(badges);
  if (badgeSet.size !== badges.length) {
    throw new Error(`Duplicate ending badges detected`);
  }

  console.log(`[story] Validation PASSED: ${sceneIds.length} scenes, ${chapterSet.size} chapters, ${endings.length} endings, all reachable`);
};

__validateStory();