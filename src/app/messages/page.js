"use client"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Search, Smile, Paperclip, Send } from "lucide-react"
import { fetchMyChats, getMessages, sendMessage } from "@/lib/appwrite/messages"
import { useUser } from "@/context/userContext"
import ChatsList from "@/components/pagesComponents/messages/ChatsList"
import MessagesList from "@/components/pagesComponents/messages/MessagesList"
import { client } from "@/lib/appwrite/appwrite"

export default function MessaesComp() {
  const [message,setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recieverId,setRecieverId] = useState('');
  
  
  const {user} = useUser();

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
        console.log('all messages',allMessages);
        
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
      await sendMessage(user.$id,recieverId,message);
    } catch (error) {
      console.log('msg send error',error);
      
    }
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


      <ChatsList setRecieverId={setRecieverId}/>

      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e7e7e7]">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-3">
              <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-[#333333]">Oraganization</h2>
              <p className="text-sm text-[#7c7c7c]">Online - Last seen, 2:02pm</p>
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
      <MessagesList recieverId={recieverId} messagesList={messagesList} setMessagesList={setMessagesList}/>

        {/* Message input */}
        <div className="p-4 border-t border-[#e7e7e7]">
          <div className="flex items-center bg-[#eff6fc] rounded-full p-2">
            <button className="p-2 text-[#7c7c7c]">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-transparent border-none focus:outline-none px-2 text-[#333333]"
            />
            <button className="p-2 text-[#7c7c7c]">
              <Smile size={20} />
            </button>
            <button
              onClick={handleSendMsg}
             className="bg-[#f24e1e] text-white p-3 rounded-full ml-2">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

