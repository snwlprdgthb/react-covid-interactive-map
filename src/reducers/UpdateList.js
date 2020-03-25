const initialState = {
  data: {},
  loading: false,
  error: ""
};

const currentCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_COUNTRY_LOADING": {
      return {
        ...state,
        loading: true
      };
    }
    case "CURRENT_COUNTRY_SUCCESS": {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    case "CURRENT_COUNTRY_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default currentCountryReducer;
