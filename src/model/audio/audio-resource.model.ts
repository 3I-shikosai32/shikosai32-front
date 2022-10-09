import type { Composer } from './composer.model';

// 曲の情報を表す型
export type AudioResource = {
  name: string; // 曲の名前
  composers: Array<Composer>; // 作曲者名
  src: string; // 曲の音声ファイルのURL
  target: RegExp; // 曲が流れるページのパスの正規表現
};
