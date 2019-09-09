import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query';
import db from './db';
import PhoneBook from './resolvers/PhoneBook';
import PhoneBookEntry from './resolvers/PhoneBookEntry';
import Mutation from './resolvers/Mutation';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', 
    resolvers: {
        Query,
        PhoneBook,
        PhoneBookEntry,
        Mutation
    },
    context: {
        db
    }
})
server.start(() => console.log('Server is running on localhost:4000'))

