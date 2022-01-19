import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function EditPost(){
    const [post, setPost] = useState({});
    const { id, topicId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get(`http://localhost:3001/api/posts/${id}`);
            const post = res.data;
            setPost(post)
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const postbody = event.target.postbody.value;
        const imgURL = event.target.imgURL.value;

        await axios.put(`http://localhost:3001/api/posts/${id}`,
        {
            title,
            postbody,
            imgURL
        }
        )
        navigate(-1);
    };

    if (Object.keys(post).length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <form className='edit-post' onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder='Title Name' defaultValue={`${post.title}`} />
            <input type='text' name='postbody' placeholder='...' defaultValue={`${post.postbody}`} />
            <input type='text' name='imgURL' placeholder='Image URL' defaultValue={`${post.imgURL}`} />
            <input type='submit' value='Update Post' />
        </form>
    );
}
