import axios from "axios";

const API_URL = "https://dummyjson.com";

const MOKEAPI_URL = "https://68665fdb89803950dbb26f3c.mockapi.io"




const POSTAPI = axios.create({
  // baseURL: API_URL,

  baseURL: MOKEAPI_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// const USERAPI = axios.create({
//   baseURL: `API_URL/users`,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const fetchUsersfromapi = async () => {
//   try {
//     const response = await USERAPI.get("/");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// };


export const fetchPostsfromapi = async (page = 1, limit = 10) => {
  // const totalPosts = 251;
  // const skip = Math.max(0, totalPosts - page * limit); 

  try {
    const response = await POSTAPI.get("/posts", {
    //   params: {
    //     limit,
    //     skip,
    //   },
    });
    console.log(response.data);

    return {
      posts: response.data, 
      total: response.data.total,
      skip: response.data.skip,
      limit: response.data.limit,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      posts: [],
      total: 0,
      skip: 0,
      limit,
    };
  }
};

export const deletepostfromapi = async (postId) => {
  try{
    const response = await POSTAPI.delete(`/posts/${postId}`)
    return response.data;
  }
  catch(error){
    console.error("Error deleting post:",error)
  }
}

export const editpostfromapi = async (postId , editedPost) =>{
  try{
    const response = await POSTAPI.put(`/posts/${postId}`,editedPost)
    return response.data;
  }
  catch(error){
    console.error("Error editing post:",error)
  }
}

export const createPostfromapi = async (postData) => {
  try {
    const sanitizedData = {
      ...postData,
      userId: postData.userId || 1,
      tags: Array.isArray(postData.tags)
        ? postData.tags
        : typeof postData.tags === "string"
        ? postData.tags.split(",").map((t) => t.trim())
        : [],
    };

    const response = await POSTAPI.post("/posts/", sanitizedData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error.response?.data || error.message);
    return null;
  }
};


