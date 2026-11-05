// provide some global state and helper function that can be used in multiple places across the app.
// this is our state manager for movie favourites
// a context will allow state to be globally available to anything that is within the provided context
import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// Create a provider 
// Provides state to any of the components that are wrapped inside of it. 
// Children is a reserved prop when you write a component, and is anything that is inside the component that you rendered. 
// Anything put inside the provider will be children
export const MovieProvider = ({children}) => {
    // create some state to hold current favorites
    const [favorites, setFavorites] = useState([])
    
    // local storage allows us to store values inside the browser as strings
    // create useEffect to look for existing favs in local storage. using string key i.e. "favorites"
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs)) // store all info in an array that is stored as a JSON string in local storage
    }, [])                                                  // use json.parse to convert back to an array

    // any time the favorites state changes, update favorites in local storage
    useEffect (() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        //use the setter function to update the state
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))// recreate the list with the specified movie filtered out (i.e. removed)
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)

    }

    // specify all the values to be provided to the children, inside a JS object
    // object name "value" = keyword to put inside the provider so that children can access the object's values
    const value = { 
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

//use this context in App.jsx