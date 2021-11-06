import { Container, Divider, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useMemo } from 'react';
import ArticleHeaderBlock from '../../src/components/SingleArticle/ArticleHeaderBlock';
import ArticleParagraphBlock from '../../src/components/SingleArticle/ArticleParagraphBlock';
import http from '../../src/configs/axios';
import { NextSeo } from 'next-seo';

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
import ArticleComments from '../../src/components/SingleArticle/ArticleComments';

const Article: NextPage<{ article: SingleArticle }> = ({ article }) => {
  const blocks = useMemo<React.ReactNode[]>(() => {
    const nodes: React.ReactNode[] = [];

    if (article) {
      for (const contentType of article.content) {
        if (contentType.type === 'header') {
          nodes.push(
            <ArticleHeaderBlock
              key={contentType.data.text}
              data={contentType.data}
            />
          );
        }
        if (contentType.type === 'paragraph') {
          nodes.push(
            <ArticleParagraphBlock
              key={contentType.data.text}
              data={contentType.data}
            />
          );
        }
        if (contentType.type === 'editorImage') {
          nodes.push(
            <ArticleEditorImageBlock
              key={contentType.data.id}
              data={contentType.data}
            />
          );
        }
      }
    }
    return nodes;
  }, [article]);
  return (
    <>
      <NextSeo noindex nofollow />
      {article.meta_title && article.meta_description && (
        <NextSeo
          title={article.meta_title as string}
          description={article.meta_description as string}
        />
      )}
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
          author={article.author as any}
        />

        <ArticleContentWrapper>
          <div className="image-wrapper">
            <Image
              src={article.image as string}
              layout="intrinsic"
              alt={article.meta_description as string}
              width={744}
              height={496}
              placeholder="blur"
              blurDataURL={article.thumbnails.xsmall_300 as string}
            />
          </div>
          {blocks}
          <Divider sx={{ my: 4 }} />
          <ArticleComments articleId={article.id} />
        </ArticleContentWrapper>
      </Container>
    </>
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

  const paths = firstPageData.data.data.map((article: any) => ({
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
  margin: theme.spacing(1, 0),

  gap: theme.spacing(1),
  '& .image-wrapper': {
    margin: 'auto',
    position: 'relative',
    maxWidth: '100%',
  },
}));
