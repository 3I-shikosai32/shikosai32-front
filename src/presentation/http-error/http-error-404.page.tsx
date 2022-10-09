import type { FC } from 'react';
import { HttpError } from './component/http-error/http-error.component';
import type { HttpErrorProps } from './component/http-error/http-error.component';

export type HttpError404Props = Omit<HttpErrorProps, 'code' | 'description'>;

export const HttpError404: FC<HttpError404Props> = (props) => <HttpError code="404" description="Not Found" {...props} />;
