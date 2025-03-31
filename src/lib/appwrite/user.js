import { Query } from "appwrite";
import { account, databases } from "./appwrite";

export const fetchCurrentUser = async () => {
    // GET CURRENT USER
    const currentUser = await account.get();
    const userId = currentUser.$id; // Authenticated user ID

    const response = await databases.listDocuments(
        // process.env.REACT_APP_DB_ID,  // Database ID
        // process.env.REACT_APP_USERS_ID, // Users Collection ID
        "6799c8c6002ec035cc8c", // DB_ID
        "6799c8e30016e6194427", // Users Collection ID
        [Query.equal("userId", userId)] // Query by userId field
    );

    // Check if the user document exists
    if (response.documents.length === 0) {
        // throw new Error("User data not found in the database.");
        console.log("User data not found in the database.");

    }

    const userData = response.documents[0]; // Get the first document (should be unique)
    console.log("User Data from Database:", userData);
    return userData;
}