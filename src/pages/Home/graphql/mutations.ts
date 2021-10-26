import { gql } from 'apollo-boost';

export const CREATE_POST_MUTATION= gql`
mutation createpost( $text:String! $like: number){
    createpost(text: $text like: $like){
        text
        like
    }
}
`