import { account, databases } from "./appwrite";


export const getAllUsers = async () => {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_USERS_ID, // Users Collection ID
    );
    return response.documents;
}

export const approveOrganization = async (orgId,status) => {
    // Fetch the user document by its ID
    const Orgresponse = await databases.getDocument(
        process.env.NEXT_PUBLIC_DB_ID,  // Database ID
        process.env.NEXT_PUBLIC_USERS_ID, // Users Collection ID
        orgId  // The unique ID of the user
      );
      if(Orgresponse.status === status) {
        throw new Error("Already in same status!");
      }

      const url = process.env.NEXT_PUBLIC_PETS_API;
      const jwtToken = await account.createJWT();
          
          const response = await fetch("https://679b8e4754abf196901a.appwrite.global/admin/status", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${jwtToken.jwt}`
            },
            body: JSON.stringify({orgId:orgId,status:status})
          });

        const data = await response.json();
        console.log('status change response:',data);

        if (response.status !== 200) {
          throw new Error(data.error);
        }
      return data;
}



export const adminDeletePetById = async (petId) => {
    const url = process.env.NEXT_PUBLIC_PETS_API;
    const jwtToken = await account.createJWT();
        console.log('deleting pet...',jwtToken.jwt);
        
        const response = await fetch("https://679b8e4754abf196901a.appwrite.global/admin/pets", {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken.jwt}`
          },
          body: JSON.stringify({petId:petId})
        });
  
      const data = await response.json();
  
      if (response.status !== 200) {
        throw new Error(data.error);
      }
    return data;
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