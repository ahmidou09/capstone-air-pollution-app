import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../redux/countries/countriesSlice';

const Region = () => {
  const { region } = useParams();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries(region));
  }, [dispatch, region]);

  return (
    <>
      <div>
        <h1>{region}</h1>
        {loading && <div>loading...</div>}
        {error && <div>error</div>}
        {!loading && data.map((country) => (
          <div key={country.name.common}>
            <Link to={`/${region}/${country.name.common}/${country.latlng[0]}/${country.latlng[1]}`}>
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Region;
