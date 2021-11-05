import { Container, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useMemo } from 'react';
import ArticleHeaderBlock from '../../src/components/SingleArticle/ArticleHeaderBlock';
import ArticleParagraphBlock from '../../src/components/SingleArticle/ArticleParagraphBlock';
import http from '../../src/configs/axios';
import {
  ARTICLE_BASE_URL,
  BASE_URL,
  PRIMARY_COLOR,
} from '../../src/lib/constants';
import { styled } from '@mui/material/styles';

import { SingleArticle } from '../../src/lib/interfaces/articles';
import Image from 'next/image';
import ArticleMetaData from '../../src/components/ArticleItem/ArticleMetaData';
import ArticleEditorImageBlock from '../../src/components/SingleArticle/ArticleEditorImageBlock';
const Article: NextPage<{ article: SingleArticle }> = ({ article }) => {
  // console.log(article, 'article' + article?.id);
  const blocks = useMemo<React.ReactNode[]>(() => {
    const nodes: React.ReactNode[] = [];

    if (article) {
      for (const contentType of article.content) {
        if (contentType.type === 'header') {
          nodes.push(
            <ArticleHeaderBlock key="header" data={contentType.data} />
          );
        }
        if (contentType.type === 'paragraph') {
          nodes.push(<ArticleParagraphBlock data={contentType.data} />);
        }
        if (contentType.type === 'editorImage') {
          nodes.push(<ArticleEditorImageBlock data={contentType.data} />);
        }
      }
    }
    return nodes;
  }, [article]);

  return (
    <Container sx={{ maxWidth: { xs: '763px' } }}>
      <Typography
        variant="h5"
        gutterBottom
        fontWeight={article.is_bold ? 'bold' : 'medium'}
      >
        {article.title}
      </Typography>

      <ArticleMetaData
        claps={article.claps_count}
        comments={article.comments_count}
        primary_tag={article.primary_tag}
        published_at={article.published_at}
        views={article.views}
      />

      <ArticleContentWrapper>
        <div className="image-wrapper">
          <Image
            src={article.image as string}
            layout="intrinsic"
            alt={article.meta_description || ('' as string)}
            width={744}
            height={496}
            placeholder="blur"
            blurDataURL={article.thumbnails.xsmall_300 as string}
          />
        </div>
        {blocks}
      </ArticleContentWrapper>
    </Container>
  );
};

export default Article;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx.params;

  if (params?.id) {
    try {
      const { data } = await http.get(
        `${ARTICLE_BASE_URL}/v1/article-as-visitor/${
          params.id as string
        }?include=clapsCount,commentsCount`
      );

      return {
        props: { article: data.data },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }
  return {
    notFound: true,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const firstPageData = await http.get(
    `${BASE_URL}/v1/article/scopes/lat/get/0`
  );
  // const secondPageData = await http.get(
  //   `${BASE_URL}/v1/article/scopes/lat/get/1`
  // );
  const combinedArticles = [
    ...firstPageData.data.data,
    // ...secondPageData.data.data,
  ];
  // const cleanArticles = combinedArticles
  //   .slice(0, 10)
  //   .filter((article) => !Array.isArray(article));
  // console.log(cleanArticles);
  const paths = combinedArticles.map((article) => ({
    params: {
      id: article.id.toString(),
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const ArticleContentWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  a: { color: PRIMARY_COLOR },
  gap: theme.spacing(1),
  '& .image-wrapper': {
    margin: 'auto',
    position: 'relative',
  },
}));
