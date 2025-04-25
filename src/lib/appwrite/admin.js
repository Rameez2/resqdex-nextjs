import { Query } from "appwrite";
import { databases } from "./appwrite";


export const getAllUsers = async () => {
  const response = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DB_ID,
    process.env.NEXT_PUBLIC_USERS_ID,
    [
      Query.orderDesc("$updatedAt"),
    ]
  );
  return response.documents;
}

export const changeUserStatus = async (userId, status) => {
  // Update the user's status field in the database
  const response = await databases.updateDocument(
    process.env.NEXT_PUBLIC_DB_ID,        // Database ID
    process.env.NEXT_PUBLIC_USERS_ID,     // Collection ID for users
    userId,                               // The user document ID
    {
      status: status                     // Updating the user's status field
    }
  );
  return response; // Return the updated user document
}

export const adminDeletePetById = async (petId) => {
  const response = await databases.deleteDocument(
    process.env.NEXT_PUBLIC_DB_ID,        // Database ID
    process.env.NEXT_PUBLIC_ANIMALS_ID,   // Collection ID
    petId                                 // The pet document ID to be deleted
  );
  return response; // Return the response from the deletion (typically an empty object)
}

export const getMoreDetails = async (id) => {
  try {
    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_DB_ID,    // Your Database ID
      process.env.NEXT_PUBLIC_ADDITIONALINFO_ID, // Your Users Collection ID
      id                              // The document ID passed as parameter
    );
    return response;
  } catch (error) {
    console.error("Error fetching details:", error);
    throw error;
  }
};

export const getOrgDetails = async (docId) => {
  const details = await databases.getDocument(
    process.env.NEXT_PUBLIC_DB_ID,           // Database ID
    "6809298a003cb832946a",                  // Collection ID
    docId,                  // Document ID
  );

  return details;

}