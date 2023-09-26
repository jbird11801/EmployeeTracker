const mysql = require('mysql2');

require('dotenv').config();

const inquirer = require('inquirer');

const question = require('./lib/question.js');

const questionFunc = function (questionIndex , answer , inpMessage)  { 
  
  return new question(questionIndex , answer , inpMessage)

};

var index = 1;

var editArryIndex = 0;

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

      // make sql.js have it do something like this

        // db.query(`SELECT * FROM ${ansArry[1]};`, function (err, results) {

        //   if (err){
      
        //       console.log("Error : " + err);
      
        //   };
      
        //   console.table(results);

        //   index = 1;

        //   editArryIndex = 0;

        //   ask ( (questionFunc(index , "" , "")).Prompt());
      
        // });

      }

      else {

      if ( index === 2){

      ask ( (questionFunc(index , ansArry , "")).Prompt());

      }

      else {

        // revise this part with sql.js file

        if (editArry.finle === true ) {

          index = 1;

          editArryIndex = 0;

          ask ( (questionFunc(index , "" , "")).Prompt());
          
        }

        else

        {

          editArryIndex++;

          //use anser on db here

          ask ( (questionFunc(index , "" , "")).Prompt() );

        }

      }

      }
  
    });

  }

  ask ( (questionFunc(index , "" , "")).Prompt());