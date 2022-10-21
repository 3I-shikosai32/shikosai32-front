import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { PresidentGameAdminPage } from '@/presentation/relevant/game/game-admin.page';

const IndexPage: NextPage = () => (
  <Layout title="管理者用 大富豪 | OZ">
    <PresidentGameAdminPage />
  </Layout>
);

export default IndexPage;
