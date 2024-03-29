import connection from "../database.js";


 async function searchIfUserAlreadyExist(email){
   return await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );

     // return result
}


async function saveNewUser(name,email,password){
    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, password]
      );
}

export{searchIfUserAlreadyExist,saveNewUser}

