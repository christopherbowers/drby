import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals';
import styled from 'styled-components';

export default function Comment() {

    const { id, topicId } = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () =>{
        const res = await axios.get(`${BASE_URL}/comments/${id}`)
        console.log(res.data[0].User.firstName);
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
                <h2>{comment.User.firstName}</h2>
                <h3>{comment.body}</h3>
                <h3>{comment.createdAt}</h3>
                <button onClick={() => navigate(`/posts/${id}`)}>Edit</button>
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
