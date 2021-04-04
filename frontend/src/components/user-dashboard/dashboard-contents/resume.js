import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { update_profile } from '../../../actions/profile';
import Fade from 'react-reveal/Fade'


 
const Resume = ({update_profile, first_name_global,lastt_name_global,phone_global,college_global,status_global ,city_global,linkedin_global,email_global,about_global,we1_global,wed1_global,wel11_global,wep12_global,wep13_global,wep14_global,wep15_global, we2_global, wed2_global,  wel21_global,  wep22_global,  wep23_global,  wep24_global,  wep25_global,  we3_global,  wed3_global,  wel31_global,  wep32_global,  wep33_global,  wep34_global,  wep35_global,  class10_global,  class10marks_global,  class12_global,  class12marks_global,  collegemarks_global,  skill1_global,
  skill2_global,
  skill3_global,
  skill4_global,
  skill5_global,
  skill6_global,
  skill7_global,
  skill8_global,
  skill9_global,
  skill10_global,
  hna1_global,
  hna2_global,
  hna3_global,
  hna4_global,
  hna5_global,
  lang1_global,
  lang2_global,
  lang3_global,
  lang4_global,
  lang1p_global,
  lang2p_global,
  lang3p_global,
  lang4p_global}) => {

  const [profileUpdated, setProfileUpdated] = useState(false);

  const [formData, setFormData] = useState({
    first_name:'',
    lastt_name:'',
    phone:'',
    college:'',
    status:'',
    city:'',
    linkedin:'',
    email:'',
    about:'',
    we1:'',
    wed1:'',
    wel11:'',
    wep12:'',
    wep13:'',
    wep14:'',
    wep15:'',
    we2:'',
    wed2:'',
    wel21:'',
    wep22:'',
    wep23:'',
    wep24:'',
    wep25:'',
    we3:'',
    wed3:'',
    wel31:'',
    wep32:'',
    wep33:'',
    wep34:'',
    wep35:'',
    class10:'',
    class10marks:'',
    class12:'',
    class12marks:'',
    collegemarks:'',
    skill1:'',
    skill2:'',
    skill3:'',
    skill4:'',
    skill5:'',
    skill6:'',
    skill7:'',
    skill8:'',
    skill9:'',
    skill10:'',
    hna1:'',
    hna2:'',
    hna3:'',
    hna4:'',
    hna5:'',
    lang1:'',
    lang2:'',
    lang3:'',
    lang4:'',
    lang1p:'',
    lang2p:'',
    lang3p:'',
    lang4p:''
    
});
  const {first_name,lastt_name,phone,college,status,city,linkedin,email,about,we1,wed1,wel11,wep12,wep13,wep14,wep15,we2,wed2,wel21,wep22,wep23,wep24,wep25,we3,wed3,wel31,wep32,wep33,wep34,wep35,class10,class10marks,class12,class12marks,collegemarks,skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9,skill10,hna1,hna2,hna3,hna4,hna5,lang1,lang2,lang3,lang4,lang1p,lang2p,lang3p,lang4p} = formData;
useEffect(() =>{
  setFormData({
    first_name:first_name_global,
    lastt_name:lastt_name_global,
    phone:phone_global,
    college:college_global,
    status: status_global,
    city: city_global,
    linkedin: linkedin_global,
    email:  email_global,
    about:  about_global,
    we1:   we1_global,
    wed1:   wed1_global,
    wel11:  wel11_global,
    wep12:  wep12_global,
    wep3:   wep13_global,
    wep4:   wep14_global,
    wep15:  wep15_global,
    wep2:   we2_global,
    wed2:   wed2_global,
    wel21:  wel21_global,
    wep22:  wep22_global,
    wep23:  wep23_global,
    wep24:  wep24_global,
    wep25:  wep25_global,
    we3:    we3_global,
    wed3:   wed3_global,
    wel31:  wel31_global,
    wep32:  wep32_global,
    wep33:  wep33_global,
    wep34:  wep34_global,
    wep35:  wep35_global,
    class10:       class10_global,
    class10marks:  class10marks_global,
    class12:       class12_global,
    class12marks:  class12marks_global,
    collegemarks:  collegemarks_global,
    skill1:  skill1_global,
    skill2:  skill2_global,
    skill3:  skill3_global,
    skill4:  skill4_global,
    skill5:  skill5_global,
    skill6:  skill6_global,
    skill7:  skill7_global,
    skill8:  skill8_global,
    skill9:  skill9_global,
    skill10: skill10_global,
    hna1:   hna1_global,
    hna2:   hna2_global,
    hna3:   hna3_global,
    hna4:   hna4_global,
    hna5:   hna5_global,
    lang1:  lang1_global,
    lang2:  lang2_global,
    lang3:  lang3_global,
    lang4:  lang4_global,
    lang1p: lang1p_global,
    lang2p: lang2p_global,
    lang3p: lang3p_global,
    lang4p: lang4p_global
  });
},[first_name_global]);



const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value });

const onSubmit = e => {
    e.preventDefault();
    const updateProfile = async () =>{
      await update_profile(first_name,lastt_name,phone,college,status,city,linkedin,email,about,we1,wed1,wel11,wep12,wep13,wep14,wep15,we2,wed2,wel21,wep22,wep23,wep24,wep25,we3,wed3,wel31,wep32,wep33,wep34,wep35,class10,class10marks,class12,class12marks,collegemarks,skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9,skill10,hna1,hna2,hna3,hna4,hna5,lang1,lang2,lang3,lang4,lang1p,lang2p,lang3p,lang4p);
      setProfileUpdated(!profileUpdated);
    };
    updateProfile();        
};

  return ( 
    <div className="col-12 px-0">
      <ul>
        <li>{first_name_global}</li>
        <li>{lastt_name_global}</li>
        <li>{phone}</li>
        <li>{college}</li>
      </ul>
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
      
   
    </div>
  );
}
const mapStateToProps = state =>({
  first_name_global: state.profile.first_name,
  lastt_name_global: state.profile.lastt_name,
  phone_global: state.profile.phone,
  college_global: state.profile.college,
  status_global: state.profile.status,
  city_global: state.profile.city,
  linkedin_global: state.profile.linkedin,
  email_global: state.profile.email,
  about_global: state.profile.about,
  we1_global: state.profile.we1,
  wed1_global: state.profile.wed1,
  wel11_global: state.profile.wel11,
  wep12_global: state.profile.wep12,
  wep13_global: state.profile.wep13,
  wep14_global: state.profile.wep14,
  wep15_global: state.profile.wep15,
  we2_global: state.profile.we2,
  wed2_global: state.profile.wed2,
  wel21_global: state.profile.wel21,
  wep22_global: state.profile.wep22,
  wep23_global: state.profile.wep23,
  wep24_global: state.profile.wep24,
  wep25_global: state.profile.wep25,
  we3_global: state.profile.we3,
  wed3_global: state.profile.wed3,
  wel31_global: state.profile.wel31,
  wep32_global: state.profile.wep32,
  wep33_global: state.profile.wep33,
  wep34_global: state.profile.wep34,
  wep35_global: state.profile.wep35,
  class10_global: state.profile.class10,
  class10marks_global: state.profile.class10marks,
  class12_global: state.profile.class12,
  class12marks_global: state.profile.class12marks,
  collegemarks_global: state.profile.collegemarks,
  skill1_global: state.profile.skill1,
  skill2_global: state.profile.skill2,
  skill3_global: state.profile.skill3,
  skill4_global: state.profile.skill4,
  skill5_global: state.profile.skill5,
  skill6_global: state.profile.skill6,
  skill7_global: state.profile.skill7,
  skill8_global: state.profile.skill8,
  skill9_global: state.profile.skill9,
  skill10_global: state.profile.skill10,
  hna1_global: state.profile.hna1,
  hna2_global: state.profile.hna2,
  hna3_global: state.profile.hna3,
  hna4_global: state.profile.hna4,
  hna5_global: state.profile.hna5,
  lang1_global: state.profile.lang1,
  lang2_global: state.profile.lang2,
  lang3_global: state.profile.lang3,
  lang4_global: state.profile.lang4,
  lang1p_global: state.profile.lang1p,
  lang2p_global: state.profile.lang2p,
  lang3p_global: state.profile.lang3p,
  lang4p_global: state.profile.lang4p
  
});
export default connect(mapStateToProps,{update_profile})(Resume);
