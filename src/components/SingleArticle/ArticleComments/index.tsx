import useGetArticleComments from '../../../hooks/QueryHooks/Articles/useGetArticleComments';
import { DURATIONS } from '../../../lib/constants';
import { styled } from '@mui/material/styles';
import ArticleComment from './ArticleComment';

interface IArticleCommentsProps {
  articleId: number;
}

const ArticleComments = ({ articleId }: IArticleCommentsProps) => {
  const { data } = useGetArticleComments({
    queryOptions: { staleTime: DURATIONS.fifteenMins },
    articleId,
  });
  return (
    <CommentsWrapper>
      {data?.pages.map((group) =>
        group.data.map((comment) => (
          <ArticleComment key={comment.id} comment={comment} />
        ))
      )}
    </CommentsWrapper>
  );
};

export default ArticleComments;

const CommentsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(1),
  '& .image-wrapper': {
    margin: 'auto',
    position: 'relative',
  },
}));
