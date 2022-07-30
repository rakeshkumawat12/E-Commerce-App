import './slider.css'
import h12 from '../../Assets/h12.png'

export default function Slider() {
    return (
        <div className="container2">
            <div className="wrapper" >
                <div className="slide">
                    <div className="imgContainer">
                        <img className="image" src={h12} alt='img' />
                    </div>
                    <div className="infocontainer">
                        <h1 className="title">Biggest Flash Sale</h1>
                        <p className="desc">upto 75% OFF across all categories</p>
                        <button className="button">SHOW NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}