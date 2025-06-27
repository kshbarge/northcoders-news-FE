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
          <section>
            {topicsData.map((topic) => {
                return <TopicCard key={topic.slug} topic={topic}/>
            })}
          </section>
        </>
    )
}

export default TopicsList