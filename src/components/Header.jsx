import { Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function Header (){
  const {loggedInUser} = useContext(UserContext)
    return (
        <>
          <div class="d-flex justify-content-center align-items-center bg-danger bg-gradient pt-2">
            <img src="../public/icons8-morning-news-64.png" alt="Northcoders news logo" class="px-1"/>
            <h1 class="text-light px-1">NC News</h1>
          </div>
          <nav class="navbar rounded-bottom-5 navbar-expand-lg bg-danger px-3 pb-3 mb-2">
            <div class="container-fluid">
              <Link to="/" class="navbar-brand nav-link link-light">
                Home 
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/articles" class="nav-link link-light">Articles </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/topics" class="nav-link link-light">Topics </Link>
                  </li>
                </ul>
                <span class="navbar-text text-white d-flex">You are currently logged in as: {loggedInUser.username}</span>
              </div>
            </div>
          </nav>
        </>
    )
}

export default Header