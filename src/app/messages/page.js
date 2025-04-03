"use client"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Search, Smile, Paperclip, Send } from "lucide-react"
import { fetchMyChats, getMessages, sendMessage } from "@/lib/appwrite/messages"
import { useUser } from "@/context/userContext"
import ChatsList from "@/components/pagesComponents/messages/ChatsList"
import MessagesList from "@/components/pagesComponents/messages/MessagesList"
import { client } from "@/lib/appwrite/appwrite";
import { useSearchParams } from "next/navigation";
import withAuth from "@/lib/middlewares/withAuth"

const MessaesComp = () => {
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recieverId, setRecieverId] = useState('');
  const [recieverName, setRecieverName] = useState('');
  const [chats, setChats] = useState([]);

  const searchParams = useSearchParams();
  const adopterId = searchParams.get("adopterId"); // Get adopterId from URL
  const adopterName = searchParams.get("name");
  const { user } = useUser();

  useEffect(() => {
    if (adopterId && adopterName) {
      setRecieverId(adopterId);
      setRecieverName(adopterName);
    }
  }, [adopterId, adopterName]);


  useEffect(() => {
    async function fetchMessages() {
      try {
        // Only show the loader if there are no messages loaded yet
        if (messagesList.length === 0) {
          setLoading(true);
        }
        const sentMessages = await getMessages(user.$id, recieverId);
        const receivedMessages = await getMessages(recieverId, user.$id);
        const allMessages = [...sentMessages, ...receivedMessages];
        allMessages.sort((a, b) => new Date(b.$createdAt) - new Date(a.$createdAt));
        console.log('all messages', allMessages);

        setMessagesList(allMessages);
      } catch (error) {
        console.log("Error getting messages:", error);
      } finally {
        setLoading(false);
      }
    }
    
    
    if (recieverId && user) fetchMessages();
    
    const unsubscribe = client.subscribe(
      "databases.6799c8c6002ec035cc8c.collections.679b5d920001b01e6659.documents",
      (response) => {
        fetchMessages();
      }
    );
    return () => unsubscribe();
  }, [recieverId, user]);
  
  async function handleSendMsg() {
    try {
      updateChat(recieverId, message);
      // const newMessage = {
      //   senderId: user.$id,
      //   receiverId: recieverId,
      //   content: message,
      //   $createdAt: new Date().toISOString(), // Mock createdAt timestamp
      // };
      // setMessagesList((prevMessages) => [newMessage, ...prevMessages]);
      setMessage('');
      await sendMessage(user.$id, recieverId, message);
    } catch (error) {
      console.log('msg send error', error);

    }
  }

  function updateChat() {
    setChats((prevChatList) => {
      // Find the chat with the recieverId and remove it from the list
      const updatedChatList = prevChatList.filter(chat => chat.otherUserId !== recieverId);

      // Create a new chat object for the receiver (or update if it already exists)
      const updatedChat = {
        otherUserId: recieverId,
        otherUserName: recieverName,
        lastMessage: message,
        lastMessageTime: new Date().toISOString(), // Update the timestamp
      };

      // Add the updated chat to the top
      return [updatedChat, ...updatedChatList];
    });
  }


  return (
    <div className="flex h-screen bg-[#fdf6e3]">

      {/* Left sidebar */}
      <div className="w-[450px] border-r border-[#e7e7e7] flex flex-col">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7c7c7c]" />
            <Input placeholder="Search" className="pl-10 bg-white border-none rounded-full h-12 text-[#333333]" />
          </div>
        </div>

        <div className="p-4 border-b border-[#e7e7e7]">
          <h2 className="text-xl font-semibold text-[#333333]">Organization</h2>
        </div>


        <ChatsList chats={chats} setChats={setChats} setRecieverId={setRecieverId} setRecieverName={setRecieverName} />

      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e7e7e7]">
          <div className="flex items-center">
            {/* <Avatar className="h-12 w-12 mr-3">
              <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
            </Avatar> */}
            <div>
              <h2 className="text-xl font-semibold text-[#333333]">{recieverName}</h2>
              {/* <p className="text-sm text-[#7c7c7c]">Online - Last seen, 2:02pm</p> */}
            </div>
          </div>
          <button className="text-[#7c7c7c]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-more-vertical"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>

        {/* Chat messages */}
        <MessagesList user={user} message={message} setMessage={setMessage} handleSendMsg={handleSendMsg} recieverId={recieverId} messagesList={messagesList} setMessagesList={setMessagesList} />

      </div>
    </div>
  )
}

export default withAuth(MessaesComp);