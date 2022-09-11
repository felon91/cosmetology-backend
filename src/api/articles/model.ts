import { Schema, model } from 'mongoose';

import type { ArticlesResponse } from 'api/articles/core';

const ArticleSchema = new Schema({
  type: {
    type: Schema.Types.String,
  },
  values: {
    type: [Schema.Types.String],
  },
});

const ArticlesSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  content: {
    type: Schema.Types.Array,
    ref: 'Article',
    required: true,
  },
  imgName: {
    type: Schema.Types.String,
    required: true,
  },
  list: {
    type: [Schema.Types.String],
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
  },
  slug: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
});

export const Article = model('article', ArticleSchema);
export const Articles = model<ArticlesResponse>('articles', ArticlesSchema);
