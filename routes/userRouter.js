const express = require('express');
const usersController = require('../controllers/usersCtrl');
const isAuth = require('../middleware/isAuth');

const userRouter = express.Router();

userRouter.post('/register',usersController.register);
userRouter.post('/login',usersController.login);

userRouter.get('/profile',isAuth,usersController.profile);

userRouter.put('/change-password',isAuth,usersController.changeUserPassword);
userRouter.put('/update-profile',isAuth,usersController.updateUserProfile);

module.exports = userRouter;