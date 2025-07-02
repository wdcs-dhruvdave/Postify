import axios from "axios";

const API_URL = "https://dummyjson.com/posts";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchPosts = async () => {
  try {
    const response = await API.get();
    // console.log(response.data);
    
    return response.data;
  }
    catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

