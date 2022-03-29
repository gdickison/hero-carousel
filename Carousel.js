const HeroCarousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide relative drop-shadow md:drop-shadow-xl" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="/images/hero_01.jpg"
            className="block w-full aspect-video md:aspect-[16/7]"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute bottom-1/4 text-center">
            <h5 className="text-5xl uppercase font-Jost">Wide Open Spaces</h5>
            <p>Bring new life to an old living space</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="/images/hero_02.jpg"
            className="block w-full aspect-video md:aspect-[16/7]"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute top-1/2 text-center">
            <h5 className="text-5xl uppercase font-Jost">Kitchens For Family Life</h5>
            <p>Space where you can all live life together</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="images/hero_03.jpg"
            className="block w-full aspect-video md:aspect-[16/7]"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute bottom-3/4 text-center">
            <h5 className="text-5xl uppercase font-Jost">Custom Homes</h5>
            <p>Build your dream</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default HeroCarousel
