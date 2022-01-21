import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../globals'


export default function Topic() {

  const { topicId } = useParams()
  const navigate = useNavigate()

  const [topic, setTopic] = useState()
  const [loading, setLoading] = useState(true)

  const [topicTitle, setTopicTitle] = useState()

  console.log(BASE_URL)

  const getTopicPosts = () => {
    axios.get(`${BASE_URL}/topics/${topicId}`)
    .then( res => {
      setTopic(res.data)
      setTopicTitle(res.data[0].Topic.name)
      setLoading(false)
    })
  }

  useEffect(() => {
    getTopicPosts()
  }, [topicId])

  if (loading) {
    return ( <div>Loading...</div> )
  }

  return (
    <>
    <Wrapper>
      <div className="title">
        <h2>{topicTitle}</h2>
        {
          topic.map((topic) => (
            <div key={topic.id}>
            <Link to={(`/topics/${topic.topicId}/posts/${topic.id}`)}>{topic.title}</Link>
            </div>
          ))
        }
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
`
