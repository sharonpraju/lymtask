const userManager = require('../managers/userManager.js');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;

exports.fetchAll = function(req, res)
{
    let keyword = req.query.keyword;
    let page = req.query.page;
    let limit = req.query.limit;
    
    userManager.fetchAll(keyword, page, limit)
    .then((result)=>{
        let response = success_function(result)
        res.status(result.status).send(response);
    }).catch((error)=>{
        let response = error_function(error)
        res.status(error.status).send(response);
    });
}