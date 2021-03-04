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
    type User {
        name: String!
        age: Int!
        email: String!
        street: String!
        zipcode: String!
        city: String!
    },
    type Hero {
        name: String!,
        friends: [Person],
        episode: String!,
        friendsConnection(first: Int!): FriendsConnection
    },
    type Human {
        id: String!
        name: String!,
        height(unit: String!): Float
    },
    type Character {
        name: String!
    },
    type Node {
        name: String!
    },
    type Edge {
        node: Node
    },
    type FriendsConnection {
        totalCount: Int!,
        edges: [Edge]
    },
    type Query {
        getAuthors: [Author],
        retrieveAuthor(id: ID!): Author,
        hero: [Hero],
        getHeroByEpisode(episode: String): Hero,
        human(id: ID!): Human
    },
    type Mutation {
        createAuthor(name: String!, gender: String!): Author
    },
    type Subscription {
        createAuthorWithSubscription: Author
    }
`

module.exports = typeDefs;