import { styled } from '@mui/material/styles';
import SmsIcon from '@mui/icons-material/Sms';
import { Typography } from '@mui/material';
interface IArticleCommentsProps {
  comments: number;
}
const ArticleComments = ({ comments }: IArticleCommentsProps) => {
  return (
    <CommentsWrapper>
      <SmsIcon fontSize="small" />
      <Typography variant="subtitle2">{comments}</Typography>
    </CommentsWrapper>
  );
};

export default ArticleComments;
export const CommentsWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));
