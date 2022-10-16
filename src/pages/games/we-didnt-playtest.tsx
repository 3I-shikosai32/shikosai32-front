import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { WeDidntPlayTestGamePage } from '@/presentation/relevant/game/game.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | テストプレイなんてしてないよ">
    <WeDidntPlayTestGamePage />
  </Layout>
);

export default IndexPage;
