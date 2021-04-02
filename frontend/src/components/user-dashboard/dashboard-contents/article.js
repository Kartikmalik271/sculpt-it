import React, {Component, useEffect, useState} from "react";
import { connect } from 'react-redux'
import  {loadArticle, deleteArticle}  from '../../../actions/article'
import PropTypes from 'prop-types'






const Article = ({loadArticle, article, deleteArticle}) => {
    
    useEffect(() =>{
        loadArticle();
       
    },[]);

    
    return ( 
        <div>
                <h1>article</h1>
                
                   <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>title</th>
                                    <th>type</th>
                                    <th>descp</th>
                                    <th>view</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                article.map(articles =>(
                                <tr key={articles.id}>
                                    <td>{articles.title}</td>
                                    <td>{articles.contenttype}</td>
                                    <td>{articles.description}</td>
                                    <td>{articles.look}</td>
                                    <td><button onClick={deleteArticle.bind(this, articles.id)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            ))}
                            </tbody>
                </table>
                
                
                   
            </div>
     );
}
 Article.propTypes={
    article: PropTypes.array.isRequired
 }
const mapStateToProps = state =>({
    article: state.article.article
});
export default connect(mapStateToProps, { loadArticle, deleteArticle })(Article);

