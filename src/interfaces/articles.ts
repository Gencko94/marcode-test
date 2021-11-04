export interface IArticle {
  id: number;
  excerpt: string | null;
  title: string;
  is_sticky: boolean;
  in_headline: string;
  type: string;
  enable_comments: boolean;
  comments_count: number;
  claps_count: number;
  claps_users_count: number;
  source: string | null;
  source_url: string | null;
  image_id: number;
  slug: string;
  published_at: string;
  updated_at: string;
  is_published: boolean;
  user_id: number;
  video_id: string | null;
  views: number;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
  url: string;
  bold_title: number;
  is_bold: boolean;
  author: {
    id: number;
    name: string;
    username: string;
    email: string;
    public_url: string;
    author_url: string;
    status: string;
  };
  image: string | null;
  thumbnails: {
    xsmall_300: string | null;
    xsmall_400: string | null;
    medium: string | null;
    origin: string | null;
    fullurl: string | null;
  };
  thumbnails_without_watermark: {
    xsmall_300: string | null;
    xsmall_400: string | null;
    medium: string | null;
    origin: string | null;
    fullurl: string | null;
  };
  tags: [
    {
      id: number;
      title: string | null;
      slug: string | null;
    },
    {
      id: number;
      title: string | null;
      slug: string | null;
    }
  ];
  primary_tag: {
    id: number;
    title: string | null;
    slug: string | null;
  };
}
