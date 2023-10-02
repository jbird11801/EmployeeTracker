class question {

    constructor(questionIndex , answer , inpMessage){

        this.index = questionIndex;

        this.inpMessage = inpMessage;

        this.answer = answer;

        this.questionTemp = (type , message , choices) => {

            if (type === "rawlist"){
  
                return {
            
                type: 'rawlist',
        
                message: message,
        
                choices: choices,
        
                name: "answer"
        
                };
        
            }

            else {

                return {

                    type: 'input',
              
                    message: message,
              
                    name: "answer"
              
                };

            }

        };

    }

    Prompt () {

        if (this.index === 1){

            return this.questionTemp("rawlist" , "What do you want to do?" , ["Edit : Department" , "Edit : Role" , "Edit : Employee" , "Veiw : Department" , "Veiw : Role" , "Veiw : Employee"]);

        }

        else if (this.index === 2) {

            return this.questionTemp("rawlist" , `What do you want to do to ${this.answer[1]}?` , [`Delete : ${this.answer[1]}` , `Add : ${this.answer[1]}` , `Edit : ${this.answer[1]}`]);

        }

        else {

            return this.questionTemp("input" , this.inpMessage);

        }

    }

}

module.exports = question;