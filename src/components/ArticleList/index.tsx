import { Card, Paper, Stack, StackProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useGetArticles from '../../hooks/QueryHooks/Articles/useGetArticles';
import ArticleListSkeleton from './ArticleListSkeleton';

const ArticleList = () => {
  const { data, status } = useGetArticles({});
  return (
    <ArticleListWrapper>
      {status === 'loading' && <ArticleListSkeleton />}
      {data?.pages.map((group) =>
        group.data.map((article) => (
          <ArticleItemWrapper>
            <Typography variant="subtitle2">
              {article.author.username}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={article.is_bold ? 'bold' : 'medium'}
            >
              {article.title}
            </Typography>
            <Typography variant="subtitle2" color="grey.600">
              {article.excerpt}
            </Typography>
          </ArticleItemWrapper>
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
}));
export const ArticleItemWrapper = styled((props: StackProps) => (
  <Stack component={Paper} elevation={0} {...props} />
))(({ theme }) => ({
  padding: theme.spacing(2, 10, 5, 4),
}));
