import ContentLoader from 'react-content-loader';
import { ArticleItemWrapper } from '../ArticleItem/index';

const ArticleListSkeleton = () => {
  return (
    <>
      {[...Array.from(new Array(7))].map((i) => (
        <ArticleItemWrapper key={i}>
          <div style={{ flex: 1 }}>
            <ContentLoader
              speed={2}
              height={'100%'}
              width={'100%'}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="0" ry="0" width="464" height="15" />
              <rect x="0" y="31" rx="0" ry="0" width="484" height="9" />
              <rect x="0" y="50" rx="0" ry="0" width="364" height="9" />
            </ContentLoader>
          </div>
          <div
            className="image-container"
            style={{ height: '100%', flexBasis: '33%' }}
          >
            <ContentLoader
              speed={2}
              height={'100%'}
              width={'100%'}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
            </ContentLoader>
          </div>
        </ArticleItemWrapper>
      ))}
    </>
  );
};

export default ArticleListSkeleton;
