import type { FC } from 'react';
import { HttpError500 } from '@/presentation/http-error/HttpError500';
import { Layout } from '@/presentation/layout';

const Error500: FC = () => (
  <Layout title="500 | Internal Server Error">
    <HttpError500 />
  </Layout>
);

export default Error500;
