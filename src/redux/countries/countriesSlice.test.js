import countriesReducer from './countriesSlice';

describe('Countries Slice Tests', () => {
  it('should handle fetchCountries.pending', () => {
    const initialState = { data: [], loading: false, error: null };
    const action = { type: 'countries/fetchCountries/pending' };
    const nextState = countriesReducer(initialState, action);
    expect(nextState.loading).toBe(true);
  });

  it('should handle fetchCountries.fulfilled', () => {
    const initialState = { data: [], loading: true, error: null };
    const action = {
      type: 'countries/fetchCountries/fulfilled',
      payload: [{ id: 1, name: 'Country 1' }],
    };
    const nextState = countriesReducer(initialState, action);
    expect(nextState.loading).toBe(false);
    expect(nextState.data).toEqual(action.payload);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchCountries.rejected', () => {
    const initialState = { data: [], loading: true, error: null };
    const action = {
      type: 'countries/fetchCountries/rejected',
      error: { message: 'Error message' },
    };
    const nextState = countriesReducer(initialState, action);
    expect(nextState.loading).toBe(false);
    expect(nextState.data).toEqual([]);
    expect(nextState.error).toBe(action.error.message);
  });
});
