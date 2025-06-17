import userModel from "./user.model.js";
import { userloginService, userRegisterService } from "./user.service.js"


export const userRegister = async (req,res) => {

   let result = await userRegisterService(req) ;
   return res.status(200).json(result) ;

}


export const userLogin = async (req, res) => {
  const result = await userloginService(req);

  if (result.status === "User is not found" || result.status === "Invalid Password") {
    return res.status(401).json(result);
  }

  if (result.status === "User logged in successfully") {
    // Set token in cookie
    res.cookie("token", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
  }

  console.log(result.token)

  return res.status(200).json(result);
};



