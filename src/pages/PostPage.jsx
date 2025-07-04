import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { useState } from "react";
import usePost from "../hooks/usePost";

const PostPage = () => {
  const [open, setOpen] = useState(false); 
  const [editPost, setEditPost] = useState(null);

  const {deletePost} = usePost();

  const handleDelete = (id) => {
    deletePost(id);
    console.log("Delete post with ID:", id);
  }

  const handleEdit = (post) => {
    setEditPost(post)
    setOpen(true);
  }

  const handleClose = () => {
    setEditPost(null);
    setOpen(false);
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-600 hover:bg-700 text-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 font-semibold py-2 px-4 rounded"
        >
          + Add Post
        </button>
      </div>

      <PostForm open={open} onClose={handleClose} post={editPost} />

      <PostList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default PostPage;
