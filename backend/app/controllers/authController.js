const userManager = require('../managers/userManager.js');
const revokeManager = require('../managers/revokeManager.js');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;

exports.login = function(req, res)
{
    let email = req.body.email;
    let password = req.body.password;

    userManager.login(email, password)
    .then((result)=>{
        let response = success_function(result)
        res.status(result.status).send(response);
    }).catch((error)=>{
        let response = error_function(error)
        res.status(error.status).send(response);
    });
}

exports.logout = function(req, res)
{
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];

    revokeManager.revoke(token)
    .then((result)=>{
        let response = success_function(result)
        res.status(result.status).send(response);
    }).catch((error)=>{
        let response = error_function(error)
        res.status(error.status).send(response);
    });
}

exports.checkRevoked = function(req, res) 
{
    return new Promise((resolve, reject)=>{
        const authHeader = req.headers['authorization'];
        const token = authHeader.split(' ')[1];

        revokeManager.checkRevoked(token).then((message)=>{
            resolve(message);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.validate = function(req, res) 
{
    return new Promise((resolve, reject)=>{
        let response = success_function({ "status": 200, "message": "Valid Token" })
        res.status(result.status).send(response);
    });
};