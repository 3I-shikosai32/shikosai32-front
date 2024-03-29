import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import Profile from '@/presentation/relevant/profile';

const IndexPage: NextPage = () => (
  <Layout title="プロフィール | OZ">
    <Profile />
  </Layout>
);

export default IndexPage;
