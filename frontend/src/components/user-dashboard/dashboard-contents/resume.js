import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { update_profile } from '../../../actions/profile';
import Fade from 'react-reveal/Fade'
import Profileheadcard from './profileheadcard';
import ProfileMainCard from './profilemaincard';
import ResumeDownload from './resumeDownload';
import {TextField} from '@material-ui/core'
import { useAlert} from 'react-alert'


 
const Resume = ({update_profile, first_name_global,lastt_name_global,phone_global,college_global,status_global ,city_global,linkedin_global,email_global,about_global,we1_global,wed1_global,wel11_global,wep12_global,wep13_global,wep14_global,wep15_global, we2_global, wed2_global,  wel21_global,  wep22_global,  wep23_global,  wep24_global,  wep25_global,  we3_global,  wed3_global,  wel31_global,  wep32_global,  wep33_global,  wep34_global,  wep35_global,  class10_global,  class10marks_global,  class12_global,  class12marks_global,  collegemarks_global,  skill1_global,skill2_global,skill3_global,  skill4_global, skill5_global,skill6_global,  skill7_global,  skill8_global,skill9_global,  skill10_global,  hna1_global,  hna2_global,  hna3_global,hna4_global,  hna5_global,  lang1_global,lang2_global,  lang3_global,  lang4_global,  lang1p_global,  lang2p_global,  lang3p_global,  lang4p_global}) => {

  const [profileUpdated, setProfileUpdated] = useState(false);
  const alert = useAlert()

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
    wep13:   wep13_global,
    wep14:   wep14_global,
    wep15:  wep15_global,
    we2:   we2_global,
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
      alert.success('Profile Updated');
    };
    updateProfile();     
  
   
};



  return ( 
    <div className="col-12 px-0">
        <Profileheadcard name={first_name_global} status={status_global} phone={phone_global} city= {city_global} linkedin={linkedin_global} email={email_global}/>
        <button type="button" className="btn modal-btn-half mt-4 bg-primary mx-2" data-toggle="modal" data-target="#EditProfile">Edit Profile</button>
        <button type="button" className="btn modal-btn-half mt-4 bg-danger" data-toggle="modal" data-target="#Register">View Resume</button>
        <p style={{color:'grey'}}>(* alignment may be disturbed in mobile view (download it to previw original) )  </p>

        <ProfileMainCard  about={about_global} 
                          we1= {we1_global}
                          wed1= {wed1_global}
                          wel11=  {wel11_global}
                          wep12=  {wep12_global}
                          wep13=   {wep13_global}
                          wep14=   {wep14_global}
                          pass10=  {wep15_global}
                          we2=   {we2_global}
                          wed2=   {wed2_global}
                          wel21=  {wel21_global}
                          wep22=  {wep22_global}
                          wep23=  {wep23_global}
                          wep24=  {wep24_global}
                          pass12=  {wep25_global}
                          lang5=   {we3_global}
                          lang5p=   {wed3_global}
                          ih5=  {wel31_global}
                          skl7=  {wep32_global}
                          lang6=  {wep33_global}
                          lang6p=  {wep34_global}
                          passclg=  {wep35_global}
                          class10=       {class10_global}
                          class10marks=  {class10marks_global}
                          class12=  {class12_global}
                          class12marks=  {class12marks_global}
                          collegemarks=  {collegemarks_global}
                          skill1=  {skill1_global}
                          skill2=  {skill2_global}
                          skill3=  {skill3_global}
                          skill4=  {skill4_global}
                          skill5=  {skill5_global}
                          skill6=  {skill6_global}
                          ih1=  {skill7_global}
                          ih2=  {skill8_global}
                          ih3=  {skill9_global}
                          ih4= {skill10_global}
                          hna1=   {hna1_global}
                          hna2=   {hna2_global}
                          hna3=   {hna3_global}
                          hna4=   {hna4_global}
                          hna5=   {hna5_global}
                          lang1=  {lang1_global}
                          lang2=  {lang2_global}
                          lang3=  {lang3_global}
                          lang4=  {lang4_global}
                          lang1p= {lang1p_global}
                          lang2p= {lang2p_global}
                          lang3p= {lang3p_global}
                          lang4p= {lang4p_global}

          />
        <ResumeDownload name={first_name_global} 
                        status={status_global} 
                        phone={phone_global} 
                        city= {city_global} 
                        linkedin={linkedin_global} 
                        email={email_global}
                        about={about_global} 
                        we1= {we1_global}
                        wed1= {wed1_global}
                        wel11=  {wel11_global}
                        wep12=  {wep12_global}
                        wep13=   {wep13_global}
                        wep14=   {wep14_global}
                        pass10=  {wep15_global}
                        we2=   {we2_global}
                        wed2=   {wed2_global}
                        wel21=  {wel21_global}
                        wep22=  {wep22_global}
                        wep23=  {wep23_global}
                        wep24=  {wep24_global}
                        pass12=  {wep25_global}
                        lang5=   {we3_global}
                        lang5p=   {wed3_global}
                        ih5=  {wel31_global}
                        skl7=  {wep32_global}
                        lang6=  {wep33_global}
                        lang6p=  {wep34_global}
                        passclg=  {wep35_global}
                        class10=       {class10_global}
                        class10marks=  {class10marks_global}
                        class12=  {class12_global}
                        class12marks=  {class12marks_global}
                        collegemarks=  {collegemarks_global}
                        skill1=  {skill1_global}
                        skill2=  {skill2_global}
                        skill3=  {skill3_global}
                        skill4=  {skill4_global}
                        skill5=  {skill5_global}
                        skill6=  {skill6_global}
                        ih1=  {skill7_global}
                        ih2=  {skill8_global}
                        ih3=  {skill9_global}
                        ih4= {skill10_global}
                        hna1=   {hna1_global}
                        hna2=   {hna2_global}
                        hna3=   {hna3_global}
                        hna4=   {hna4_global}
                        hna5=   {hna5_global}
                        lang1=  {lang1_global}
                        lang2=  {lang2_global}
                        lang3=  {lang3_global}
                        lang4=  {lang4_global}
                        lang1p= {lang1p_global}
                        lang2p= {lang2p_global}
                        lang3p= {lang3p_global}
                        lang4p= {lang4p_global}
        />
                        
      

      <div className="modalmain" id="ResumeFormModal">
        
          <div className="row justify-content-center ">
            <div class="modal fade homepage-register" id="EditProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                    <Fade bottom><h6 class="modal-title" id="exampleModalLongTitle" style={{color:'white'}}>EDIT YOUR PROFILE HERE</h6></Fade>
                        <button type="button" class="close" style={{color:'white'}} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="row justify-content-center">
                            <div className="col-10 align-self-center">

                            <form className="resume-profile-form " onSubmit={e =>onSubmit(e)}>
              <label for="" style={{color:'red'}}>fields marked with ( * ) are required</label><br/><br/>
              <Fade bottom><TextField 
                                  label="First Name" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="first_name" 
                                  placeholder={`${first_name_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={first_name}  
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Last Name " 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="lastt_name" 
                                  placeholder={`${lastt_name_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lastt_name} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Contact no. " 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="phone" 
                                  placeholder={`${phone_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={phone} 
                                  required="required" 
                                  /></Fade>
              
              <Fade bottom><TextField 
                                  label="Current Working Status " 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="status" 
                                  placeholder={`${status_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={status} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="city   " 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="city" 
                                  placeholder={`${city_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={city} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="LinkedIn Id" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="linkedin" 
                                  placeholder={`${linkedin_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={linkedin} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Email" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="email" 
                                  placeholder={`${email_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={email} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="About Me" 
                                  multiline
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  rows="5"
                                  name="about" 
                                  placeholder={`${about_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={about} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Secondary School Name" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="class10" 
                                  placeholder={`${class10_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={class10} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="10th marks" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="class10marks" 
                                  placeholder={`${class10marks_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={class10marks} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Passing Year" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wep15" 
                                  placeholder={`${wep15_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep15} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Higher Sec. School Name " 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="class12" 
                                  placeholder={`${class12_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={class12} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="12th Marks" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="class12marks" 
                                  placeholder={`${class12marks_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={class12marks} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Passing Year" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wep25" 
                                  placeholder={`${wep25_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep25} 
                                  required="required" 
                                  /></Fade>                    
              <Fade bottom><TextField 
                                  label="College Name " 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="college" 
                                  placeholder={`${college_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={college} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Graduation Marks" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="collegemarks" 
                                  placeholder={`${collegemarks_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={collegemarks} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Graduating Year" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wep35" 
                                  placeholder={`${wep35_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep35} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Work & Experience(1)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="we1" 
                                  placeholder={`${we1_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={we1} 
                                  
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Duration" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wed1" 
                                  placeholder={`${wed1_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wed1} 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Institution Name" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wel11" 
                                  placeholder={`${wel11_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wel11} 
                                  
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Points To Mention(1.1)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wep12" 
                                  placeholder={`${wep12_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep12} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Points To Mention(1.2)" 
                                  variant="outlined"
                                  className="col-12 my-1"   
                                  type="text" 
                                  name="wep13" 
                                  placeholder={`${wep13_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep13} 
                                  
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Points To Mention(1.3)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wep14" 
                                  placeholder={`${wep14_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep14} 
                                   
                                  /></Fade>
              
              <Fade bottom><TextField 
                                  label="Work & Experience(2)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="we2" 
                                  placeholder={`${we2_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={we2} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Duration" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wed2" 
                                  placeholder={`${wed2_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wed2} 
                                  
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Institution Name" 
                                  variant="outlined"
                                  className="col-12 my-1"
                                  type="text" 
                                  name="wel21" 
                                  placeholder={`${wel21_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wel21} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Points To Mention(2.1)" 
                                  variant="outlined"
                                  className="col-12 my-1"   
                                  type="text" 
                                  name="wep22" 
                                  placeholder={`${wep22_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep22} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Points To Mention(2.2)" 
                                  variant="outlined"
                                  className="col-12 my-1"   
                                  type="text" 
                                  name="wep23" 
                                  placeholder={`${wep23_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep23} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Points To Mention(2.3)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="wep24" 
                                  placeholder={`${wep24_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep24} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Skills(1)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="skill1" 
                                  placeholder={`${skill1_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill1} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Skills(2)" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="skill2" 
                                  placeholder={`${skill2_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill2} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Skills(3)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="skill3" 
                                  placeholder={`${skill3_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill3} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Skills(4)" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="skill4" 
                                  placeholder={`${skill4_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill4} 
                                
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Skills(5)" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="skill5" 
                                  placeholder={`${skill5_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill5} 
                                 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Skills(6)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="skill6" 
                                  placeholder={`${skill6_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill6} 
                                  
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Skills(7)" 
                                  variant="outlined"
                                  className="col-12 my-1"   
                                  type="text" 
                                  name="wep32" 
                                  placeholder={`${wep32_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep32} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Interest & Hobbies(1)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="skill7" 
                                  placeholder={`${skill7_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill7} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Interest & Hobbies(2)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="skill8" 
                                  placeholder={`${skill8_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill8} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Interest & Hobbies(3)" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="skill9" 
                                  placeholder={`${skill9_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill9} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Interest & Hobbies(4)" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="skill10" 
                                  placeholder={`${skill10_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={skill10} 
                                  
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Interest & Hobbies(5)" 
                                  variant="outlined"
                                  className="col-12 my-1"   
                                  type="text" 
                                  name="wel31" 
                                  placeholder={`${wel31_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wel31} 
                                   
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Honors & Awards(1)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="hna1" 
                                  placeholder={`${hna1_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={hna1} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Honors & Awards(2)" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="hna2" 
                                  placeholder={`${hna2_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={hna2} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Honors & Awards(3)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="hna3" 
                                  placeholder={`${hna3_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={hna3} 
                                  
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Honors & Awards(4)" 
                                  variant="outlined"
                                  className="col-12 my-1"
                                  type="text" 
                                  name="hna4" 
                                  placeholder={`${hna4_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={hna4} 
                                 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Honors & Awards(5)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="hna5" 
                                  placeholder={`${hna5_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={hna5} 
                                 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Language & Techs" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="lang1" 
                                  placeholder={`${lang1_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang1} 
                                  required="required" 
                                  /></Fade>
               <Fade bottom><TextField 
                                  label="Level (scale of 0-5)" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  name="lang1p" 
                                  placeholder={`${lang1p_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang1p} 
                                  required="required" 
                                  /></Fade>                                 
              <Fade bottom><TextField 
                                  label="Language & Techs" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="lang2" 
                                  placeholder={`${lang2_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang2} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Level (scale of 0-5)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="lang2p" 
                                  placeholder={`${lang2p_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang2p} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Language & Techs" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="lang3" 
                                  placeholder={`${lang3_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang3} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Level (scale of 0-5)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="lang3p" 
                                  placeholder={`${lang3p_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang3p} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Language & Techs" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="lang4" 
                                  placeholder={`${lang4_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang4} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Level (scale of 0-5)" 
                                  variant="outlined"
                                  className="col-12 my-1"  
                                  type="text" 
                                  name="lang4p" 
                                  placeholder={`${lang4p_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={lang4p} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Language & Techs" 
                                  variant="outlined"
                                  className="col-12 my-1"   
                                  type="text" 
                                  name="we3" 
                                  placeholder={`${we3_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={we3} 
                                  required="required"
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Level (scale of 0-5)" 
                                  variant="outlined"
                                  className="col-12 my-1"
                                  type="text" 
                                  name="wed3" 
                                  placeholder={`${wed3_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wed3} 
                                  required="required"
                                  /></Fade>                    
              <Fade bottom><TextField 
                                  label="Language & Techs" 
                                  variant="outlined"
                                  className="col-12 my-1" 
                                  type="text" 
                                  name="wep33" 
                                  placeholder={`${wep33_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep33} 
                                  required="required"
                                  /></Fade>
              <Fade bottom><TextField 
                                  label="Level (scale of 0-5)" 
                                  variant="outlined"
                                  className="col-12 my-1"
                                  type="text" 
                                  name="wep34" 
                                  placeholder={`${wep34_global}`}
                                  onChange = {e => onChange(e)} 
                                  value={wep34} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><button type="submit" className="btn col-6 homepagelogin-btn-half">update</button></Fade>

                                </form>                            
                              
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>

      
   
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
