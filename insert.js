var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = `INSERT INTO users (name) 
               VALUES ('Afa afa')`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});