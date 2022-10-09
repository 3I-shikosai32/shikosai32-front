export enum Character {
  Cat = 'CAT',
  Fox = 'FOX',
  Goku = 'GOKU',
  Pudding = 'PUDDING',
  Reaper = 'REAPER',
  Tree = 'TREE',
}

export const CharacterNameDictionary: Record<Character, string> = {
  [Character.Fox]: 'きゅうびさん',
  [Character.Cat]: 'ねこさん',
  [Character.Pudding]: 'あらもーちゃん',
  [Character.Reaper]: 'りっぱーさん',
  [Character.Tree]: 'おおもりさん',
  [Character.Goku]: 'ごくうさん',
};

export const CharacterIconUrlDictionary: Record<Character, string> = {
  [Character.Fox]: '/icons/fox.png',
  [Character.Cat]: '/icons/cat.png',
  [Character.Pudding]: '/icons/pudding.png',
  [Character.Reaper]: '/icons/reaper.png',
  [Character.Tree]: '/icons/tree.png',
  [Character.Goku]: '/icons/goku.png',
};
