const mysql = require('mysql2');

require('dotenv').config();

const inquirer = require('inquirer');

const question = require('./lib/question.js');

const SQLCode = require('./lib/SQLCode.js');

var ans = [];

var questionIndex = 0;

const sqlFunc = function ( questionIndex , operation , Table)  { 
  
  return new SQLCode( questionIndex , operation, Table )

};

const questionFunc = function (questionIndex , answer , inpMessage)  { 
  
  return new question(questionIndex , answer , inpMessage)

};

var index = 1;

const db = mysql.createConnection(
    {

        host: "localhost",

        user: process.env.DB_USER,

        password: process.env.DB_PASSWORD,

        database: process.env.DB_NAME,

    },

    console.log(`Connected to the employee database.`)

  ); 

  function ask (question) {

    inquirer.prompt(question).then((data) => {

      index++;

      const ansArry = data.answer.split(" : ");
      
      if (ansArry[0].toLowerCase() === "veiw"){

        db.query(sqlFunc("", ansArry[0].toLowerCase() ,  ansArry[1]).SQL(), function (err, results) {

          if (err){
      
              console.log("Error : " + err);
      
          };
      
          console.table(results);

          index = 1;

          questionIndex = 0;

          ans = [];

          ask ( (questionFunc(index , "" , "")).Prompt());
      
        });

      }

      else {

      if ( index === 2){

      ans.push(ansArry);

      ask ( (questionFunc(index , ansArry , "")).Prompt());

      }

      else {

        ans.push(ansArry);
       
        const sql = sqlFunc(questionIndex, ans[1][0].toLowerCase() ,  ans[1][1]);

        if (sql.SQLQuestion().lastQuestion === true ) {

          query(ans[1] , sql);
          
        }

        else

        {

          questionIndex++;

          ask( questionFunc(index , "" ,sql.SQLQuestion().prompt).Prompt() );

        }

      }

      }
  
    });

  }

  function query (type , sql) {

    if ( type[0].toLowerCase() === "delete" ) {

      db.query( sql.SQL(), ans[2], function (err, results) {

        if (err){
    
            console.log("Error : " + err);
    
        };
  
        index = 1;
  
        questionIndex = 0;
  
        ans = [];
  
        ask ( (questionFunc(index , "" , "")).Prompt());
    
      });

    } else if (type[1].toLowerCase() !== "department") {
      
      if ( type[0].toLowerCase() === "add" ){

      db.query( sql.SQL(), [ans[2] , ans[3] , ans[4]] , function (err, results) {

        if (err){
    
            console.log("Error : " + err);
    
        };
  
        index = 1;
  
        questionIndex = 0;
  
        ans = [];
  
        ask ( (questionFunc(index , "" , "")).Prompt());
    
      });

    } else {

      db.query( sql.SQL(), [ans[3] , ans[4] , ans[5] , ans[2]] , function (err, results) {

        if (err){
    
            console.log("Error : " + err);
    
        };
  
        index = 1;
  
        questionIndex = 0;
  
        ans = [];
  
        ask ( (questionFunc(index , "" , "")).Prompt());
    
      });

    } } else

    {
      
      if ( type[0].toLowerCase() === "add" ){

        db.query( sql.SQL(), ans[2] , function (err, results) {
  
          if (err){
      
              console.log("Error : " + err);
      
          };
    
          index = 1;
    
          questionIndex = 0;
    
          ans = [];
    
          ask ( (questionFunc(index , "" , "")).Prompt());
      
        });
  
      } else {
  
        db.query( sql.SQL(), [ans[3] , ans[2]] , function (err, results) {
  
          if (err){
      
              console.log("Error : " + err);
      
          };
    
          index = 1;
    
          questionIndex = 0;
    
          ans = [];
    
          ask ( (questionFunc(index , "" , "")).Prompt());
      
        });

    }
   
    }

  }

  ask ( (questionFunc(index , "" , "")).Prompt());