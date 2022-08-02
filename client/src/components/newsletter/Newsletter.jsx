import { Send } from "@material-ui/icons";
import './newsletter.css'

export default function Newsletter() {
    return (
        <div className="container8">
            <h1 className="title8">Newsletter</h1>
            <div className="desc8">Get timely updates from your favorite products.</div>
            <div className="inputContainer8">
                <input className="input8" placeholder="Your email" />
                <button className="button8">
                    <Send />
                </button>
            </div>
        </div>
    )
}
