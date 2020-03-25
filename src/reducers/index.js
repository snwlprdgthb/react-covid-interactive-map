import { combineReducers } from "redux";

import countryReducer from "./Countries";
import currentCountryReducer from "./UpdateList";

const reducers = combineReducers({
  countries: countryReducer,
  currentCountry: currentCountryReducer
});

export default reducers;
