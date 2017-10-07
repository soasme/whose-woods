import React from 'react';
import ReactDOM from 'react-dom';
import { shallow  } from 'enzyme';
import Login from './Login';

it('renders without crashing', () => {
  shallow(<Login />);
});

