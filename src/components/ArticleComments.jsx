import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { getContent, postComment } from "../api"

function ArticleComments ({error, isError, loading, isLoading}){
    const [commentData, setCommentData] = useState([])
    const [newComment, setNewComment] = useState('')
    const { articleId } = useParams()
    const { loggedInUser } = useContext(UserContext)

    useEffect(() => {
        getContent(`articles/${articleId}/comments`).then(({comments}) => {
            setCommentData(comments)
        })
    }, [articleId, addNewComment])

    function addNewComment(e) {
      e.preventDefault()
      isError(null)
      isLoading(true)
      const nameOfUser = loggedInUser.username
      postComment(articleId, nameOfUser, newComment).then((returnedNewComment) => {
        setCommentData((currentComments) => [returnedNewComment, ...currentComments])
        setNewComment("")
        isLoading(false)
      })
      .catch((err) => {
        isError(err.msg)
        isLoading(false)
      })
    }

    return (
        <>
          <form method="post" onSubmit={addNewComment}>
            <label htmlFor="commentArea">
              <textarea value={newComment} onChange={e => setNewComment(e.target.value)} name="commentContent" id="commentArea" placeholder="What are your thoughts?" spellCheck></textarea>
            </label>
            <button type="submit">Post comment</button>
            {error ? <p>{error}</p> : null}
            {loading ? <p>Loading...</p> : null}
          </form>
          {commentData.map((comment) => {
            const { author, body, created_at, votes, comment_id } = comment
            const humanDate = new Date(created_at)

            return (
                <div className="comment-box" key={comment_id}>
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