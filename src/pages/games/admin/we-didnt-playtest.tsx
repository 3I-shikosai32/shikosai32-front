import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { WeDidntPlayTestGameAdminPage } from '@/presentation/relevant/game/game-admin.page';

const IndexPage: NextPage = () => (
  <Layout title="管理者用 テストプレイなんてしてないよ | OZ">
    <WeDidntPlayTestGameAdminPage />
  </Layout>
);

export default IndexPage;
