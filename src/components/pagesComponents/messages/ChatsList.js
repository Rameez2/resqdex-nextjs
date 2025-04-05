import { useUser } from '@/context/userContext';
import { fetchMyChats } from '@/lib/appwrite/messages';
import { Avatar } from "@/components/ui/avatar"
import React, { useEffect, useState } from 'react';
import ChatSkeleton from '@/components/skeletons/ChatSkeleton';
import { client } from '@/lib/appwrite/appwrite';

const ChatsList = ({ setRecieverId, chats, setChats, setRecieverName }) => {

  const [chatLoading, setChatLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {

    const getChats = async () => {
      try {
        const response = await fetchMyChats(user.$id);
        console.log('caht response', response);
        // Sort the chats array by lastMessageTime in descending order
        const sortedChats = response.sort((a, b) => {
          const timeA = new Date(a.lastMessageTime);
          const timeB = new Date(b.lastMessageTime);
          return timeB - timeA; // descending order
        });

        setChats(sortedChats);
      } catch (error) {
        console.log('chat error', error);
      }
      finally {
        setChatLoading(false);
      }
    }


    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CHAT CHANGES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    if(user && user.$id) getChats();

    const unsubscribe = client.subscribe(
      `databases.${process.env.NEXT_PUBLIC_DB_ID}.collections.${process.env.NEXT_PUBLIC_CHATS_ID}.documents`,
      (response) => {
        getChats();
      }
    );
    return () => unsubscribe();

  }, [user]);



  function formatChatTime(dateString) {
    const now = new Date();
    const messageDate = new Date(dateString);

    // Check if the message is from today
    const isToday = now.toDateString() === messageDate.toDateString();

    // Check if the message is from yesterday
    const isYesterday = new Date(now - 86400000).toDateString() === messageDate.toDateString(); // 86400000 is 1 day in milliseconds

    // Format time based on the conditions
    if (isToday) {
      return `Today, ${messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (isYesterday) {
      return `Yesterday, ${messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      // For dates beyond today and yesterday, format normally
      return messageDate.toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    }
  }

  return (
    <div className="flex-1 overflow-auto">
      {/* Chat list */}
      {chatLoading ? 
        <ChatSkeleton/>
       : chats.length ? chats.map((item, index) => (
        <div key={index} className="border-b border-[#e7e7e7] p-4 flex items-center hover:bg-[#eff6fc] cursor-pointer">
          {/* <Avatar className="h-12 w-12 mr-3">
            <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
          </Avatar> */}
          <div className="flex-1 min-w-0" onClick={() => { setRecieverId(item.otherUserId); setRecieverName(item.otherUserName) }}>
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-[#333333]">{item.otherUserName}</h3>
              <span className="text-sm text-[#7c7c7c]">{formatChatTime(item.lastMessageTime)}</span>
            </div>
            <p className="text-[#7c7c7c] truncate">{item.lastMessage}</p>
          </div>
        </div>
      ))
        : 'No chats found!'}


    </div>
  );
}

export default ChatsList;
