import { Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function Header (){
  const {loggedInUser} = useContext(UserContext)
    return (
        <>
          <h1>NC News</h1>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/articles">Articles </Link>
            <Link to="/topics">Topics </Link>
          </nav>
          <p>You are currently logged in as: {loggedInUser.username}</p>
        </>
    )
}

export default Header