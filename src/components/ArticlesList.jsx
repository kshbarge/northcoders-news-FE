import { useState } from "react"
import { useEffect } from "react"
import { getContent } from "../api";
import ArticleCard from "./ArticleCard";

function ArticleList(){
    const [articlesData, setArticlesData] = useState([]);

    useEffect(() => {
        getContent("articles").then(({articles}) => {
            setArticlesData(articles)
        })
    }, [])

    return (
        <>
          <section>
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