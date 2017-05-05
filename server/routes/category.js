import express from 'express';
import * as catCtrl from '../controllers/categoryController';

const router = express.Router();

router.route('/categories')
	.post(catCtrl.addCategory);
router.route('/categories')
	.get(catCtrl.getCategories);
router.route('/categories/:id/books')
	.get();
router.route('/categories/:id')
	.get(catCtrl.getCategory);
router.route('/categories/:id')
	.put(catCtrl.editCategory);
router.route('/categories/:id')
	.delete(catCtrl.deleteCategory);

export default router;