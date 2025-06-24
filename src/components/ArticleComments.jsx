import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getContent } from "../api"

function ArticleComments (){
    const [commentData, setCommentData] = useState([])
    const { articleId } = useParams()

    useEffect(() => {
        getContent(`articles/${articleId}/comments`).then(({comments}) => {
            setCommentData(comments)
        })
    }, [articleId])

    return (
        <>
          {commentData.map((comment) => {
            const { author, body, created_at, votes } = comment
            const humanDate = new Date(created_at)

            return (
                <div className="comment-box">
                  <h3>{author} at {humanDate.toString()}</h3> 
                  <p>{body}</p>
                  <p>Votes: {votes}</p>
                </div>
            )
          })}
        </>
    )
}

export default ArticleComments