import { gql } from '@apollo/client';

export const ADD_USER = gql `
    mutation Mutation($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const ADD_Journel = gql `
mutation Mutation($title: String!, $body: String!, $date: String!, $image: String, $trimester: String, $month: String, $babyWeight: Int) {
    addJournel(title: $title, body: $body, date: $date, image: $image, trimester: $trimester, month: $month, babyWeight: $babyWeight) {
      title
      body
      date
      image
      trimester
      month
      babyWeight
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;