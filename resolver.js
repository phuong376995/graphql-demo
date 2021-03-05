const authors = require('./author')
const heros = require('./hero')
const humans = require('./human')
const animal = require('./animal')
const { PubSub } = require('apollo-server-express');
const pubsub = new PubSub();

const AUTHORS_TOPIC = 'newAuthor'

const resolvers = {
    Animal: {
        __resolveType: obj => {
            if (obj.height) return "Dog";
            if (obj.weight) return "Cat";
            return null;
          }
    },
    Query: {
        getAuthors: () => authors,
        retrieveAuthor: (obj, { id }) => authors.find(author => author.id === id),
        hero: () => heros,
        getHeroByEpisode: (obj, { episode }) => heros.find(hero => hero.episode === episode),
        human: (obj, { id }) => humans.find(human => human.id === id),
        getAnimal:  (obj, { id })  => animal.find(a => a.id === id),
        getAllAnimal:  ()  => animal
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