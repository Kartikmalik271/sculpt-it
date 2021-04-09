import axios from 'axios';
import Cookies from 'js-cookie'
import { 
  
   LOAD_USER_ARTICLE_SUCCESS,
   LOAD_USER_ARTICLE_FAIL,
   DELETE_USER_ARTICLE_SUCCESS,
   DELETE_USER_ARTICLE_FAIL,
   ADD_USER_ARTICLE_SUCCESS,
   ADD_USER_ARTICLE_FAIL,
   ALL_USERS,
   LOAD_ALL_ARTICLE_SUCCESS,
   LOAD_ALL_ARTICLE_FAIL

} from './types';


export const loadArticle = () => dispatch => {
    const config = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
    };
    try{
        axios
        .get(`${process.env.REACT_APP_API_URL}/profile/getarticle`, config)
        .then(res =>{
            dispatch({
                type: LOAD_USER_ARTICLE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));

    }catch (err){
        dispatch({
            type:LOAD_USER_ARTICLE_FAIL
            
        });
    }
};

export const loadAllArticle = () => dispatch => {
    const config = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
    };
    try{
        axios
        .get(`${process.env.REACT_APP_API_URL}/profile/getallarticle`, config)
        .then(res =>{
            dispatch({
                type: LOAD_ALL_ARTICLE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));

    }catch (err){
        dispatch({
            type:LOAD_ALL_ARTICLE_FAIL
            
        });
    }
};


export const allUser = () => dispatch => {
    const config = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
    };

        axios
        .get(`${process.env.REACT_APP_API_URL}/account/get_users`, config)
        .then(res =>{
            dispatch({
                type: ALL_USERS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const deleteArticle = id => dispatch => {
    const config = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')

        }
    };
    
    try{
        axios
        .delete(`${process.env.REACT_APP_API_URL}/profile/updatearticle/${id}`, config)
        .then(res =>{
            dispatch({
                type: DELETE_USER_ARTICLE_SUCCESS,
                payload: id
            });
        })
        .catch(err => console.log(err));

    }catch (err){
        dispatch({
            type:DELETE_USER_ARTICLE_FAIL
            
        });
    }
};

export const addArticle = (title, contenttype, description, look) => async dispatch => {
    const config = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')

        }
    };
    const body = JSON.stringify({title, contenttype, description, look});

    try{
        axios
        .post(`${process.env.REACT_APP_API_URL}/profile/postarticle`, body, config)
        .then(res =>{
            dispatch({
                type: ADD_USER_ARTICLE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));

    }catch (err){
        dispatch({
            type:ADD_USER_ARTICLE_FAIL
            
        });
    }
};
