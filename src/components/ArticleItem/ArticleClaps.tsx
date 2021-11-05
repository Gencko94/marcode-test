import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
interface IArticleClapsProps {
  claps: number;
}

const ArticleClaps = ({ claps }: IArticleClapsProps) => {
  return (
    <ClapsWrapper>
      <ThumbUpAltIcon fontSize="small" />
      <Typography variant="subtitle2">{claps}</Typography>
    </ClapsWrapper>
  );
};

export default ArticleClaps;
export const ClapsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));
