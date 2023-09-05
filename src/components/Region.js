import React, { useEffect } from 'react';
import './Region.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountries } from '../redux/countries/countriesSlice';

const Region = () => {
  const { region } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, data, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries(region));
  }, [dispatch, region]);

  return (
    <>
      <div>
        <header className="header">
          <button className="btn-icon-left" type="button" onClick={() => navigate(-1)}>
            <BsArrowLeftCircle className="icon-left" />
          </button>
          <h2>
            {region}
          </h2>
        </header>
        {loading && <div className="loading">loading...</div>}
        {error && <div>error</div>}
        <ul className="list-country">
          {!loading && data?.map((country) => (
            <li key={country.name.common} className="list-item">
              <Link to={`/${region}/${country.name.common}/${country.latlng[0]}/${country.latlng[1]}`}>
                <div className="country">
                  <img src={country.flags.png} alt={country.flags.alt} className="country-img" />
                  <div>
                    <BsArrowRightCircle />
                    {' '}
                  </div>
                </div>
                <div className="country-area">
                  <span className="country-name">
                    {country.name.common}
                  </span>
                  <span>
                    {country.area}
                    {' '}
                    km
                    <sup>2</sup>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Region;
