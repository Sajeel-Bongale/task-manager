const mongoose = require('mongoose');

const connectionString = "mongodb+srv://common_user:password_user@task-manager-cluster.o3iq5.mongodb.net/task-manager?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;

