import type { FC } from 'react';
import { HttpError500 } from '@/features/httperrors/HttpError500';
import { Layout } from '@/layouts';

const Error500: FC = () => (
  <Layout title="500 | Internal Server Error">
    <HttpError500 />
  </Layout>
);

export default Error500;
