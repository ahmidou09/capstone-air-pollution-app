import airPollutionReducer from './airPollutionSlice';

describe('Redux Slice Tests', () => {
  it('should handle fetchAirPollution.pending', () => {
    const initialState = { data: null, loading: false, error: null };
    const action = { type: 'airPollution/fetchAirPollution/pending' };
    const nextState = airPollutionReducer(initialState, action);
    expect(nextState.loading).toBe(true);
  });

  it('should handle fetchAirPollution.fulfilled', () => {
    const initialState = { data: null, loading: true, error: null };
    const action = {
      type: 'airPollution/fetchAirPollution/fulfilled',
      payload: { someData: 'value' },
    };
    const nextState = airPollutionReducer(initialState, action);
    expect(nextState.loading).toBe(false);
    expect(nextState.data).toEqual(action.payload);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchAirPollution.rejected', () => {
    const initialState = { data: null, loading: true, error: null };
    const action = {
      type: 'airPollution/fetchAirPollution/rejected',
      error: { message: 'Error message' },
    };
    const nextState = airPollutionReducer(initialState, action);
    expect(nextState.loading).toBe(false);
    expect(nextState.data).toBeNull();
    expect(nextState.error).toBe(action.error.message);
  });
});
