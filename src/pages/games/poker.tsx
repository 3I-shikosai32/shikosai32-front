import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { PokerGamePage } from '@/presentation/relevant/game/game.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | ポーカー">
    <PokerGamePage />
  </Layout>
);

export default IndexPage;
