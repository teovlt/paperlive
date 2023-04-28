const Router = require('express').Router();
const uploadController = require('../controllers/uploadController');
const { authenticateAccessToken } = require('../middlewares/authenticationMiddleware');

Router.get('/profile/:fileName', uploadController.getProfile);
Router.post('/profile', authenticateAccessToken, uploadController.uploadProfile);

module.exports = Router;
