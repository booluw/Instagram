import PropTypes from 'prop-types';
import { Navigate, Route,  } from 'react-router-dom';
import * as ROUTES from '../constants/routes' 


export default function ProtectedRoute({ user, children, ...rest}) {
    return(
        <Route 
          {...rest}
          render={({ location}) => {
            if (user) {
                return children
            }
            if (!user) {
                return (
                    <Navigate
                      to={{
                        pathname: ROUTES.LOGIN,
                        state: { from: location}
                      }}
                    />
                )
            }

            return null
          }}
        /> 
    )
}

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.node
}