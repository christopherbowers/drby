import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
export default function Home() {
    return (
      <>
        <Nav />
        <Wrapper>
          <h1>👋 from home</h1>
        </Wrapper>
      </>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
