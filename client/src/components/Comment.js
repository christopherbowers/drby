import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals';

export default function Comment() {

    const { comment, id } = useParams();
    const navigate = useNavigate();

    const [comment, setComment] = useState();
    const [loading, setLoading] = useState(true);

    const getComment = () => {
        axios.get(`${BASE_URL}/comments/${id}`)
    }
}
