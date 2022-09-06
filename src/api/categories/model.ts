import { Schema, model } from 'mongoose';

export interface CategoriesResponse {
  title: string;
  price: number;
}

interface Styles {
  className: string;
  lg: string;
  sm: string;
}

export interface HolidaysResponse {
  title: string[];
  subtitles?: string[];
  price?: number;
  link: string;
  styles: Styles;
}

const CategoriesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const HolidaysSchema = new Schema({
  title: {
    type: [String],
    required: true,
  },
  subtitles: {
    type: [String],
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  styles: {
    className: {
      type: String,
      required: true,
    },
    lg: {
      type: String,
      required: true,
    },
    sm: {
      type: String,
      required: true,
    },
  },
});

export const Categories = model<CategoriesResponse>('categories', CategoriesSchema);
export const Holidays = model<HolidaysResponse>('holidays', HolidaysSchema);
