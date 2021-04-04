import React, {useEffect, Fragment} from 'react'
import { withAlert } from 'react-alert'
 

const Alert = ({alert}) => {
    useEffect(() =>{
        alert.success("WELCOME")
       
    },[]);
    return ( 
        <Fragment/>
     );
}
 
export default withAlert()(Alert);