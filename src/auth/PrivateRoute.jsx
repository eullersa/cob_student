import { Authenticated } from "../apis/requests";
import { Route, Redirect } from "react-router";

const isNewUser = (props, Component) => {
    if(Authenticated().role === 'student' && Authenticated().isNewUser === true) {
        return (
            <Redirect to={{pathname: '/courses', state: {from: props.location}}} />
        )
    } else if (Authenticated().role === 'student') {
        return (
            <Component {...props} />
        )
    } else {
        return (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
    }
}

function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={(props) => isNewUser(props, Component) } />
    )
}


export default PrivateRoute;