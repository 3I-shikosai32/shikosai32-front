import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { RankingPage } from '@/presentation/relevant/ranking/ranking.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | ランキング">
    <RankingPage />
  </Layout>
);

export default IndexPage;
