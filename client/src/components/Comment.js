import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals';
import styled from 'styled-components';

export default function Comment() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState({});
    // const []
    const [loading, setLoading] = useState(true);

    console.log(id)
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`${BASE_URL}/comments/${id}`)
            console.log(res.data);
            console.log(res.data[0].User.firstName);
            setUsers(res.data.User);
            setComments(res.data);
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
                <h2>{comment.User.firstName}</h2>
                <h3>{comment.body}</h3>
                <h3>{comment.createdAt}</h3>
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
