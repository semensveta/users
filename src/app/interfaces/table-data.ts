import {UserInterface} from './user';

export interface TableDataInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<UserInterface>;
}
