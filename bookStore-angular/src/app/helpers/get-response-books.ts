import { Book } from "../model/book";

export interface GetResponseBooks {

    _embedded: {
        books: Book[];
      },
      page: {
        //cureent page
        size: number,
        //total number of records in database
        totalElements: number,
        //total number of pages, starts from 0 index
        totalPages: number,
        //current page
        number: number
      }
}
