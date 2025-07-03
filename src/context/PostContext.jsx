import { createContext, useEffect, useState } from "react";
import { fetchPostsfromapi,createPostfromapi,editpostfromapi } from "../utils/api";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    // const [page,setPage] = useState([])
    const [post ,setPosts] = useState([])
    const [loading,setLoading] = useState(false)

const fetchPosts = async () => {
  setLoading(true);
  try {
    const response = await fetchPostsfromapi(); 
    const sortedPosts = response.posts.sort((a, b) => b.id - a.id); 
    setPosts(sortedPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    setLoading(false);
  }
};


 const createPost = async (newPostData) => {
  setLoading(true);
  try {
    const postData = await createPostfromapi(newPostData);
    if (!postData) return;

    setPosts((prev) => {
      const maxId = prev.reduce((max, p) => Math.max(max, p.id || 0), 0);
      const newPost = {
        ...postData,
        id: postData.id || maxId + 1,
        tags: postData.tags || [],
        views : 0,
        reactions: {
            likes: 0,
            dislikes: 0,
        },
        

      };
      console.log("Created post:", newPost);
      return [newPost, ...prev];
    });
  } catch (error) {
    console.error("Error creating post:", error);
  } finally {
    setLoading(false);
  }
};

    const editPost = (postId, updatedData) => {
        setPosts((prev) =>
            prev.map((post) => post.id === postId ? { ...post, ...updatedData } : post)
        );
        editpostfromapi(postId, updatedData);
    }
    useEffect(()=>{
        fetchPosts();
    },[])
    
    return(
        <PostContext.Provider value={{ post, setPosts, loading, setLoading, fetchPosts, createPost, editPost }}>
            {children}
        </PostContext.Provider>
    )
}

