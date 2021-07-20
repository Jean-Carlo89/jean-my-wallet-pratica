import bcrypt from 'bcrypt'
export default async function hashPassword(password){
  //  const hashedPassword = bcrypt.hashSync(password, 12);
  return bcrypt.hashSync(password, 12)

}