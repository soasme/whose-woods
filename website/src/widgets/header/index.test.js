import React  from 'react'
import { expect  } from 'chai'
import { Redirect  } from 'react-router'
import { mount, shallow  } from 'enzyme'
import { Header } from './index'
import '../../enzyme.setup'

describe('Header', () => {
  describe('behaviors', () => {
    it('should redirect to login if not authorized', () => {
      const wrapper = shallow(<Header />)
      expect(wrapper.find(Redirect).exists()).to.be.true
      expect(wrapper.find(Redirect).getElement().props.to).to.be.equal('/login')
    })
  })

  describe('render', () => {
    it('should render page title', () => {
      const wrapper = shallow(<Header isAuthorized={true} pageTitle={'hello world'} />)
      expect(wrapper.find('.header-title').exists()).to.be.true
      expect(wrapper.find('.header-title').text()).to.be.equal('hello world')
    })
  })
})
