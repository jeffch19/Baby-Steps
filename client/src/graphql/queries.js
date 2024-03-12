import { gql } from '@apollo/client';

export const GET_USER_AND_JOURNAL = gql`
  query Query {
    user {
      _id
      username
      email
      journel {
        title
        body
        date
        image
        trimester
        month
        babyWeight
      }
    }
  }
`;