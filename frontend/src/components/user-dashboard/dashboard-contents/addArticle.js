import React, { useState} from "react";
import { connect } from 'react-redux'
import  { addArticle}  from '../../../actions/article'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'





const AddArticle = ({ addArticle}) => {

    const [formData, setFormData] = useState({
        title:'',
        contenttype:'',
        description:'',
        look:''
        
    });
    const {title, contenttype, description, look} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        addArticle(title, contenttype, description, look);
    };

    
    return ( 
        <div>
            <h1>ADD</h1>
                
                <form onSubmit={e =>onSubmit(e)}>
              <Fade bottom><input className="col-12 "  
                                  type="text" 
                                  name="title" 
                                  placeholder="title"
                                  onChange = {e => onChange(e)} 
                                  value={title}  
                                  required="required" 
                                  /></Fade>
              <Fade bottom><input className="col-12  "  
                                  type="text" 
                                  name="contenttype" 
                                  placeholder="content type"
                                  onChange = {e => onChange(e)} 
                                  value={contenttype} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><input className="col-12 "  
                                  type="text" 
                                  name="description" 
                                  placeholder="description"
                                  onChange = {e => onChange(e)} 
                                  value={description} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><input className="col-12"  
                                  type="text" 
                                  name="look" 
                                  placeholder="view"
                                  onChange = {e => onChange(e)} 
                                  value={look} 
                                  required="required" 
                                  /></Fade>
              <Fade bottom><button type="submit" className="btn col-6 homepagelogin-btn-half">create</button></Fade>
              </form>
                   
            </div>
     );
}
AddArticle.propTypes={
    addArticle: PropTypes.func.isRequired
 };
export default connect(null, {addArticle })(AddArticle);

