import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders Home component', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  expect(getByText('Your Global Air Quality Resource')).toBeInTheDocument();
});
