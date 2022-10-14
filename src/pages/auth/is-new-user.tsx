import type { NextPage } from 'next';
import { Layout } from '../../presentation/layout/layout.container';
import { IsNewUser } from '../../presentation/relevant/is-new-user/is-new-user.page';

const IsNewUserPage: NextPage = () => (
  <Layout title="loading... | OZ">
    <IsNewUser />
  </Layout>
);

export default IsNewUserPage;
