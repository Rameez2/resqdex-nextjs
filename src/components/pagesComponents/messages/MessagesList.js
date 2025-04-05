
import MessagesSkeleton from '@/components/skeletons/messages/MessagesSkeleton';
import { Search, Smile, Paperclip, Send } from "lucide-react"

const MessagesList = ({ user, recieverName, messagesLoading, updateChat, message, setMessage, messagesList, handleSendMsg }) => {

    // const { user } = useUser();

    function formatMessageTime(dateString) {
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
        <>
            {/* Chat messages */}
            <div className="flex-1 overflow-auto p-4">
                <div className="space-y-4 flex flex-col-reverse">
                    {!recieverName ? <h2 className='text-center'>Select a Chat</h2> : messagesLoading ? <MessagesSkeleton /> :
                        messagesList.length ? messagesList.map((item) => (
                            <div key={item.$id} className={`flex flex-col max-w-[70%] ${item.sender === user.$id ? "items-end ml-auto" : "items-start"}`}>
                                <div className={`${item.sender === user.$id ? "bg-primary text-white" : "bg-[#e7e7e7] text-[#333333]"} rounded-2xl py-3 px-4`}>
                                    <p>{item.content}</p>
                                </div>
                                <span className="text-xs text-[#7c7c7c] mt-1">{formatMessageTime(item.$createdAt)}</span>
                            </div>
                        )) : 'No Messages Found'
                    }

                </div>
            </div>
            {/* Message Input */}

            <div className="p-4 border-t border-[#e7e7e7]">
                <div className="flex items-center bg-[#eff6fc] rounded-full p-2">
                    {/* <button className="p-2 text-[#7c7c7c]">
                        <Paperclip size={20} />
                    </button> */}
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="flex-1 bg-transparent border-none focus:outline-none px-2 text-[#333333]"
                    />
                    {/* <button className="p-2 text-[#7c7c7c]">
                        <Smile size={20} />
                    </button> */}
                    <button
                        onClick={handleSendMsg}
                        className="bg-primary text-white p-3 rounded-full ml-2">
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default MessagesList;
