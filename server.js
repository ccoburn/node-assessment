const express = require('express')
const bodyParser = require('body-parser')
const userCtrl = require('./userCtrl')


const app = express();


app.use(bodyParser.json());


app.get("/api/users", function(req, res, next) {
  if (req.query.favorite) {
    return res.status(200).send(userCtrl.getUsersByFavorite(req.query.favorite))
  }
  if (req.query.age) {
    return res.status(200).send(userCtrl.getUsersByAgeLimit(req.query.age))
  }
  if (req.query.last_name) {
    return res.status(200).send(userCtrl.findUserByQuery("last_name", req.query.last_name))
  }
  if (req.query.email) {
    return res.status(200).send(userCtrl.findUserByQuery("email", req.query.email))
    console.log(req.query.email);
  }
  if (req.query.state) {
    return res.status(200).send(userCtrl.findUserByQuery("state", req.query.state))
  }

  return res.status(200).send(userCtrl.readAll())
})

app.get('/api/users/:id', function(req, res, next) {
  return res.status(200).send(userCtrl.findUserById(req.params.id.toString()))
})

app.get('/api/admins', function(req, res, next) {
  return res.status(200).send(userCtrl.getAdmins())
})

app.get('/api/nonadmins', function(req, res, next) {
  return res.status(200).send(userCtrl.getNonAdmins())
})

app.post('/api/users', function(req, res, next) {
  return res.status(200).send(userCtrl.createUser(req.body.user))
})

app.put('/api/users/:id', function(req, res, next) {
  return res.status(200).send(userCtrl.updateUser(req.params.id, req.body.update))
})

// app.delete('/api/users/:id', function(req, res, next) {
//   return res.status(200).send(userCtrl.removeUser(req.params.id))
// })




module.exports = {
  app
}
