import { styled } from '@mui/material/styles';
import useGetArticles from '../../hooks/QueryHooks/Articles/useGetArticles';
import { DURATIONS } from '../../lib/constants';
import ArticleItem from '../ArticleItem';
import ArticleListSkeleton from './ArticleListSkeleton';

const ArticleList = () => {
  const { data, status } = useGetArticles({
    queryOptions: { staleTime: DURATIONS.fifteenMins },
  });
  return (
    <ArticleListWrapper>
      {status === 'loading' && <ArticleListSkeleton />}
      {data?.pages.map((group) =>
        group.data.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))
      )}
    </ArticleListWrapper>
  );
};

export default ArticleList;

export const ArticleListWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1fr',
  img: {
    aspectRatio: '1 / 1',
  },
}));
