import React  from 'react';
import { expect  } from 'chai';
import { mount, shallow  } from 'enzyme'
import { LoginForm }from './form'
import { Field } from 'redux-form'
import '../../enzyme.setup'


describe('login form', () => {
  describe('fields', () => {
    it('should render username & password field', () => {
      const wrapper = shallow(<LoginForm />)
      expect(wrapper.find(Field)).to.have.length(2)
      expect(wrapper.find({name: 'username'}).exists()).to.be.true
      expect(wrapper.find({name: 'password'}).exists()).to.be.true
    })

    it('should render submit button', () => {
      const wrapper = shallow(<LoginForm />)
      expect(wrapper.find({type: 'submit'}).exists()).to.be.true
    })

    it('should render error if we provide error', () => {
      const wrapper = shallow(<LoginForm error='Huston, we have a problem.' />)
      expect(wrapper.find({className: 'error'}).exists()).to.be.true
    })

    it('should not render error if there is no error', () => {
      const wrapper = shallow(<LoginForm />)
      expect(wrapper.find({className: 'error'}).exists()).to.be.false
    })
  })
})
