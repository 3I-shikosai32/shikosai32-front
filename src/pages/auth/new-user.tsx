import type { NextPage } from 'next';
import { Layout } from '../../presentation/layout/layout.container';
import NewUser from '@/presentation/relevant/new-user/new-user.page';

const NewUserPage: NextPage = () => (
  <Layout title="サインアップ | OZ">
    <NewUser />
  </Layout>
);

export default NewUserPage;
