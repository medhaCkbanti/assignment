import userModel from "../User/user.model.js";
import jwt from "jsonwebtoken" ;
const generateToken = async (userId) => {

 
    try {

        const user = await userModel.findById(userId) ;
        if(!user){
             throw new Error("User not found") ;
        }
        const token = jwt.sign({userId:user._id,role:user.role},process.env.JWT_SECRET_KEY, {expiresIn : "1h"})
        return token
    } catch (error) {
        console.error("Error generating token",error)
        throw error ;
    }


}

export default generateToken ;