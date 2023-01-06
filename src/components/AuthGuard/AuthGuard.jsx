import 'bootstrap/dist/css/bootstrap.css';

export default function AuthGuard(props) {
    const { user } = props.userStatus;

        console.log(user);
}