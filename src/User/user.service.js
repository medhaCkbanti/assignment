import generateToken from "../middleware/generateToken.js";
import userModel from "./user.model.js";
import bcrypt from "bcrypt" ;

export const userRegisterService = async (req) => {

   try {

      const {username,email,password} = req.body ;
      const isExist = await userModel.findOne({email}) ;
      if(isExist){
         return {status : "User already exists"} ;
      }
      const hashPassword = await bcrypt.hash(password,10)
      const user = new userModel({username,email,password:hashPassword})
      await user.save() ;
      return { status : "User is register successfully", data : user}
    
   } catch (error) {
       return { status : "fail to register", data : error}.toString() ;
    
   }

}



export const userloginService = async (req) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return { status: "User is not found" };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { status: "Invalid Password" };
    }

    const token = await generateToken(user._id); // No need to await if it's a sync function

    return {
      status: "User logged in successfully",
      token,
      user: {
        _id : user._id ,
        username : user.username,
        email : user.email
      }
    };
  } catch (error) {
    return {
      status: "fail to login",
      data: error.message || error,
    };
  }
};