import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
interface IArticleViewProps {
  views: number;
}
const ArticleViews = ({ views }: IArticleViewProps) => {
  return (
    <ViewWrapper>
      <RemoveRedEyeIcon fontSize="small" />
      <Typography variant="subtitle2">{views}</Typography>
    </ViewWrapper>
  );
};

export default ArticleViews;

export const ViewWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));
