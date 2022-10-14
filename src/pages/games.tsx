import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { GameIndex } from '@/presentation/relevant/game/game-index.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ: ゲーム一覧">
    <GameIndex />
  </Layout>
);

export default IndexPage;
