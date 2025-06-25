import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getContent, patchVotes } from "../api"
import ArticleComments from "./ArticleComments"

function Article ({voteCounter, setVoteCounter}){
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

    function handleVotes() {
        setVoteCounter((currentVoteCounter) => currentVoteCounter + 1)
        patchVotes(articleId, 1).catch((err) => {
            setVoteCounter((currentVoteCounter) => currentVoteCounter - 1)
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
            <button onClick={handleVotes}>↑</button>
            <p>Votes: {votes}</p>
            <button onClick={handleVotes}>↓</button>
            <p>Comments: {comment_count}</p>
          </section>
          <section>
            <ArticleComments/>
          </section>
        </>
    )
}

export default Article