import type { NextPage } from 'next';
import { Layout } from '@/presentation/layout/layout.container';
import { GiftTransaction } from '@/presentation/relevant/gift-transaction/gift-transaction.page';

const GiftTransactionPage: NextPage = () => (
  <Layout title="景品交換履歴 | OZ">
    <GiftTransaction />
  </Layout>
);

export default GiftTransactionPage;
