import type { FC } from 'react';
import { HttpError404 } from '@/presentation/http-error/http-error-404.page';
import { Layout } from '@/presentation/layout/layout.container';

const Error404: FC = () => (
  <Layout title="404 | Not Found">
    <HttpError404 />
  </Layout>
);

export default Error404;
