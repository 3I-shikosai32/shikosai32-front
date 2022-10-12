import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { TemporalIndex } from '@/presentation/relevant/index/temporal-index.page';

const IndexPage: NextPage = () => (
  <Layout title="OZ: 第32回茨香祭で開催予定！">
    <TemporalIndex />
  </Layout>
);

export default IndexPage;
