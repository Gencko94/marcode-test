import { Chip, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import ArticleViews from './ArticleViews';
import { styled } from '@mui/material/styles';
import React, { useMemo } from 'react';
import SpacerDot from '../Decorators/SpacerDot';
import ArticleClaps from './ArticleClaps';
import ArticleComments from './ArticleComments';

interface IArticleMetaDataProps {
  published_at: string;
  views: number;
  primary_tag: {
    id: number;
    title: string | null;
    slug: string | null;
  };
  claps: number;
  comments: number;
}

const ArticleMetaData = ({
  primary_tag,
  published_at,
  views,
  claps,
  comments,
}: IArticleMetaDataProps) => {
  const metaData = useMemo<React.ReactNode[]>(() => {
    let data = [];
    data.push(
      <Typography
        whiteSpace="nowrap"
        key="date"
        variant="body2"
        color="grey.600"
      >
        {format(parseISO(published_at), 'LLL d')}
      </Typography>
    );
    if (views > 0) data.push(<ArticleViews key="views" views={views} />);
    if (comments > 0)
      data.push(<ArticleComments key="comments" comments={comments} />);
    if (claps > 0) data.push(<ArticleClaps key="claps" claps={claps} />);
    data.push(
      <Chip key="tag" clickable size="small" label={primary_tag.title} />
    );
    return data;
  }, [claps, comments, primary_tag.title, published_at, views]);

  return (
    <MetaDataWrapper>
      {metaData.reduce((prev, curr) => [prev, <SpacerDot key={1} />, curr])}
    </MetaDataWrapper>
  );
};

export default ArticleMetaData;
export const MetaDataWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0),
  color: theme.palette.grey[600],
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
}));
