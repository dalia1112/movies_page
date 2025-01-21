const MovieItem = ({ movie }) => {
  return (
  
  <>
        <div
        className=" position-relative d-inline-block border border-white  m-3  overflow-hidden"
        style={{ height: "500px" ,width:'260px', borderRadius:'20px'} }
      >
        <img
          className="  w-100 h-100 "
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="images"
        />
      
        <div className="position-absolute bottom-0   ps-2 text-center w-100 h-100"  style={{
          paddingTop:'400px',
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5))",
        }}>
          
          </div>
      </div>
  </>
  
  );
};
export default MovieItem;


