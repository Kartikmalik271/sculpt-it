import React, {Component, useEffect, useState} from "react";
import { connect } from 'react-redux'
import  {  loadAllArticle}  from '../../../actions/article'
import PropTypes from 'prop-types'






const Article = ({ allarticle, loadAllArticle}) => {
    
    useEffect(() =>{
        loadAllArticle();
       
    },[]);

    
    return ( 
        <div className="col-12">
                <h1>article</h1>
                
                   
        { 
            allarticle.map(articles =>(
                <div key={articles.id} className="article-head-card col-12 py-3 my-4">
                    <p style={{textAlign:'right'}}>~{articles.writer}</p>
                    <div className="row align-items-center">
                      <div className="article-head-card-main col-12 col-lg-4 " style={{textAlign:'center'}}>
                          <h1>{articles.title}</h1>
                          <h4>{articles.contenttype}</h4>
                      </div>
                      <div className="article-head-card-details  col-12 col-lg-8" >
                        <p>{articles.description}</p>
                        <button className="btn btn-full bg-dark"style={{color:'white'}}>{articles.look}</button> 
                      </div>         
                    </div>
                  </div>                                
        ))}
                            
                
                
                
                   
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

