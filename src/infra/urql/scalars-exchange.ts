import { parseISO } from 'date-fns';
import type { IntrospectionQuery } from 'graphql';
import customScalarsExchange from 'urql-custom-scalars-exchange';
import schema from '@/infra/graphql/schema.json';

//
// 参照: https://github.com/clentfort/urql-custom-scalars-exchange
//

export const scalarsExchange = customScalarsExchange({
  schema: schema as unknown as IntrospectionQuery,
  scalars: {
    DateTime: (value: unknown) => (typeof value === 'string' ? parseISO(value) : new Date(0)),
  },
});
