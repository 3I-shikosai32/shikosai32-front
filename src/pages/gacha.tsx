import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { GachaPage } from '@/presentation/relevant/gacha/gacha.page';

const IndexPage: NextPage = () => (
  <Layout title="ガチャページ | OZ">
    <GachaPage />
  </Layout>
);

export default IndexPage;
