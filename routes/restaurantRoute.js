const { Router } = require('express');
const restaurantController = require('../controllers/restaurantController.js');


const router = Router();

router.post('/all',  restaurantController.getAll);
router.get('/member/all',  restaurantController.getMemberAll);
router.post('/create',  restaurantController.Create);
router.put('/update',  restaurantController.Update);
router.delete('/delete',  restaurantController.Delete);

module.exports = router;