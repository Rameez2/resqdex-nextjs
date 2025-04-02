const { Query, ID } = require("appwrite");
const { databases, account } = require("./appwrite");


export const getPetsByFilter = async (numberOfPets=10, offset=0, filters = {}) => {
    try {
        const queries = [];

        if (numberOfPets !== undefined) {
            queries.push(Query.limit(numberOfPets));
        }
        if (offset !== undefined) {
            queries.push(Query.offset(offset));
        }


        // Apply filters dynamically (ignoring age and empty values)
        if (filters.breed && filters.breed.trim() !== "") {
            queries.push(Query.equal("breed", filters.breed));
        }
        if (filters.specie && filters.specie.trim() !== "") {
            queries.push(Query.equal("specie", filters.specie));
        }
        if (filters.size && filters.size.trim() !== "") {
            queries.push(Query.equal("size", filters.size));
        }
        if (filters.gender && filters.gender.trim() !== "") {
            queries.push(Query.equal("gender", filters.gender));
        }

        // Fetch pets with applied filters
        const petsResponse = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_ANIMALS_ID,
            queries
        );

        const pets = petsResponse.documents;
        // console.log("Filtered Pets:", pets);
        return pets;
    } catch (error) {
        console.error("Error fetching pets:", error.message);
        throw error;
    }
};


export const getPetById = async (petId) => {

    const petResponse = await databases.getDocument(
      process.env.NEXT_PUBLIC_DB_ID,      // Database ID
      process.env.NEXT_PUBLIC_ANIMALS_ID, // Animals Collection ID
      petId                             // Document ID (Pet ID)
    );
  
    return petResponse;
  
}


export const getMyPets = async () => {
    // Step 1: Get current authenticated user
    const currentUser = await account.get();
  
    // Step 2: Fetch the user document from the users collection
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_USERS_ID, // Users Collection ID
      [Query.equal("userId", currentUser.$id)] // Query using userId
    );
  
    // Step 3: Ensure the user is an organization
    const userDocument = response.documents[0];
    if (userDocument.role !== 'Organization') {
      throw new Error('Only organizations can see their pets.');
    }
  
    // Step 4: Fetch all pets (no filter)
    const petsResponse = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DB_ID,   // Database ID
      process.env.NEXT_PUBLIC_ANIMALS_ID, // Animals Collection ID
      [Query.equal('organization_id', userDocument.$id)] // Filter by organization_id
    );
  
    // Step 5: Display the pets
    const pets = petsResponse.documents;
    console.log('My Uploaded Pets:', pets);
  
    // You can now update your state or UI with the fetched pets
    return pets;
  };


  export const uploadPet = async (petData) => {
    console.log('uploading...',petData);
  
    const url = process.env.NEXT_PUBLIC_PETS_API;
    const jwtToken = await account.createJWT();
  
    const response = await fetch("https://679b7ca8bcf48aaa6895.appwrite.global/pets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken.jwt}`
      },
      body: JSON.stringify(petData)
    });
  
    const data = await response.json();
  
    // console.log('dataaa res:',response.status);
  
    if (response.status !== 200) {
      throw new Error(data.error);
    }
  
    return data;
  }