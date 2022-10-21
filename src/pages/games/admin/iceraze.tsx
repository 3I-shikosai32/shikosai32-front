import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { IceRazeGameAdminPage } from '@/presentation/relevant/game/game-admin.page';

const IndexPage: NextPage = () => (
  <Layout title="管理者用 Ice Raze | OZ">
    <IceRazeGameAdminPage />
  </Layout>
);

export default IndexPage;
