import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../globals'
import HomeTopic from '../components/HomeTopic'

export default function HomeTest() {

  const { topicId, id } = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [topic1, setTopic1] = useState([])
  const [topic2, setTopic2] = useState([])
  const [topic3, setTopic3] = useState([])
  const [topic4, setTopic4] = useState([])

  const getThreeTopicPosts = () => {

  const endPoints = [
  `${BASE_URL}/topics/home/1`,
  `${BASE_URL}/topics/home/2`,
  `${BASE_URL}/topics/home/3`,
  `${BASE_URL}/topics/home/4`
]
    Promise.all(endPoints.map((endPoint) => axios.get(endPoint))).then(([{data:topic1}, {data:topic2}, {data:topic3}, {data:topic4}]) => {
        setTopic1(topic1)
        setTopic2(topic2)
        setTopic3(topic3)
        setTopic4(topic4)
    })
    // axios.all(endPoints.map((endPoint) =>
    // axios.get(endPoint))).then(
    // //   (data) => console.log(data)
    // axios.spread((topic1, topic2, topic3, topic4) => {
    //     console.log({topic1, topic2, topic3, topic4})
    // })
    // )
    setLoading(false)
  }
//   console.log(topic2)
  useEffect(() => {
    getThreeTopicPosts()
  }, [])

  if (loading) {
    return ( <div>Loading...</div> )
  }

  return (
    <>
    <Wrapper>
        <section>
        <h1>Music</h1>
        {topic1.length > 0 && (
            <div>
                {topic1.map((topic) => (
                    <div key={topic.id}>
                    <Link to={(`/topics/1/posts/${topic.id}`)}>{topic.title}</Link>
                    <p>{topic.postbody}</p>
            </div>
                ))}
                </div>
        )}
        </section>
        <section>
        <h1>Games</h1>
        {topic2.length > 0 && (
            <div>
                {topic2.map((topic) => (
                    <div key={topic.id}>
                    <Link to={(`/topics/2/posts/${topic.id}`)}>{topic.title}</Link>
                    <p>{topic.postbody}</p>
            </div>
                ))}
                </div>
        )}
        </section>
        <section>
        <h1>Random Stuff</h1>
        {topic3.length > 0 && (
            <div>
                {topic3.map((topic) => (
                    <div key={topic.id}>
                    <Link to={(`/topics/2/posts/${topic.id}`)}>{topic.title}</Link>
                    <p>{topic.postbody}</p>
            </div>
                ))}
                </div>
        )}
        </section>
        <section>
        <h1>Cycling</h1>
        {topic4.length > 0 && (
            <div>
                {topic4.map((topic) => (
                    <div key={topic.id}>
                    <Link to={(`/topics/2/posts/${topic.id}`)}>{topic.title}</Link>
                    <p>{topic.postbody}</p>
            </div>
                ))}
                </div>
        )}
        </section>
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
