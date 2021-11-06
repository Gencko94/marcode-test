import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ArticleList from '../src/components/ArticleList';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo noindex nofollow />
      <NextSeo
        title="Android World"
        description="Hier lees je alles over Android. Je vindt het laatste Android-nieuws, maar ook apps, handige tips en reviews van smartphones, tablets en smartwatches."
      />
      <ArticleList />
    </>
  );
};

export default Home;
