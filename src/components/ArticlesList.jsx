import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getContent } from "../api";
import ArticleCard from "./ArticleCard";

function ArticleList(){
    const [articlesData, setArticlesData] = useState([]);
    const [selectedSort, setSelectedSort] = useState('created_at');
    const [selectedOrder, setSelectedOrder] = useState('desc');
    const { topicName } = useParams()

    useEffect(() => {
        let contentQuery = `articles?sort_by=${selectedSort}&&order=${selectedOrder}`
        if(topicName){
          contentQuery += `&&topic=${topicName}`
        }
        console.log(contentQuery)
        getContent(contentQuery).then(({articles}) => {
            setArticlesData(articles)
        })
    }, [topicName, selectedSort, selectedOrder])

    return (
        <>
          <section>
            {topicName ? <h2>{topicName}</h2> : <h2>All articles</h2>}
            <form method="get">
              <label htmlFor="sortOptions">Sort by:</label>
              <select name="sortOptions" id="sortOptions" value={selectedSort} onChange={e => setSelectedSort(e.target.value)}>
                <option value="created_at">Created at</option>
                <option value="votes">Votes</option>
                <option value="topic">Topic</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
              </select>
              <label htmlFor="orderOptions">Order by:</label>
              <select name="orderOptions" id="orderOptions" value={selectedOrder} onChange={e => setSelectedOrder(e.target.value)}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </form>
          </section>
          <section>
            <div class="row row-cols-sm-2 row-cols-md-3">
            {articlesData.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
            </div>
          </section>
        </>
    )
}

export default ArticleList