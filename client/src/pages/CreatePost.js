import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Loading from '../components/Loading'


export default function CreatePost({user, authedUser}){

    const navigate = useNavigate()

    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      axios.get(`${BASE_URL}/topics/`)
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
      const userId = authedUser.id;
      const topicId = event.target.topic.value;

      await axios.post(
        `${BASE_URL}/posts`,
        {
          title,
          postbody,
          imgURL,
          topicId,
          userId
        }
      )
      navigate(`/topics/${topicId}`)
    };


    if (loading) {
        return (<><Loading /></>)
    }

    return (
      <div className="form-wrapper">
      <form className='create-post' onSubmit={handleSubmit}>
        <div>
          <select name='topic'>
          {
          topics.map((topic) => (
            <option key={topic.id} value={topic.id}>{topic.name}</option>
          ))
          }
          </select>
        </div>
        <div><input type='text' name='title' placeholder='Title Name' /></div>
        <div><input type='text' name='postbody' placeholder='...' /></div>
        <div><input type='text' name='imgURL' placeholder='Image URL' /></div>
        <div><input type='submit' value='Create Post' /></div>
      </form>
      </div>
    )
}
