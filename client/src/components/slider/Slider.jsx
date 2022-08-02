import './slider.css'
import h12 from '../../Assets/h12.png'
import { Link } from 'react-router-dom'

export default function Slider() {
    return (
        <div className="container3">
            <div className="wrapper3" >
                <div className="slide3">
                    <div className="imgContainer3">
                        <img className="image3" src={h12} alt='img' />
                    </div>
                    <div className="infocontainer3">
                        <h1 className="title3">Biggest Flash Sale</h1>
                        <p className="desc3">upto 75% OFF across all categories</p>
                        <Link to="/product" className="button3">SHOW NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}