import { ID, Query } from "appwrite";
import { databases } from "./appwrite"

export const sendMessage = async (senderId,recieverId,content) => {
    try {
        const document = await databases.createDocument(
          process.env.NEXT_PUBLIC_DB_ID,
          process.env.NEXT_PUBLIC_MESSAGES_ID,
          ID.unique(), // Unique ID for the message
          {
            sender: senderId,  // Sender ID (can be the authenticated user's ID)
            reciever:recieverId,
            content: content,
          }
        );

        const existingChats = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DB_ID,
          process.env.NEXT_PUBLIC_CHATS_ID,
          [
            Query.contains("user_ids", senderId), // Check if sender exists in the array
            Query.contains("user_ids", recieverId), // Check if receiver exists in the array
          ]
        );

        if (existingChats.documents.length > 0) {
          
          // 3. If chat exists, update last_message and last_message_time
          const chatId = existingChats.documents[0].$id;
    
          await databases.updateDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_CHATS_ID,
            chatId,
            {
              last_message: content,
              lastMessageTime: new Date().toISOString(),
            }
          );
        } else {

          // 4. If chat doesn't exist, create a new chat document
          await databases.createDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_CHATS_ID,
            ID.unique(),
            {
              user_ids: [senderId, recieverId], // Store both user IDs
              last_message: content,
            }
          );
        }

      } catch (error) {
        console.error('Error sending message:', error);
      }
}

export const getMessages = async (senderId, recieverId) => {
    try {
        
      // Simple check to ensure both senderId and recieverId are provided
      if (!senderId || !recieverId) {
        console.error('Sender ID or Receiver ID is missing');
        return []; // Return empty array if either ID is missing
      }
  
      const messageDocuments = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_MESSAGES_ID,
        [
          Query.equal('sender', senderId), // Filtering messages by senderId
          Query.equal('reciever', recieverId) // Filtering messages by recieverId
        ]
      );
  
      return messageDocuments.documents;
    } catch (error) {
      console.error('Error getting messages:', error);
      return []; // Return empty array in case of error
    }
  };

// Function to fetch all chats for a specific user
export const fetchMyChats = async (userId) => {
    try {
        // Query chats where your user ID is included in the userIds array
        const response = await databases.listDocuments(process.env.NEXT_PUBLIC_DB_ID
            , process.env.NEXT_PUBLIC_CHATS_ID, [
            Query.contains("user_ids", userId), // Checks if userId exists in the userIds array
        ]);

        const chats = [];

        for (let chat of response.documents) {
            // Find the other user's ID by excluding the current user's ID
            const otherUserId = chat.user_ids.find((id) => id !== userId);

            // Fetch the other user's data from the users collection
            const otherUser = await databases.getDocument(
                process.env.NEXT_PUBLIC_DB_ID,
                process.env.NEXT_PUBLIC_USERS_ID, // Your users collection ID
                otherUserId
            );

            // Push the formatted chat data with user details to the chats array
            chats.push({
                chatId: chat.$id,
                otherUserId: otherUserId,
                otherUserName: otherUser.name, // Assuming there's a 'name' field in users collection
                lastMessage: chat.last_message,
                lastMessageTime: chat.lastMessageTime,
            });
        }

        return chats;
    } catch (error) {
        console.error("Error fetching your chats:", error);
        return [];
    }
}


