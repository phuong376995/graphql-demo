# Write your query or mutation here
# Fields

# {
#   hero {
#     name
#   }
# }

# {
#   hero {
#     name
#     # Queries can have comments!
#     friends {
#       name,
#       # age
#     }
#   }
# }

# Arguments

# {
#   human(id: "1000") {
#     name
#     height(unit: "FOOT")
#   }
# }

# Aliases

# {
#   empireHero: getHeroByEpisode(episode: "EMPIRE") {
#     name
#   }
#   jediHero: getHeroByEpisode(episode: "JEDI") {
#     name
#   }
# }

# Fragments

# {
#   leftComparison: getHeroByEpisode(episode: "EMPIRE") {
#     ...comparisonFields
#   }
#   rightComparison: getHeroByEpisode(episode: "JEDI") {
#     ...comparisonFields
#   }
# }

# fragment comparisonFields on Hero {
#   name
#   # appearsIn
#   # friends {
#   #   name
#   # }
# }

# Using variables inside fragments

# query HeroComparison($first: Int = 3) {
#   leftComparison: getHeroByEpisode(episode: "EMPIRE") {
#     ...comparisonFields
#   }
#   rightComparison: getHeroByEpisode(episode: "JEDI") {
#     ...comparisonFields
#   }
# }

# fragment comparisonFields on Hero {
#   name
#   friendsConnection(first: $first) {
#     totalCount
#     edges {
#       node {
#         name
#       }
#     }
#   }
# }

# Operation name

# query HeroNameAndFriends {
#   hero {
#     name
#     friends {
#       name
#     }
#   }
# }

# Variables

# query HeroNameAndFriends($episode: String) {
#   getHeroByEpisode(episode: $episode) {
#     name
#     friends {
#       name
#     }
#   }
# }

# Variable definitions

# Default variables

# query HeroNameAndFriends($episode: String = "JEDI") {
#   getHeroByEpisode(episode: $episode) {
#     name
#     friends {
#       name
#     }
#   }
# }

# Directives

# query Hero($episode: String, $withFriends: Boolean!) {
#   getHeroByEpisode(episode: $episode) {
#     name
#     friends @include(if: $withFriends) {
#       name
#     }
#   }
# }

# Mutations

# mutation createAuthor($name: String!, $gender: String!) {
#   createAuthor(name: $name, gender: $gender) {
#     id,
#     info {
#       name
#     }
#   }
# }

# Multiple fields in mutations

# While query fields are executed in parallel, mutation fields run in series, one after the other.

# Inline Fragments

# {
#   getAnimal(id: "2") {
#     id,
#     ... on Dog {
#       height
#     }
#     ... on Cat {
#       weight
#     }
#   }
# }


# Meta fields

# {
#   getAllAnimal {
#     __typename,
#     id,
#     ... on Dog {
#       height
#     }
#     ... on Cat {
#       weight
#     }
#   }
# }

# Introspection

{
  __type(name: "Animal") {
    name
    kind
  }
}