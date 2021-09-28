const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager API')
});

app.use('/api/v1/tasks', tasks);

const port = 3500;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server is listening on port ' + port));
  } catch (error) {
        console.log(error);
        console.log('Could not connect to DB. Stopping Application');
        process.exit(0);
  }
}

start();