const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cred = require("./sec");
const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://"+cred.credentiels.uName+":"+cred.credentiels.uPasswd+"@cluster0.ystg4.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connection successful !'))
    .catch(() => console.log("MongoDB connection failed !"));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes)

module.exports = app;