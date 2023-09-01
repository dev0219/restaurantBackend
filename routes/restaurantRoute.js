const { Router } = require('express');
const restaurantController = require('../controllers/restaurantController.js');


const router = Router();

router.get('/all',  restaurantController.getAll);
router.post('/create',  restaurantController.Create);
router.put('/update',  restaurantController.Update);
router.delete('/delete',  restaurantController.Delete);

module.exports = router;