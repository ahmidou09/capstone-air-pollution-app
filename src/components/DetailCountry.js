import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAirPollution } from '../redux/airPollution/airPollutionSlice';

const DetailCountry = () => {
  const { country, lat, lon } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.airPollution);

  useEffect(() => {
    dispatch(fetchAirPollution({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && (
      <div>
        Error:
        {error}
      </div>
      )}
      {data && (
        <div>
          <h2>{country}</h2>
          <div>{data.list[0].main.aqi}</div>
        </div>
      )}
    </div>
  );
};

export default DetailCountry;
