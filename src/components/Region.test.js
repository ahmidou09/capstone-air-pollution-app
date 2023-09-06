import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Region from './Region';
import mockStore from './mockReduxStore';

// Mock the Redux store state
const initialState = {
  countries: {
    loading: false,
    data: [{
      name: 'Country 1', area: 100, flags: { png: 'flag.png', alt: 'Flag 1' }, latlng: [1, 2],
    }],
    error: null,
  },
};

let store;

beforeEach(() => {
  store = mockStore(initialState);
});

test('renders Region component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/europe']}>
        <Routes>
          <Route path="/:region" element={<Region />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  // Use a case-insensitive regex to find the 'europe' text within the header
  const europeHeaderText = getByText(/europe/i, { selector: 'header h2' });

  expect(europeHeaderText).toBeInTheDocument();
});
