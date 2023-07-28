const express = require('express');
const cors = require('cors');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// connect with database
connectDB();


// midllware
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'devlopment'// for having the GraphIQL interface (a visual editor) 
}))




app.listen(port, console.log(`Server running on port ${port}`));