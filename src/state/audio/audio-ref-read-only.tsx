import { createContext, useContext } from 'react';

export type AudioRef = HTMLAudioElement;

//
// UIで表示する残り時間等はRecoilのAtom`AudioControl`を介して参照するようにする。
// `ref.current.play()`等の操作用の関数の呼び出しのみに使用することが好ましい。
// そのことを示すために、名前に`ReadOnly`をつけている。
//
export const AudioRefReadOnlyContext = createContext<AudioRef | null>(null);

export const useAudioRefReadOnly = () => {
  const audioRef = useContext(AudioRefReadOnlyContext);
  return audioRef;
};
