import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import './Home.css';
import { Link } from 'react-router-dom';
import asia from '../Assets/asia.png';
import america from '../Assets/america.png';
import europe from '../Assets/europe.png';
import africa from '../Assets/africa.png';
import oceania from '../Assets/oceania.png';

const Home = () => {
  const backgroundColor = 'linear-gradient(rgba(252, 80, 146, 0.8) 0%, rgba(252, 80, 144, 0.8) 100%)';
  const regionList = [
    { name: 'asia', backgroundImage: `${backgroundColor}, url(${asia})` },
    { name: 'america', backgroundImage: `${backgroundColor}, url(${america})` },
    { name: 'europe', backgroundImage: `${backgroundColor}, url(${europe})` },
    { name: 'africa', backgroundImage: `${backgroundColor}, url(${africa})` },
    { name: 'oceania', backgroundImage: `${backgroundColor}, url(${oceania})` },
  ];

  return (
    <>
      <header className="header">
        <div className="header-title">
          <h1>Your Global Air Quality Resource</h1>
          <p>Breathe Easier with Real-Time Air Quality Information</p>
        </div>
      </header>
      <div className="region-title">COUNTRIES BY REGION</div>
      <div className="region">
        {regionList.map((region) => (
          <div
            key={region.name}
            className="region-box"
            style={{ backgroundImage: region.backgroundImage }}
          >
            <div className="back">
              <BsArrowRightCircle className="back-icon" />
              {' '}
            </div>
            <button type="button" className="region-button">
              <Link to={`/${region.name}`}>{region.name}</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
