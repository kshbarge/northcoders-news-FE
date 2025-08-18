import { Link } from "react-router-dom"

function TopicCard ({topic}){
    const { slug, description, img_url } =topic

    return (
        <Link to={`/topics/${slug}`}>
            <div class="col-sm">
              <div class="card m-3">
                  <img src={img_url ? img_url : "https://picsum.photos/id/2/250/165" } class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h3 class="card-title">{slug}</h3>
                    <p>{description}</p>
                  </div>
              </div>
            </div>
        </Link>
    )
}

export default TopicCard