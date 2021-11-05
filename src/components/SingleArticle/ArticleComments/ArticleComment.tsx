import { IArticleComment } from '../../../lib/interfaces/articles';
import { styled } from '@mui/material/styles';

interface IArticleCommentProps {
  comment: IArticleComment;
}

const ArticleComment = ({ comment }: IArticleCommentProps) => {
  return <CommentWrapper>{comment.content}</CommentWrapper>;
};

export default ArticleComment;
const CommentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(1),
  '& .image-wrapper': {
    margin: 'auto',
    position: 'relative',
  },
}));
