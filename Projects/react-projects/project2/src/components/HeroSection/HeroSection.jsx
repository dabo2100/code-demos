import "./HeroSection.css";
import rightImg from "../../assets/Right-Secion.png"
export default function HeroSection() {
    return (
        <div className="col-12 heroSection">
            <div className="container d-flex flex-wrap align-items-center">
                <div className="col-12 col-md-6 left">
                    <h1>Digital Agency</h1>
                    <p>Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
                    <p>Image from <a>FreePik</a></p>
                    <button className="readMore">Read More</button>
                </div>
                <img src={rightImg} />
            </div>
        </div>
    )
}