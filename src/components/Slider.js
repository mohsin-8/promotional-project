import { Carousel } from 'react-bootstrap'
import "../index.css";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOQJg-X1uvMzEP3dF7wjU9XM8rkTFlaiVDQ&usqp=CAU"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://theburgershack.pk/img/slider/slider-1.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YFcMEtdFwgUy-iptBX1CL_0q4DjA9ans0Q&usqp=CAU"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;