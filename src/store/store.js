import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/rootReducer';

export default function configureStore() {
 return createStore(
  RootReducer,
   applyMiddleware(thunk)
 );
}
