import actionsTypes from '../actionsTypes'
import createReducer from '../reducers/createReducer'

const initialState = {
   loading: false
};

const headerReducer = createReducer(initialState, {
  [actionsTypes.USER_REGISTERED_SUCCESS]: (state, {type, payload}) => {
    return {
      ...state,
      model: {...state.model, userName: payload}
    }
  }
});

export default headerReducer;
