const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')


const port = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'devlopment'// for having the GraphIQL interface (a visual editor) 
}))



app.listen(port, console.log('server running on port', port));