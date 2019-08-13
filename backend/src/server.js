const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:a123b321@cluster0-gem71.mongodb.net/graphql?retryWrites=true&w=majority', {
  userNewUrlParser: true
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
});

server.start();