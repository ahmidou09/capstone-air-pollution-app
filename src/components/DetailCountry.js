import React from 'react';
import { useParams } from 'react-router';

const DetailCountry = () => {
  const { country } = useParams();

  return (
    <h3>
      country details :
      {country}
    </h3>
  );
};

export default DetailCountry;
