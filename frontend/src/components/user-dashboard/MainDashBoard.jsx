import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import Headcardmain from './dashboard-contents/headcardmain';
import { update_profile } from '../../actions/profile';
import Fade from 'react-reveal/Fade'
import  Article from './dashboard-contents/article';
import AddArticle from './dashboard-contents/addArticle'



const currDate = new Date().getDate();
const currYear = new Date().getFullYear();
const currMonth = new Date().toLocaleDateString('default', { month: 'short' });
const currDay = new Date().getDay('default', { day: 'long' });
var day = '';
switch (currDay) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;

  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;

  default:
    day = 'sunday';
    break;
}

const MainDashBoard = ({update_profile,username_global, first_name_global,lastt_name_global,phone_global,college_global}) => {

  const [profileUpdated, setProfileUpdated] = useState(false);

  const [formData, setFormData] = useState({
    first_name:'',
    lastt_name:'',
    phone:'',
    college:''
    
});

const {first_name,lastt_name,phone,college} = formData;
useEffect(() =>{
  setFormData({
    first_name:first_name_global,
    lastt_name:lastt_name_global,
    phone:phone_global,
    college:college_global
  });
},[first_name_global]);

const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value });

const onSubmit = e => {
    e.preventDefault();
    const updateProfile = async () =>{
      await update_profile(first_name,lastt_name,phone,college);
      setProfileUpdated(!profileUpdated);
    };
    updateProfile();        
};


  return (
    <div className="App ">
      <div className=" ">
        <div className="row">
          <div className="date">
            <h7 className="content-tag d-none d-sm-block">DASHBOARD</h7>
            <p>
              {currDate} {currMonth} {currYear} ,{day}
            </p>
          </div>
          <Headcardmain />
          <p>view profile</p><br/>
          <ul>
            <li>{username_global}</li>
            <li>{first_name_global}</li>
            <li>{lastt_name_global}</li>
            <li>{phone_global}</li>
            <li>{college_global}</li>
          </ul><br/>
          <p>update user profile</p>
          <form onSubmit={e =>onSubmit(e)}>
              <Fade bottom><input className="col-12 "  
                                  type="text" 
                                  name="first_name" 
                                  placeholder={`${first_name_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={first_name}  
                                  required="required" 
                                  /></Fade>
              <Fade bottom><input className="col-12  "  
                                  type="text" 
                                  name="lastt_name" 
                                  placeholder={`${lastt_name_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lastt_name} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><input className="col-12 "  
                                  type="text" 
                                  name="phone" 
                                  placeholder={`${phone_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={phone} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><input className="col-12"  
                                  type="text" 
                                  name="college" 
                                  placeholder={`${college_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={college} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><button type="submit" className="btn col-6 homepagelogin-btn-half">update</button></Fade>

                                </form>
              <Article/>
              <AddArticle/>
              
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state =>({
  first_name_global: state.profile.first_name,
  lastt_name_global: state.profile.lastt_name,
  phone_global: state.profile.phone,
  college_global: state.profile.college,
  username_global: state.username,



  
});
export default connect(mapStateToProps,{update_profile})(MainDashBoard);
