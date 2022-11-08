import { combineReducers } from 'redux';
import { authReducer, dataReducer } from './reducer';

export default combineReducers({
    auth: authReducer,
    data: dataReducer
  });
  