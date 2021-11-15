import { gql } from  "@apollo/client"
import { useMutation } from  "@apollo/client"
import { useHistory } from "react-router-dom";

interface RegisterQueryProps {
    email: string;
    password: string;
    isCompany: boolean;
}

const REGISTER_MUTATION = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
        signup(signupRequest: { email: $email, password: $password, isCompany:$isCompany }) {
            success
            message
            email
            isCompany
        }
    }
`;

export const LoginQuery = (props: RegisterQueryProps) => {
    const history = useHistory();

    const [register] = useMutation(REGISTER_MUTATION, {
        variables: {
            email: props.email,
            password: props.password,
            isCompany: props.isCompany,
        },
        onCompleted: ({ register }) => {
            history.push("/login");
        },
        onError: (error) => {
            console.log(error.message);
        },
    });
};
