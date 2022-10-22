import type { NextPage } from 'next';
import { BadgeTransaction } from '../../presentation/relevant/badge-transaction/badge-transaction.page';
import { Layout } from '@/presentation/layout/layout.container';

const BadgeTransactionPage: NextPage = () => (
  <Layout title="バッジ交換履歴 | OZ">
    <BadgeTransaction />
  </Layout>
);

export default BadgeTransactionPage;
