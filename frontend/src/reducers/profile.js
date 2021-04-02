import {
    LOAD_USER_PROFILE_FAIL,
    LOAD_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL
    
} from '../actions/types'

const initialState = {

    username:'',
    first_name:'',
    lastt_name:'',
    phone:'',
    college:''
};

export default function(state = initialState, action) {
    const {type, payload } = action

    switch(type){
        case LOAD_USER_PROFILE_SUCCESS:
            return {
                ...state,
                username: payload.username,
                first_name: payload.profile.first_name,
                lastt_name: payload.profile.lastt_name,
                phone: payload.profile.phone,
                college: payload.profile.college
                
            }
            case LOAD_USER_PROFILE_FAIL:
                return {
                    ...state,
                    username:'',
                    first_name:'',
                    lastt_name:'',
                    phone:'',
                    college:''
                }
            case UPDATE_USER_PROFILE_SUCCESS:
                return {
                    ...state,
                    username: payload.username,
                    first_name: payload.profile.first_name,
                    lastt_name: payload.profile.lastt_name,
                    phone: payload.profile.phone,
                    college: payload.profile.college
                }
            case UPDATE_USER_PROFILE_FAIL:
                return{
                    ...state
                }
            
        default:
            return state
    };
};