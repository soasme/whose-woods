const CONFIG = {
  suffix: ['LOADING', 'LOADED', 'ABORTED'],
  api: 'http://127.0.0.1:3001',
  hooks: {
    on401: (res) => { throw { name: 'E_HTTP', code: 401, message: 'unauthorized', res }},
    on403: (res) => { throw { name: 'E_HTTP', code: 403, message: 'not allowed', res } },
    on404: (res) => { throw { name: 'E_HTTP', code: 404, message: 'not found', res } },
    on500: (res) => { throw { name: 'E_HTTP', code: 500, message: 'server error', res } },
  },
  opts: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
}

export default ({ dispatch }) => next => (action) => {
  if (!action || action.type != '$http') {
    return next(action)
  }

  const config = action.data
  const suffix = config.suffix || CONFIG.suffix
  const { LOADING, LOADED, ABORTED } = suffix
  const api = config.api || CONFIG.api
  const { meta: { type }, data: { url, opts, hooks } } = action.data
  const _opts = Object.assign(CONFIG.opts, opts)
  const _hooks = Object.assign(CONFIG.hooks , hooks)

  dispatch({ type: `${type}_LOADING` })

  let _url = url
  if (_url.lastIndexOf('http://', 0) !== 0 || _url.startsWith('https://', 0) !== 0) {
    _url = api + _url
  }

  console.log(_url, _opts, _hooks)

  return fetch(_url, _opts)
    .then((res) => {
      if (_hooks[`on${res.status}`]) {
        return _hooks[`on${res.status}`](res)
      }

      return res.json()
    })
    .then((data) => {
      dispatch({ type: `${type}_LOADED`, data })
    })
    .catch((error) => {
      dispatch({ type: `${type}_ABORTED`, error })
    })
}
