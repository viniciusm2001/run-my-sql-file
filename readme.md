# Run My SQL File

Run My SQL File is a NPM package that can run .sql script files.

For now it only supports mysql.

## Installation

You can install it using NPM

```bash
npm install run-my-sql-file
```

## Usage

First you need to pass the connection options, it supports all the [mysql](https://www.npmjs.com/package/mysql#connection-options)'s createConnection options (host, password, user, etc).

Example:

```javascript
const Runner = require("run-my-sql-file");

//SETTING THE OPTIONS
Runner.connectionOptions({
   host:"localhost",
   user:"root",
   password:"kept_u_w8ing_huh?"
});

```
And then when all the options are set, you can execute the runFile function.

Example:
```javascript
const file1_path = __dirname + "/scripts/script1.sql";

const file2_path = "../script2.sql";

const file3_path = "./script3.sql";

//IT WILL RUN THE FILE 3
Runner.runFile(file3_path, (err)=>{
   if(err){
      console.log(err);
   } else {
      console.log("Script sucessfully executed!");
   }
});
```


Full example:
```javascript
const Runner = require("run-my-sql-file");

//SETTING THE OPTIONS
Runner.connectionOptions({
   host:"localhost",
   user:"root",
   password:"kept_u_w8ing_huh?"
});

const file1_path = __dirname + "/scripts/script1.sql";

const file2_path = "../script2.sql";

const file3_path = "./script3.sql";

//IT WILL RUN THE FILE 3
Runner.runFile(file3_path, (err)=>{
   if(err){
      console.log(err);
   } else {
      console.log("Script sucessfully executed!");
   }
});
```

## Source code
The source code is avaliable in [github](https://github.com/viniciusm2001/run-my-sql-file)

## License
[Eiffel Forum License, version 2](http://www.eiffel-nice.org/license/eiffel-forum-license-2.txt)