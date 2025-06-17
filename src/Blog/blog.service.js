import blogModel from "./blog.model.js"

// create a blog

export const createBlogService = async (req,res) => {
   
    try {
        
        const newBlog = new blogModel({
            ...req.body, author : req.userId
        })

        const saveBlog = await newBlog.save() ;
        return {status:"Blog created successfully",saveBlog}
    } catch (error) {
         return {status:"Failed to create new blog",error}
    }

}

//  get all blogs


export const getAllBlogsService = async (req,res) => {
   
    try {
        
         const blogs = await blogModel.find({}) ;

        return {status:"All blogs fetched successfully",blogs}
    } catch (error) {
         return {status:"Failed to get all blogs",error}
    }

}

// delete a blog

export const deleteblogService = async (req) => {
    const blogId = req.params.id; // ✅ FIXED: req.parms → req.params

    try {
        const blog = await blogModel.findByIdAndDelete(blogId);
        
        if (!blog) {
            return { error: true, status: "Blog not found" };
        }

        return { status: "Blog deleted successfully" };
    } catch (error) {
        return { error: true, status: "Failed to delete blog", message: error.message };
    }
};

export const editblogService = async (req) => {
    const blogId = req.params.id; // ✅ FIXED: req.parms → req.params

    try {
        const updateBlog = await blogModel.findByIdAndUpdate(blogId, {...req.body}, {new:true});
        
        if (!updateBlog) {
            return { error: true, status: "Blog not found" };
        }

        return { status: "Blog updated successfully" };
    } catch (error) {
        return { error: true, status: "Failed to edit blog", message: error.message };
    }
};
