import { Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function Header (){
  const {loggedInUser} = useContext(UserContext)
    return (
        <div class="container-fluid">
          <h1 class="text-center">NC News</h1>
          <nav class="navbar bg-danger p-3 mb-2">
            <Link to="/" class="nav-link link-light">Home </Link>
            <Link to="/articles" class="nav-link link-light">Articles </Link>
            <Link to="/topics" class="nav-link link-light">Topics </Link>
            <span class="navbar-text text-white d-flex">You are currently logged in as: {loggedInUser.username}</span>
          </nav>
        </div>
    )
}

export default Header