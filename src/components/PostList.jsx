import PostCard from './PostCard';
import { usePost } from '../hooks/usePost';

const PostList = ({ onEdit, onDelete }) => {
  const { post, loading } = usePost();    

  if (loading) {
    return (
      <>
        <div
          style={{ marginLeft: "670px" }}
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <p style={{ marginLeft: "660px" }}>Loading...</p>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
      {Array.isArray(post) && post.length > 0 ? (
        post.map((item) => {
          if (!item) return null;
          return (
            <PostCard
              key={item.id}
              post={item}
              onEdit={onEdit}
              onDelete={onDelete} 
            />
          );
        })
      ) : (
        <p>No Posts Available</p>
      )}
    </div>
  );
};

export default PostList;
