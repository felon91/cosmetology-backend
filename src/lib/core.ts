import type { Document, Query } from 'mongoose';

export type QueryType<T, D> = Query<T, Document<D>>;
