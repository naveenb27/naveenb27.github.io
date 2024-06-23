import dhoni from './assets/dhoni-records-odi.webp'


function Card(props){
    return(
        <>
            <div className="card-container">
                <img className="card-img" src={props.image} alt="image" />
                <h1 className="card-name" >{props.name}</h1>
                <p className="card-desc">{props.desc}</p>
            </div>
        </>
    )
}

// Card.protoTypes = {
//     image: PropTypes.image,
//     name: PropTypes.string,
//     desc: PropTypes.string,
// }

Card.defaultProps = {
    image: dhoni,
    name: "Dhoni",
    desc: "Indian",
};



export default Card;