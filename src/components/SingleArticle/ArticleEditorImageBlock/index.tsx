import { EDITOR_IMAGE_TYPE } from '../../../lib/interfaces/articles';
import Image from 'next/image';
interface IArticleEditorImageBlockProps
  extends Omit<EDITOR_IMAGE_TYPE, 'type'> {}

const ArticleEditorImageBlock = ({ data }: IArticleEditorImageBlockProps) => {
  return (
    <div className="image-wrapper">
      <Image
        src={data.url as string}
        layout="intrinsic"
        alt={data.caption as string}
        width={744}
        height={496}
        placeholder="blur"
        blurDataURL={data.url as string}
      />
    </div>
  );
};

export default ArticleEditorImageBlock;
