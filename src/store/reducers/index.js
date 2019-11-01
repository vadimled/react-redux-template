import {combineReducers} from "redux";
import registerReducer from "../reducers/registerReducer";

export default combineReducers({
  auth: combineReducers({
    register: registerReducer
  })
});
