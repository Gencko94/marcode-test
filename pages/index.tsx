import { Container } from '@mui/material';
import type { NextPage } from 'next';
import ArticleList from '../src/components/ArticleList';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <ArticleList />
      </Container>
    </>
  );
};

export default Home;
