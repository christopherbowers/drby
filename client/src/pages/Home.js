import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Wrapper>
          <h1>👋 from home</h1>
          <p>
          <Link to="/login">Login</Link>
          </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
