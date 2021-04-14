import React, { useState} from "react";
import { connect } from 'react-redux'
import  { addArticle}  from '../../../actions/article'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { TextField} from '@material-ui/core'
import { useAlert} from 'react-alert'






const AddArticle = ({ addArticle}) => {

    const alert = useAlert()
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
        alert.success('Article Posted');

    };

    
    return ( 
        <div>
            <div className="modalmain" id="FormModal">
                <button type="button" className="btn article-add-icon mt-4 p-0 " data-toggle="modal" data-target="#Register"><i className="fas fa-edit fa-2x"/></button>
                <div className="row justify-content-center ">
                <div class="modal fade homepage-register" id="Register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <Fade bottom><h6 class="modal-title" id="exampleModalLongTitle" style={{color:'white'}}>Add Post</h6> </Fade>
                                <button type="button" class="close" style={{color:'white'}} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="row justify-content-center">
                                    <div className="col-12 align-self-center">
                                        <form onSubmit={e =>onSubmit(e)}>
                                            <Fade bottom><TextField 
                                                                label="title" 
                                                                variant="outlined"
                                                                className="col-12 my-1"  
                                                                type="text" 
                                                                name="title" 
                                                                placeholder="title"
                                                                
                                                                onChange = {e => onChange(e)} 
                                                                value={title}  
                                                                required="required"
                                                                
                                                                
                                                                /></Fade>
                                            <Fade bottom><TextField className="col-12  my-1"  
                                                                type="text" 
                                                                name="contenttype" 
                                                                placeholder="type of content"
                                                                label="type of content"
                                                                onChange = {e => onChange(e)} 
                                                                value={contenttype} 
                                                                required="required"
                                                                variant="outlined"
                                                                /></Fade>
                                            <Fade bottom><TextField className="col-12 my-1"  
                                                                type="text" 
                                                                name="description" 
                                                                placeholder="description"
                                                                label="description"
                                                                onChange = {e => onChange(e)} 
                                                                value={description} 
                                                                required="required" 
                                                                variant="outlined"
                                                                /></Fade>
                                            <Fade bottom><TextField className="col-12 my-1"  
                                                                type="text" 
                                                                name="look" 
                                                                placeholder="view source"
                                                                label="view source"
                                                                onChange = {e => onChange(e)} 
                                                                value={look} 
                                                                required="required"
                                                                variant="outlined" 
                                                                /></Fade>
                                            
                                            <Fade bottom><button type="submit" className="btn col-4 homepagelogin-btn-half my-1 mt-3">create</button></Fade>
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
AddArticle.propTypes={
    addArticle: PropTypes.func.isRequired
 };
export default connect(null, {addArticle })(AddArticle);

