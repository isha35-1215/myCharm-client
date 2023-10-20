
const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[300px] lg:h-[500px]">
                <img src="https://i.ibb.co/mtRR9LV/banner1.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[300px] lg:h-[500px]">
                <img src="https://i.ibb.co/gmVhQxW/banner2.jpg"  className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[300px] lg:h-[500px]">
                <img src="https://i.ibb.co/KN0gzDw/banner3.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
};

export default Slider;