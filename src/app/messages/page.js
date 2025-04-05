"use client"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, Smile, Paperclip, Send } from "lucide-react"
import { fetchMyChats, getMessages, sendMessage } from "@/lib/appwrite/messages"
import { useUser } from "@/context/userContext"
import ChatsList from "@/components/pagesComponents/messages/ChatsList"
import MessagesList from "@/components/pagesComponents/messages/MessagesList"
import { client } from "@/lib/appwrite/appwrite";
import { useSearchParams } from "next/navigation";
import withAuth from "@/lib/middlewares/withAuth"

const MessaesComp = () => {
  const [message, setMessage] = useState(''); // Message Input
  const [messagesList, setMessagesList] = useState([]); // Messages List
  const [messagesLoading, setMessagesLoading] = useState(false); // Messages Screen Loading
  const [recieverId, setRecieverId] = useState(''); // recievers Id
  const [recieverName, setRecieverName] = useState(''); // recievers Name
  const [chats, setChats] = useState([]); // Chats List
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  const searchParams = useSearchParams();
  const adopterId = searchParams.get("adopterId"); // Get adopterId from URL
  const adopterName = searchParams.get("name"); // Get name from URL
  const { user } = useUser(); // context user

  // check if user is redirect from CONTACT Button
  useEffect(() => {
    if (adopterId && adopterName) {
      setRecieverId(adopterId);
      setRecieverName(adopterName);
    }
  }, [adopterId, adopterName]);

  // use Effect When Page Load
  useEffect(() => {
    // function to fetch latest messages
    async function fetchMessages() {
      try {
        const sentMessages = await getMessages(user.$id, recieverId); // messages i sent
        const receivedMessages = await getMessages(recieverId, user.$id); // messages i recieved
        const allMessages = [...sentMessages, ...receivedMessages]; // merge both (send & recieved) messages list
        allMessages.sort((a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)); // sort Messages by time
        setMessagesList(allMessages); // update Messages List State
      } catch (error) {
        console.log("Error getting messages:", error); // error while fetching latest messages
      } finally {
        setMessagesLoading(false); // stops Messages Loading after response || error
      }
    }

    // if recieverId & user is available, then fetch the Messages
    if (recieverId && user) fetchMessages(); 
    
    // Track of Messages RealTime
    const unsubscribe = client.subscribe(
      `databases.${NEXT_PUBLIC_DB_ID}.collections.${NEXT_PUBLIC_MESSAGES_ID}.documents`,
      (response) => {
        fetchMessages();
      }
    );
    return () => unsubscribe();
  }, [recieverId, user]);
  
  // set Messages loading only when a chat is switched
  useEffect(() => {
    setMessagesLoading(true);
  }, [recieverId]); // when chat is switched [recieverId] is changed

  // handle sending message after input submit
  async function handleSendMsg() {
    try {
      updateChat(recieverId, message);
      const newMessage = {
        sender: user.$id,
        receiverId: recieverId,
        content: message,
        $createdAt: new Date().toISOString(),
      };
      console.log('new msg', newMessage);
      
      setMessagesList((prevMessages) => [newMessage, ...prevMessages]);
      setMessage('');
      await sendMessage(user.$id, recieverId, message);
    } catch (error) {
      console.log('msg send error', error);
    }
  }

  // update the ChatList (push newChat)
  function updateChat() {
    setChats((prevChatList) => {
      const updatedChatList = prevChatList.filter(chat => chat.otherUserId !== recieverId);
      const updatedChat = {
        otherUserId: recieverId,
        otherUserName: recieverName,
        lastMessage: message,
        lastMessageTime: new Date().toISOString(),
      };

      return [updatedChat, ...updatedChatList];
    });
  }

  // Filtered chats based on search term
  const filteredChats = chats.filter(chat =>
    chat.otherUserName.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="flex h-[85vh] bg-[#fdf6e3]">

      {/* Left sidebar */}
      <div className="w-[450px] border-r border-[#e7e7e7] flex flex-col">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7c7c7c]" />
            <Input
              placeholder="Search for chats..."
              className="pl-10 bg-white border-none rounded-full h-12 text-[#333333]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
            />
          </div>
        </div>

        <div className="p-4 border-b border-[#e7e7e7]">
          <h2 className="text-xl font-semibold text-[#333333]">Organization</h2>
        </div>

        {/* Filtered Chats List */}
        <ChatsList
          chats={filteredChats} // Pass filtered chats
          setChats={setChats}
          setRecieverId={setRecieverId}
          setRecieverName={setRecieverName}
        />
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e7e7e7]">
          <div className="flex items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#333333]">{recieverName || 'Select a chat'}</h2>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <MessagesList
          messagesLoading={messagesLoading}
          user={user}
          recieverName={recieverName}
          message={message}
          setMessage={setMessage}
          handleSendMsg={handleSendMsg}
          recieverId={recieverId}
          messagesList={messagesList}
          setMessagesList={setMessagesList}
        />
      </div>
    </div>
  );
}

export default withAuth(MessaesComp);
