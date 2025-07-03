import React, { useState } from "react";
const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const isbodyTruncated = post.body.length > 100;
  const handleEdit = () => {
    console.log("Edit post:", post.id);
  };
  return (
<div className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mx-auto my-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
            alt="User"
          />
          <div className="text-sm">
            <p className="font-medium text-gray-900 dark:text-white">John Doe
              <button
          type="button"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          title="Add"

        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
        </button>
            </p>
            
            <p className="text-xs text-gray-500 dark:text-gray-400">• 2 days ago</p>
          </div>
        </div>
        
        <button type="button" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" onClick={handleEdit}>
          <svg class="text-themeColor-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /> <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" /> <line x1="16" y1="5" x2="19" y2="8" /></svg>
            </button>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
        {post.title}
      </h3>
      
     <p className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed break-words">
    {isExpanded ? post.body : `${post.body.slice(0, 100)}...`}
    </p>

      {isbodyTruncated && (
        <button
          onClick={toggleReadMore}
          className="text-blue-600 hover:underline text-sm font-medium mb-4"
        >
          {isExpanded ? "Show Less" : "Read More →"}
        </button>
      )}

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
          <div className="flex items-center gap-1">👍 {post?.reactions?.likes}</div>
          <div className="flex items-center gap-1">👎 {post?.reactions?.dislikes}</div>
        </div>
        <div className="flex items-center gap-1">👁️ {post.views}</div>
      </div>
    </div>
  );
};

export default PostCard;
