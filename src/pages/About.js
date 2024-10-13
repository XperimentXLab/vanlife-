import { Link } from "react-router-dom"

function About () {
  return (
    <div className="about-div-big">
      <img className="about-img" src={"./images/van-night.avif"} alt="vanlife"></img>
      <div className="about-div">
        <h4>
          Don't sequeeze in a sedan when you could relax in a van.
        </h4>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        <br />
        (Hitch costs extra &#128527;)
        </p>
        <p>
          Our team is full of vanlife ethuisiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="about-card">
          <h5>
            You destination is waiting.
            <br />
            Your van is ready.
          </h5>
          <Link to='/vans'>
            <button className="about-vans-btn">Explore our vans</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About