import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from '../components/home/home';
import configureStore from '../store/store';
import '../config/fontAwesome';

it('Render Home', () => {
  let div = document.createElement('div');
  ReactDOM.render(<Provider store={configureStore()}><Home/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});