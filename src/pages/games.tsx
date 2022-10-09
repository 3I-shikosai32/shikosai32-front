import type { NextPage } from 'next';
import { GamesIndexContainer } from '@/presentation/game/game-index.container';
import { Layout } from '@/presentation/layout/layout.component';

const IndexPage: NextPage = () => (
  <Layout title="OZ: ゲーム一覧">
    <GamesIndexContainer />
  </Layout>
);

export default IndexPage;
