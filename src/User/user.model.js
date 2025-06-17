import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({

     username :  { type : String, required : true , unique: true},
      email :  { type : String, required : true , unique: true},
       password :  { type : String, required : true },
       profileImage : String,
       bio : { type : String, },
       profession : String,
       role :  {
          type : String,
          default : 'user'
       },
       createdAt : { type : Date, default : Date.now}
})

const userModel = mongoose.model('User',userSchema)

export default userModel