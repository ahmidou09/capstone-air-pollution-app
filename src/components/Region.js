import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Region = () => {
  const contryList = ['morocco', 'togo', 'egypt'];
  const { region } = useParams();

  return (
    <div>
      <h1>{ region }</h1>
      {contryList.map((country) => (
        <div key={country}>
          <Link to={`/${region}/${country}`}>{country}</Link>
        </div>
      ))}
    </div>
  );
};

export default Region;
