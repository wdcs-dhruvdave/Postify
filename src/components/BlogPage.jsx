import { useEffect, useState } from 'react';
import { fetchPosts } from '../utils/api';
import PostCard from './PostCard';

const BlogPage = () => {
    const [posts, setPosts] = useState(['']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetchPosts()
                .then((data) => {
                    setPosts(data.posts);
                    setLoading(false);
                    console.log("Log From Blog Page: ", data.posts);
                })
                .catch((error) => {
                    console.error("Error fetching posts:", error);
                });
        }, 1500);
    }, []);
    
        

      if (loading) {
    return (
        <>
            <div style={ {marginLeft: "670px"}}
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">

    </div>
    <p style={ {marginLeft: "660px"}}>Loading...</p>
    </>
    

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
