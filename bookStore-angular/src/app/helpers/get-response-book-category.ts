import { Category } from "../model/category";

export interface GetResponseBookCategory {

    _embedded: {
        category: Category[];
      }
}
