import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'


export default function EditPost(){
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get(`${BASE_URL}/posts/${id}`);
            const post = res.data;
            setPost(post)
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const postbody = event.target.postbody.value;
        const imgURL = event.target.imgURL.value;

        await axios.put(`${BASE_URL}/posts/${id}`,
        {
            title,
            postbody,
            imgURL
        }
        )
        navigate(-1);
    };

    if (Object.keys(post).length === 0) {
        return <p>Loading...</p>;
    }

    return (
      <div className="form-wrapper">
        <form className='edit-post' onSubmit={handleSubmit}>
          <div><input type='text' name='title' placeholder='Title Name' defaultValue={``} /></div>
          <div><input type='text' name='postbody' placeholder='...' defaultValue={``} /></div>
          <div><input type='text' name='imgURL' placeholder='Image URL' defaultValue={``} /></div>
          <div><input type='submit' value='Update Post' /></div>
        </form>
      </div>
    );
}
