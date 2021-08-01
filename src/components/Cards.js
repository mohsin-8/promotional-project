// import react from 'react'
// import {useHistory} from 'react-router-dom'
<link rel="stylesheet" href="index.css" />


function Cards(props) {
    // const history = useHistory()
    // const load = ()=>{
    //     history.push('./javaid')
    // }

    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <section>
                <div className="cards">
                    <div className="card">
                        <img src={props.imgsrc} alt="Title" />
                    </div>
                    <div className="card-info">
                        <h3 className="card-title">{props.title}</h3>
                        <div className="card-category">{props.category}</div>
                        <a href={props.link}>
                            <button> Order </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards;