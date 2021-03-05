const typeDefs = `
    type Author {
        id: ID!,
        info: Person,
        gender: String
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
    interface Animal {
        id: String,
        name: String
    },
    type Dog implements Animal {
        id: String,
        name: String,
        height: Float
    },
    type Cat implements Animal {
        id: String,
        name: String,
        weight: Float
    },
    type Query {
        getAuthors: [Author],
        retrieveAuthor(id: ID!): Author,
        hero: [Hero],
        getHeroByEpisode(episode: String): Hero,
        human(id: ID!): Human,
        getAnimal(id: ID!): Animal,
        getAllAnimal: [Animal]
    },
    type Mutation {
        createAuthor(name: String!, gender: String!): Author
    },
    type Subscription {
        createAuthorWithSubscription: Author
    }
`

module.exports = typeDefs;