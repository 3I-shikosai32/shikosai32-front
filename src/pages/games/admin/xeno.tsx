import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { XenoGameAdminPage } from '@/presentation/relevant/game/game-admin.page';

const IndexPage: NextPage = () => (
  <Layout title="管理者用 Xeno | OZ">
    <XenoGameAdminPage />
  </Layout>
);

export default IndexPage;
