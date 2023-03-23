function Card({title, description, img, arrow}) {
    return <div className="models-block">
        <img src={img}/>
        <div className="models-lower">
            <div className="models-description">
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
        </div>
        <div className="arrow">
        <img src={arrow}/>
        </div>
        </div>
    </div>
}
export default Card