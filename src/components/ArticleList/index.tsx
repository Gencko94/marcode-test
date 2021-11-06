import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { useRef } from 'react';
import useGetArticles from '../../hooks/QueryHooks/Articles/useGetArticles';
import { DURATIONS } from '../../lib/constants';
import ArticleItem from '../ArticleItem';
import ArticleListSkeleton from './ArticleListSkeleton';

const ArticleList = () => {
  const page = useRef(0);
  const { data, status, isFetchingNextPage, fetchNextPage } = useGetArticles({
    queryOptions: {
      staleTime: DURATIONS.threeMinutes,
    },
  });
  return (
    <>
      <ArticleListWrapper>
        {status === 'loading' && <ArticleListSkeleton />}
        {data?.pages.map((group) =>
          group.data.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))
        )}
      </ArticleListWrapper>
      <LoadingButton
        loading={isFetchingNextPage}
        size="small"
        variant="outlined"
        onClick={() => {
          page.current++;
          fetchNextPage({ pageParam: page.current });
        }}
      >
        Load more
      </LoadingButton>
    </>
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
