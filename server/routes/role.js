import express from 'express';
import * as roleCtrl from '../controllers/roleController';

const router = express.Router();

router.route('/roles')
	.post(roleCtrl.createRole);
router.route('/roles')
	.get(roleCtrl.getRoles);
router.route('/roles/id')
	.get(roleCtrl.getRole);
router.route('/roles/id')
	.put(roleCtrl.editRole);
router.route('/roles/id')
	.delete(roleCtrl.deleteRole);

export default router;