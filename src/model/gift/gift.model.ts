import type { Id } from '../id.model';
import type { ResourceURL } from '../resource-url.model';

export type Gift = {
  createdAt: Date;
  iconUrl: ResourceURL;
  id: Id;
  name: string;
  price: number;
  remaining: number;
};
