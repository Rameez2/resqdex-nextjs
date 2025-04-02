import { Client, Databases, Account, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // ✅ Use Appwrite Cloud URL
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID); // ✅ Use your project ID from environment variables

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { account, databases, storage, client };

// NEXT_PUBLIC_PROJECT_ID=6799c899002db1c532c4
// NEXT_PUBLIC_DB_ID=6799c8c6002ec035cc8c
// NEXT_PUBLIC_USERS_ID=6799c8e30016e6194427
// NEXT_PUBLIC_ADDITIONALINFO_ID=67c2aab2002b74932550
// NEXT_PUBLIC_ANIMALS_ID=6799c8fa001ad3a889fc
// NEXT_PUBLIC_BUCKET_IMAGES_ID=6799fb94000edc47b27d
// NEXT_PUBLIC_BUCKET_DOCUMENTS_ID=679ca39100332f545b54
// NEXT_PUBLIC_PETS_API=http://679b7ca8bcf48aaa6895.appwrite.global/pets
// NEXT_PUBLIC_ADMIN_API=https://679b8e4754abf196901a.appwrite.global/admin