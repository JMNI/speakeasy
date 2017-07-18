const Table = require('../models/tableModels');
const existed = { status: 'already exists' };

const signupUser = (req, res) => {
  console.log("signupUser req.body", req.body)
  Table.User
    .findOrCreate({
      where: {
        email: req.body.email
      }, defaults: {
        photo: req.body.photo
      }
    })
    .spread((response, isCreated) => {
      // console.log("signupUser res", response)
      if (isCreated) {
        res.status(201).send(response);
      } else {
  
        res.send(response);
      }
    })
    .catch(error => {
      console.log("error caught in signupUser", error)
      res.send(error);
    });
};

const fetchUsers = (req, res) => {
  Table.User
    .findAll()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.send(error);
    });
};

const editUserProfile = (req, res) => {
  console.log('userController:=:=', req.body);
  let id = req.params.userId;
  Table.User
    .update(
    {
      name: req.body.name,
      handle: req.body.handle,
      photo: req.body.photo
    },
    {
      where: {
        id: id
      }
    }
    )
    .then(response => {
      console.log('response from controller', response);
      res.status(200).send(res)
    })
    .catch(error => res.send(error));
};

const fetchUserProfile = (req, res) => {
  let id = req.params.userId;
  console.log('*** id ***', id);
  Table.User
    .findOne({
      where: { id: id }
    })
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => res.send(error));
};

module.exports = {
  signupUser: signupUser,
  fetchUsers: fetchUsers,
  editUserProfile: editUserProfile,
  fetchUserProfile: fetchUserProfile
};
