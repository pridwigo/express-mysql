const express = require('express');
const usersRoutes = require('./routes/UsersRoute');
const middlewareLogRequest = require('./middleware/middlewareLogRequest')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes)

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})