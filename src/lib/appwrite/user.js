import { Query } from "appwrite";
import { account, databases } from "./appwrite";

export const fetchCurrentUser = async () => {
  // GET CURRENT USER
  const currentUser = await account.get();
  const userId = currentUser.$id; // Authenticated user ID

  const response = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DB_ID,  // Database ID
    process.env.NEXT_PUBLIC_USERS_ID, // Users Collection ID
    [Query.equal("userId", userId)] // Query by userId field
  );

  // Check if the user document exists
  if (response.documents.length === 0) {
    // throw new Error("User data not found in the database.");
    console.error("User data not found in the database.");
  }

  const userData = response.documents[0]; // Get the first document (should be unique)
  return userData;
}


export const updateUserData = async (userId, userData) => {
  // Update user document in the database
  const response = await databases.updateDocument(
    process.env.NEXT_PUBLIC_DB_ID,    // Database ID
    process.env.NEXT_PUBLIC_USERS_ID, // Collection ID where users are stored
    userId,                         // User ID to identify the document to update
    userData                        // New data to update in the user document
  );

  return response;  // Return the updated document
}

export const getUserById = async (id) => {
  try {
    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_DB_ID,    // Your Database ID
      process.env.NEXT_PUBLIC_USERS_ID, // Your Users Collection ID
      id                              // Document ID provided as a parameter
    );
    return response;
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};

export const deleteAccount = async () => {
  // Step 1: Get the current user's auth info
  const user = await account.get();
  const userId = user.$id;

  console.log('userID:', userId);

  // Step 2: Query the user document by custom field `userId`
  const userDocList = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DB_ID,
    process.env.NEXT_PUBLIC_USERS_ID,
    [Query.equal('userId', userId)]
  );

  if (userDocList.documents.length === 0) {
    throw new Error(`No user document found with userId: ${userId}`);
  }

  const documentId = userDocList.documents[0].$id;

  // Step 3: Delete the user document from the database
  await databases.deleteDocument(
    process.env.NEXT_PUBLIC_DB_ID,
    process.env.NEXT_PUBLIC_USERS_ID,
    documentId
  );

  console.log('User document deleted from DB.');

  // Step 4: Delete the auth account itself
  await fetch('/api/delete-user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ userId }),
});


  console.log('Appwrite auth account deleted.');
};
