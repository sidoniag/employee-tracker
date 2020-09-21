INSERT INTO department (name)
VALUES 
('IT'),
('Marketing'),
('Espionage'),
('Research');

INSERT INTO role (title, salary, department_id)
VALUES
('Web Developer', 3500,1),
('Restarter', 1800,1),
('Email Ambassador', 2100,2)
('Public Relations Manager', 2350,2),
('Copywright Champion', 1350,2),
('Trade Thief', 100, 3),
('Patent Patrol', 1800,3),
('Mad Scientist', 2100,4),
('Happy Scientist', 2150,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Lauren', 'Morals', 1, NULL),
('Eric', 'Looter', 1, NULL),
('Frank', 'Franklin', 2, NULL),
('Molly', 'Madison', 2, NULL),
('Claude', 'Clifton', 2, NULL),
('Vleek', 'Harris', 3, NULL),
('Watson', 'Wooligag', 3, NULL),
('Zac', 'Enigma', 4, NULL),
('Tiffany', 'Tithe', 4, NULL),
('Sam', 'Cellary', 3, NULL);