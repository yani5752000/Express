const Pool = require("pg").Pool;
const pool = new Pool({
    user: "my_user",
    database: "my_database",
    password: "root",
    host: "localhost",
    port: 5432
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

const getUsers = () => {
    console.log("in get users model");
    const queryString = "SELECT * FROM users ORDER BY id ASC";
    pool.query(queryString, (error, result) => {
        return new Promise((resolve, reject) => {
            if(error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        })
    })
};

module.exports = { registerUser, findUserByEmail, getUsers };