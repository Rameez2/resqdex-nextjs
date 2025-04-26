import { Query } from "appwrite";
import { databases } from "./appwrite";


export const getFavoritePets = async (favoriteIds) => {
    if (!favoriteIds || favoriteIds.length === 0) return [];
  
    const petsResponse = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DB_ID,
      process.env.NEXT_PUBLIC_ANIMALS_ID,
      [Query.equal('$id', favoriteIds)] // Query documents where $id is in the favoriteIds array
    );
  
    return petsResponse.documents;
  };

export const addToFavorite = async (userId, petId) => {
    try {
      // Fetch the user document
      const userDoc = await databases.getDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_USERS_ID,
        userId
      );
  
      // Get existing favorites
      let currentFavorites = userDoc.favorite || [];
  
      if (currentFavorites.includes(petId)) {
        // Remove petId if already in favorites
        currentFavorites = currentFavorites.filter(id => id !== petId);
        console.log("Removed from favorites");
      } else {
        // Add petId to favorites
        currentFavorites.push(petId);
        console.log("Added to favorites");
      }
  
      // Update the document
      await databases.updateDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_USERS_ID,
        userId,
        {
          favorite: currentFavorites,
        }
      );
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };


