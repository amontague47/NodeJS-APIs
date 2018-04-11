var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Diamond",
  database: "pets"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM doorentry", function (err, result, fields) {
    if (err) throw err;
    exports.theseResults = function(){
        return result;
    };
    //console.log(result);
  });
});