import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { expect } from 'chai'
import reducer, { initialState, loadSession, SESSION_LOADING, SESSION_LOADED } from './session'
import { mockStore } from '../enzyme.setup'

describe('session reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      uid: 0,
      authStatus: 'unknown',
      token: null,
    })
  })

  it('should sent token to session', () => {
    const store = mockStore(reducer)
    store.dispatch(loadSession())
    expect(store.getActions()).to.eql([
      {type: SESSION_LOADING, data: {token: ''} }
    ])
  })

})
