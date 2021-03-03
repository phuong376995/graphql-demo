const typeDefs = `
    type Author {
        id: ID!,
        info: Person
    }
    type Person {
        name: String,
        age: Int,
        gender: String
    },
    type Query {
        getAuthors: [Author],
        retrieveAuthor(id: ID!): Author
    },
    type Mutation {
        createAuthor(name: String!, gender: String!): Author
    },
    type Subscription {
        createAuthorWithSubscription: Author
    }
`

module.exports = typeDefs;