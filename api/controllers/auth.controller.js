import User from "../models/user.model.js";
import bycryptjs from 'bcryptjs'
export const signup = async(req, res,next)=>{
    const {username , email ,password} = req.body;
    const hashedpassword = bycryptjs.hashSync(password,12)
    const newUser = new  User({ username ,email , password:hashedpassword});
    try{
      await  newUser.save();
        res.status(201).json("User created Successfully!!") ;
    }
    catch(error){
       next(error);
      }

};
