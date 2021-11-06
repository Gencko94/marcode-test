import useGetArticleComments from '../../../hooks/QueryHooks/Articles/useGetArticleComments';
import { DURATIONS } from '../../../lib/constants';
import { styled } from '@mui/material/styles';
import ArticleComment from './ArticleComment';
import { Typography } from '@mui/material';
import { useRef } from 'react';
import { LoadingButton } from '@mui/lab';

interface IArticleCommentsProps {
  articleId: number;
}

const ArticleComments = ({ articleId }: IArticleCommentsProps) => {
  const page = useRef(0);
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetArticleComments({
      queryOptions: {
        staleTime: DURATIONS.fifteenMins,
        getNextPageParam: (prev) => {
          if (prev.metaData.other.more) {
            page.current++;
          }
        },
      },
      articleId,
    });
  return (
    <>
      <Typography gutterBottom variant="h6">
        Comments :
      </Typography>
      <CommentsWrapper>
        {data?.pages[0].data.length === 0 && (
          <Typography>No Comments yet , be the first to comment !</Typography>
        )}
        {data?.pages.map((group) =>
          group.data.map((comment) => (
            <ArticleComment key={comment.id} comment={comment} />
          ))
        )}
      </CommentsWrapper>
      {hasNextPage && (
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
      )}
    </>
  );
};

export default ArticleComments;

const CommentsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  '& .image-wrapper': {
    margin: 'auto',
    position: 'relative',
  },
}));
