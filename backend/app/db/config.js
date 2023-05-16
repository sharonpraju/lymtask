const mongoose = require("mongoose");

function connect()
{
    return new Promise((resolve, reject) => {
        var options = {
            keepAlive: true,
            connectTimeoutMS: 30000,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    
        mongoose.connect(process.env.MONGODB_URI, options, (err)=>{
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log("Database Connection Established");
            }
        });
    })
}

function close(){
    mongoose.disconnect();
}

module.exports = {
    connect,
    close
};