const { User, Journel } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
   Query: {
        // journel: async ( {month}) => {
        //     const params = {};

        //     if (month) {
        //         params.month = month
        //     }

        //     return await Journel.find(params)
        // },
        user: async (parent, args, context) => {
            if (context.user) {

                const user = await User.findById(context.user._id).populate('journel');

                return user;
            }

            throw AuthenticationError; 
        }
   },
   Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addJournel: async (parent, args) => {
            const journel = await Journel.create(args);

            return journel
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
   }, 
};

module.exports = resolvers;