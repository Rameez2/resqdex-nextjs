import { useUser } from '@/context/userContext';
import { deletePostById, getPostsByAdopterId } from '@/lib/appwrite/posts';
import React, { useEffect, useState } from 'react';

const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState({}); // Track delete loading per post
    const [error, setError] = useState(null);

    const { user } = useUser();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getPostsByAdopterId(user.$id);
                setPosts(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [user.$id]);

    // Function to handle post deletion
    const handleDelete = async (postId) => {
        setDeleteLoading((prev) => ({ ...prev, [postId]: true })); // Set loading for this post
        try {
            if(user.status !== "Approved") {
                throw new Error("User not Approved!");
            }
            await deletePostById(postId); // API call to delete post
            setPosts((prevPosts) => prevPosts.filter((post) => post.$id !== postId)); // Remove from UI
        } catch (error) {
            alert('Failed to delete post: ' + error.message); // Handle error
        } finally {
            setDeleteLoading((prev) => ({ ...prev, [postId]: false })); // Stop loading
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-6">
            <h1 className="text-2xl font-semibold text-center mb-4">MY POSTS</h1>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}

            {posts.length > 0 ? (
                <ul className="space-y-4">
                    {posts.map((post, index) => (
                        <li key={post.$id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                            <div>
                                <p className="font-semibold">#{index + 1}</p>
                                <p className="text-gray-700">{post.content}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(post.$id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center"
                                disabled={deleteLoading[post.$id]} // Disable while loading
                            >
                                {deleteLoading[post.$id] ? (
                                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                ) : (
                                    'Delete'
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p className="text-center text-gray-500">No posts found.</p>
            )}
        </div>
    );
};

export default MyPosts;
