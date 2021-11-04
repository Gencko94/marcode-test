import { useInfiniteQuery, useQuery, UseQueryOptions } from 'react-query';
import { IArticle } from '../../../interfaces/articles';
import {
  InfiniteQueryConfig,
  ResponseMetaData,
} from '../../../interfaces/general';
import { getAllArticles } from '../../../services/Articles/articlesServices';

export const GET_ARTICLES_QUERY_KEY = '/articles';

interface IUseGetArticlesProps
  extends InfiniteQueryConfig<IUseGetArticlesResponse> {}
interface IUseGetArticlesResponse {
  data: IArticle[];
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
