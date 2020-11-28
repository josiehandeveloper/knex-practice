

DROP TYPE IF EXISTS grocery;
CREATE TYPE grocery AS ENUM (
    'Main',
    'Snack',
    'Lunch',
    'Breakfast'
);

CREATE TABLE IF NOT EXISTS shopping_list (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price decimal(10,2) NOT NULL,
    date_added timestamp default now() NOT NULL,
    checked BOOL DEFAULT 'f',
    category grocery NOT NULL

); 