CREATE TABLE IF NOT EXISTS products (

    id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    description TEXT,

    category VARCHAR(100),

    price NUMERIC(10,2),

    stock INTEGER,

    rating NUMERIC(2,1),

    image TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);