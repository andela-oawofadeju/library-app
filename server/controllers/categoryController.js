import db from '../models';

export const addCategory = (req, res) => {
    return db.Category
    .create({
      title: req.body.title
    })
    .then(category => res.status(201).json(category))
    .catch(error => res.status(400).json(error));
  };

  export const getCategory =(req, res) => {
    return db.Category
    .findById(req.params.id)
    .then(category => res.status(200).json(category))
    .catch(error => res.status(404).json({message:'Book Category not found'}));
  };

export const getCategories = (req, res) => {
  return db.Category
  .findAll()
  .then(categories => res.status(200).json (categories))
  .catch(error => res.status(500).json(error));
}

  export const editCategory = (req, res) => {
    return db.Category
    .update({
      title: req.body.title
    })
    .then(category => res.status(200). json(category))
    .catch(error => res.status(400).json(error));
  };

  export const deleteCategory = (req, res) => {
    db.Category.destroy()
    .then(res.status(200).json({message: 'category has been deleted'}))
    .catch(error => res.status(400).json(error));
  }