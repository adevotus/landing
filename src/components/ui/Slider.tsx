
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slider() {
    return (
        <Carousel autoPlay interval={2000}>


            <div>
                <div className="single-slider">
                    <div className="trending-top mb-30">
                        <div className="trend-top-img">
                            <img src="./src/assets/img/trending/trending_top2.jpg" alt="Image 1" />
                            <div className="trend-top-cap">
                                <span className="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">Business</span>
                                <h2><a href="latest_news.html" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">Anna Lora Stuns In White At Her Australian Premiere</a></h2>
                                <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms"></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="single-slider">
                    <div className="trending-top mb-30">
                        <div className="trend-top-img">
                            <img src="./src/assets/img/trending/trending_top02.jpg" alt="Image 2" />
                            <div className="trend-top-cap">
                                <span className="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">Business</span>
                                <h2><a href="latest_news.html" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">Anna Lora Stuns In White At Her Australian Premiere</a></h2>
                                <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms"></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <div className="single-slider">
                    <div className="trending-top mb-30">
                        <div className="trend-top-img">
                            <img src="./src/assets/img/trending/trending_top03.jpg" alt="Image 3" />
                            <div className="trend-top-cap">
                                <span className="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">Business</span>
                                <h2><a href="latest_news.html" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">Anna Lora Stuns In White At Her Australian Premiere</a></h2>
                                <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms"></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Add more slides as needed */}
        </Carousel>
    );
}

export default Slider;