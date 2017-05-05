import db from '../models';

export const createRole = (req, res) => {
    return db.Role
    .create({
      title: req.body.title
    })
    .then(role => res.status(201).json(role))
    .catch(error => res.status(400).json(error));
  };

  export const getRole = (req, res) => {
    return db.Role
    .findById(req.params.id)
    .then(role => res.status(200).json(role))
    .catch(error => res.status(404).json({message: 'Role not found'}));
  };

  export const getRoles = (req, res) => {
    return db.Role.findAll()
    .then(roles => res.status(200).json(roles))
    .catch(error => res.status(400).json(error));
  };

export const editRole = (req, res) => {
  return db.Role
  .update({
    title: req.body.title
  })
  .then(role => res.status(200).json(role))
  .catch(error => res.status(400).json(error));
};

export const deleteRole = (req, res) => {
  db.Role.destroy()
  .then(res.status(200).json({message: 'Role has been deleted'}))
  .catch(error => res.status(400).json(error));
};