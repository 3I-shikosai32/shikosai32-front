import type { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { CommonMeta, CommonMetaProps } from './components/common-meta/common-meta.component';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import twMerge from '@/presentation/common/twmerge';

export type LayoutProps = ComponentPropsWithoutRef<'main'> &
  Pick<CommonMetaProps, 'title'> & {
    children: ReactNode;
  };

export const Layout: FC<LayoutProps> = ({ children, title, className, ...props }) => (
  <div className="m-0 flex min-h-screen w-full flex-col items-center justify-start">
    <CommonMeta title={title} />
    <Header className="sticky top-0 left-0 z-50 m-0 w-full grow-0" />
    <main className={twMerge('m-0 flex w-full grow flex-col items-center justify-start', className)} {...props}>
      {children}
    </main>
    <Footer className="m-0 mt-16 w-full grow-0" />
  </div>
);
