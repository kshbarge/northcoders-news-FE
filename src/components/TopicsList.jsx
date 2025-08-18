import { useState, useEffect } from "react";
import { getContent } from "../api";
import TopicCard from "./TopicCard";

function TopicsList (){
    const [topicsData, setTopicsData] = useState([]);

    useEffect(() => {
        getContent("topics").then(({topics}) => {
            setTopicsData(topics)
        })
    }, [])

    return (
        <>
          <section>
            <h2>All topics</h2>
          </section>
          <div class="row row-cols-sm-2 row-cols-md-3">
            {topicsData.map((topic) => {
                return <TopicCard key={topic.slug} topic={topic}/>
            })}
          </div>
        </>
    )
}

export default TopicsList