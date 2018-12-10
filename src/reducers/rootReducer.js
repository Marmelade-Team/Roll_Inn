import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import lobbiesReducer from './lobbiesReducer';

const RootReducer =  combineReducers({
  gameReducer,
  lobbiesReducer
});

export default RootReducer
