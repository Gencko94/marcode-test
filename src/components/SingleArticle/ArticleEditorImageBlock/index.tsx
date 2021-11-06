import { EDITOR_IMAGE_TYPE } from '../../../lib/interfaces/articles';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

interface IArticleEditorImageBlockProps
  extends Omit<EDITOR_IMAGE_TYPE, 'type'> {}

const ArticleEditorImageBlock = ({ data }: IArticleEditorImageBlockProps) => {
  return (
    <ImageWrapper>
      <Image
        layout="fill"
        src={data.url as string}
        alt={data.caption as string}
        placeholder="blur"
        blurDataURL={data.url as string}
      />
    </ImageWrapper>
  );
};

export default ArticleEditorImageBlock;

export const ImageWrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '400px',
  img: {
    objectFit: 'cover',
    objectPosition: 'top',
  },
}));
