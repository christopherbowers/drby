import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Comment from '../components/Comment'
import CreateComment from '../components/CreateComment'
import Upvote from '../components/Upvote'
import Downvote from '../components/Downvote'


export default function Post({authedUser}) {

  const { topic, id, topicId } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true)

  const getPost = () => {
    axios.get(`${BASE_URL}/posts/${id}`)
    .then( res => {
      setPost(res.data)
      setLoading(false)
    })
  }

  const deletePost = (e) => {
    e.preventDefault()
    axios.delete(`${BASE_URL}/posts/${ e.target.value }`)
    navigate(`/topics/${topicId}`)
  }

  useEffect(() => {
    getPost()
  }, [id])

  
  if (loading) {
    return ( <div>Loading...</div> )
  }
  // console.log(post)


  return (
    <>
    <Wrapper>
      <div className="title">
        <h2>{ topic }</h2>
      </div>
      <section>
        <h3>{post.title}</h3>
        <p>{post.createdAt}</p>
        <p>{post.postbody}</p>
        <p>{post.imgURL}</p>
      </section>
      <Upvote upvote={post.upvote} getPost={getPost}/>
      <Downvote downvote={post.downvote} getPost={getPost} />
      <button onClick={() => navigate(`/topics/${topicId}/posts/${id}/edit`)}>Edit</button>
      <button onClick={(e) => deletePost(e)} value={ post.id }>Delete</button>
      <div className="comment">
      <Comment />
      <CreateComment authedUser={authedUser}/>
      </div>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  .title h2 {
    text-transform: capitalize;
  }

  color: hsla(156, 20%, 5%, 1);

  padding: 20px;

`
