import types from "../actionsTypes";

export const registerSuccess = data =>{
  return{
    type: types.USER_REGISTERED_SUCCESS,
    payload: data
  };
};



