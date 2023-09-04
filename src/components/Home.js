import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const regionList = [
    { name: 'asia' },
    { name: 'america' },
    { name: 'europe' },
    { name: 'africa' },
    { name: 'oceania' },
  ];

  return (
    <>
      <header className="header">
        <div className="header-title">
          <h1>Your Global Air Quality Resource</h1>
          <p>Current, Forecast, and Historical Air Pollution Data at Your Fingertips</p>
          <span>Breathe Easier with Real-Time Air Quality Information</span>
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
