import { useInfiniteQuery } from 'react-query';
import {
  IArticleComment,
  IArticleItem,
} from '../../../lib/interfaces/articles';
import {
  InfiniteQueryConfig,
  ResponseMetaData,
} from '../../../lib/interfaces/general';
import { getArticleComments } from '../../../services/Articles/articlesServices';

export const GET_ARTICLE_COMMENTS_QUERY_KEY = '/article/comments';

interface IUseGetArticleCommentsProps
  extends InfiniteQueryConfig<IUseGetArticleCommentsResponse> {
  articleId: number;
}
interface IUseGetArticleCommentsResponse {
  data: IArticleComment[];
  metaData: ResponseMetaData;
}
const useGetArticleComments = ({
  queryOptions,
  articleId,
}: IUseGetArticleCommentsProps) => {
  return useInfiniteQuery<IUseGetArticleCommentsResponse>(
    GET_ARTICLE_COMMENTS_QUERY_KEY,
    ({ pageParam = 0 }) => getArticleComments({ articleId, page: pageParam }),
    {
      ...queryOptions,
    }
  );
};

export default useGetArticleComments;
