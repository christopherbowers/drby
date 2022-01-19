import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export default function Post() {

  const { topic, id, topicId} = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true)

  const getPost = () => {
    axios.get(`http://localhost:3001/api/posts/${id}`)
    .then( res => {
      setPost(res.data)
      setLoading(false)
    })
  }

  const deletePost = (e) => {
    e.preventDefault()
    axios.delete(`${process.env.REACT_APP_BASE_URL}/api/posts/${ e.target.value }`)
    navigate('/')
  }

  useEffect(() => {
    getPost()
  }, [id])


  if (loading) {
    return ( <div>Loading...</div> )
  }

  return (
    <>
    <Wrapper>
      <div className="title">
        <h2>{ topic }</h2>
      </div>
      <section>
        <h3>{post.title}</h3>
        <p>{post.postbody}</p>
      </section>
      <button onClick={() => navigate(`/topics/${topicId}/posts/${id}/edit`)}>Edit</button>
      <button onClick={(e) => deletePost(e)} value={ post.id }>Delete</button>
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
