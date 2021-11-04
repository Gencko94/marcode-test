import ContentLoader from 'react-content-loader';
import { ArticleListWrapper } from '.';

const ArticleListSkeleton = () => {
  return (
    <ArticleListWrapper>
      {[...Array.from(new Array(7))].map((i) => (
        <ContentLoader
          speed={2}
          height={475}
          width={'100%'}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="25" cy="112" r="15" />
          <rect x="10" y="18" rx="0" ry="0" width="464" height="9" />
          <rect x="497" y="10" rx="0" ry="0" width="144" height="144" />
          <rect x="10" y="41" rx="0" ry="0" width="464" height="9" />
          <rect x="10" y="65" rx="0" ry="0" width="364" height="9" />
          <rect x="50" y="98" rx="0" ry="0" width="115" height="9" />
          <rect x="50" y="115" rx="0" ry="0" width="115" height="10" />
        </ContentLoader>
      ))}
    </ArticleListWrapper>
  );
};

export default ArticleListSkeleton;
