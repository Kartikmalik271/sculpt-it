import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ReactStars from "react-rating-stars-component";


import '../../../page/DashBoard/dashboard-style.css'

const ResumeDownload = (props) => {

    var level1 = props.ab.toUpperCase()
    var level2 = props.abc.toUpperCase()
    var level3 = props.abcd.toUpperCase()
    var level4 = props.abcde.toUpperCase()
    var lvl1 ,lvl2 , lvl3, lvl4
    if (level1 === 'BEGINNER')
        lvl1=1;
    else if(level1 === 'INTERMEDIATE')
        lvl1=3;
    else if(level1 === 'EXPERT')
        lvl1=5;
    else
        lvl1=0;

    if (level2 === 'BEGINNER')
        lvl2=1;
    else if(level2 === 'INTERMEDIATE')
        lvl2=3
    else if(level2 === 'EXPERT')
        lvl2=5
    else
        lvl2=0

        if (level3 === 'BEGINNER')
        lvl3=1;
    else if(level3 === 'INTERMEDIATE')
        lvl3=3
    else if(level3 === 'EXPERT')
        lvl3=5
    else
        lvl3=0

        if (level3 === 'BEGINNER')
        lvl4=1;
    else if(level4 === 'INTERMEDIATE')
        lvl4=3
    else if(level4 === 'EXPERT')
        lvl4=5
    else
        lvl4=0


    var sk1 = 'web developement'
    var sk2 = 'communication'
    var sk3 = 'creativity'
    var sk4 = 'programming'
    var sk5 = 'skill'
    var sk6 = 'demo'
    var ih1 = 'solo travelling'
    var ih2 = 'basketball'
    var ih3 = 'learning new things'
    var ih4 = 'interest'

    var skills = []
    var interest = []
    
    if (sk1 !== "")
        skills.push(sk1)
    if (sk2 !== "")
        skills.push(sk2)
    if (sk3 !== "")
        skills.push(sk3)
    if (sk4 !== "")
        skills.push(sk4)
    if (sk5 !== "")
        skills.push(sk5)
    if (sk6 !== "")
        skills.push(sk6)
    if (ih1 !== "")
      interest.push(ih1)
    if (ih2 !== "")
      interest.push(ih2)
    if (ih3 !== "")
      interest.push(ih3)
    if (ih4 !== "")
      interest.push(ih4)

    const componentRef = useRef();
    
    return (
     
        <div className="col-12 resume-download mt-5 px-0">
         <div className="modalmain" id="FormModal">
        
        <div className="row justify-content-center ">
          <div class="modal fade homepage-register" id="Register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="exampleModalLongTitle">SIGN-UP HERE</h6>
                      <button type="button" class="close" style={{color:'white'}} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                  <div className="resume-box col-12 "  ref={componentRef} >
            <div className="row">
                <div className="resumebox-headbox col-12">
                    <div className="row align-items-center">
                        
                        <div className="resume-box-name col-6 pl-5">
                            <h2>Name 123</h2>
                            <h5>position </h5>
                        </div>
                        <div className="resume-box-social py-4 col-6" >
                            <h6>xxxxxx@xxxx.com  <i className="fas fa-envelope "/></h6>
                            <h6>xxxx-xxx-xxx  <i className="fas fa-phone "/></h6>
                            <h6>xxxxx  <i className="fas fa-map-marker "/></h6>
                            <h6>xxxxxxxxx  <i className="fa fa-linkedin "/></h6>
                            <h6>xxxx-xx  <i className="fa fa-instagram "/></h6>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-3">
                    <div className="row align-items-center">
                        <div className="col-12 resumebox-skills">
                            <h3><i className="fas fa-cogs "/>  skills </h3><br/>
                            <div className="row justify-content-center">
                                { skills.map(skill =>(<h6 className="profilecardmain-skills-btn px-4 py-2">{skill}</h6>))}
                            </div>
                        </div>
                        <div className="col-12 resumebox-skills mt-4">
                    <h3><i className="fas fa-swimmer "/>  Interest & Hobbies</h3><br/>
                    <div className="row justify-content-center">
                        { interest.map(skill =>(<h6 className="profilecardmain-interest-btn px-4 py-2">{skill}</h6>))}
                    </div>
                </div>  
                <div className="col-12 resumebox-skills mt-4">
                    <h3><i className="fas fa-language "/>  Langunage & Technicals</h3><br/>
                    <h5>English</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl1}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />
                            <h5>German</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl3}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />
                            <h5>python</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl1}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />
                            <h5>C++</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl2}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />
                            <h5>Excel</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl2}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />
                            <h5>docer</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl2}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />

                    
                </div>      
                    </div>
                </div>
                <div className="col-9">
                    <div className="row align-items-center">
                        <div className="col-12 resumebox-skills ">
                            <h3 ><i className="fas fa-briefcase "/>  Work & Experience</h3><br/>
                            <h5 style={{fontWeight:'bold'}}>demo1</h5>
                            <h5>inst. name</h5>
                            <h6>date</h6>
                            <div className="col-12 resumebox-we pl-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <br/>
                            </div>

                        
                            <h5 style={{fontWeight:'bold'}}>demo1</h5>
                            <h5>inst. name</h5>
                            <h6>date</h6>
                            <div className="col-12 resumebox-we pl-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <br/>
                            </div>
                        </div>
                        <div className="col-12 resumebox-skills mt-4">
                                <h3><i className="fas fa-book-open "/>  Education</h3><br/>
                                <h5 className=" col-12 resumebox-edu-head py-2"style={{fontWeight:'bold'}}>xyzSchool (10th)</h5>
                                <div className="resumebox-edu pl-3 mb-2 ml-3">
                                   
                                    <h5>Marks</h5>
                                    <h6>~xxxx</h6>
                                </div>
                                <h5 className=" col-12 resumebox-edu-head py-2"style={{fontWeight:'bold'}}>xyz School(12th)</h5>
                                <div className="resumebox-edu pl-3 mb-3 ml-3">
                                    
                                    <h5>Marks</h5>
                                    <h6>~xxxx</h6>
                                </div>
                                <h5 className=" col-12 resumebox-edu-head py-2">xyz College</h5>
                                <div className="resumebox-edu pl-3 mb-3 ml-3">
                                  
                                    <h5>Marks</h5>
                                    <h6>~xxxx</h6>
                                </div>
                        </div>
                        <div className="col-12 resumebox-skills mt-4">
                                    <h3 ><i className="fas fa-award "/>  Awards & Honours</h3><br/>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p> <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p> <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur </p>
                        </div>
                    </div>
                </div>
                
                
                
                
                     
                
                
            </div>
        </div>
        <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
                          </div>
                      </div>
                  </div>
                  
                  </div>
              </div>
          </div>

      </div>
  
     );
}
 
export default ResumeDownload;