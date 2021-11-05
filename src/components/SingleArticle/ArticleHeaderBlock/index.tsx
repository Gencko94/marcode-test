import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { HEADER_TYPE } from '../../../lib/interfaces/articles';

interface IArticleHeaderBlockProps extends Omit<HEADER_TYPE, 'type'> {}

const ArticleHeaderBlock = ({ data }: IArticleHeaderBlockProps) => {
  const level = useMemo(() => {
    switch (data.level) {
      case 1:
        return 'h5';
      case 2:
        return 'h6';
      case 3:
        return 'subtitle1';
      default:
        'subtitle1';
    }
  }, []);

  return (
    <Typography fontWeight="bold" variant={level}>
      {data.text}
    </Typography>
  );
};

export default ArticleHeaderBlock;
