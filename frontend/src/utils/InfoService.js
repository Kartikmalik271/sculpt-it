export default{
    getInfos: ()=>{
        return fetch('/user/infos')
        .then(response=>{
            if(response.status !== 401){
                return response.json().then(data => data);
            }
            else
                return{message : {msgBody : "UnAuthorized"},msgError:true};
        });
    },
    putInfo: info =>{
        return fetch('/user/info',{
            method: "put",
            body: JSON.stringify(info),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            if(response.status !== 401){
                return response.json().then(data=>data);
            }
            else
                return{message : {msgBody : "UnAuthorized"},msgError:true};
        });
    },
    postInfo: info =>{
        return fetch('/user/info',{
            method: "post",
            body: JSON.stringify(info),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            if(response.status !== 401){
                return response.json().then(data=>data);
            }
            else
                return{message : {msgBody : "UnAuthorized"},msgError:true};
        });
    },
}