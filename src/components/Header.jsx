import { Link } from "react-router-dom"

function Header (){
    return (
        <>
          <h1>NC News</h1>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/articles">Articles </Link>
            <Link to="/topics">Topics </Link>
          </nav>
        </>
    )
}

export default Header