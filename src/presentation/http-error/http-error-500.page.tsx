import type { FC } from 'react';
import { HttpError } from './component/http-error/http-error.component';
import type { HttpErrorProps } from './component/http-error/http-error.component';

export type HttpError500Props = Omit<HttpErrorProps, 'code' | 'description'>;

export const HttpError500: FC<HttpError500Props> = (props) => <HttpError code="500" description="Internal Server Error" {...props} />;
