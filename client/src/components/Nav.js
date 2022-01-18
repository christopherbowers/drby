import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/drby.svg'

const Navbar = () => {

  // Arry for testing without api set up
  const topics = [
    {
      id: 1,
      name: 'Topic 1',
    },
    {
      id: 2,
      name: 'Topic 2',
    },
    {
      id: 3,
      name: 'Topic 3',
    },
    {
      id: 4,
      name: 'Topic 4',
    },
  ]


  return (
    <Nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="drby" style={{width: '100px'}}/>
      </Link>
      {
        topics.map((topic) => (
          <Link key={ topic.id } to={( `/topics/${ topic.id }` )} >
            { topic.name }
          </Link>
        ))
      }
      <div className="profile-link">
      <Link to="/users/:id">
        🤖
      </Link>
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  align-items: center;
  align-content: space-between;

  a {
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 2px;
    color: hsla(252, 51%, 24%, 1);
    border: 3px solid transparent;
    border-radius: 8px;
  }

  a:hover {
    border: solid 3px hsla(252, 51%, 24%, 1);
  }

  .profile-link {
    margin-left: auto;
  }

  .profile-link a {
    background-color: hsl(339, 100%, 79%);
    color: white;
    border: 3px solid transparent;
    border-radius: 50%;
    display: inline-block;
    height: 40px;
    width: 40px;
  }

  .profile-link a:hover {
    border: solid 3px hsla(252, 51%, 24%, 1);
  }

  .logo,
  .logo:hover {
    border: 0;
  }
`
