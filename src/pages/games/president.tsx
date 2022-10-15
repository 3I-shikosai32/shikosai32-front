import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { PresidentGamePage } from '@/presentation/relevant/game/game.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | 大富豪">
    <PresidentGamePage />
  </Layout>
);

export default IndexPage;
