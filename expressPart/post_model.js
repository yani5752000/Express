const Pool = require("pg").Pool;
const pool = new Pool({
    user: "my_user",
    host: "localhost",
    database: "my_database",
    password: "root",
    port: 5432
})

const getPosts = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM posts ORDER BY id ASC", (error, result) => {
            if (error) {
                reject(error);
            } else { 
                resolve(result.rows);
            }
        })
    })
}

const addPost = ({content}) => {
    console.log("in post_model addPost content is: ", content)
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO posts(content) VALUES($1) RETURNING *", [content], (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        })
    })
}

const deletePost = (id) => {
    return new Promise((resolve, reject) => {
        pool.query("DELETE FROM posts WHERE id=$1", [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(`Person deleted with id ${id}`);
            }
        })
    })
}

const createTablePosts = () => {
    return new Promise((resolve, reject) => {
        pool.query("CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, content VARCHAR(30))", (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(`Table posts created if it did not exist already`);
            }
        })
    })
}

module.exports = {
    getPosts,
    addPost,
    deletePost
};