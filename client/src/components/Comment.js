import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals';
import styled from 'styled-components';

export default function Comment() {

    const { id, postId } = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`${BASE_URL}/comments/`);
            const comments = res.data;
            console.log(comments);
            setComments(comments);
            setLoading(false);
        }
        fetchData()
    }, []);

    if (loading) {
        return ( <div>Loading...</div> )
      }

    return (
        <>
        <Wrapper>
            {comments.map((comment) => (
            <div key={comment.id}>
                <h1>{comment.User.firstName}</h1>
                <h2>{comment.body}</h2>
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
