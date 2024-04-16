import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import hljs from 'highlight.js'; // Import hljs library
import 'highlight.js/styles/atom-one-dark.css'; // Import a style for hljs

function JournalPost() {
    const { slug } = useParams();
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/journals/${slug}`);
                if (response.status !== 200) {
                    throw new Error('Failed to fetch post data');
                }
                const data = response.data;
                setPostData(data);
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };

        fetchPostData();
    }, [slug]);

    useEffect(() => {
        // Highlight code blocks when the component mounts or when postData changes
        hljs.highlightAll();
    }, [postData]);

    if (!postData) {
        return <div className="text-white">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <div className="max-w-screen-md w-full px-6">
                <img src={postData.img} alt={postData.title} className="w-full h-auto mb-6 rounded-lg" />
                <h1 className="text-3xl font-semibold mb-4">{postData.title}</h1>
                <p className="text-gray-400 mb-4">Published on {new Date(postData.date).toLocaleDateString()}</p>
                
                {/* Render post content as HTML */}
                <div class="flex justify-center">
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
                </div>
            </div>
        </div>
    );
}

export default JournalPost;
