import React  from 'react';
import { mount, shallow  } from 'enzyme'
import { LoginForm }from './form'
import { Field } from 'redux-form'
import '../../enzyme.setup'


describe('login form', () => {
  describe('fields', () => {
    it('should render username & password field', () => {
      const wrapper = shallow(<LoginForm />)
      // one for username and another for password
      expect(wrapper.find(Field)).toHaveLength(2)
    })
  })
})
