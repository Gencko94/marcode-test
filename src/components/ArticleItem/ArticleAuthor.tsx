import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
interface IArticleAuthorProps {
  author: {
    id: number;
    name: string;
    username: string;
    email: string;
    public_url: string;
    author_url: string;
    status: string;
  };
}

const ArticleAuthor = ({ author }: IArticleAuthorProps) => {
  return (
    <AuthorWrapper>
      <PersonIcon fontSize="small" />
      <Typography variant="subtitle2">
        by : <span>{author.username}</span>
      </Typography>
    </AuthorWrapper>
  );
};

export default ArticleAuthor;
export const AuthorWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  span: {
    color: theme.palette.primary.light,
  },
}));
