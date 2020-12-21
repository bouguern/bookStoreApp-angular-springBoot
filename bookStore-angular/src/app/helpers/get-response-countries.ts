import { Country } from "../model/country";

export interface GetResponseCountries {

    _embedded: {
        countries: Country[];
      }
}
