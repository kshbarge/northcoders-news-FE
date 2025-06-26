import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import ErrorPage from "./ErrorPage"
import ArticlesList from "./ArticlesList"
import TopicsList from "./TopicsList"
import Article from "./Article"

function Content (){
    const [voteCounter, setVoteCounter] = useState(0)
    const [error, isError] =useState(null)
    return (
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/articles/:articleId" element={<Article voteCounter={voteCounter} setVoteCounter={setVoteCounter} error={error} isError={isError} />} />
            <Route path="/articles/:articleId/comments" element={<Article />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/topics/:topicName" element={<ArticlesList />} />
            <Route path="/topics" element={<TopicsList />} />
          </Routes>
        </section>
    )
}

export default Content