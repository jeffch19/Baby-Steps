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
        date: Date
        image: String
        trimester: String
        month: String
    }

    type Query {
        user: User
        journel(month: String): Journel
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addJournel(title: String!, body: String!, date: Date, image: String, trimester: String, month: String)
    }
`;

module.exports = typeDefs;