import './slider.css'

export default function Slider() {
    return (
        <div className="container2">
            <div className="wrapper" >
                <div className="slide">
                    <div className="imgContainer">
                        <img className="image" src="https://i.ibb.co/DG69bQ4/1.png" alt='img' />
                    </div>
                    <div className="infocontainer">
                        <h1 className="title">SUMMER SALE</h1>
                        <p className="desc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</p>
                        <button className="button">SHOW NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}