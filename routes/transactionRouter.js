const express = require('express');
const transactionController = require('../controllers/transactionCtrl');
const isAuth = require('../middleware/isAuth');

const transactionRouter = express.Router();

transactionRouter.get('/lists',isAuth, transactionController.getFilteredTransactions);
transactionRouter.post('/create',isAuth,transactionController.create);

module.exports = transactionRouter;