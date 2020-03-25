const API_BASE_ADDRESS = "https://covid19.mathdro.id/api/countries/";

export default class Api {
  static getCountries() {
    const uri = API_BASE_ADDRESS + "ukraine";
    return fetch(uri, {
      method: "GET"
    });
  }

  static setCountry(payload) {
    const uri = API_BASE_ADDRESS + `${payload}`;
    return fetch(uri, {
      method: "GET"
    });
  }

  static setAllCountry() {
    return fetch("https://covid19.mathdro.id/api/confirmed", { method: "GET" });
  }
}
