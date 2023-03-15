export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_CITIES = 'GET_CITIES';

const API_URL = 'https://mocki.io/v1/1c74fcfb-3fbd-489e-b60c-fd83d2d5144a';

export const getCities = () => {
  try {
    return async (dispatch: any) => {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data) {
        dispatch({
          type: GET_CITIES,
          payload: data,
        });
      } else {
        console.log('Error');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};

export const setName = (name: string) => (dispatch: any) => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = (age: string | number) => (dispatch: any) => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};
