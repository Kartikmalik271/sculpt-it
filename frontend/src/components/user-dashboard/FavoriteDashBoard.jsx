import React, {Component, useEffect, useState} from "react";
import { connect } from 'react-redux'
import  {loadArticle, deleteArticle}  from '../../actions/article'
import PropTypes from 'prop-types'

import Headcardfav from './dashboard-contents/headercardfav';
import AddArticle from './dashboard-contents/addArticle'
import Fade from 'react-reveal/Fade'


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

const Favorite = ({loadArticle, article, deleteArticle}) => {
  useEffect(() =>{
    loadArticle();
   
},[]);


  return (
    <div className="App">
      <div className="col-12 align-self-center">
        <div className="row">
          <div className="date">
            <h7 className=" content-tag d-none d-sm-block">POST ARTICLE</h7>
            <p>
              {currDate} {currMonth} {currYear} ,{day}
            </p>
          </div>
          <Headcardfav />
          <AddArticle/>

                { article.map(articles =>(
                          
                          <Fade bottom><div key={articles.id} className="article-head-card col-12 py-3 my-4">
                    <i onClick={deleteArticle.bind(this, articles.id)} className="fa fa-trash p-2 btn-delete bg-secondary" />
                    <div className="row align-items-center">
                      <div className="article-head-card-main col-12 col-lg-4 " style={{textAlign:'center'}}>
                      <Fade bottom><h1>{articles.title}</h1> </Fade>
                      <Fade bottom><h4>{articles.contenttype}</h4> </Fade>
                      </div>
                      <div className="article-head-card-details  col-12 col-lg-8" >
                      <Fade bottom><p>{articles.description}</p> </Fade>
                      <Fade bottom><button onClick = {() => {window.open(articles.look)}} className="btn btn-full bg-dark"style={{color:'white'}}>view source</button> </Fade> 
                      </div>         
                    </div>
                  </div> </Fade>
                )).reverse()}
        </div>
      </div>
    </div>
  );
};
Favorite.propTypes={
  article: PropTypes.array.isRequired
}
const mapStateToProps = state =>({
  article: state.article.article
});
export default connect(mapStateToProps, { loadArticle, deleteArticle}) (Favorite);
