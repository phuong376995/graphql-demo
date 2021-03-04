const heros = [
    {
        name: "R2-D1",
        episode: "EMPIRE",
        friends: [
            {
                name: "Luke Skywalker",
                age: 20
            }
        ],
        friendsConnection: {
            "totalCount": 4,
            "edges": [
              {
                "node": {
                  "name": "Han Solo"
                }
              },
              {
                "node": {
                  "name": "Leia Organa"
                }
              },
              {
                "node": {
                  "name": "C-3PO"
                }
              }
            ]
          }
    },
    {
        name: "R2-D2",
        episode: "JEDI",
        friends: [
            {
                name: "Han Solo",
            }
        ],
        friendsConnection: {
            "totalCount": 4,
            "edges": [
              {
                "node": {
                  "name": "Han Solo"
                }
              },
              {
                "node": {
                  "name": "Leia Organa"
                }
              },
              {
                "node": {
                  "name": "C-3PO"
                }
              }
            ]
          }
    }
]

module.exports = heros;