import { addQueryCases } from '../../../common/helpers';
import { REQUEST_STATUSES } from '../../../common/constants';
import { IAsteroidListState } from '../type/AsteroidListType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const name = 'asteroidList';

const ENDPOINTS = { ASTEROID_LIST: '/neo/rest/v1/feed' };

export const getAsteroidList = createAsyncThunk(
  `${name}/getAsteroidList`,
  async (params: object, { extra: api }: any) => {
    try {
      const response = await api.get(ENDPOINTS.ASTEROID_LIST, { params });
      return response.data;
    } catch (e) {
      return e;
    }
  },
);

export const getNextAsteroid = createAsyncThunk(
  `${name}/getNextAsteroid`,
  async (endpoint: string) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (e) {
      return e;
    }
  },
);

const initialState: IAsteroidListState = {
  asteroidListStatus: REQUEST_STATUSES.NOT_REQUESTED,
  asteroidList: {},
  asteroidListError: null,
};

const asteroidListSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    addQueryCases(builder, getAsteroidList, {
      status: 'asteroidListStatus',
      data: 'asteroidList',
      error: 'asteroidListError',
    });
    addQueryCases(builder, getNextAsteroid, {
      status: 'asteroidListStatus',
      data: 'asteroidList',
      error: 'asteroidListError',
    });
  },
});


export default asteroidListSlice;
