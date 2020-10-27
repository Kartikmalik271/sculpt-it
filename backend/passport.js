const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const Jwtstrategy = require('passport-jwt').Strategy;

//authorization
const cookieExtractor=req =>{
    let token =null;
    if(req && req.cookies){
        token= req.cookies["access_token"];
    }
    return token;
}

passport.use(new Jwtstrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: 'kartik271'
},(payload,done)=>{
    User.findById({_id: payload.sub},(err,user)=>{
        if(err)
            return done(err,false);
        if(user)
            return done(null,user);
        else
            return done(null,false);
    })
}));

//authencation local strategy using  username and password

passport.use(new LocalStrategy((username,password,done)=>{
    User.findOne({username},(err,user)=>{
    if(err)
        //soemthing went wrong with database
        return done(err);
        //no user exist
    if(!user)
        return done(null,false)
    //check password
    user.comparePassword(password,done);

    });
}));