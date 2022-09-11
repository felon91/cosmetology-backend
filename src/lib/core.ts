import type { Request } from 'express';
import type { AnyObject, Document, Query } from 'mongoose';

export type QueryType<T, D> = Query<T, Document<D>>;

export type RequestType<T> = Request<AnyObject, AnyObject, T>;

export const success = { success: true, body: null, errors: null };
export const fail = { success: false, body: null, errors: null };
