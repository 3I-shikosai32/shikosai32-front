import type { FC } from 'react';
import { HttpError } from './component/http-error/http-error.presenter';
import type { HttpErrorProps } from './component/http-error/http-error.presenter';

export type HttpError404Props = Omit<HttpErrorProps, 'code' | 'description'>;

export const HttpError404: FC<HttpError404Props> = (props) => <HttpError code="404" description="Not Found" {...props} />;
