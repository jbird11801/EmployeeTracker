class SQLCode {

    constructor( questionIndex , operation, Table ) {

        this.operation = operation.toLowerCase();

        this.index = questionIndex;

        this.table = Table.toLowerCase();

        this.questions = (operation , table) => {

            if (operation === "delete") {

                return [{

                    lastQuestion : false, 

                    prompt : `What id do you want to delete from ${table}`

                }
                    
                ,
                
                {

                    lastQuestion : true,

                }];

            
            }   else if (operation === "add") {

                if (table === "department") {

                    return [
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the name of the new department?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : true,

                    }];

                } else if (table === "role") {

                    return [{

                        lastQuestion : false, 
    
                        prompt : `What is the title of the role you want to add?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the salary of the role you want to add?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the department id of the role you want to add?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : true,

                    }];

                } else {

                    return [{

                        lastQuestion : false, 
    
                        prompt : `What is the first name of the employee you want to add?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the last name of the employee you want to add?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false,
    
                        prompt : `What is the role id of the employee you want to add?`
    
                    }

                    ,
                    
                    {

                        lastQuestion : false,
    
                        prompt : `What is the id of the employees manager you want to add?`
    
                    }

                    ,
                    
                    {

                        lastQuestion : true,

                    }];

                }

            } else {

                if (table === "department") {

                    return [

                    {

                        lastQuestion : false, 
        
                        prompt : `What is the id of the department?`
        
                    }
                        
                    ,
                        
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the new name of the department?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : true,

                    }];

                } else if (table === "role") {

                    return [

                    {

                        lastQuestion : false, 
        
                        prompt : `What is the id of the role?`
        
                    }
                        
                    ,

                    {

                        lastQuestion : false, 
    
                        prompt : `What is the new title of the role?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the new salary of the role?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the new department id of the role?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : true,

                    }];

                } else {

                    return [
                        
                    {

                        lastQuestion : false, 
        
                        prompt : `What is the id of the employee?`
        
                    }
                        
                    ,
                    
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the new first name of the employee?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false, 
    
                        prompt : `What is the new last name of the employee?`
    
                    }
                    
                    ,
                    
                    {

                        lastQuestion : false,
    
                        prompt : `What is the new role id of the employee?`
    
                    }

                    ,
                    
                    {

                        lastQuestion : false,
    
                        prompt : `What is the id of the employees manager you want to add?`
    
                    }

                    ,
                    
                    {

                        lastQuestion : true,

                    }];

                }

            }

        };

        this.sqlTemp = (Table, operation) => {

            if (operation === "veiw") {

                return `SELECT * FROM ${Table};`;

            }   else if (operation === "delete") {

                return `DELETE FROM ${Table} WHERE id = ?;`

            }  else if (operation === "add") {

                if (Table === "department") {

                    return `INSERT INTO department (name)
                    VALUES (?);`;

                } else if (Table === "role") {

                    return `INSERT INTO role (title, salary , department_id)
                    VALUES (? , ? , ?);`;

                } else {

                    return `INSERT INTO employee (first_name, last_name, role_id , manager_id)
                    VALUES (? , ? , ? , ?);`;

                }
            }   else {

            if (Table === "department") {

                return `UPDATE department
                SET name = ?
                WHERE id = ?;`;

            } else if (Table === "role") {

                return `UPDATE role
                SET title = ?, salary = ? , department_id = ?
                WHERE id = ?;`;

            } else {

                return `UPDATE employee
                SET first_name = ?, last_name= ?, role_id = ? , manager_id = ?
                WHERE id = ?;`;

            }
        }

        };

    }

    SQLQuestion() {

       return  this.questions(this.operation , this.table)[this.index];

    }

    SQL() {

        return  this.sqlTemp(this.table , this.operation);

    }

}
module.exports = SQLCode;
