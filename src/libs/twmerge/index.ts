import { extendTailwindMerge } from 'tailwind-merge';

const isGradientName = (classPart: string) => /^\.+\$/.test(classPart);

// .tailwind.config.jsで指定した独自のグラデーション用のユーティリティクラス .gradient-* を解決できるように設定する
// 参照: https://github.com/dcastil/tailwind-merge/blob/v1.6.0/docs/configuring-tailwind-merge.md
const twMerge = extendTailwindMerge({
  classGroups: {
    gradient: [isGradientName],
  },
});

export default twMerge;
