import type { QueryType } from 'lib/core';

import { Categories, Holidays } from './model';

import type { CategoriesResponse, HolidaysResponse } from './model';

export const getCategories = (): QueryType<CategoriesResponse[], CategoriesResponse> =>
  Categories.find().limit(15);

export const getHolidays = (): QueryType<HolidaysResponse[], HolidaysResponse> => Holidays.find();
