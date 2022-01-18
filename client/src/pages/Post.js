import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export default function Post() {

  const { topic, id } = useParams()

  return (
    <Wrapper>
      <div className="title">
        <h2>{ topic }</h2>
      </div>
      <section>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .title h2 {
    text-transform: capitalize;
  }
`
