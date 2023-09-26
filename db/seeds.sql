INSERT INTO department (name)
VALUES ("kitchen"),
       ("Front"),
       ("Overhead")

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

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Joe", "Schmo", 1),
       ("Jeff", "Finn", 2),
       ("Jake", "Len", 3),
       ("Jae", "Me", 3),
       ("Hen", "Rey", 4),
       ("Heck", "Chen", 5),
       ("Harry", "Smol", 6),
       ("Han", "Solo", 6),
       ("Jay", "Fred", 7),
       ("Jim", "Len", 7),
       ("Dim", "Fen", 8),
       ("Hyn", "Foo", 9),
       ("Het", "Amy", 10),
       ("Hert", "Iz", 10);
