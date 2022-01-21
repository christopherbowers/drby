import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

export default function EditComment(){
    const [comment, setComment] = useState({});
    const { id, commentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get(`${BASE_URL}/comments/${commentId}`);
            const comment = res.data
            setComment(comment)
        }
        fetchData();
    }, [id, commentId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const body = event.target.body.value;
        await axios.put(`${BASE_URL}/comments/${commentId}`,
        {
          body
        }
      )
      navigate(-1);
    };

    return (
      <form className='edit-comment' onSubmit={handleSubmit}>
        <input type='text' name='body' placeholder='Edit comment' defaultValue={comment.body} />
        <input type='submit' value='Update Comment' />
      </form>
    )
}
