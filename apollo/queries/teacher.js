import gql from "graphql-tag";

export const TEACHERS_LIST = gql`
  query Teachers {
    teachers {
      id
      completeName
    }
  }
`;
 
export const GITHUB_USER = gql`
  query GetUser(username: String!) {
    
  }
`;