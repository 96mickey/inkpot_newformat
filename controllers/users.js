var connection = require('../config/database')

var register = function(req, res){
	var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    var userData = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        //"password": bcrypt.hashSync(req.body.password, null, null)
        "password": req.body.password
        
    }
            connection.query('INSERT INTO users SET ?', userData, function(err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "User registered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                }
            });
}

module.exports = {
	'register': register,
}