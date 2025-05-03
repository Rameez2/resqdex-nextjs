import { ID } from "appwrite";
import { account, databases } from "./appwrite"

export const loginWithEmailAndPass = async (email, password) => {
  const response = await account.createEmailPasswordSession(email, password);
  return response;
}

// Function to check if a session is active
const checkSession = async () => {
  try {
    const session = await account.getSession('current'); // 'current' gets the current session
    return session; // Return the active session
  } catch (error) {
    return null; // No active session
  }
};

// Function to log out the user
export const logOutUser = async () => {
  const activeSession = await checkSession();

  if (activeSession) {
    try {
      await account.deleteSession('current'); // Logs out the current session
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
};
//  AUTHETICATION
export const registerUser = async (name, email, password, role) => {

  // Step 1: Create the user in Appwrite Authentication
  const user = await account.create(
    ID.unique(), // Unique ID for the user
    email,       // User's email
    password,    // User's password
    name         // User's name
  );

  // Now create a additional_info document
  let newAddInfo;


    // Step 2: Add user data to the users collection
    const userData = {
      name: name,
      email: email,
      role: role, // Role (e.g., adopter, organization)
      userId: user.$id, // Add the Auth userId to the user document
    };

  if(role === "Adopter") {
    // ADOPTER INFO
    newAddInfo = await databases.createDocument(
      process.env.NEXT_PUBLIC_DB_ID, // DB_ID
      process.env.NEXT_PUBLIC_ADDITIONALINFO_ID, // DB_ID
      ID.unique(), // Unique Document ID
      { personal_info: ["dumy"] }
    );
    userData.additionalInfo = newAddInfo.$id;
  }
  else {
    // organization info
    newAddInfo = await databases.createDocument(
      process.env.NEXT_PUBLIC_DB_ID, // DB_ID
      "6809298a003cb832946a", // DB_ID
      ID.unique(), // Unique Document ID
      {adoption_fees:["0","1000"]}
    );
    userData.organizationData = newAddInfo.$id;

  }
  if(newAddInfo) {
    
    // // Step 2: Add user data to the users collection
    // const userData = {
    //   name: name,
    //   email: email,
    //   role: role, // Role (e.g., adopter, organization)
    //   userId: user.$id, // Add the Auth userId to the user document
    //   organizationData: newAddInfo.$id,
    //   additionalInfo: newAddInfo.$id
    // };
  
    const newUser = await databases.createDocument(
      process.env.NEXT_PUBLIC_DB_ID, // DB_ID
      process.env.NEXT_PUBLIC_USERS_ID, // Users Collection ID
      ID.unique(), // Unique Document ID
      userData     // Document data
    );
    await loginWithEmailAndPass(email, password);
    return newUser; // Return both objects for further use
  }
};


export const updateUserPassword = async (oldPassword, newPassword) => {
  // Check if the user is logged in
  const session = await checkSession();
  // If the user is logged in, proceed with updating the password
  if (session) {
    return await account.updatePassword(oldPassword, newPassword);
  } else {
    throw new Error('User is not logged in');
  }
}