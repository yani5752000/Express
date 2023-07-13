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

const addPreson = ({name, email}) => {
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO persons(name, email) VALUES($1, $2) RETURNING *", [name, email], (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        })
    })
}

const deletePerson = (id) => {
    return new Promise((resolve, reject) => {
        pool.query("DELETE FROM persons WHERE id=$1", [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(`Person deleted with id {$id}`);
            }
        })
    })
}


module.exports = {
    getPersons,
    addPreson,
    deletePerson
};