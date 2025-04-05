const { Query, ID } = require("appwrite");
const { databases} = require("./appwrite");

export const getPetsByFilter = async (numberOfPets = 10, offset = 0, filters = {}) => {
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
    return pets;
};

export const getPetById = async (petId) => {

  const petResponse = await databases.getDocument(
    process.env.NEXT_PUBLIC_DB_ID,      // Database ID
    process.env.NEXT_PUBLIC_ANIMALS_ID, // Animals Collection ID
    petId                             // Document ID (Pet ID)
  );

  return petResponse;
}

export const getMyPets = async (userId) => {
  // Fetch all my pets only
  const petsResponse = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DB_ID,   // Database ID
    process.env.NEXT_PUBLIC_ANIMALS_ID, // Animals Collection ID
    [Query.equal('organization_id', userId)] // Filter by organization_id
  );
  const pets = petsResponse.documents;
  
  // return the pets array
  return pets;
};

export const uploadPet = async (petData) => {

  const response = await databases.createDocument(
          process.env.NEXT_PUBLIC_DB_ID,
          process.env.NEXT_PUBLIC_ANIMALS_ID,
          ID.unique(),
          {
              ...petData, // Spread the pet data into the document
          }
      );
      return response; // Return the created document response
};

export const deleteMyPet = async (petId) => {
  
      // Delete the document from the specified collection
      const response = await databases.deleteDocument(
          process.env.NEXT_PUBLIC_DB_ID,        // Database ID
          process.env.NEXT_PUBLIC_ANIMALS_ID,   // Collection ID
          petId                                 // The pet document ID to be deleted
      );
      return response; // Return the response from the deletion (typically an empty object)
};