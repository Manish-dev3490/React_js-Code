

// i am making resta  card component
export const Restacard=(props)=>{
    const {title,description,src}=props;
    return (
        <div className="Resta-card">
                <img src={src} />
                <div className="card-body">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
    )
}