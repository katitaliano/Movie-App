import {useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
    // Define state to store user input from search form on the home page
    // With useState, define a state variable (e.g. searchQuery) to hold the current state as a value, and a setter function (e.g. setSearchQuery) - used to update the state.
    const [searchQuery, setSearchQuery] = useState(""); 
    const [movies, setMovies] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Define a  useEffect, passing a function and a dependency array, leaving array empty to run things once.
    // The useEffect only runs when the page reloads
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies) // insert he popular movies into the movies state
            } catch (err) {
                console.log(err) 
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    // Define the function to be called when the search form is submitted
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return
    
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
        setSearchQuery("")   
    };
 
    return (
        // Create a home page component, including a search form and movies grid. 
        // Forms should always be connected to a state via the value property. Must also include an onChange function to be able to update the state. 
        <div className="home"> 
            <form onSubmit = {handleSearch} className = "search-form">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                /> 
                <button type="submit" className = "search-button">Search</button>
            </form> 

            {error && <div className="error-message">{error}</div>} 

            {loading ? (<div className="loading">Loading... </div> ) : (  
            <div className="movies-grid">
                {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && ( 
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>)}
        </div> 
    );
}

export default Home

// map() function = dynamically render an array of objects. Iterates over values in an array and passes it to a function.  
// State: Manages mutable data within a component. Once updated, the component will change and re-render to show the new state. 
// When a state change occurs, the entire component is re-ran or re-rendered. Without state, values would be lost when a component updates. 
// useState hook: Enables functional components to manage state. Declares a state variable inside a functional component. 

    // Array of values to be passed to functions, replaced by API connection
    // const movies = [
    //     {id: 1, title: "John Wick", release_date: "2020"},
    //     {id: 2, title: "Terminator", release_date: "1984"},
    //     {id: 3, title: "The Matrix", release_date: "1998"},
    // ];
