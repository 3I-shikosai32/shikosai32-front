import type { Id, ResourceURL } from '..';

export type Gift = {
  createdAt: Date;
  iconUrl: ResourceURL;
  id: Id;
  name: string;
  price: number;
  remaining: number;
};
