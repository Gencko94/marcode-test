import { Typography } from '@mui/material';
import { PARAGRAPH_TYPE } from '../../../lib/interfaces/articles';

interface IArticleHeaderBlockProps extends Omit<PARAGRAPH_TYPE, 'type'> {}

const ArticleParagraphBlock = ({ data }: IArticleHeaderBlockProps) => {
  return (
    <Typography dangerouslySetInnerHTML={{ __html: data.text }}>
      {/* {data.text} */}
    </Typography>
  );
};

export default ArticleParagraphBlock;
