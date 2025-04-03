
const PostsSkeleton = () => {
    return (
        <>

            {[...Array(5)].map((_, index) => (

                <div key={index} className="max-w-sm w-100 rounded-lg shadow-lg bg-white overflow-hidden border border-gray-300">
                    {/* Card Header with Adopter's Name */}
                    <div className="bg-[#e17716] text-white p-4">
                        <div role="status" className="max-w-sm animate-pulse rounded-[5px]">
                            <div className="h-10 bg-gray-200 dark:bg-gray-700 w-30 rounded-[5px]"></div>
                        </div>
                    </div>
                    {/* Post Content */}
                    <div role="status" className="max-w-sm animate-pulse mx-auto my-4 p-4 rounded-[5px]">
                        <div className="h-50 bg-gray-200 dark:bg-gray-700 w-full rounded-[5px]"></div>
                    </div>
                    {/* Contact Button */}
                    <div role="status" className="max-w-sm animate-pulse mx-auto my-4 p-4 rounded-[5px]">
                        <div className="h-10 bg-[#e17716] w-30 rounded-[5px]"></div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PostsSkeleton;
