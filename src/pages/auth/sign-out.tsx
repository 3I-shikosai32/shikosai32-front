import type { FC } from 'react';
import { Layout } from '@/presentation/layout/layout.container';
import { SignOutPage } from '@/presentation/relevant/auth/sign-out.page';

const IndexPage: FC = () => (
  <Layout title="サインアウト | OZ">
    <SignOutPage />
  </Layout>
);

export default IndexPage;
