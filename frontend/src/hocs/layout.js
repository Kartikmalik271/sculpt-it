import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {checkAuthenticated} from '../actions/auth'
import { load_user }  from '../actions/profile'
import { loadArticle } from '../actions/article'

const Layout = ({ children, checkAuthenticated, load_user, loadArticle}) => {
    useEffect(() =>{
        checkAuthenticated();
        load_user();
     
    },[]);
    return ( 
        <Fragment>
            {children}
        </Fragment>
     );
}
 
export default connect(null, {checkAuthenticated, load_user, loadArticle})(Layout);