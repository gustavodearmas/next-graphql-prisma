import { ApolloServer } from "apollo-server";

// 1 Queries

const typeDefs = `
type Query {
    info: String!
}`

// 2 Respolvers

const resolvers = {
    Query: {
        info: () => 'HOLA;'
    }
}

// 3 Iniciar servidor

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.listen().then(({url})=> console.log(`Estoy haciensto un test ${url}`))