import React from 'react';
import '../index.css';
import Cards from './Cards'
import Sdata from '../Sdata'
import Slider from './Slider';

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


function Home() {
    return (
        <>

            <Slider />
            <br></br><br></br>
            <h1>CHOOSE YOUR FAVOURITE</h1>
            <br></br><br></br>
            <div className="container">
                {Sdata.map(ncards)}
            </div>
            <div className="footer">
                <hr />
        COPYRIGHT &copy; AHSAN TARIQ
    </div>

        </>
    );
}

export default Home;