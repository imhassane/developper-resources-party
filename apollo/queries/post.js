import gql from "graphql-tag";

export const RESSOURCES_COUNT = gql`
    {
        ressourcesConnection {
            aggregate {
                count
            }
        }
    }
`;

export const RESSOURCES_LIST = gql`

    query($type: [RessourceType!], $search: String!, $first: Int!, $skip: Int!){
        ressources(
            where: { type_in: $type, title_contains: $search },
            orderBy: createdAt_DESC,
            first: $first, skip: $skip
        ) {
            id,
            title,
            url,
            type
        }
    }

`;

export const RESSOURCE_DETAIL = gql`
    query Ressource($id: ID!) {
        ressource(where: { id: $id }) {
            title
            url, type
            description
            language {
                id
                name
            }
            teacher {
                id
                completeName
                githubId
            }
        }
    }
`;