import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProfileMainCard = (props) => {
    var sk1 = 'web developement'
    var sk2 = 'communication'
    var sk3 = 'creativity'
    var sk4 = 'programming & logic building'
    var sk5 = 'skill'
    var sk6 = ''
    var ih1 = 'solo travelling'
    var ih2 = 'basketball'
    var ih3 = 'learning new things'
    var ih4 = 'interest'
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
        
    return ( 
        <div className="profilemaincard col-12 ">
            <div className="row">
                <div className="profilemaincard-lhs col-12  col-lg-6 px-lg-4">
                    <div className="row">
                        <div className="profilemaincard-lhs-about greybox col-12 mt-5 py-2 px-3">
                            <h2>About Me</h2><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="profilemaincard-lhs-about col-12 mt-3 py-2 px-3">
                            <h2> Skills</h2><br/>
                            <div className="row justify-content-center">
                                { skills.map(skill =>(<h6 className="profilecardmain-skills-btn px-4 py-2">{skill}</h6>))}
                               
                            </div>
                        </div>
                        <div className="profilemaincard-lhs-about profilemaincard-lhs-hna col-12 mt-3 py-2 px-3">
                            <h2>Awards & Honours</h2><br/>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            
                        </div>
                        <div className="profilemaincard-lhs-about col-12 mt-3 py-2 px-3">
                            <h2>Interest & Hobbies </h2><br/>
                            <div className="row justify-content-center">
                                { interest.map(hobbies =>(<h6 className="profilecardmain-interest-btn px-4 py-2">{hobbies}</h6>))}
                               
                            </div>
                        </div>
                        <div className="profilemaincard-lhs-about profilemaincard-lhs-hna col-12 mt-3 py-2 px-3">
                            <h2>LANGUAGES</h2><br/>
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

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 profilemaincard-rhs px-lg-4">
                    <div className="row">
                        <div className="col-12 profilemaincard-rhs-education mt-5 py-2 px-3 pb-3">
                            <h2>Education</h2>
                            <div className="row justify-content-center">
                                <div className="col-5 secondary-school mt-3 mx-3" >
                                    <i className="fas fa-school fa-3x pt-2"/>
                                    <h4>xxx school</h4>
                                    <h5>marks</h5>
                                    <p>~ xxxx</p>
                                </div>
                                <div className="col-5 high-school mt-3 mx-3">
                                <i className="fas fa-school fa-3x pt-2 "/>
                                    <h4>xxx school</h4>
                                    <h5>marks</h5>
                                    <p>~ xxxx</p>
                                </div>
                                <div className="col-5 college-school mx-3 mt-4">
                                <i className="fas fa-graduation-cap fa-3x pt-2 "/>
                                    <h4>xxx college</h4>
                                    <h5>marks</h5>
                                    <p>~ xxxx</p>
                                </div>

                            </div>
                        </div>
                        <div className="profilemaincard-rhs-education profilemaincard-rhs-we col-12 mt-3 py-2 px-3">
                            <h2>Work & Experience</h2><br/>
                            <h4>demo1</h4>
                            <h5>inst. name</h5>
                            <h6>date</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <br/>
                            <h4>demo1</h4>
                            <h5>inst. name</h5>
                            <h6>date</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <br/>
                            <h4>demo1</h4>
                            <h5>inst. name</h5>
                            <h6>date</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </div>
     );
}
 
export default ProfileMainCard;