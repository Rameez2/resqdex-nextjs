import { databases } from "./appwrite";


export const updateOrgForm = async (userId,docId,data) => {
    try {
        console.log('dataaaaa',data);
        
      await databases.updateDocument(
        process.env.NEXT_PUBLIC_DB_ID,           // Database ID
        "6809298a003cb832946a",                  // Collection ID
        docId,                  // Document ID
        data                                     // Actual data to update
      );
      console.log("Organization form updated successfully.");
    } catch (error) {
      console.error("Error updating org form:", error);
      throw error;
    }
  };