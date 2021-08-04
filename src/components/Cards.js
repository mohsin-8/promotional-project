import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Cards(props) {
    return (
        <div>
            <div class="box">
                <div class="image">
                    <img src={props.imgsrc} alt="" />
                </div>
                <div class="info">
                    <h3 class="title">
                        {props.title}</h3>
                    <div class="subInfo">
                        <div class="price">{props.category}</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <Link to="/paymentmethod">
                            <button className="btn btn-primary">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
