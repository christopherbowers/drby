import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals';
import styled from 'styled-components';
import EditComment from './EditComment';

export default function Comment() {

    const { id, topicId } = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () =>{
        const res = await axios.get(`${BASE_URL}/comments/${id}`)
        setUsers(res.data.User);
        setComments(res.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    const commentDelete = async (commentId) => {
        await axios.delete(`${BASE_URL}/comments/${commentId}`)
        .then( res => {
        navigate(`/topics/${topicId}/posts/${id}`)
        fetchData()
        }) .catch((error) =>{
            console.log(error)
        })
    }

    if (loading) {
        return ( <div>Loading...</div> )
      }

    return (
        <>
        <Wrapper>
            {comments.map((comment) => (
            <div key={comment.id}>
                <p>{comment.User.firstName}</p>
                <p>{comment.body}</p>
{/*                 <h3>{comment.createdAt}</h3> */}
                <button onClick={() => navigate(`/topics/${topicId}/posts/${id}/${comment.id}/edit`)}>Edit</button>
                <button onClick={(e) => {e.preventDefault(); commentDelete(comment.id)}}>Delete</button>
            </div>
            ))}
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
  .title h2 {
    text-transform: capitalize;
  }

  color: hsla(156, 20%, 5%, 1);
`
