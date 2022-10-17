import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { GiftIndexPage } from '@/presentation/relevant/gift/gift-index.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | 景品交換">
    <GiftIndexPage />
  </Layout>
);

export default IndexPage;
