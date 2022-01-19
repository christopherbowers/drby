import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function CreatePost({user}){
  const { id } = useParams();
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:3001/api/topics/`)
    .then(res=>{
      setTopics(res.data)
      setLoading(false)
    })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const postbody = event.target.postbody.value;
    const imgURL = event.target.imgURL.value;
    const userId = user.id;
    const topicId = event.target.topic.value;

    const test = await axios.post(
      `http://localhost:3001/api/posts`,
      {
        title,
        postbody,
        imgURL,
        topicId,
        userId
      }
    )
  };


  if (loading) {
    return (<div>loading...</div>)
  }

  return (
    <form className='create-post' onSubmit={handleSubmit}>
      <select name='topic'>
      {
      topics.map((topic) => (
        <option key={topic.id} value={topic.id}>{topic.name}</option>
      ))
      }
      </select>
      <input type='text' name='title' placeholder='Title Name' />
      <input type='text' name='postbody' placeholder='...' />
      <input type='text' name='imgURL' placeholder='Image URL' />
      <input type='submit' value='Create Post' />
    </form>
  )
}
