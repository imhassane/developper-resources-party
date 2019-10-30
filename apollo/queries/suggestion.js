import gql from "graphql-tag";

export const CREATE_SUGGESTION = gql`
    mutation CreateSuggestion(
        $language: String!,
        $url: String!,
        $argument: String!
    ) {
        createSuggestion(data: { language: $language, url: $url, argument: $argument }) {
            id
        }
    }
`;