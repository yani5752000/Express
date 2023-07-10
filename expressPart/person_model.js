const Pool = require("pg").Pool;
const pool = new Pool({
    user: "my_user",
    host: "localhost",
    database: "my_database",
    password: "root",
    port: 5432
})

const getPersons = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM persons ORDER BY id ASC", (error, result) => {
            if (error) {
                reject(error);
            } else { 
                resolve(result.rows);
            }
        })
    })
}


module.exports = {
    getPersons
};