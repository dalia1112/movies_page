const Nav =()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="navbar-brand ms-5" >Anomine</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
      <li className="nav-item">
        <div className="nav-link">Features</div>
      </li>
      <li className="nav-item">
        <div className="nav-link" >Pricing</div>
      </li>
    
    </ul>
  </div>
</nav>

  )
}
export default Nav
