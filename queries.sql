-- Get all employees from France (FR)
SELECT id, name, country, height, additional_options, liked_sports 
FROM employees WHERE country = 'FR';

-- Change all employees with 
UPDATE employees
SET country = BR
WHERE additional_options @> '{"dog_name" : "Ellie"}';

-- Get all employees who like baseball
SELECT id, name, country, height, additional_options, liked_sports 
FROM employees WHERE 'baseball' = ANY(liked_sports);

-- Change every employee who doesn’t like baseball to liking baseball
UPDATE employees
SET liked_sports = liked_sports || ARRAY['baseball']
WHERE NOT 'baseball' = ANY(liked_sports); 

-- Give Spencer a pet fox named Alfie
UPDATE employees
SET additional_options || '{"fox_name" : "Alfie"}' -- this structure is inherently flawed in that everyone can only have one of each type of pet
WHERE name = 'Spencer Fielder';
