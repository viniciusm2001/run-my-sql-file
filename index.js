const fs = require('fs');
const mysql = require('mysql2');

class RunMySqlFile {

   static connectionOptions(options){

      if(typeof options != 'object'){
         this.con = undefined;
      } else {
         options.multipleStatements = true;
         this.con = mysql.createConnection( options );
      }

   }

   static getSqlQueryFromFile(file_path){

      //CONVERT THE FILE INTO A STRING, AND THEN
      //TRANSFORM EACH LINE OF THE FILE 
      //(USING split("\n")), ON A ARRAY ITEM
      const linesArray = fs.readFileSync(file_path).toString().split("\n");

      const filteredLinesArray = linesArray.filter(line => {
         //RETURN ALL LINES THAT ARE NOT COMMENTS TO THE NEW ARRAY
         return line[0] !== "-";
      });

      //JOIN ALL THE ITEMS OF THE filteredLinesArray
      //ON A STRING AND REPLACE ALL TABS (using 
      //replace(/\s/g, " ")) WITH A COMMON SPACE
      const sql = filteredLinesArray.join("").replace(/\s/g, " ");

      return sql;
   }

   static runFile(file_path, callback){
      if(typeof this.con != 'object'){
         callback("Please check the 'connectionOptions', to see if its parameter is a valid JSON, or to see if it is even called");

      } else {
         const sql = this.getSqlQueryFromFile(file_path);

         this.con.connect(err =>{
            if(err){
               callback(err);
               
            } else {
               this.con.query(sql, function (err, results, fields) {
                  if (err) {
                     callback(err);
            
                  } else {
                     callback(null);
                  }
               });
            }
            this.con.end()
         });

      }
   }

}

module.exports = RunMySqlFile;