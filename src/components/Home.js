import React from 'react';
import './Home.css';
import sdata from '../sdata';
import Cards from './Cards';


function ncards(val) {
    return (
        <Cards
            imgsrc={val.imgsrc}
            category={val.category}
            title={val.title}
            link={val.link}
        />
    )
}

function Home(props) {
    return (
        <>
            <div className="home">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOQJg-X1uvMzEP3dF7wjU9XM8rkTFlaiVDQ&usqp=CAU" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://theburgershack.pk/img/slider/slider-1.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YFcMEtdFwgUy-iptBX1CL_0q4DjA9ans0Q&usqp=CAU" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <h1>CHOOSE YOUR FAVOURITE</h1>

                <div className="container">
                    {sdata.map(ncards)}
                </div>

                <div className="footer">
                    <hr />
        COPYRIGHT &copy; AHSAN TARIQ
    </div>
            </div>
        </>
    )
}

export default Home;
