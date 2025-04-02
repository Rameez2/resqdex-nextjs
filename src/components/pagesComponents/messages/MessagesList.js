
import { useUser } from '@/context/userContext';
import { getMessages } from '@/lib/appwrite/messages';
import React, { useEffect, useState } from 'react';

const MessagesList = ({ recieverId, messagesList,setMessagesList }) => {

    const { user } = useUser();

    return (
        <>
            {/* Chat messages */}
            <div className="flex-1 overflow-auto p-4">
                <div className="space-y-4 flex flex-col-reverse">

                    {messagesList.length ? messagesList.map((item) =>
                        item.sender === user.$id ? (
                            <div className="flex flex-col max-w-[70%] items-end ml-auto">
                                <div className="bg-[#e17716] rounded-2xl py-3 px-4 text-white">
                                    <p>{item.content}</p>
                                </div>
                                <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:58pm</span>
                            </div>
                        )
                            :
                            (
                                <div className="flex flex-col max-w-[70%] items-start">
                                    <div className="bg-[#e7e7e7] rounded-2xl py-3 px-4 text-[#333333]">
                                        <p>{item.content}</p>
                                    </div>
                                    <span className="text-xs text-[#7c7c7c] mt-1">Today, 8:36pm</span>
                                </div>
                            )
                    ) : 'No Messages Found'}

                </div>
            </div>
        </>
    );
}

export default MessagesList;
