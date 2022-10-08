import { extendTailwindMerge } from 'tailwind-merge';

// 英数字のみの文字列ならtrueを返す
export const isGradientName = (classPart: string) => /\w+/.test(classPart);

// .tailwind.config.jsで指定した独自のグラデーション用のユーティリティクラス .gradient-* を解決できるように設定する
// 参照: https://github.com/dcastil/tailwind-merge/blob/v1.6.0/docs/configuring-tailwind-merge.md
const twMerge = extendTailwindMerge({
  theme: {
    borderRadius: ['base'],
  },
  classGroups: {
    gradient: [{ gradient: [isGradientName] }],
    shadow: [{ shadow: ['z4', 'z8', 'z16', 'z24', 'z32'] }],
  },
});

export default twMerge;
