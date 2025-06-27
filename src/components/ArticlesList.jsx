import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getContent } from "../api";
import ArticleCard from "./ArticleCard";

function ArticleList(){
    const [articlesData, setArticlesData] = useState([]);
    const { topicName } = useParams()

    useEffect(() => {
        let contentQuery = "articles"
        if(topicName){
          contentQuery += `?topic=${topicName}`
        }
        getContent(contentQuery).then(({articles}) => {
            setArticlesData(articles)
        })
    }, [topicName])

    return (
        <>
          <section>
            {topicName ? <h2>{topicName}</h2> : <h2>All articles</h2>}
            <p>I'm a placeholder for the all articles/sort by bar</p>
          </section>
          <section>
            {articlesData.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
          </section>
        </>
    )
}

export default ArticleList