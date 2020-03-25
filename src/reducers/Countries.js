const initialState = {
  data: [],
  loading: false,
  error: ""
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_COUNTRIES_LOADING": {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case "LOAD_COUNTRIES_SUCCESS": {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    case "LOAD_COUNTRIES_ERROR": {
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

export default countryReducer;
