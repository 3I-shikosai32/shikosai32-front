import type { FC } from 'react';
import { HttpError404 } from '@/features/httperrors/HttpError404';
import { Layout } from '@/layouts';

const Error404: FC = () => (
  <Layout title="404 | Not Found">
    <HttpError404 />
  </Layout>
);

export default Error404;
