
import {searchIfUserAlreadyExist,saveNewUser} from '../repositories/signUpRepository.js'
import hashPassword from '../services/signUpService.js'
 
 
 export default async function signUp(req,res){

    try {
        const { name, email, password } = req.body;
    
        if (!name || !email || !password) {
          return res.sendStatus(400);
        }
    
        
        const result =  await searchIfUserAlreadyExist(email)
    
        if (result.rows[0]) {
          return res.sendStatus(409);
        }
    
        const hashedPassword = hashPassword(password)
        
        
        saveNewUser(name,email,hashedPassword)
       
    
        res.sendStatus(201);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}
