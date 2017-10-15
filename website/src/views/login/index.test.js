import React  from 'react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { expect  } from 'chai';
import { render, mount, shallow  } from 'enzyme'
import LoginView from './index'
import { LoginForm } from './form'
import '../../enzyme.setup'


describe('login form', () => {
  const initialState = {
    session: {uid: 0},
    site: {loggedInEndpoint: '/hello-world'},
  }

  const mStore = configureStore()

  describe('fields', () => {
    it('should render login form', () => {
      const store = mStore(initialState)
      const wrapper = mount(<Provider store={store}><LoginView/></Provider>)
      expect(wrapper.find(LoginForm)).to.have.length(1)
    })
  })
})
