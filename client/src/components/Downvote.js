import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useParams } from 'react-router-dom'

export default function Downvote({downvote, getPost}){
    const { id } = useParams()
    const [downVoteCounter, setDownVoteCounter] = useState(downvote);
    console.log(downVoteCounter)
    const handleClick = async () => {
        const voteDown = downVoteCounter +1
        let res = await axios.put(`${BASE_URL}/posts/${id}`, {
            downvote: voteDown
        })
        setDownVoteCounter(voteDown)
        getPost()
    }

    return (
        <>
        <h3>{downvote}</h3>
        <button onClick={() => {handleClick() }}>downvote</button>
        </>
    )
}