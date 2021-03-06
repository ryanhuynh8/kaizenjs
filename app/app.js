const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const router = require('express').Router();
const { Issue } = require('./models/Issue');

// Some fake data
const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        title: 'Hoho',
        author: 'Michael Crichton',
    },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { subject: String, description: String }
`;

// The resolvers
const resolvers = {
    Query: {
        books: async () => {
            const result = await Issue.fetchAll({ withRelated: ['status', 'project']});
            return result.toJSON();
        }
    },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
router.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

module.exports = router;