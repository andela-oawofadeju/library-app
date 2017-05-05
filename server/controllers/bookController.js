import db from '../models';

export const addBook = (req, res) => {
    return db.Book
    .create({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
    })
    .then(book => res.status(201).json(book))
    .catch(error => res.status(400).json(error));
  };

export const getBook = (req, res) => {
  db.Book.findById(req.params.id)
  .then((foundBook) => {
    if(!foundBook){
      return res.status(404)
      .json({message: 'book not found'});
    }
    return res.status(200)
    .json(foundBook);
  })
}

export const searchBook = (req, res) => {
  db.book.findAll(
    {
      where: {
        access: 'public',
        $or: [{
          title: {
            $iLike: `%${req.query.q}%`
          }
        }]
      }
    })
    .then(book => res.status(200).json(book))
    .catch(error => res.status(400).json(erro));
};

  export const updateBook = (req, res) => {
    return db.Book
    .update(req.body)
    .then(book => res.status(200).json({message: 'Book Updated to newer version'}))
    .catch(error => res.status(400).json(error));
  };

  export const deleteBook = (req, res) => {
    return db.Book.destroy(req.body)
    .then(book => res.status(200).json({message: 'Book has been removed successfully'}))
    .catch(error => res.status(400).json(error));
  };