const express = require('express');
const dotenv = require('dotenv');

//---------------------------------ROUTES---------------------------------
const hallsRouter = require('./src/api/routes/halls.routes');
const genresRouter = require('./src/api/routes/genre.routes');
const artistRouter = require('./src/api/routes/artist.routes');
//const genresRouter = require('./src/api/routes/genre.routes');
// const userRouter = require('./src/api/routes/user.routes');

dotenv.config();
const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/halls', hallsRouter);
// app.use('/users', userRouter);
app.use('/genres', genresRouter);
app.use('/artists', artistRouter);

app.listen(5000, () => console.log('listening on port', PORT));