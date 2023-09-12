const { Router } = require('express');
const reservationController = require('../controllers/reservationController.js');


const router = Router();

router.post('/all',  reservationController.getAll);
router.post('/create',  reservationController.Create);
router.delete('/delete',  reservationController.Delete);
router.post('/check',  reservationController.CheckResevation);

module.exports = router;