import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { PokerGameAdminPage } from '@/presentation/relevant/game/game-admin.page';

const IndexPage: NextPage = () => (
  <Layout title="管理者用 ポーカー | OZ">
    <PokerGameAdminPage />
  </Layout>
);

export default IndexPage;
