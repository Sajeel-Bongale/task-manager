const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error');

require('dotenv').config();

app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3500;

const start = async () => {
    try {
        const connectionString = process.env.MONGO_URI
        await connectDB(connectionString);
        app.listen(PORT, console.log('Server is listening on port ' + PORT));
  } catch (error) {
        console.log(error);
        console.log('Could not connect to DB. Stopping Application');
  }
}

start();
