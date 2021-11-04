import http from '../../configs/axios';

export const getAllArticles = async () => {
  const res = await http.get('/v2/article/scopes/lat/get/0');
  return res.data;
};
