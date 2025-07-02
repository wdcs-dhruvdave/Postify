import { useEffect, useState } from 'react';
import { fetchPosts } from '../utils/api';
import PostCard from './PostCard';

const BlogPage = () => {
    const [posts, setPosts] = useState(['']);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
        fetchPosts()
        .then((data) => {
            setPosts(data.posts);
            setLoading(false);
            console.log("Log From Blog Page: ", data.posts);
        })
        .catch((error) => {
            console.error("Error fetching posts:", error);
            
        });
    },[])

      if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
        <p>Loading crypto data...</p>
      </div>
    );
  }

    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );

}

export default BlogPage;
