import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { Route,Redirect } from 'react-router-dom';

  const PrivateRoute = ({

    
    component:Component,
user,
...rest
}) =>


(


<Route 
    {...rest}

    render ={ 
    
        props=> !user? 
        (
        
        <Redirect to='/login' />
        
        ):(
    
       <Component {...props} />
        )
    }
    />
    )




const mapStateToProps=state=>({

    user: state.userProfile.user

});
export default connect(mapStateToProps)(PrivateRoute)
