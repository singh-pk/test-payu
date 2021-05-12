export const setCourseDetails = details => ({
  type: 'SET_COURSE_DETAILS',
  payload: details,
});

export const setReferId = id => ({
  type: 'SET_REFERRAL_ID',
  payload: id,
});

export const setUserDetails = details => ({
  type: 'SET_USER_DETAILS',
  payload: details,
});

export const setUpdatedPrice = price => ({
  type: 'SET_UPDATED_PRICE',
  payload: price,
});

export const toggleErr = bool => ({
  type: 'TOGGLE_ERR',
  payload: bool,
});

export const setCourseToNull = () => ({
  type: 'SET_COURSE_TO_NULL',
});
