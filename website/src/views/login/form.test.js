import React  from 'react';
import { expect  } from 'chai';
import { mount, shallow  } from 'enzyme'
import ConnectedLoginForm, { LoginForm }from './form'
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

    it('should disable the button when submitting set to true', () => {
      const wrapper = shallow(<LoginForm submitting={true}/>)
      expect(wrapper.find({type: 'submit'}).prop('disabled')).to.be.true
    })

    it('should enable the button when submitting set to false', () => {
      const wrapper = shallow(<LoginForm submitting={false}/>)
      expect(wrapper.find({type: 'submit'}).prop('disabled')).to.be.false
    })

    it('should call handleSubmit when submit the form', () => {
      const handleSubmit = jest.fn()
      // note that connected login form should use onSubmit= here.
      const wrapper = shallow(<LoginForm handleSubmit={ handleSubmit } />)
      wrapper.find('form').simulate('submit')
      expect(handleSubmit.mock.calls.length).to.be.equal(1)
    })
  })
})
