import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

export const createPost = async (data,ownerId) => {
    try {
        const response = await databases.createDocument(
            process.env.NEXT_PUBLIC_DB_ID,   // Database ID
            process.env.NEXT_PUBLIC_POSTS_ID, // Animals Collection ID
            ID.unique(),                    // Generates a unique document ID
            {
                name: data.name,
                content: data.content,
                ownerId
            }
        );
        return response;
    } catch (error) {
        console.error("Error upload post:", error);
        throw error;
    }
};

export const getMyPosts = async (userId) => {
    try {
        const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_POSTS_ID,
            [
                Query.equal('ownerId', userId) // Assuming 'ownerId' is the field in the document
            ]
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const deletePostById = async (postId) => {
    try {
        const response = await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_POSTS_ID,
            postId
        );
        return response;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};

export const getAllPosts = async () => {
    const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DB_ID,  // Your database ID
        process.env.NEXT_PUBLIC_POSTS_ID,  // Your collection ID
    );
    console.log('got all the posts', response.documents);

    return response.documents;  // This returns an array of documents
}