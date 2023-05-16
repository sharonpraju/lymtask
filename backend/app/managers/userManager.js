const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../db/models/users');

exports.login = async function (email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            if (email && password) {
                let user = await users.findOne({ email: email });
                if (user) {
                    //verifying password
                    bcrypt.compare(password, user.password, async (error, auth) => {
                        if (auth === true) {
                            //valid credentials
                            let access_token = jwt.sign({ "user_id": user._id, "user_type": user.type }, process.env.PRIVATE_KEY, { expiresIn: '10d' });
                            resolve({ "status": 200, "data": access_token, "message": "Login successful" });
                        }
                        else {
                            reject({ "status": 401, "message": "Invalid credentials" });
                        }
                    });
                }
                else {
                    reject({ "status": 401, "message": "Invalid credentials" });
                }
            }
            else {
                if (!email) reject({ "status": 422, "message": "Email is required" });
                if (!password) reject({ "status": 422, "message": "Password is required" });
            }
        }
        catch (error) {
            if (process.env.NODE_ENV == "production") reject({ "status": 400, "message": error ? (error.message ? error.message : error) : "Something went wrong" });
            else reject({ "status": 400, "message": error });
        }
    });
}

exports.fetchAll = async function (keyword, page, limit) {
    return new Promise(async (resolve, reject) => {
        try {
            let filters = [];
            if (keyword) filters.push({ name: { $regex: keyword, $options: 'i' } });
            let user = await users.find(filters.length > 0 ? { $and: filters } : null, `-password`).sort({ _id: -1 }).skip((page - 1) * limit).limit(limit);
            let count = await users.count(filters.length > 0 ? { $and: filters } : null);
            let users_data = {
                "count": count,
                "users": user
            };
            resolve({ "status": 200, "data": users_data });
        }
        catch (error) {
            console.log(error)
            if (process.env.NODE_ENV == "production") reject({ "status": 400, "message": error ? (error.message ? error.message : error) : "Something went wrong" });
            else reject({ "status": 400, "message": error });
        }
    });
}