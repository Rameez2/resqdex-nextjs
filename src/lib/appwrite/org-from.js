import { databases } from "./appwrite";


export const updateOrgForm = async (userId, docId, data) => {
    try {
        console.log('dataaaaa', data);

        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DB_ID,           // Database ID
            "6809298a003cb832946a",                  // Collection ID
            docId,                  // Document ID
            data                                     // Actual data to update
        );

        // update current user status to pending
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_USERS_ID,
            userId,
            { status: "Pending" }          // <-- replace "status" with the exact enum attribute name
        );

        console.log("Organization form updated successfully.");
        return true;
    } catch (error) {
        console.error("Error updating org form:", error);
        throw error;
    }
};