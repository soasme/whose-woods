module.exports = (req, res, next) => {
  if (req.method == 'POST' && req.path == '/login') {
    if (req.body.username === 'a' && req.body.password === 'a') {
      res.status(200).json({token: 'abc'})
    } else {
      res.status(400).json({message: 'wrong password'})
    }
  } else if (req.get('Authorization') != 'Bearer abc'){
      res.status(401).json({message: 'Unauthorized'})
  } else if (req.method === 'GET' && res.path === '/profile') {
      res.status(200).json({username: 'soasme', defaults: {
        workspace_id: 1
      }})
  } else {
    next()
  }
}
