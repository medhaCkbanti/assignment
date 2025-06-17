import jwt, { decode } from "jsonwebtoken";
const verifyToken = (req,res,next) => {

try {
    const token = req.headers.authorization?.split(' ')[1]
    console.log("Token from cookies",token) ;
    if(!token){
         return res.status(401).send({message: "Token not found!"})
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY) ;
    console.log(decoded)
    if(!decoded.userId){
        return res.status(500).send({message: "User is not found!"})
    }

    req.userId = decoded.userId ;
    req.role = decoded.role
    next();
} catch (error) {
    res.status(500).send({message: "Invalid token",error})
}

}


export default verifyToken