import React, { useContext ,useState ,useEffect } from 'react';

import TodoItem from '../../components/dashboard/TodoItem';
import TodoService from '../../utils/TodoService';
import Message from '../../components/Message';

//import {Link} from 'react-router-dom';
//import Auth from '../../utils/Auth';
import { AuthContext } from '../../context/AuthContext'
import kartik from '../../assets/dashboard/img/kartik.jpg';
import './dashboard.css';
import Profile from '../../components/dashboard/Profile';

const Dashboard = (props) => {


    const [todo , setTodo] = useState({name:""});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] =useState(null);
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        });
    },[]);


    const OnSubmit = (e) =>{
        e.preventDefault();
        TodoService.postTodo(todo).then(data =>{
            const { message } = data;
            resetForm();
        
            if(!message.msgError){
                TodoService.getTodos().then(getData=>{
                    setTodos(getData.todos);
                    setMessage(message);
                });
            }
            else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({username:""});
                authContext.setIsAthenticated(false);
            }
            else{
                setMessage(message);
            }
        });
    }

    const Onchange = (e) =>{
        
        setTodo({name: e.target.value});
       
    }
    const resetForm=()=>{
        setTodo({name:""});
    }

    
    return ( 
        <div className="dashboard col-12">
            <div className="row jusitfy-content-center">
                    <div className="col-2 dashboard-sidebar fixed-top">
                        <div className="row justify-content-center align-items-center">
                            <img className="dashboard-profile-img my-5 "src={kartik} alt=""/>
                                <ul className="nav nav-tabs d-none d-md-block px-4 pb-2 "style={{border:'none'}}>
                                    
                                        <li className="nav-item ">
                                            <a className="nav-link active" href="#Profile" role="tab" data-toggle="tab"><h5>Profile</h5></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link "  href="#Task" role="tab" data-toggle="tab"><h5>Task Manger</h5></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link " href="#Explore" role="tab" data-toggle="tab"><h5>Explore</h5></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link " href="#EditProfile" role="tab" data-toggle="tab"><h5>Edit Profile</h5></a>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link "><h5>Logout</h5></button>
                                        </li>
                                </ul>
                        </div>
                    </div> 

                            <div className="tab-content d-flex offset-md-2 col-10">
  
                                <div role="tabpanel" className="tab-pane  fade show active"  id="Profile">
                                    <div className="row justify-content-center">
                                        <Profile 
                                            kartik={kartik}
                                            name="kartik"
                                            gender="male"
                                            bloodgrp="AB +ve"
                                            height="5.8 feet"
                                            email="kartikmalik271@gmail.com"
                                            number="+91 9592113381"
                                            para="I'm a CSE student of batch 2019-2013 at Chandigarh University. Till now have skill set of Full-stack web developer and two internship experience in frontend web development"/>
                                    </div>
                                </div>
                    
                                <div role="tabpanel" className="tab-pane fade show" id="Task">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <h1>TODO LIST</h1>
                                            <ul className="list-group">
                                                {
                                                    todos.map(todo =>{
                                                        return <TodoItem key={todo._id} todo={todo}/>
                                                    })
                                                }
                                            </ul><br/>
                                            <form onSubmit={OnSubmit}>
                                                <input type="text" name="todo" value={todo.name} onChange={Onchange} placeholder="Enter todos item"/>
                                                <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>

                                            </form>  
                                            {message ? <Message message={message}/> : null}
                                        </div>

                                    </div>
                                </div>
                    
                                <div role="tabpanel" className="tab-pane fade show" id="Explore">
                                
                                </div>
                    
                                <div role="tabpanel" className="tab-pane fade show" id="EditProfile">
                                    
                                </div>
                    
                                
                            </div>   

           </div>
        </div>
        
        
     );
}
 
export default Dashboard;