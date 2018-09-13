const jwt = require('jsonwebtoken');
const model = require('./../models/user')


function isLogin(req,res,next){
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        model.findOne({
            where :{
                email : decoded.email,    
                password : decoded.password
            }
        })
        .then(data=>{
            if(data!==null||data!==undefined){
                req.decoded = decoded;
                next();
            }
            else{
                res.status(204).json({
                    msg : "Not yet login"
                })
            }
            
        })
    });
}

module.exports = isLogin;