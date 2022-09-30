import { motion } from 'framer-motion';
import NextLink from 'next/link';
import type { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { forwardRef, useMemo } from 'react';
import { IconContext } from 'react-icons';
import twMerge from '@/libs/twmerge';

export type LinkIconProps = { children: ReactNode } & Pick<ComponentPropsWithoutRef<'div'>, 'className'>;

export const LinkIcon: FC<LinkIconProps> = ({ children, className }) => {
  // 親の`<Link>`内のテキストの行の高さに合わせる。
  const iconContextValue = useMemo(() => ({ size: '1.5em' }), []);
  //
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  // 再描画の抑制のためにuseMemo()を使う
  // react-iconsのサイズを変更するために提供されているIconContext.Providerを使う
  //
  return (
    <div className={twMerge('inline aspect-square max-h-[1.5em] overflow-hidden fill-current', className)}>
      <IconContext.Provider value={iconContextValue}>{children}</IconContext.Provider>
    </div>
  );
};

export type LinkProps = Omit<ComponentPropsWithoutRef<typeof NextLink>, 'children'> & {
  children: ReactNode;
};

// `framer-motion`でアニメーションを付加できるようにするため`forwardRef`でrefを受け取れるようにする
// 型推論はできているのに`<HTMLAnchorElement, LinkProps>`で明示的に型ジェネリクスを指定しないとeslint`react/prop-types`エラーになるため指定
export const Link: FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(({ className, children, ...props }, ref) => (
  <NextLink {...props}>
    <a ref={ref} className={twMerge('inline-flex items-center gap-1 font-branding font-bold drop-shadow hover:underline', className)}>
      {children}
    </a>
  </NextLink>
));

Link.displayName = 'Link';

export const MotionLink = motion(Link);
