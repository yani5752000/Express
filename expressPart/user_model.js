const Pool = require("pg").Pool;
const pool = Pool({
    user: "my_user",
    database: "my_database",
    password: "root",
    host: "localhost",
    port: 4321
})

const registerUser = ({email, password}) => {
    const queryString = "INSERT INTO users(email, password) VALUES($1, $2) RETURNING *";
    return new Promise((resolve, reject) => {
        pool.query(queryString, [email, password], (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        })
    })
};

const findUserByEmail = (email) => {
    const queryString = "SELECT * FROM USERS WHERE email=$1";
    return new Promise((resolve, reject) => {
        pool.query(queryString, [email], (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        })
    })
};

module.exports = { registerUser, findUserByEmail };