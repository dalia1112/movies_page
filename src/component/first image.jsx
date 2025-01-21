function FirstImage(){
  return(
    <div>
      <div className="mx-5 my-3 fs-3 text-white">
        Explore
      </div>
      <div className=" text-secondary mb-5 ms-5">
      What are you gonna watch today ?
      </div>
      <div className='w-70 mx-5 border border-primary position-relative' style={{height:'500px' }}>
        <img className='w-100 h-100 position-absolute ' src={require('../download.jfif')} alt="img"/>
      </div>
      <div className="mx-5 my-3 fs-3  text-white">New Releases</div>
    
    </div>
    
    
  )
}
export default FirstImage