const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const userRouter = require('./routes/userRouter');
const transactionRouter = require('./routes/transactionRouter');

const app = express();

const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.connect("mongodb+srv://user1:pass1@cluster1.ddwffa4.mongodb.net/Gaurang_BudgetWise")
.then(() => console.log("DB Connected"))
.catch((e) => console.log(e));

app.use(cors({origin:["http://localhost:5173"]}));
app.use(express.json());

app.use("/api/v1/users",userRouter);
app.use("/api/v1/transactions",transactionRouter);

app.use(errorHandler);

const port = 8000
app.listen(port, () => console.log(`Serving on: http://localhost:${port}`))