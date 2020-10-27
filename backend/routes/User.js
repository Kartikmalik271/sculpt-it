const express =require('express')
const UserRouter= express.Router();
const  passport = require('passport')
const JWT = require('jsonwebtoken');
const passportConfig = require('../passport');
const User =require('../models/user');
const Todo =require('../models/Todo');
const Info =require('../models/Info');
const ObjectId =require('mongoose').Types.ObjectId

const signToken = userID=>{
    return JWT.sign({
        iss: "kartik271",
        sub: userID
    },"kartik271",{expiresIn: "1h"});
}

UserRouter.post('/register',(req,res)=>{
    const {username, password}=req.body;
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message:{msgBody: "Error has occured", msgError:true}});
        if(user)
            res.status(400).json({message:{msgBody: "Username already taken", msgError:true}});
        else{
            const newUser = new User({username,password});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message:{msgBody: "Error has occured", msgError:true}});
                else
                res.status(201).json({message:{msgBody: "User added successfully", msgError:false}});

            });
        }
    
    });
});

UserRouter.post('/login',passport.authenticate('local',{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
        const{_id,username}=req.user;
        const token=signToken(_id);
        res.cookie('access_token',token,{httpOnly:true,sameSite:true});
        res.status(200).json({isAuthenticated:true,user:{username}});
    }
    
});

UserRouter.get('/logout',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{username:""},sucess:true});
});

UserRouter.post('/todo',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const todo = new Todo(req.body);
    todo.save(err=>{
        if(err)
                res.status(500).json({message:{msgBody: "Error has occured", msgError:true}});
        else{
            req.user.todos.push(todo);
            req.user.save(err=>{
                if(err)
                    res.status(500).json({message:{msgBody: "Error has occured", msgError:true}});
                else 
                    res.status(200).json({message:{msgBody: "item added successfully", msgError:false}});
            });
        }
    })
});

UserRouter.get('/todos',passport.authenticate('jwt',{session:false}),(req,res)=>{
    User.findById({_id: req.user._id}).populate('todos').exec((err,document)=>{
        if(err)
            res.status(500).json({message:{msgBody: "Error has occured", msgError:true}});
        else{
            res.status(200).json({todos: document.todos, authenticated: true});
        }
    })
});

UserRouter.put('/info/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(401).json({message:{msgBody:"error occured", msgError:true}});
    else{
    const info = new Info({
                            _id: req.params.id,
                            name:req.body.name,
                            gender: req.body.gender,
                            dob: req.body.dob,
                            bloodgrp: req.body.bloodgrp
                        
                        });
    Info.findByIdAndUpdate({_id: req.params.id},{$set:info}, {new:true} ).then(
        ()=>{
            res.status(200).json({message:{msgBody: "item updated successfully", msgError:false}});
        }
    ).catch((error)=>{
             res.status(500).json({error: error});

    });
}
});
UserRouter.delete('/info/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(401).json({message:{msgBody:"error occured", msgError:true}});
    else{
    
    Info.findByIdAndRemove({_id: req.params.id}, {new:true} ).then(
        ()=>{
            res.status(200).json({message:{msgBody: "item deleted successfully", msgError:false}});
        }
    ).catch((error)=>{
             res.status(500).json({error: error});

    });
}
});

UserRouter.get('/infos',passport.authenticate('jwt',{session:false}),(req,res)=>{
    User.findById({_id: req.user._id}).populate('infos').exec((err,document)=>{
        if(err)
            res.status(500).json({message:{msgBody: "Error has occured", msgError:true}});
        else{
            res.status(200).json({infos: document.infos, authenticated: true});
        }
    })
});

UserRouter.get('/authenticated',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const{username}= req.user;
    res.status(200).json({isAuthenticated:true, user:{username}});
});

module.exports = UserRouter;