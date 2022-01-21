import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useParams } from 'react-router-dom'

export default function Upvote({upvote, getPost}){
    const { id } = useParams()
    const [upVoteCounter, setUpVoteCounter] = useState(upvote);
    console.log(upVoteCounter)
    const handleClick = async () => {
        const voteUp = upVoteCounter +1
        let res = await axios.put(`${BASE_URL}/posts/${id}`, {
            upvote: voteUp
        })
        setUpVoteCounter(voteUp)
        getPost()
    }

    return (
        <>
        <h3>{upvote}</h3>
        <button onClick={() => {handleClick() }}>upvote</button>
        </>
    )
}