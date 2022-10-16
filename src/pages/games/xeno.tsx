import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { XenoGamePage } from '@/presentation/relevant/game/game.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | Xeno">
    <XenoGamePage />
  </Layout>
);

export default IndexPage;
