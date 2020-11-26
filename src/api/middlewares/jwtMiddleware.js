const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

exports.verify_token = (req,res,next) => {
    let token = req.headers['authorization']

    if(typeof token != 'undefined'){
        jwt.verify(token, JWT_SECRET, (error) => {
            if(error){
                res.sendStatus(403)
            }
            else {
                next();
            }
        })
    } else {
        res.status(403)
        res.json({message:"Pour avancer, te connecter tu dois."})
    }
}

exports.verify_token_and_roles = (req,res,next) => {
    let token = req.headers['authorization'];
    let role = req.headers['role'];
    if(typeof token != 'undefined'){
        jwt.verify(token, JWT_SECRET, (error) => {
            if(error){
                res.sendStatus(403)
            }
            else {
                userRole = jwt.decode(token);
                if(role == userRole.role){
                    next();
                    console.log(jwt.decode(token)); 
                } else {
                    res.status(403)
                    res.json({message:"PLus loin tu n'iras pas !"});
                }
            }
        })
    } else {
        res.status(403)
        res.json({message:"Pour avancer, te connecter tu dois."})
    }
}