import { Link } from "react-router-dom"

function ArticleCard ({article}){
    const { article_img_url, title, author, topic, votes, comment_count, created_at, article_id } = article
    const humanDate = new Date(created_at)


    return (
        <Link to={ `/articles/${article_id}`}>
          <div class="card">
            <img src={article_img_url} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h3 class="card-title">{title}</h3>
              <p>By {author} in {topic}</p>
            </div>
            <div class="card-footer">
              <p>Votes: {votes}</p>
              <p>Comments: {comment_count}</p>
              <p>{humanDate.toString()}</p>
            </div>
          </div>
        </Link>
    )
}

export default ArticleCard