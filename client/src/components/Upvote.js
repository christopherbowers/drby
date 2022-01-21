import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'

export default function Upvote({ id, upVoteCounter }){
    const [upVote, setUpVote] = useState(upVoteCounter);

    const handleClick = async () => {
        let data = await axios.put(`${BASE_URL}/posts/${id}`, {
            upvote: upVote + 1
        })
        console.log(data.data.upVoteCounter)
        setUpVote(data.data.upVoteCounter)
    }

    return (
        <>
        <h3>{upVoteCounter}</h3>
        <button onClick={() => {handleClick() }}>upvote</button>
        </>
    )
}