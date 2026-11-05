import {Routes, Route} from "react-router-dom"; // define each individual URL path as a Route, listed inside of Routes, mapping to the required page/component. 
import { MovieProvider } from "./contexts/MovieContext"; // provides a context by wrapping the app, used to access and manage the favorites state (holds current favorite films)
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider> 
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  ); 
}
export default App;

// App.jsx is where the single page application is actually constructed, using jsx. 
// Routes are commonly defined in App.jsx, or in dedicated files like router.jsx or routes.jsx in larger projects. 
// The key point is they wrap page components within <Route> elements.
// BrowserRouter acts like context — specifically, it provides router information (location, navigation methods, etc.) to all descendant components via React Context under the hood.