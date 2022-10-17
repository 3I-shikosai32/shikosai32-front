import type { NextPage } from 'next';
import { Layout } from '../../presentation/layout/layout.container';
import { Auth } from '../../presentation/relevant/auth/auth.page';

const AuthPage: NextPage = () => (
  <Layout title="サインイン・サインアップ | OZ">
    <Auth />
  </Layout>
);

export default AuthPage;
