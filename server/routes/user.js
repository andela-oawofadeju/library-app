import express from 'express';
import * as userCtrl from '../controllers/userController';

const router = express.Router();

router.route('/users ')
	.post(userCtrl.createUser)
	.get(userCtrl.getUsers);

router.route('/users/login')
	.post(userCtrl.userLogin);
// router.route('/users/logout')
// 	.post(userCtrl.userLogout);
router.route('/users/:id')
	.get(userCtrl.getUser)
	.put(userCtrl.editUser)
	.delete(userCtrl.deleteUser);

// router.route('/users/search/?q={}')
// 	.get(userCtrl.searchUser);


export default router;