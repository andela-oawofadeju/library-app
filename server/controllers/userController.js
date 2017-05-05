import db from '../models';

export const createUser= (req, res) => {
    return db.User
    .create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(user => res.status(201).json(user))
    .catch(error => res.status(400).json(error));
  };

export const userLogin = (req, res) => {
  db.User.find({
    where: {
      email: req.body.email
    }
  })
  .then((user) => {
    if(!user){
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    return res.status(200).json(user);
  });
};

export const getUser = (req, res) => {
  db.User.findById(req.params.id)
  .then((user) => {
    if(!user){
      return res.status(404).json({message: 'User not found'})
    }
    return res.status(200).json(user);
  });
}

export const getUsers = (req, res) => {
  db.User.findAll()
  .then(users => res.status(200).json(users))
  .catch(error => res.status(400).json(error));
};

  export const editUser = (req, res) => {
    return db.User.update(req.body)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
  };

  export const deleteUser = (req, res) => {
    user.destroy()
    .then(res.status(200).json({message: 'User has been deleted'}))
    .catch(error => res.status(400).json(error));
  };