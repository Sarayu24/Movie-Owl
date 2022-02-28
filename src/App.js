import "./styles.css";
import SearchMovies from "./SearchMovies";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Owl</h1>
      <SearchMovies />
      <Footer/>
    </div>
  );
}

export default App;