import {
  
    LOAD_USER_ARTICLE_SUCCESS,
    LOAD_USER_ARTICLE_FAIL,
    DELETE_USER_ARTICLE_SUCCESS,
    DELETE_USER_ARTICLE_FAIL,
    ADD_USER_ARTICLE_SUCCESS,
    ADD_USER_ARTICLE_FAIL
} from '../actions/types'

const initialState = {

    article:[]

};

export default function(state = initialState, action) {
    switch(action.type){
       
            case LOAD_USER_ARTICLE_SUCCESS:
                return {
                    ...state,
                    article: action.payload
                };
            case LOAD_USER_ARTICLE_FAIL:
                return state
            case DELETE_USER_ARTICLE_SUCCESS:
                return {
                    ...state,
                    article: state.article.filter(articles => articles.id !== action.payload)
                };
            case DELETE_USER_ARTICLE_FAIL:
                return state
            case ADD_USER_ARTICLE_SUCCESS:
                return {
                    ...state,
                    article: [...state.article, action.payload]
                };
            case ADD_USER_ARTICLE_FAIL:
                return state
        default:
            return state;
    };
};