import http from '../../configs/axios';

export const getAllArticles = async ({ page }: { page: number }) => {
  const res = await http.get(`/v2/article/scopes/lat/get/${page}`);
  return res.data;
};
export const getArticleComments = async ({
  articleId,
  page,
}: {
  articleId: number;
  page: number;
}) => {
  const res = await http.get(`/v2/article/${articleId}/comments/${page}`, {
    headers: { Authorization: ' ' },
  });
  return res.data;
};
