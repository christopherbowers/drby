import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'

export default function CreateComment({authedUser}){

    const { topicId, id} = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchData = async () =>{
        const res = await axios.get(`${BASE_URL}/comments/`)
        setComments(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleSubmit = async (event) => {

        const userId = authedUser.id;
        const body = event.target.body.value;
        const postId = id;
        console.log(id)
        const test = await axios.post(`${BASE_URL}/comments`,
        {
          userId,
          body,
          postId
        }
        ) 
        setComments([...comments, test])
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