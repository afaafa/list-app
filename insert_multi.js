var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "INSERT INTO users (name) VALUES ?";
    var values = [
        ['Danish Fatih'],
        ['Khanza Kamila'],
        ['Milka Safira']
    ];
    db.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});