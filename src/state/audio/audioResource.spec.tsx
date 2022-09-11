import { resolveAudioResource } from './audioResource';
import type { AudioResource } from './audioResource';

const audioResources: Array<AudioResource> = [
  {
    name: '*素晴らしい曲名ゲーム*',
    composers: [
      {
        name: '*作曲者様の名前*',
      },
    ],
    src: 'https://example.com/audio.mp3',
    target: /^\/games[\w-/]*$/,
  },
  {
    name: '*素晴らしい曲名デフォルト*',
    composers: [
      {
        name: '*作曲者様の名前*',
      },
    ],
    src: 'https://example.com/audio.mp3',
    target: /^\/[\w-/]*$/,
  },
];

describe('audioResource Resolver Test', () => {
  test('パスから対応する曲を取得する', () => {
    expect(resolveAudioResource('/', audioResources)).toEqual({
      name: '*素晴らしい曲名デフォルト*',
      composer: [
        {
          name: '*作曲者様の名前*',
        },
      ],
      src: 'https://example.com/audio.mp3',
      target: /^\/[\w-/]*$/,
    });
  });
  test('配列の番号が小さい方を優先する', () => {
    expect(resolveAudioResource('/games/', audioResources)).toEqual({
      name: '*素晴らしい曲名ゲーム*',
      composer: [
        {
          name: '*作曲者様の名前*',
        },
      ],
      src: 'https://example.com/audio.mp3',
      target: /^\/games[\w-/]*$/,
    });
    expect(resolveAudioResource('/unexpected/path/here', audioResources)).toEqual({
      name: '*素晴らしい曲名デフォルト*',
      composer: [
        {
          name: '*作曲者様の名前*',
        },
      ],
      src: 'https://example.com/audio.mp3',
      target: /^\/[\w-/]*$/,
    });
  });
});
