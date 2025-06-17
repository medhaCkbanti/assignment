import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogSchema = new Schema({

      title :  { type : String, required : true },
      description :  { type : String, required : true},
       image :  { type : String, required : true },
       author : { type : String , image: String } ,
       createdAt : { type : Date, default : Date.now}
})

const blogModel = mongoose.model('Blog',blogSchema)

export default blogModel