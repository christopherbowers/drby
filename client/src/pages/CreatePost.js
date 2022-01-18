import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export default function CreatePost(){
    const { id } = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const postbody = event.target.postbody.value;
        const imgURL = event.target.imgURL.value;

        const test = await axios.post(
            `http://localhost:3001/api/posts`
        )
    }
}