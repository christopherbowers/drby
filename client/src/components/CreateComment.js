import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'

export default function CreateComment({authedUser}){

    const { id, topicId } = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BASE_URL}/comments/`)
        .then(res =>{
            console.log(res.data)
            setComments(res.data)
            setLoading(false)
        })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userId = authedUser.id;
        const body = event.target.body.value;
        const postId = event.target.post.value;

        const test = await axios.post(`${BASE_URL}/comments`,
        {
          userId,
          body,
          postId
        }
      ) 
      navigate(`/topics/${topicId}/posts/${postId}`)
    };

    if (loading) {
        return (<div>Loading...</div>)
    }

    return (
        <form className='create-comment' onSubmit={handleSubmit}>
        <input type='text' name='body' placeholder='...' />
        <input type='submit' value='Create Comment' />
        </form>
    )
}