import axios from 'axios';
import Cookies from 'js-cookie'
import { 
   LOAD_USER_PROFILE_SUCCESS,
   LOAD_USER_PROFILE_FAIL,
   UPDATE_USER_PROFILE_SUCCESS,
   UPDATE_USER_PROFILE_FAIL
  
} from './types';

export const load_user = () => async dispatch =>{
    const config = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/profile/user`, config);

        if (res.data.error){
            dispatch({
                type:LOAD_USER_PROFILE_FAIL
                
            });
        } else{
                dispatch({
                    type:LOAD_USER_PROFILE_SUCCESS,
                    payload: res.data
                });
            }
    }catch (err){
        dispatch({
            type:LOAD_USER_PROFILE_FAIL
            
        });
    }
};

export const update_profile = (first_name,lastt_name,phone,college,status,city,linkedin,email,about,we1,wed1,wel11,wep12,wep13,wep14,wep15,we2,wed2,wel21,wep22,wep23,wep24,wep25,we3,wed3,wel31,wep32,wep33,wep34,wep35,class10,class10marks,class12,class12marks,collegemarks,skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9,skill10,hna1,hna2,hna3,hna4,hna5,lang1,lang2,lang3,lang4,lang1p,lang2p,lang3p,lang4p) => async dispatch =>{
    const config = {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };
    const body = JSON.stringify({
        'withCredentials':true,
        first_name,
        lastt_name,
        phone,
        college,
        status,
        city,
        linkedin,
        email,
        about,
        we1,
        wed1,
        wel11,
        wep12,
        wep13,
        wep14,
        wep15,
        we2,
        wed2,
        wel21,
        wep22,
        wep23,
        wep24,
        wep25,
        we3,
        wed3,
        wel31,
        wep32,
        wep33,
        wep34,
        wep35,
        class10,
        class10marks,
        class12,
        class12marks,
        collegemarks,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        skill6,
        skill7,
        skill8,
        skill9,
        skill10,
        hna1,
        hna2,
        hna3,
        hna4,
        hna5,
        lang1,
        lang2,
        lang3,
        lang4,
        lang1p,
        lang2p,
        lang3p,
        lang4p
    });
    try {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/profile/update`, body, config);

        if (res.data.profile && res.data.username){
            dispatch({
                type:UPDATE_USER_PROFILE_SUCCESS,
                payload:res.data
                
            });
        } else{
                dispatch({
                    type:UPDATE_USER_PROFILE_FAIL
                });
            }
    }catch (err){
        dispatch({
            type:UPDATE_USER_PROFILE_FAIL
            
        });
    }
};

