import type { NextPage } from 'next';
import { GameIndex } from '@/presentation/game/game-index.page';
import { Layout } from '@/presentation/layout/layout.component';

const IndexPage: NextPage = () => (
  <Layout title="OZ: ゲーム一覧">
    <GameIndex />
  </Layout>
);

export default IndexPage;
