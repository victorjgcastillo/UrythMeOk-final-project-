const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

//---------------------------------ROUTES---------------------------------

const hallsRouter = require('./src/api/routes/hall.routes');
const userRouter = require('./src/api/routes/user.routes');
const fanClubRouter = require('./src/api/routes/fanClub.routes');
const ticketRouter = require('./src/api/routes/ticket.routes');
const concertRouter = require('./src/api/routes/concert.routes');
const genresRouter = require('./src/api/routes/genre.routes');
const artistRouter = require('./src/api/routes/artist.routes');

dotenv.config();
const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;
const app = express();
connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH');  //definimos que metodos permitimos en nuestra API
    res.header('Access-Control-Allow-Credentials', 'true'); //podemos recibir una conexion con credenciales
    res.header('Access-Control-Allow-Headers', 'Content-Type'); //tipos de cabeceras que permitimos
    next();
})

app.use(cors({
    origin: '*',
    // origin: ['http://localhost:3000', 'http://localhost:4200', 'http://RUTADEMIFRONT.com'],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(`+ Nueva peticion ${req.method} ${req.url}`);
    next();
});

app.use('/halls', hallsRouter);
app.use('/fanclub', fanClubRouter);
app.use('/users', userRouter);
app.use('/tickets', ticketRouter);
app.use('/concerts', concertRouter);
app.use('/genres', genresRouter);
app.use('/artists', artistRouter);

app.listen(PORT, () => console.log('listening on port', PORT));



