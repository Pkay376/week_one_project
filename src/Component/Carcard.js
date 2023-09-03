import React from 'react'
import luxury from '../images/icon-luxury.svg'
import sedans from "../images/icon-sedans.svg";
import suvs from "../images/icon-suvs.svg";

const Card = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="card sedans">
          <img src={sedans} alt="sedans" />
          <h1>SEDANS</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip
          </p>
          <button>Learn More</button>
        </div>
        <div className="card suvs">
          <img src={suvs} alt="suvs" />
          <h1>SUVS</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button>Learn More</button>
        </div>
        <div className="card luxury">
          <img src={luxury} alt="luxury" />
          <h1>LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy an
            enhanced comfort of a luxury rental and arrive in style
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Card