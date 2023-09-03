import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const regionList = ['asia', 'america', 'europe', 'africa', 'australia'];
  return (
    <div>
      <span>Home</span>
      {regionList.map((region) => (
        <div key={region}>
          <Link to={`/${region}`}>{region}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
