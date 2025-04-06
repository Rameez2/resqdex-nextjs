import ButtonSpinner from '@/components/ui/buttonSpinner';
import Toast from '@/components/ui/Toast';
import { useUser } from '@/context/userContext';
import { createPost } from '@/lib/appwrite/posts';
import React, { useState } from 'react';

const UploadPost = () => {

    const [content,setContent] = useState('');
    const [toast,setToast] = useState(null);
    const [loading,setLoading] = useState(false);

    const {user} = useUser();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            setToast(null);
            if(user.status !== "Approved") {
                throw new Error("User not Approved!");
            }
            console.log('handle submit runned');
            await createPost({id:user.$id,content:content,name:user.name},user.$id);
            setToast({ message: "Post create success!", type: "success" });
  
        } catch (error) {
            console.log(error);
            setToast({ message: error.message, type: "error" });
        }
        finally {
            setLoading(false);
            setContent('');          
        }
    }

    return (
        <div className="w-full max-w-md mx-auto mt-6 bg-white border rounded-lg shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Create a new post</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <label htmlFor="post-content" className="block text-sm font-medium text-gray-700">
                Post content
              </label>
              <textarea 
                onChange={(e) => setContent(e.target.value)}
                value={content}
                id="post-content" 
                placeholder="Write your post here..." 
                className="w-full min-h-[150px] p-2 border rounded-md focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="p-4 border-t">
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
            {loading && <ButtonSpinner/>}
              Upload Post
            </button>
          </div>
        </form>
        {toast && <Toast content={toast.message} type={toast.type} />}
      </div>
  
    );
}

export default UploadPost;
