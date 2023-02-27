import type { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { nextUrqlClientConfig } from '@/infra/urql';
import { Layout } from '@/presentation/layout/layout.container';
import { RankingPage } from '@/presentation/relevant/ranking/ranking.page';

const IndexPage: NextPage = () => (
  <Layout title="ランキング | OZ">
    <RankingPage />
  </Layout>
);

export default withUrqlClient(
  nextUrqlClientConfig,
  { ssr: true }, // Enables server-side rendering using `getInitialProps`
)(IndexPage);
