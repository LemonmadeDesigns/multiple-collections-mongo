// IMPORT REQUIRED MODULES
const mongoose = require('mongoose');

// DEFINE THE CONNECTION STRING TO THE DATABASE
const connectionString = 'mongodb://localhost/multiple-collections';

// DISABLE STRICT QUERY MODE
mongoose.set('strictQuery', false);

// CONNECT TO THE DATABASE WITH SPECIFIED OPTIONS
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// EVENT LISTENER FOR SUCCESSFUL CONNECTION
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

// EVENT LISTENER FOR CONNECTION ERROR
mongoose.connection.on("error", (err) => {
    console.log(`Mongoose connected error ${err}`);
});

// EVENT LISTENER FOR DISCONNECTION
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});
