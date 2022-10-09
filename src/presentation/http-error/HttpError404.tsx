import type { FC } from 'react';
import { HttpError } from './components/HttpError';
import type { HttpErrorProps } from './components/HttpError';

export type HttpError404Props = Omit<HttpErrorProps, 'code' | 'description'>;

export const HttpError404: FC<HttpError404Props> = (props) => <HttpError code="404" description="Not Found" {...props} />;
