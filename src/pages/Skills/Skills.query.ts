import { gql } from "@apollo/client";

export const GET_SKILL = gql`
  query getSkills {
    getSkills {
      name
    }
  }
`;

export const GET_TAGS = gql`
  query getTags {
    getTags {
      name
    }
  }
`;
