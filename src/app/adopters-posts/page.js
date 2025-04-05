"use client"
import PostsSkeleton from '@/components/skeletons/PostsSkeleton';
import { getPosts } from '@/lib/appwrite/posts';
import { getUserById } from '@/lib/appwrite/user';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const AdopterPost = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        (async () => {
            try {
                setLoading(true);
                let response = await getPosts();
                setPosts(response)
                console.log(response);
                
            } catch (error) {
                console.log('error fetching posts',error);
            }
            finally {
                setLoading(false);
            }
        })();

    }, []);


  async function startInquiry(orgId) {
    try {
      // console.log('NEW INQUIRY');
      // console.log('org id,',orgId);
      const doc = await getUserById(orgId);

      router.push(`/messages?adopterId=${doc.$id}&name=${doc.name}`);
    } catch (error) {
      console.error('Error starting inquiry:', error);
    }
  }

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            
            {loading ? <PostsSkeleton/>:
             posts.length ? posts.map((item, index) =>
                    <div key={index} className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden border border-gray-300">
                        {/* Card Header with Adopter's Name */}
                        <div className="bg-[#e17716] text-white p-4">
                            <h2 className="text-lg font-semibold">{posts[index].name}</h2>
                        </div>

                        {/* Post Content */}
                        <div className="p-4">
                            <p className="text-sm text-gray-600">{posts[index].content}</p>
                        </div>

                        {/* Contact Button */}
                        <div className="p-4 text-left" onClick={() => startInquiry(item.organization_id)}>
                            <button className="px-6 py-2 bg-[#e17716] text-white rounded-md hover:bg-[#d66914] transition duration-300">
                                Contact
                            </button>
                        </div>
                    </div>
            ) : 'No Posts Available'}
            </div>
    );
};

export default AdopterPost;
