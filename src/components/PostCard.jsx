import React, { useState, useRef, useEffect } from "react";
import PostPreviewModal from "./PostPreview";

const PostCard = ({ post, onEdit,onDelete }) => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleViewMore = () => {
    setPreviewOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mx-auto my-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              alt="User"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">• 2 days ago</p>
            </div>
          </div>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="text-xl">⋮</span>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                <button
                  onClick={() => {
                    onEdit(post);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => {
                    onDelete(post.id);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🗑️ Delete
                </button>
              </div>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed break-words">
          {post.body.slice(0, 100)}...
        </p>

        <button
          onClick={handleViewMore}
          className="text-blue-600 hover:underline text-sm font-medium mb-4"
        >
          View More →
        </button>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span>👍 {post?.reactions?.likes}</span>
            <span>👎 {post?.reactions?.dislikes}</span>
          </div>
          <span>👁️ {post.views}</span>
        </div>
      </div>

      <PostPreviewModal
        open={isPreviewOpen}
        onClose={() => setPreviewOpen(false)}
        post={post}
      />
    </>
  );
};

export default PostCard;
