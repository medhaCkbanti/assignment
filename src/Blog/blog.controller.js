import { createBlogService, deleteblogService, editblogService, getAllBlogsService } from "./blog.service.js";



export const createBlogController = async (req,res) => {
  
    
       let result = await createBlogService(req) ;
       if(result.error){
        return res.status(500).json(result) ;
       }
       return res.status(200).json(result) ;
       
 

}


export const allBlogs = async(req,res) => {
  
      let result = await getAllBlogsService(req) ;
       if(result.error){
        return res.status(500).json(result) ;
       }
       return res.status(200).json(result) ;

}


export const deleteBlog = async(req,res) => {

     let result = await deleteblogService(req) 
     if(result.error){
        return res.status(500).json(result) ;
       }

    return res.status(200).json(result) ;
}

/// edit blog

export const editBlog = async(req,res) => {

     let result = await editblogService(req) 
     if(result.error){
        return res.status(500).json(result) ;
       }

    return res.status(200).json(result) ;
}