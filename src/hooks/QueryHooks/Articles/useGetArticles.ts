import { useInfiniteQuery, useQuery, UseQueryOptions } from 'react-query';
import { IArticleItem } from '../../../lib/interfaces/articles';
import {
  InfiniteQueryConfig,
  ResponseMetaData,
} from '../../../lib/interfaces/general';
import { getAllArticles } from '../../../services/Articles/articlesServices';

export const GET_ARTICLES_QUERY_KEY = '/articles';

interface IUseGetArticlesProps
  extends InfiniteQueryConfig<IUseGetArticlesResponse> {}
interface IUseGetArticlesResponse {
  data: IArticleItem[];
  metaData: ResponseMetaData;
}
const useGetArticles = ({ queryOptions }: IUseGetArticlesProps) => {
  return useInfiniteQuery<IUseGetArticlesResponse>(
    GET_ARTICLES_QUERY_KEY,
    getAllArticles,
    {
      ...queryOptions,
    }
  );
};

export default useGetArticles;
