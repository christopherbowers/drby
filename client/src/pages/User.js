import styled from 'styled-components'

export default function User({authedUser}) {
  return (
    <Wrapper>
      <h1>👋 {authedUser.firstName}</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 3rem;
`
