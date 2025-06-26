import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getContent, patchVotes } from "../api"
import ArticleComments from "./ArticleComments"

function Article ({voteCounter, setVoteCounter, error, isError, loading, isLoading}){
    const [singleArticleData, setSingleArticleData] = useState({})
    const { articleId } = useParams()

    useEffect(() => {
        getContent(`articles/${articleId}`).then(({article}) => {
            setSingleArticleData(article)
            setVoteCounter(article.votes)
        })
    }, [articleId])

    const { author, title, body, topic, created_at, votes, article_img_url, comment_count} = singleArticleData
    const humanDate = new Date(created_at)

    function handleVotesPos() {
        setVoteCounter((currentVoteCounter) => currentVoteCounter + 1)
        isError(null)
        patchVotes(articleId, 1).catch((err) => {
            setVoteCounter((currentVoteCounter) => currentVoteCounter - 1)
            isError("Your vote could not be added.")
        })
    }

    function handleVotesNeg() {
        setVoteCounter((currentVoteCounter) => currentVoteCounter - 1)
        isError(null)
        patchVotes(articleId, -1).catch((err) => {
            setVoteCounter((currentVoteCounter) => currentVoteCounter + 1)
            isError("Your vote could not be added.")
            console.log(err.msg)
        })
    }

    return (
        <>
          <section>
            <h2>{title}</h2>
            <h3>By {author} in {topic} on {humanDate.toString()}</h3>
            <img src={article_img_url}/>
            <p>{body}</p>
            <button onClick={handleVotesPos}>↑</button>
            <p>Votes: {voteCounter}</p>
            <button onClick={handleVotesNeg}>↓</button>
            {error ? <p>{error}</p> : null}
            <p>Comments: {comment_count}</p>
          </section>
          <section>
            <ArticleComments error={error} isError={isError} loading={loading} isLoading={isLoading}/>
          </section>
        </>
    )
}

export default Article