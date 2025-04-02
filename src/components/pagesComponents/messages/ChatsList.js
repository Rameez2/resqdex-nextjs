import { useUser } from '@/context/userContext';
import { fetchMyChats } from '@/lib/appwrite/messages';
import { Avatar } from "@/components/ui/avatar"
import React, { useEffect, useState } from 'react';

const ChatsList = ({setRecieverId}) => {
  const [chats,setChats] = useState([]);

  const {user} = useUser();

  useEffect(() => {
    console.log('useeffect',user);
    
    (async () => {
      console.log('userid',user.$id);
      try {
        
        const response = await fetchMyChats(user.$id);
        console.log('caht response',response);
        setChats(response)
      } catch (error) {
        console.log('chat error',error);
        
      }
    })();
  }, [user]);


    return (
        <div className="flex-1 overflow-auto">
          {/* Chat list */}
          {chats.length ? chats.map((item,index) => (
            <div className="border-b border-[#e7e7e7] p-4 flex items-center hover:bg-[#eff6fc] cursor-pointer">
            <Avatar className="h-12 w-12 mr-3">
              <img src="/messages-demo.jpeg" alt="Avatar" className="rounded-full" />
            </Avatar>
            <div className="flex-1 min-w-0">
              <div onClick={() => setRecieverId(item.otherUserId)} className="flex justify-between items-center">
                <h3 className="font-medium text-[#333333]">{item.otherUserName}</h3>
                <span className="text-sm text-[#7c7c7c]">Yesterday, 12:31pm</span>
              </div>
              <p className="text-[#7c7c7c] truncate">{item.lastMessage}</p>
            </div>
          </div>
          ))
          :'No chats found!'}
         

        </div>
    );
}

export default ChatsList;
