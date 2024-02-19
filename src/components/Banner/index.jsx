function Banner({showTitle, overlayOpacity, backgroundImageUrl}) {
    return (
      <div className="background_container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className='overlay' style={{ opacity: overlayOpacity }}></div>
        {showTitle && <h1 className='h1_home h1_hidden'>Chez vous, partout et ailleurs</h1>}
      </div>
    );
  }
  
  export default Banner;