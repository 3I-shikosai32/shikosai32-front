import type { FC } from 'react';
import { HttpError } from './components/HttpError';
import type { HttpErrorProps } from './components/HttpError';

export type HttpError500Props = Omit<HttpErrorProps, 'code' | 'description'>;

export const HttpError500: FC<HttpError500Props> = (props) => <HttpError code="500" description="Internal Server Error" {...props} />;
