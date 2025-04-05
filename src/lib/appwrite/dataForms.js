import { databases } from "./appwrite";

export const updateRecord = async (currentUserId,docId, formData) => {
    try {
        // 1. Fetch existing org/adopter document
        const existingDoc = await databases.getDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_ADDITIONALINFO_ID,
            docId
        );

        // 2. Remove system fields (cannot be updated directly)
        const {
            $id,
            $collectionId,
            $databaseId,
            $permissions,
            $createdAt,
            $updatedAt,
            ...oldData
        } = existingDoc;

        // 3. Merge old data with the new formData
        const mergedData = {
            ...oldData,
            ...formData,
        };

        // 4. Update the org/adopter document with merged data
        const response = await databases.updateDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_ADDITIONALINFO_ID,
            docId,
            mergedData
        );

        // 6. Update that user's enum field to "Pending"
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_USERS_ID,
            currentUserId,
            { status: "Pending" }          // <-- replace "status" with the exact enum attribute name
        );

        return response;
    } catch (error) {
        console.error("Error updating record:", error);
        throw error;
    }
};