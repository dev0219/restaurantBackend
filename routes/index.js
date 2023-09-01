const { Router } = require('express');
const authRoute = require('./authRoute.js');
const restaurantRoute = require('./restaurantRoute.js');
const reservationRoute = require('./reservationRoute.js');

const router = Router();

router.use('/auth', authRoute);
router.use('/restaurant', restaurantRoute)
router.use('/reservation', reservationRoute)

module.exports = router;