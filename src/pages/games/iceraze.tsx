import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { IceRazeGamePage } from '@/presentation/relevant/game/game.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | ICE RAZE">
    <IceRazeGamePage />
  </Layout>
);

export default IndexPage;
