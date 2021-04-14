import React, { useEffect} from "react";
import { connect } from 'react-redux'
import  {  loadAllArticle}  from '../../../actions/article'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'






const Article = ({ allarticle, loadAllArticle}) => {
    
    useEffect(() =>{
        loadAllArticle();
       
    },[]);

    
    return ( 
        <div className="col-12">
                
                   
        { 
            allarticle.map(articles =>(
                <Fade bottom><div key={articles.id} className="article-head-card col-12 py-3 my-4">
                    <p style={{textAlign:'right'}}>~{articles.writer}</p>
                    <div className="row align-items-center">
                      <div className="article-head-card-main col-12 col-lg-4 " style={{textAlign:'center'}}>
                      <Fade bottom><h1>{articles.title}</h1></Fade>
                      <Fade bottom><h4>{articles.contenttype}</h4></Fade>
                      </div>
                      <div className="article-head-card-details  col-12 col-lg-8" >
                      <Fade bottom><p>{articles.description}</p></Fade>
                        <Fade bottom><button onClick = {() => {window.open(articles.look)}} className="btn btn-full bg-dark"style={{color:'white'}}>view source</button> </Fade> 
                      </div>         
                    </div>
                  </div> </Fade>                                
        )).reverse()}
                            
                
                
                
                   
            </div>
     );
}

 Article.propTypes={
    allarticle: PropTypes.array.isRequired
 }
const mapStateToProps = state =>({
    allarticle: state.article.allarticle
   
});
export default connect(mapStateToProps, { loadAllArticle})(Article);

