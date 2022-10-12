import type { FC } from 'react';
import { HttpError } from './component/http-error/http-error.presenter';
import type { HttpErrorProps } from './component/http-error/http-error.presenter';

export type HttpError500Props = Omit<HttpErrorProps, 'code' | 'description'>;

export const HttpError500: FC<HttpError500Props> = (props) => <HttpError code="500" description="Internal Server Error" {...props} />;
