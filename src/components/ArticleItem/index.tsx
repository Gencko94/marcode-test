import { IArticleItem } from '../../lib/interfaces/articles';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArticleMetaData from './ArticleMetaData';

interface IArticleItemProps {
  article: IArticleItem;
}

const ArticleItem = ({ article }: IArticleItemProps) => {
  return (
    <ArticleItemWrapper>
      <div>
        <Typography fontWeight="medium" variant="subtitle2">
          {article.author.username}
        </Typography>
        <Link passHref href={`/article/${article.id}`}>
          <a>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={article.is_bold ? 'bold' : 'medium'}
            >
              {article.title}
            </Typography>
            <Typography variant="body1" color="grey.600">
              {article.excerpt}
            </Typography>
          </a>
        </Link>
        <ArticleMetaData
          primary_tag={article.primary_tag}
          views={article.views}
          published_at={article.published_at}
          claps={article.claps_count}
          comments={article.comments_count}
        />
      </div>
      <div className="image-container">
        <Image
          layout="responsive"
          src={article.thumbnails.xsmall_400 as string}
          placeholder="blur"
          blurDataURL={article.thumbnails.xsmall_300 as string}
          alt={article.excerpt as string}
          objectFit="cover"
          width={200}
          height={200}
        />
      </div>
    </ArticleItemWrapper>
  );
};

export default ArticleItem;
export const ArticleItemWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  overflow: 'hidden',
  '& .image-container': {
    flexShrink: 0,
    width: '200px',
    height: '200px',
  },
}));
