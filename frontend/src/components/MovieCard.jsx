import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}) { 
    // access values from the favorites state via context provider
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id) // is current film a favorite? If so change heart to red (see button in the return)
    
    function onFavClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id) 
        else addToFavorites(movie)
    }
    
    return (
        <div className="movie-card">
            <div className="movie-poster"> 
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavClick}>
                    ❤︎
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>)
}

export default MovieCard

// className={`"favorite-btn" ${favorite ? "active" : ""}`} means "if favorite, add active class to className", active css class makes heart red. 
