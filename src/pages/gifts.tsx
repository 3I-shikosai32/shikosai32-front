import type { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { nextUrqlClientConfig } from '@/infra/urql';
import { Layout } from '@/presentation/layout/layout.container';
import { GiftIndexPage } from '@/presentation/relevant/gift/gift-index.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ | 景品交換">
    <GiftIndexPage />
  </Layout>
);

export default withUrqlClient(
  nextUrqlClientConfig,
  { ssr: true }, // Enables server-side rendering using `getInitialProps`
)(IndexPage);
