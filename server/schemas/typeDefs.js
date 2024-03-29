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
        babyWeight: String
        user: User
    }

    type Auth {
        token:ID
        user: User
    }

    type Query {
        user: User
        journel(month: String): Journel
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addJournel(title: String!, body: String!, date: String!, image: String, trimester: String, month: String, babyWeight: String): Journel
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;