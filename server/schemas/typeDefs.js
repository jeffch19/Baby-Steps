const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        journel: [Journel]
    }

    type Journel {
        _id: ID
        title: String
        body: String
        date: String
        image: String
        trimester: String
        month: String
        babyWeight: Int
    }

    type Query {
        user: User
        journel(month: String): Journel
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addJournel(title: String!, body: String!, date: String!, image: String, trimester: String, month: String, babyWeight: Int): Journel
    }
`;

module.exports = typeDefs;