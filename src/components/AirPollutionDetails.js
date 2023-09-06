import React, { useEffect } from 'react';
import './AirPollutionDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { BsArrowLeftCircle } from 'react-icons/bs';
import fetchAirPollution from '../redux/airPollution/airPollutionApi';

const AirPollutionDetails = () => {
  const { country, lat, lon } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.airPollution);
  const currentDate = new Date();
  const components = data?.list[0].components;
  const main = data?.list[0].main;

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  function getBackgroundColor(aqi) {
    if (aqi <= 1) {
      return 'green';
    } if (aqi <= 2) {
      return 'yellowgreen';
    } if (aqi <= 3) {
      return 'orange';
    } if (aqi <= 4) {
      return 'orangered';
    }
    return 'red';
  }

  useEffect(() => {
    dispatch(fetchAirPollution({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <>
      <header className="header">
        <button className="btn-icon-left" type="button" onClick={() => navigate(-1)}>
          <BsArrowLeftCircle className="icon-left" />
        </button>
        <h2>{country}</h2>
      </header>
      <div className="air-pollution-details">
        {loading && <div className="loading">Loading...</div>}
        {error && (
        <div>
          {' '}
          Error:
          {error}
        </div>
        )}
        {!loading && (
        <div>
          <div>
            <div>
              <div>
                Date:
                {formattedDate}
              </div>
              <div className="air-pollution-aqi">
                <span>
                  Air Quality Index (AQI)
                </span>
                <span className="aqi-container">
                  <span style={{ backgroundColor: getBackgroundColor(main?.aqi), width: `${main?.aqi * 20}%` }} className="aqi">
                    {main?.aqi}
                  </span>
                </span>
              </div>
            </div>
            <h3>
              Pollutant components: (μg/m3)
            </h3>
            <ul>
              <li>
                <span>
                  Carbon monoxide (CO)
                </span>
                <span>
                  {components?.co}
                </span>
              </li>
              <li>
                <span>
                  Nitrogen monoxide (NO)
                </span>
                <span>
                  {components?.no}
                </span>
              </li>
              <li>
                <span>
                  Nitrogen dioxide (NO2)
                </span>
                <span>
                  {components?.no2}
                </span>
              </li>
              <li>
                <span>
                  Ozone (O3)
                </span>
                <span>
                  {components?.o3}
                </span>
              </li>
              <li>
                <span>
                  Sulphur dioxide (SO2)
                </span>
                <span>
                  {components?.so2}
                </span>
              </li>
              <li>
                <span>
                  Ammonia (NH3)
                </span>
                <span>
                  {components?.nh3}
                </span>
              </li>
              <li>
                <span>
                  Suspended Particles (Pm2.5)
                </span>
                <span>
                  {components?.pm2_5}
                </span>
              </li>
              <li>
                <span>
                  Suspended Particles (Pm10)
                </span>
                <span>
                  {components?.pm10}
                </span>
              </li>
            </ul>
          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default AirPollutionDetails;
