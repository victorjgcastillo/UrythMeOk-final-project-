const express = require('express');
const dotenv = require('dotenv');

//---------------------------------ROUTES---------------------------------
const hallsRouter = require('./src/api/routes/hall.routes');
const userRouter = require('./src/api/routes/user.routes');
const fanClubRouter = require('./src/api/routes/fanClub.routes');
const ticketRouter = require('./src/api/routes/ticket.routes');
const concertRouter = require('./src/api/routes/concert.routes');

dotenv.config();
const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/halls', hallsRouter);
app.use('/fanclub', fanClubRouter);
app.use('/users', userRouter);
app.use('/tickets', ticketRouter);
app.use('/concerts', concertRouter);

app.listen(5000, () => console.log('listening on port', PORT));