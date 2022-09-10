import NextLink from 'next/link';
import type { FC, ReactNode, ReactElement, ComponentPropsWithoutRef } from 'react';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import twMerge from '@/libs/twmerge';

export type LinkIconProps = { children: ReactNode };

export const LinkIcon: FC<LinkIconProps> = ({ children }) => {
  // 親の`<Link>`内のテキストの行の高さに合わせる。
  const iconContextValue = useMemo(() => ({ size: '1.5em' }), []);
  //
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  // 再描画の抑制のためにuseMemo()を使う
  // react-iconsのサイズを変更するために提供されているIconContext.Providerを使う
  //
  return (
    <div className="inline aspect-square max-h-[1.5em] overflow-hidden fill-current">
      <IconContext.Provider value={iconContextValue}>{children}</IconContext.Provider>
    </div>
  );
};

export type LinkProps = Omit<ComponentPropsWithoutRef<typeof NextLink>, 'children'> & {
  children: Array<ReactElement<LinkIconProps> | string> | string;
};

export const Link: FC<LinkProps> = ({ className, children, ...props }) => (
  <NextLink {...props}>
    <a className={twMerge('inline-flex items-center gap-1 font-branding font-bold drop-shadow hover:underline', className)}>{children}</a>
  </NextLink>
);
