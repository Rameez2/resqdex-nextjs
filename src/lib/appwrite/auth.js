import { ID, Query } from "appwrite";
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
        console.log('User logged out successfully');
      } catch (error) {
        console.log('Error logging out:', error);
      }
    } else {
      console.log('No active session to log out');
    }
  };
//  AUTHETICATION
export const registerUser = async (name, email, password, role) => {
    console.log(`register ${name} ${email} ${password} ${role}`);

    try {
      // Step 1: Create the user in Appwrite Authentication
      const user = await account.create(
        ID.unique(), // Unique ID for the user
        email,       // User's email
        password,    // User's password
        name         // User's name
      );
  
      console.log("User registered successfully in Auth:", user);
      // Now create a additional_info document
      const newAddInfo = await databases.createDocument(
        // process.env.REACT_APP_DB_ID,  // Database ID
        process.env.NEXT_PUBLIC_DB_ID, // DB_ID
        process.env.NEXT_PUBLIC_ADDITIONALINFO_ID, // DB_ID
        // "67c2aab2002b74932550", // Personal Info Collection ID
        ID.unique(), // Unique Document ID
        { personal_info: ["dumy"] }
      );
  
      console.log("Additional info created:", newAddInfo);
  
      // Step 2: Add user data to the users collection
      const userData = {
        name: name,
        email: email,
        role: role, // Role (e.g., adopter, organization)
        userId: user.$id, // Add the Auth userId to the user document
        more_info:newAddInfo.$id
      };
  
      console.log('userData',userData);
      

      const newUser = await databases.createDocument(
        process.env.NEXT_PUBLIC_DB_ID, // DB_ID
        process.env.NEXT_PUBLIC_USERS_ID, // Users Collection ID
        ID.unique(), // Unique Document ID
        userData     // Document data
      );
      await loginWithEmailAndPass(email,password);
      console.log("User data added to the users collection:", newUser);
      return newUser; // Return both objects for further use
    } catch (error) {
      // console.error("Error during registration:", error);
  
      // If something fails, rollback (delete created user if necessary)
      if (error.code === 409 && error.message.includes("email already exists")) {
        throw new Error("Email already exists.");
      }
      console.log('register',error);
      
      throw new Error(error.message);
    }
  };