const { Router } = require('express');
const authController = require('../controllers/authController.js');


const router = Router();

router.post('/login',  authController.Login);
router.post('/signout',  authController.Signout);
router.delete('/delete',  authController.Delete);

module.exports = router;