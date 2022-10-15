import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { CoinDroppingGamePage } from '@/presentation/relevant/game/game.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | 水中コイン落とし">
    <CoinDroppingGamePage />
  </Layout>
);

export default IndexPage;
