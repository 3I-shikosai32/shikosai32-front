import type { FC } from 'react';
import { HttpError404 } from '@/presentation/http-error/HttpError404';
import { Layout } from '@/presentation/layout';

const Error404: FC = () => (
  <Layout title="404 | Not Found">
    <HttpError404 />
  </Layout>
);

export default Error404;
