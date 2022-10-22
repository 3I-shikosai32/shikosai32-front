import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { CoinDroppingGameAdminPage } from '@/presentation/relevant/game/game-admin.page';

const IndexPage: NextPage = () => (
  <Layout title="管理者用 水中コイン落とし | OZ">
    <CoinDroppingGameAdminPage />
  </Layout>
);

export default IndexPage;
