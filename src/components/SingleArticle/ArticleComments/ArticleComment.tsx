import { IArticleComment } from '../../../lib/interfaces/articles';
import { styled } from '@mui/material/styles';
import { Avatar, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

interface IArticleCommentProps {
  comment: IArticleComment;
}

const ArticleComment = ({ comment }: IArticleCommentProps) => {
  return (
    <CommentWrapper>
      <div className="author-wrapper">
        <Avatar title={comment.username} />
        <div>
          <Typography variant="subtitle2" color="primary">
            {comment.username}
          </Typography>
          <Typography variant="caption">{comment.date}</Typography>
        </div>
      </div>
      <div className="comment-content">
        <Typography>{comment.content}</Typography>
      </div>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        size="small"
        startIcon={<ThumbUpAltIcon fontSize="small" />}
      >
        Like
      </Button>
    </CommentWrapper>
  );
};

export default ArticleComment;
const CommentWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  '& .image-wrapper': {
    margin: 'auto',
    position: 'relative',
  },
  '& .author-wrapper': {
    display: 'flex',

    alignItems: 'center',
    gap: '8px',
  },
  '& .comment-content': {
    margin: theme.spacing(2, 0),
  },
}));
