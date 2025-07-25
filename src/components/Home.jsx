import { Link } from "react-router-dom"

function Home (){
    return (
        <>
          <h2>Welcome to NC News!</h2>
          <p>NC news is a cross between your favourite news sites and social media. Browse through and read articles, vote on your faves, and comment to let others know what you think!</p>
          <Link to="/articles">
            <button type="button" class="btn btn-danger btn-lg">To articles</button>
          </Link>
        </>
    )
}

export default Home