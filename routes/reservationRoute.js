const { Router } = require('express');
const reservationController = require('../controllers/reservationController.js');


const router = Router();

router.get('/all',  reservationController.getAll);
router.post('/create',  reservationController.Create);
router.delete('/delete',  reservationController.Delete);

module.exports = router;