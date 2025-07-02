import React from "react";
import "./loader.css";
const PostCard = ({ post }) => {
  return (
    <div className="order-1 sm:ml-6 xl:ml-0" style={{ padding: "20px", margin: "20px" }}>
      <h3 className="mb-1 text-slate-900 font-semibold">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
            alt="User"
          />
          <button
            type="button"
            className="text-sm font-medium text-gray-700 hover:underline dark:text-gray-400 ml-2"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
            aria-label="User profile: John Doe"
          >
            John Doe
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              • 2 days ago
            </span>
          </button>
          <div className="flex items-center ml-2">
            <button
              type="button"
              className="text-sm font-medium text-gray-700 hover:underline dark:text-gray-400 ml-2"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {post.title}
      </h3>

      <div className="prose prose-slate prose-sm text-slate-600">
        <p>{post.body}</p>
      </div>

      <div className="flex flex-wrap gap-2 my-2">
        {Array.isArray(post.tags) &&
          post.tags.map((tag, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              #{tag}
            </div>
          ))}
      </div>

      <div className="flex items-center gap-4 border-t p-3 bg-muted/50 text-sm text-muted-foreground">
        <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent rounded-md flex items-center gap-1.5 p-1 h-auto text-muted-foreground hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-thumbs-up h-4 w-4"
          >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          <span>{post?.reactions?.likes}</span>
        </button>

        <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent rounded-md flex items-center gap-1.5 p-1 h-auto text-muted-foreground hover:text-destructive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-thumbs-down h-4 w-4"
          >
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
          </svg>
          <span>{post?.reactions?.dislikes}</span>
        </button>

        <div className="ml-auto flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-eye h-4 w-4"
          >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span>{post.views}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
