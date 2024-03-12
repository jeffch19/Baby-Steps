import { gql } from '@apollo/client';

export const GET_USER_AND_JOURNAL = gql`
 query GetUserAndJournal {
    me {
      _id
      username
      email
      journel {
        _id
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