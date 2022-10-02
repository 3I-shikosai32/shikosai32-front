import type { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { CommonMeta, CommonMetaProps } from './components/CommonMeta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import twMerge from '@/libs/twmerge';

export type LayoutProps = ComponentPropsWithoutRef<'main'> &
  Pick<CommonMetaProps, 'title'> & {
    children: ReactNode;
  };

export const Layout: FC<LayoutProps> = ({ children, title, className, ...props }) => (
  <div className="m-0 flex min-h-screen w-full flex-col items-center justify-start">
    <CommonMeta title={title} />
    <Header className="sticky top-0 left-0 m-0 w-full grow-0" />
    <main className={twMerge('m-0 flex w-full grow flex-col items-center justify-start', className)} {...props}>
      {children}
    </main>
    <Footer className="m-0 mt-16 w-full grow-0" />
  </div>
);
