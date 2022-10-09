import type { NextPage } from 'next';
import { TemporalIndex } from '@/presentation/index/temporal-index.page';
import { Layout } from '@/presentation/layout/layout.component';

const IndexPage: NextPage = () => (
  <Layout title="OZ: 第32回茨香祭で開催予定！">
    <TemporalIndex />
  </Layout>
);

export default IndexPage;
