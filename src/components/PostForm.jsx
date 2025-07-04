import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { set, useForm } from "react-hook-form";
import usePosts from "../hooks/usePost";
import { useEffect } from "react";

const PostForm = ({ open, onClose,post }) => {
  const { register, handleSubmit, formState: { errors }, reset,setValue } = useForm();
  const { createPost ,setPosts, editPost } = usePosts();

  useEffect(()=>{
    if(post){
      setValue('title',post.title);
      setValue('body',post.body);
      setValue('tags',post.tags?.join(', '));
    }
    else{
      reset();
    }
  },[post,setValue,reset]);


  const postSubmit = async (data) => {
    const formattedTags = data.tags.split(",").map((t) => t.trim());

    if (post) {
      await editPost(post.id, {
        ...data,
        tags: formattedTags,
      });
    } else {
      await createPost({
        ...data,
        tags: formattedTags,
      });
    }

    onClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <DialogTitle className="text-lg font-semibold text-gray-900 mb-4">
            Create New Post
          </DialogTitle>

          <form onSubmit={handleSubmit(postSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                {...register("title", { required: "Title is required" ,minLength:{value: 3, message: "Title must be at least 3 characters long" },maxLength:{value: 100, message: "Title must be at most 100 characters long" },})}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                placeholder="Enter post title"
              />
              {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Body</label>
              <textarea
                {...register("body", { required: "Body is required" })}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                placeholder="Enter post content"
                rows={4}
              />
              {errors.body && <p className="text-sm text-red-500 mt-1">{errors.body.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <input
                {...register("tags", //{ required: "Tags are required" }
                    )}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
                placeholder="Enter post Tags"
                rows={4}
              />
              {/* {errors.tags && <p className="text-sm text-red-500 mt-1">{errors.tags.message}</p>} */}
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              >
                {post ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PostForm;
