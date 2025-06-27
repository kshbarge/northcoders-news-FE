import { Link } from "react-router-dom"

function TopicCard ({topic}){
    const { slug, description, img_url } =topic

    return (
        <Link to={`/topics/${slug}`}>
            <div className="topicCardBox">
                <img src={img_url ? img_url : "https://picsum.photos/id/2/250/300" } className="topicCardImage"/>
                <h3>{slug}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default TopicCard