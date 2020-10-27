import React from 'react';

const ProfileProject = (props) => {
    return ( 
        <div className="col-12 px-0">
            <div className="row justify-content-center align-items-center">
                <h3 className="col-12 mt-5"style={{textAlign:'center',textDecoration:'underline',textDecorationColor:'#0f3363'}}>{props.title}</h3>
                <h6 >{props.date}</h6>
                <p className="col-12 ">{props.para}</p>
                <button className="col-4 btn viewproject-btn-half mx-4">Project ></button>
                <button className="col-4 btn viewsource-btn-half mx-4">Source ></button>

                <h6 className="mx-5 mt-4 mb-3">LIKE</h6>
            </div>
        </div>
     );
}
 
export default ProfileProject;