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

//Exemple de fonction pour gérer un role fourni dans le header de la requête
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
                    res.json({message:"Plus loin tu n'iras pas !"});
                }
            }
        })
    } else {
        res.status(403)
        res.json({message:"Pour avancer, te connecter tu dois."})
    }
}

/**
 * Fonction de verification du token, n'autorisant que les administrateurs
 * @param {*} req Requête fourni à l'API
 * @param {*} res Response envoyer par la fonction
 * @param {*} next Fonction next() pour passer à la suite 
 */
exports.verify_token_admin = (req,res,next) => {
    let token = req.headers['authorization'];
    let role = "admin";
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
                    res.json({message:"Plus loin tu n'iras pas !"});
                }
            }
        })
    } else {
        res.status(403)
        res.json({message:"Pour avancer, te connecter tu dois."})
    }
}

/**
 * Fonction de verification du token, n'autorisant que les Team Leaders
 * @param {*} req Requête fourni à l'API
 * @param {*} res Response envoyer par la fonction
 * @param {*} next Fonction next() pour passer à la suite 
 */
exports.verify_token_tl = (req,res,next) => {
    let token = req.headers['authorization'];
    let role = "tl";
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
                    res.json({message:"Plus loin tu n'iras pas !"});
                }
            }
        })
    } else {
        res.status(403)
        res.json({message:"Pour avancer, te connecter tu dois."})
    }
}

/**
 * Fonction de verification du token, n'autorisant que les Team Members
 * @param {*} req Requête fourni à l'API
 * @param {*} res Response envoyer par la fonction
 * @param {*} next Fonction next() pour passer à la suite 
 */
exports.verify_token_tm = (req,res,next) => {
    let token = req.headers['authorization'];
    let role = "tm";
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
                    res.json({message:"Plus loin tu n'iras pas !"});
                }
            }
        })
    } else {
        res.status(403)
        res.json({message:"Pour avancer, te connecter tu dois."})
    }
}

/**
 * Fonction de verification du token, n'autorisant que les Users
 * @param {*} req Requête fourni à l'API
 * @param {*} res Response envoyer par la fonction
 * @param {*} next Fonction next() pour passer à la suite 
 */
exports.verify_token_user = (req,res,next) => {
    let token = req.headers['authorization'];
    let role = "user";
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
                    res.json({message:"Plus loin tu n'iras pas !"});
                }
            }
        })
    } else {
        res.status(403)
        res.json({message:"Pour avancer, te connecter tu dois."})
    }
}