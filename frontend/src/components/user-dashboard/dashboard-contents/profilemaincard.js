import React from 'react';
import ReactStars from "react-rating-stars-component";
import Fade from 'react-reveal/Fade'

const ProfileMainCard = (props) => {
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
        
    return ( 
        <Fade bottom><div className="profilemaincard col-12 ">
            <div className="row">
                <div className="profilemaincard-lhs col-12  col-lg-6 px-lg-4">
                    <div className="row">
                    <Fade bottom><div className="profilemaincard-lhs-about greybox col-12 mt-5 py-2 px-3">
                        <Fade bottom><h2>About Me</h2><br/></Fade>
                        <Fade bottom><p>{props.about}</p></Fade>
                        </div> </Fade>
                        <Fade bottom><div className="profilemaincard-lhs-about col-12 mt-3 py-2 px-3">
                        <Fade bottom><h2> Skills</h2><br/></Fade>
                            <div className="row justify-content-center">
                                { skills.map(skill =>(<Fade bottom><h6 className="profilecardmain-skills-btn px-4 py-2">{skill}</h6></Fade>))}
                               
                            </div>
                        </div> </Fade>
                        <Fade bottom><div className="profilemaincard-lhs-about profilemaincard-lhs-hna col-12 mt-3 py-2 px-3">
                        <Fade bottom><h2>Awards & Honours</h2><br/></Fade>
                            
                        <Fade bottom><p>{props.hna1}</p></Fade>
                        <Fade bottom><br/><p>{props.hna2}</p> </Fade>
                        <Fade bottom><br/><p>{props.hna3}</p> </Fade>
                        <Fade bottom><br/><p>{props.hna4}</p> </Fade>
                        <Fade bottom><br/><p>{props.hna5}</p> </Fade>
                            
                        </div> </Fade>
                        
                        <Fade bottom><div className="profilemaincard-lhs-about profilemaincard-lhs-hna col-12 mt-3 py-2 px-3">
                        <Fade bottom><h2>LANGUAGES & TECHS</h2></Fade>
                        <Fade bottom><p style={{color:'grey'}}>(*refresh the main dashboard to see updated ratings)</p><br/></Fade>
                        <Fade bottom><h5>{props.lang1}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl1}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            /></Fade>
                            <Fade bottom><h5>{props.lang2}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl2}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            /></Fade>
                            <Fade bottom><h5>{props.lang3}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl3}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            /></Fade>
                            <Fade bottom><h5>{props.lang4}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl4}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            /></Fade>
                            <Fade bottom><h5>{props.lang5}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl5}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            /></Fade>
                            <Fade bottom><h5>{props.lang6}</h5><ReactStars
                                count={5}
                            
                                size={24}
                                value={lvl6}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fas fa-star"></i>}
                                activeColor="#000000"
                            /></Fade>

                        </div></Fade>
                    </div>
                </div>
                <div className="col-12 col-lg-6 profilemaincard-rhs px-lg-4">
                    <div className="row">
                        <Fade bottom><div className="col-12 profilemaincard-rhs-education mt-5 py-2 px-3 pb-3">
                        <Fade bottom><h2>Education</h2></Fade>
                            <div className="row justify-content-center">
                            <Fade bottom><div className=" col-8 col-lg-5 secondary-school mt-3 mx-3" >
                                    <i className="fas fa-school fa-3x pt-2"/>
                                    <h4>{props.class10}</h4>
                                    <h5>{props.class10marks}</h5>
                                    <p>~ {props.pass10}</p>
                                </div></Fade>
                                <Fade bottom><div className="col-8 col-lg-5 high-school mt-3 mx-3">
                                <i className="fas fa-school fa-3x pt-2 "/>
                                    <h4>{props.class12}</h4>
                                    <h5>{props.class12marks}</h5>
                                    <p>~ {props.pass12}</p>
                                </div></Fade>
                                <Fade bottom><div className="col-8 col-lg-5 college-school mx-3 mt-4">
                                <i className="fas fa-graduation-cap fa-3x pt-2 "/>
                                    <h4> {props.college}</h4>
                                    <h5>{props.collegemarks}</h5>
                                    <p>~ {props.passclg}</p>
                                </div></Fade>

                            </div>
                        </div></Fade>
                        <Fade bottom><div className="profilemaincard-rhs-education profilemaincard-rhs-we col-12 mt-3 py-2 px-3">
                        <Fade bottom><h2>Work & Experience</h2><br/></Fade>
                        <Fade bottom><h4>{props.we1}</h4></Fade>
                        <Fade bottom><h5>{props.wel11}</h5></Fade>
                        <Fade bottom><h6>{props.wed1}</h6></Fade>
                        <Fade bottom><p>{props.wep12}</p></Fade>
                        <Fade bottom><p>{props.wep13}</p></Fade>
                        <Fade bottom><p>{props.wep14}</p></Fade>
                            <br/>
                            <Fade bottom><h4>{props.we2}</h4></Fade>
                            <Fade bottom><h5>{props.wel21}</h5></Fade>
                            <Fade bottom><h6>{props.wed2}</h6></Fade>
                            <Fade bottom><p>{props.wep22}</p></Fade>
                            <Fade bottom><p>{props.wep23}</p></Fade>
                            <Fade bottom><p>{props.wep24}</p></Fade>
                           
                        </div></Fade>

                        <Fade bottom><div className="profilemaincard-lhs-about col-12 mt-3 py-2 px-3">
                        <Fade bottom><h2>Interest & Hobbies </h2><br/></Fade>
                            <div className="row justify-content-center">
                                { interest.map(hobbies =>(<Fade bottom><h6 className="profilecardmain-interest-btn px-4 py-2">{hobbies}</h6></Fade>))}
                               
                            </div>
                        </div></Fade>
                        
                    </div> 
                </div>
            </div>
        </div></Fade>
     );
}
 
export default ProfileMainCard;