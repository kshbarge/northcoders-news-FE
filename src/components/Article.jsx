import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getContent } from "../api"
import ArticleComments from "./ArticleComments"

function Article (){
    const [singleArticleData, setSingleArticleData] = useState({})
    const { articleId } = useParams()

    useEffect(() => {
        getContent(`articles/${articleId}`).then(({article}) => {
            setSingleArticleData(article)
        })
    }, [articleId])

    const { author, title, body, topic, created_at, votes, article_img_url, comment_count} = singleArticleData
    const humanDate = new Date(created_at)

    return (
        <>
          <section>
            <h2>{title}</h2>
            <h3>By {author} in {topic} on {humanDate.toString()}</h3>
            <img src={article_img_url}/>
            <p>{body}</p>
            <p>Votes: {votes} Comments: {comment_count}</p>
          </section>
          <section>
            <ArticleComments/>
          </section>
        </>
    )
}

export default Article