import { Link } from "react-router-dom"

function ArticleCard ({article}){
    const { article_img_url, title, author, topic, votes, comment_count, created_at, article_id } = article
    const humanDate = new Date(created_at)


    return (
        <Link to={ `/articles/${article_id}`}>
          <div className="articleCardBox">
              <img src={article_img_url} className="articleCardImage"/>
              <h3>{title}</h3>
              <p>{author}</p>
              <p>{topic}</p>
              <p>Votes: {votes}</p>
              <p>Comments: {comment_count}</p>
              <p>{humanDate.toString()}</p>
          </div>
        </Link>
    )
}

export default ArticleCard