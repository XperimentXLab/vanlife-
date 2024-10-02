import { Link } from "react-router-dom";

function Home () {
  return (
    <div className="home-div-big"> 
      <div className="home-div">
        <h3>You got the travel plans, we got the travel vans.</h3>
        <p>
          Add adventure to your life by joining the #vanlife movement.
          <br />
          Rent the perfect van to make your perfect road trip.
        </p>
        <Link to="/vans">
          <button className="home-find-btn">Find your van</button>
        </Link>
      </div>
    </div>
  );
}

export default Home
