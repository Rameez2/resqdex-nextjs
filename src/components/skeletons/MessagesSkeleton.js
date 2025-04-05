
const MessagesSkeleton = () => {
    return (
        <div role="status" className="space-y-4">
        {[...Array(5)].map((_, index) => (
            <div key={index} className={`flex flex-col max-w-[70%] ${index % 2 === 0 ? "items-end ml-auto" : "items-start"}`}>
                <div role="status" className={`flex flex-col animate-pulse ${index % 2 === 0 ? "bg-[#e17716]" : "bg-[#e7e7e7]"} rounded-2xl py-3 px-4 space-y-2`}>
                    {/* Skeleton for message content */}
                    <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4 w-50"></div>
                    {/* Skeleton for message time */}
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 w-50"></div>
                </div>
            </div>
        ))}
    </div>
    );
}

export default MessagesSkeleton;
