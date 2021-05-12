const INITIAL_STATE = {
  price: null,
  updatedPrice: null,
  course: null,
  name: null,
  referredBy: null,
  phone: null,
  email: null,
  country: null,
  org: null,
  svgName: null,
  token: null,
  err: false,
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_COURSE_DETAILS':
      return {
        ...state,
        price: action.payload.price,
        course: action.payload.course,
        svgName: action.payload.svgName,
        token: action.payload.token,
      };
    case 'SET_REFERRAL_ID':
      return {
        ...state,
        referredBy: action.payload,
      };
    case 'SET_USER_DETAILS':
      return {
        ...state,
        name: action.payload.name,
        country: action.payload.country,
        phone: action.payload.phone,
        email: action.payload.email,
        org: action.payload.org,
      };
    case 'SET_UPDATED_PRICE':
      return {
        ...state,
        updatedPrice: action.payload,
      };
    case 'TOGGLE_ERR':
      return {
        ...state,
        err: action.payload,
      };
    case 'SET_COURSE_TO_NULL':
      return {
        ...state,
        course: null,
      };
    default:
      return state;
  }
};

export default courseReducer;
