import React from 'react';

const ProfileCard = (props) => {
    return ( 
        <div className="col-12 px-0">
            <div className="row justify-content-center align-items-center">
                <img className="col-12 mb-2 px-0" src={props.kartik} style={{height:'300px',borderTopRightRadius:'15px',borderTopLeftRadius:'15px'}} alt=""/>
                <h5 className="col-12"style={{textAlign:'center',textDecoration:'underline',textDecorationColor:'#0f3363'}}>{props.title}</h5>
                <h6 >{props.date}</h6>
                <p className="col-12 ">{props.para}</p>
                <h6 className=" ">LIKE</h6>
            </div>
        </div>
     );
}
 
export default ProfileCard;