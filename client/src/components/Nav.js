import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/drby.svg'

const Navbar = ({
  topics,
  authenticated,
  toggleAuthenticated,
  setUser,
  authedUser,
}) => {

  const logout = (e) => {
    toggleAuthenticated(false)
    setUser(null)
    localStorage.clear()
  }

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
      <Link to='/createpost'>Create a Post</Link>
      <div className="flex-right">
        <Link to="/user" className="user-link">Hello {authedUser.firstName}</Link>
        <Link to="/" className="profile-link" onClick={logout}>Logout</Link>
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  align-items: center;
  align-content: space-between;
  padding: 5px 10px;

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

  .flex-right {
    margin-left: auto;
  }

  .profile-link {
    background-color: hsl(339, 100%, 79%);
    color: white;
    border: 3px solid transparent;
    border-radius: 6px;
    display: inline-block;
  }

  .profile-link a:hover {
    border: solid 3px hsla(252, 51%, 24%, 1);
  }

  .user-link {
    background-color: hsla(252, 51%, 24%, .5);
    color: white;
    border: 3px solid transparent;
    border-radius: 6px;
    display: inline-block;
  }

  .user-link a:hover {
    border: solid 3px hsla(252, 51%, 24%, 1);
  }

  .logo,
  .logo:hover {
    border: 0;
  }
`
