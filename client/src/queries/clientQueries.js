import { gql } from '@apollo/client';


const GET_CLIENTS = gql`
    query gatClients{
        clients{
            id
            name
            email
            phone
        }
    }
`
export { GET_CLIENTS };