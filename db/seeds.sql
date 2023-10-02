INSERT INTO department (name)
VALUES ("kitchen"),
       ("Front"),
       ("Overhead");

INSERT INTO role (title, salary , department_id)
VALUES ("Kitchen manager", "65000" , 1 ),
       ("Assistant Kitchen manager", "55000" , 1 ),
       ("Kitchen supervisor", "45000" , 1 ),
       ("Front manager", "65000" , 2 ),
       ("Assistant Front manager", "55000" , 2 ),
       ("Front supervisor", "45000", 2 ),
       ("Cook", "40000" , 1 ),
       ("General Manager", "75000" , 3),
       ("Bartenter", "35000" , 2 ),
       ("Server", "30000" , 2 );

INSERT INTO employee (first_name, last_name, role_id , manager_id)
VALUES ("Joe", "Schmo", 1 , 8),
       ("Jeff", "Finn", 2 , 1 ),
       ("Jake", "Len", 3 , 2),
       ("Jae", "Me", 3 , 2),
       ("Hen", "Rey", 4 , 8 ),
       ("Heck", "Chen", 5 , 4),
       ("Harry", "Smol", 6 , 5),
       ("Han", "Solo", 6 , 5),
       ("Jay", "Fred", 7 , 3),
       ("Jim", "Len", 7 , 3 ),
       ("Dim", "Fen", 8 , NULL),
       ("Hyn", "Foo", 9 , 6),
       ("Het", "Amy", 10 , 6 ),
       ("Hert", "Iz", 10 , 6 );
