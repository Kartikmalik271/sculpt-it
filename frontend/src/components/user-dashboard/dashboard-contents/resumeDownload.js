import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ReactStars from "react-rating-stars-component";


import '../../../page/DashBoard/dashboard-style.css'

const ResumeDownload = (props) => {

   
    var sk1 = props.skill1
    var sk2 = props.skill2
    var sk3 = props.skill3
    var sk4 = props.skill4
    var sk5 = props.skill5
    var sk6 = props.skill6
    var sk7 = props.skl7
    var ih1 = props.ih1
    var ih2 = props.ih2
    var ih3 = props.ih3
    var ih4 = props.ih4
    var ih5 = props.ih5
    
    var level1 = parseInt(props.lang1p)
    var level2 = parseInt(props.lang2p)
    var level3 = parseInt(props.lang3p)
    var level4 = parseInt(props.lang4p)
    var level5 = parseInt(props.lang5p)
    var level6 = parseInt(props.lang6p)

    var lvl1 ,lvl2 , lvl3, lvl4,lvl5,lvl6
    if (level1 === 1 )
    lvl1=1;
else if (level1 === 2 )
    lvl1=2;
else if (level1 === 3 )
    lvl1=3;
else if (level1 === 4 )
    lvl1=4;
else if (level1 === 5 )
    lvl1=5;
else
    lvl1=0;

if (level2 === 1 )
    lvl2=1;
else if (level2 === 2 )
    lvl2=2;
else if (level2 === 3 )
    lvl2=3;
else if (level2 === 4 )
    lvl2=4;
else if (level2 === 5 )
    lvl2=5;
else
    lvl2=0;

if (level3 === 1 )
    lvl3=1;
else if (level3 === 2 )
    lvl3=2;
else if (level3 === 3 )
    lvl3=3;
else if (level3 === 4 )
    lvl3=4;
else if (level3 === 5 )
    lvl3=5;
else
    lvl3=0;

if (level4 === 1 )
    lvl4=1;
else if (level4 === 2 )
    lvl4=2;
else if (level4 === 3 )
    lvl4=3;
else if (level4 === 4 )
    lvl4=4;
else if (level4 === 5 )
    lvl4=5;
else
    lvl4=0;

if (level5 === 1 )
    lvl5=1;
else if (level5 === 2 )
    lvl5=2;
else if (level5 === 3 )
    lvl5=3;
else if (level5 === 4 )
    lvl5=4;
else if (level5 === 5 )
    lvl5=5;
else
    lvl5=0;

if (level6 === 1 )
    lvl6=1;
else if (level6 === 2 )
    lvl6=2;
else if (level6 === 3 )
    lvl6=3;
else if (level6 === 4 )
    lvl6=4;
else if (level6 === 5 )
    lvl6=5;
else
    lvl6=0;


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
    if (sk7 !== "")
        skills.push(sk7)
    if (ih1 !== "")
      interest.push(ih1)
    if (ih2 !== "")
      interest.push(ih2)
    if (ih3 !== "")
      interest.push(ih3)
    if (ih4 !== "")
      interest.push(ih4)
    if (ih5 !== "")
      interest.push(ih5)

    const componentRef = useRef();
    
    return (
     
        <div className="col-12 resume-download mt-5 px-0">
         <div className="modalmain" id="FormModal">
        
        <div className="row justify-content-center ">
          <div class="modal fade homepage-register" id="Register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="exampleModalLongTitle">Resume</h6>
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
                            <h2>{props.name}</h2>
                            <h5>{props.status} </h5>
                        </div>
                        <div className="resume-box-social py-3 col-6" >
                            <h6>{props.email}  <i className="fas fa-envelope "/></h6>
                            <h6>{props.phone}  <i className="fas fa-phone "/></h6>
                            <h6>{props.city}  <i className="fas fa-map-marker "/></h6>
                            <h6>{props.linkedin}  <i className="fa fa-linkedin "/></h6>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 mt-3">
                <p>{props.about}</p>
                </div>
                <div className="col-3">
                    <div className="row align-items-center">
                        <div className="col-12 resumebox-skills">
                            <h3><i className="fas fa-cogs "/>  skills </h3>
                            <div className="row justify-content-center">
                                { skills.map(skill =>(<h6 className="profilecardmain-skills-btn px-4 py-2">{skill}</h6>))}
                            </div>
                        </div>
                        <div className="col-12 resumebox-skills mt-3">
                    <h3><i className="fas fa-swimmer "/>  Interest & Hobbies</h3>
                    <div className="row justify-content-center">
                        { interest.map(skill =>(<h6 className="profilecardmain-interest-btn px-4 py-2">{skill}</h6>))}
                    </div>
                </div>  
                <div className="col-12 resumebox-skills mt-3">
                    <h3><i className="fas fa-language "/>  Langunage & Technicals</h3>
                    <h5>{props.lang1}</h5><ReactStars
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
                            <h5>{props.lang2}</h5><ReactStars
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
                            <h5>{props.lang3}</h5><ReactStars
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
                            <h5>{props.lang4}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl4}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />
                            <h5>{props.lang5}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl5}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            />
                            <h5>{props.lang6}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl6}
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
                            <h5 style={{fontWeight:'bold'}}>{props.we1}</h5>
                            <h5>{props.wel11}</h5>
                            <h6>{props.wed1}</h6>
                            <div className="col-12 resumebox-we pl-5">
                            <p>{props.wep12}</p>
                            <p>{props.wep13}</p>
                            <p>{props.wep14}</p>

                            </div>

                        
                            <h5 style={{fontWeight:'bold'}}>{props.we2}</h5>
                            <h5>{props.wel21}</h5>
                            <h6>{props.wed2}</h6>
                            <div className="col-12 resumebox-we pl-5">
                            <p>{props.wep22}</p>
                            <p>{props.wep23}</p>
                            <p>{props.wep24}</p>
                            </div>
                        </div>
                        <div className="col-12 resumebox-skills mt-4">
                                <h3><i className="fas fa-book-open "/>  Education</h3><br/>
                                <h5 className=" col-12 resumebox-edu-head py-2"style={{fontWeight:'bold'}}>{props.class10} (10th)</h5>
                                <div className="resumebox-edu pl-3 mb-2 ml-3">
                                   
                                    <h5>{props.class10marks}</h5>
                                    <h6>~{props.pass10}</h6>
                                </div>
                                <h5 className=" col-12 resumebox-edu-head py-2"style={{fontWeight:'bold'}}>{props.class12} (12th)</h5>
                                <div className="resumebox-edu pl-3 mb-3 ml-3">
                                    
                                    <h5>{props.class12marks}</h5>
                                    <h6>~{props.pass12}</h6>
                                </div>
                                <h5 className=" col-12 resumebox-edu-head py-2">{props.college}</h5>
                                <div className="resumebox-edu pl-3 mb-3 ml-3">
                                  
                                    <h5>{props.collegemarks}</h5>
                                    <h6>~{props.passclg}</h6>
                                </div>
                        </div>
                        <div className="col-12 resumebox-skills mt-4">
                                    <h3 ><i className="fas fa-award "/>  Awards & Honours</h3><br/>
                                    <p>{props.hna1}</p>
                                    <br/><p>{props.hna2}</p>
                                    <br/><p>{props.hna3}</p>
                                    <br/><p>{props.hna4}</p>
                                    <br/><p>{props.hna5}</p>
                        </div>
                    </div>
                </div>
                
                
                
                
                     
                
                
            </div>
        </div>
        <ReactToPrint
        trigger={() => <button className="btn btn-printout bg-success">Print this out!</button>}
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