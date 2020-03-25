import Api from "../config/Api";

export const loadCountries = () => dispatch => {
  dispatch({ type: "LOAD_COUNTRIES_LOADING" });
  Api.setAllCountry()
    .then(response => response.json())
    .then(
      data => {
        let usaArray = [];
        let setOtherData = [];

        data.forEach(el => {
          if (el.iso3 === "USA") {
            usaArray.push(el);
          } else {
            setOtherData.push(el);
          }
        });

        let confirmedUsa = usaArray.reduce((initialValue, el) => {
          initialValue += el.confirmed;
          return initialValue;
        }, 0);

        let objUsa = { iso3: "USA", confirmed: confirmedUsa };
        setOtherData.push(objUsa);

        dispatch({ type: "LOAD_COUNTRIES_SUCCESS", data: setOtherData });
      },
      error =>
        dispatch({
          type: "LOAD_COUNTRIES_ERROR",
          error: error.message || "Unexpected Error!!!"
        })
    );
};

export const setCountry = payload => dispatch => {
  console.log(payload);
  dispatch({ type: "SET_COUNTRY_LOADING" });
  Api.setCountry(payload)
    .then(response => response.json())
    .then(
      data => {
        console.log(data);
        dispatch({ type: "SET_COUNTRY_SUCCESS", data });
      },
      error =>
        dispatch({
          type: "SET_COUNTRY_ERROR",
          error: error.message || "Unexpected Error!!!"
        })
    );
};

export const newSetCountry = payload => dispatch => {
  dispatch({ type: "CURRENT_COUNTRY_LOADING" });
  let correctPayload = payload;
  if (payload === "United States of America") {
    correctPayload = "USA";
  }
  if (payload === "South Korea") {
    correctPayload = "Korea, South";
  }

  Api.setCountry(correctPayload)
    .then(response => response.json())
    .then(
      data => {
        dispatch({ type: "CURRENT_COUNTRY_SUCCESS", data });
      },
      error =>
        dispatch({
          type: "CURRENT_COUNTRY_ERROR",
          error: error.message || "Unexpected Error!!!"
        })
    );
};
