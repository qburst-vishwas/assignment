import { combineReducers } from 'redux'
import userReducer from '../actions/actionReducer';

const rootReducer =combineReducers({
  user: userReducer
})

export default rootReducer