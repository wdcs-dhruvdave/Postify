import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

const PostPreviewModal = ({ open, onClose, post }) => {
  if (!post) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-3xl bg-white rounded-lg p-8 shadow-xl dark:bg-gray-900">
          <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </DialogTitle>
          <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {post.body}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags?.map((tag, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex gap-4">
              <span>👍 {post?.reactions?.likes}</span>
              <span>👎 {post?.reactions?.dislikes}</span>
            </div>
            <span>👁️ {post.views}</span>
          </div>
          <div className="flex justify-end mt-6">
            <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PostPreviewModal;
