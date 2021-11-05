import http from '../../configs/axios';

export const getAllArticles = async () => {
  const res = await http.get('/v2/article/scopes/lat/get/0');
  return res.data;
};
export const getArticleComments = async ({
  articleId,
  page,
}: {
  articleId: number;
  page: number;
}) => {
  const res = await http.get(`/v1/article/${articleId}/comments/${page}`);
  return res.data;
};
