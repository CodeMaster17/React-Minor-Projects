import '../css/Cards.css';
function Cards(props) {
    return (
        <div className="Cards">
            {/* console.log("Hi"); */}

            <img src={props.imgsrc} alt="" className="movieImage" />
            <div className="cardInfo">
                <h3 className="filmName">{props.movieName}</h3>
                <h4>{props.MovieInfo}</h4>
                <button><a href=""></a>Watch Here</button>
            </div>
        </div>
    );
}
export default Cards;
