const authors = require('./author')
const { PubSub } = require('apollo-server-express');
const pubsub = new PubSub();

const AUTHORS_TOPIC = 'newAuthor'

const resolvers = {
    Query: {
        getAuthors: () => authors,
        retrieveAuthor: (obj, { id }) => authors.find(author => author.id === id)
    },

    Mutation: {
        createAuthor: (obj, args) => {
            const id = String(authors.length + 1);
            const { name, gender } = args;

            const newAuthor = {
                id,
                info: {
                    name,
                    gender
                }
            }

            authors.push(newAuthor);
            pubsub.publish(AUTHORS_TOPIC, { createAuthorWithSubscription: newAuthor });
            return newAuthor;
        }
    },

    Subscription: {
        createAuthorWithSubscription: {
            subscribe: () => pubsub.asyncIterator(AUTHORS_TOPIC)
        }
    }
}

module.exports = resolvers;