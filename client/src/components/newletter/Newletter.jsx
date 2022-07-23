import { Send } from "@material-ui/icons";
import './newletter.css'

export default function Newletter() {
    return (
        <div className="container9">
            <h1 className="title">Newsletter</h1>
            <div className="desc">Get timely updates from your favorite products.</div>
            <div className="inputContainer">
                <input className="input" placeholder="Your email" />
                <button className="Button">
                    <Send />
                </button>
            </div>
        </div>
    )
}
