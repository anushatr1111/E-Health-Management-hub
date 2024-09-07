module.exports = {
  host: process.env.DB_HOST,       // localhost
  user: process.env.DB_USER,       // ehealthuser  
  password: process.env.DB_PASSWORD, // 123456789
  database: process.env.DB_NAME,   // ehealthdb
  port: process.env.DB_PORT,       // 5432
  ssl: false
};