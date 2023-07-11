const express = require('express');
const morgan = require('morgan');
const AppError = require('./../utilis/appError');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
