export interface IArticleItem {
  id: number; //
  excerpt: string | null;
  title: string; //
  is_sticky: boolean;
  in_headline: string; //
  type: string; //
  enable_comments: boolean; //
  comments_count: number;
  claps_count: number; //
  claps_users_count: number;
  source: string | null; //
  source_url: string | null; //
  image_id: number;
  slug: string; //
  published_at: string; //
  updated_at: string;
  is_published: boolean; //
  user_id: number;
  video_id: string | null;
  views: number; //
  meta_title: string | null; //
  meta_description: string | null; //
  status: string;
  url: string; //
  bold_title: number;
  is_bold: boolean; //
  author: {
    id: number;
    name: string;
    username: string;
    email: string;
    public_url: string;
    author_url: string;
    status: string;
  };
  image: string | null; //
  thumbnails: {
    //
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
    //
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
    //
    id: number;
    title: string | null;
    slug: string | null;
  };
}

export interface SingleArticle
  extends Omit<
    IArticleItem,
    | 'author'
    | 'status'
    | 'excerpt'
    | 'bold_title'
    | 'thumbnails_without_watermark'
    | 'is_sticky'
    | 'image_id'
  > {
  created_at: string;
  'my-claps': number;
  clap_orders: number;
  author: {
    id: number;
    name: string;
    username: string;
    email: string;
    status: string;
  };
  related_items: string[];
  related_collection_items: string[];
  content_images: {
    id: number;
    name: string;
    alias: string;
    url: string;
    resized_url: string;
    origin_url: string;
  }[];
  content: [
    | HEADER_TYPE
    | PARAGRAPH_TYPE
    | EMBED_TYPE
    | COLLECTION_ITEM
    | EDITOR_IMAGE_TYPE
  ];
}

export type HEADER_TYPE = {
  type: 'header';
  data: {
    text: string;
    level: 1 | 2 | 3;
  };
};
export type PARAGRAPH_TYPE = {
  type: 'paragraph';
  data: { text: string };
};
export type EMBED_TYPE = {
  type: 'embed';
  data: {
    embed: string;
    width: number;
    height: number;
    source: string;
    caption: string;
    service: string;
  };
};
export type EDITOR_IMAGE_TYPE = {
  type: 'editorImage';
  data: {
    id: string;
    url: string;
    link: string | undefined;
    width: string;
    height: string;
    caption: string;
    link_new_page: string;
  };
};
export type COLLECTION_ITEM = {
  type: 'CollectionItem';
  data: {
    id: string;
  };
};

export interface IArticleComment {
  id: number;
  replay_to: unknown;
  content: string;
  date: string;
  date_and_time: string;
  replies_count: number;
  likes_count: number;
  username: string;
  user_id: number;
  user_likes: number;
  user_avatar: string;
  user_avatar_origin: string;
  user_url: string;
  level: number;
  replies: any[];
  can_like_it: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  flagged: number;
  show_as_dark: boolean;
  author_role: '';
  show_author_role: boolean;
  show_the_badge: boolean;
  can_edit: boolean;
  can_delete: boolean;
}
