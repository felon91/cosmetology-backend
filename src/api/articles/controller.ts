import type { QueryType } from 'lib/core';

import { Articles } from './model';

import type { ArticlesResponse } from 'api/articles/core';

export const getArticles = (limit = 15): QueryType<ArticlesResponse[], ArticlesResponse> =>
  Articles.find().limit(limit);

export const getArticleBySlug = (
  slug: string
): QueryType<ArticlesResponse | null, ArticlesResponse> => Articles.findOne({ slug: slug });
