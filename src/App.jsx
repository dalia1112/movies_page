import MovieList from "./views/movielist";
import Nav from "./component/nav";
import FirstImage from "./component/first image";

function App() {
  
  return (
    <div className="container">
      <Nav />
      <FirstImage />
      <div
        className="overflow-x-auto overflow-y-hidden ms-5"
        style={{ height: "550px", maxWidth: "100%", whiteSpace: "nowrap" }}
      >
        <MovieList />
      </div>
    </div>
  );
}

export default App;
