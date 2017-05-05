import express from 'express';
import * as bookCtrl from '../controllers/bookController';

const bRouter = express.Router();

bRouter.route('/books')
	.post(bookCtrl.addBook);
// router.route('/books')
//   .get(bookCtrl.getBooks);
bRouter.route('/books/:id')
	.get(bookCtrl.getBook);
bRouter.route('/books/search/?query={}')
	.get(bookCtrl.searchBook);
bRouter.route('/books/:id')
	.put(bookCtrl.searchBook);
bRouter.route('/books/:id')
	.delete(bookCtrl.deleteBook);

export default bRouter