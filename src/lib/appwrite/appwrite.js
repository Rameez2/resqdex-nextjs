import { Client, Databases, Account, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // ✅ Use Appwrite Cloud URL
  .setProject("6799c899002db1c532c4"); // ✅ Use your project ID from environment variables
//   .setProject(process.env.REACT_APP_PROJECT_ID); // ✅ Use your project ID from environment variables

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { account, databases, storage, client };

// REACT_APP_PROJECT_ID=6799c899002db1c532c4
// REACT_APP_DB_ID=6799c8c6002ec035cc8c
// REACT_APP_USERS_ID=6799c8e30016e6194427
// REACT_APP_ADDITIONALINFO_ID=67c2aab2002b74932550
// REACT_APP_ANIMALS_ID=6799c8fa001ad3a889fc
// REACT_APP_BUCKET_IMAGES_ID=6799fb94000edc47b27d
// REACT_APP_BUCKET_DOCUMENTS_ID=679ca39100332f545b54
// REACT_APP_PETS_API=http://679b7ca8bcf48aaa6895.appwrite.global/pets
// REACT_APP_ADMIN_API=https://679b8e4754abf196901a.appwrite.global/admin