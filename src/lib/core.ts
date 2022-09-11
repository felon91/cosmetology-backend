import type { Request } from 'express';
import type { AnyObject, Document, Query } from 'mongoose';

export type QueryType<T, D> = Query<T, Document<D>>;

export type RequestType<T> = Request<AnyObject, AnyObject, T>;
