enum ArticleType {
  Text = 'text',
  List = 'list',
  Img = 'img',
}

interface ArticleContent {
  type: ArticleType;
  values: string[];
}

export interface ArticlesResponse {
  title: string;
  content: ArticleContent;
  imgName: string;
  list?: string[];
  slug: string;
  createdAt: string;
  description: string;
}
