import { UseInfiniteQueryOptions, UseQueryOptions } from 'react-query';

export type COLOR_MODES = 'light' | 'dark';

export interface QueryConfig<T> {
  queryOptions?: UseQueryOptions<T>;
}
export interface InfiniteQueryConfig<T> {
  queryOptions?: UseInfiniteQueryOptions<T>;
}
export interface ResponseMetaData {
  key: string;
  message: string;
  status: number;
  other: unknown;
}
