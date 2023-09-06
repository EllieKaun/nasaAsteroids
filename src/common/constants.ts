export const BASE_URL = process.env.REACT_APP_BASE_URL;

export enum REQUEST_STATUSES {
  NOT_REQUESTED = 'notRequested',
  REQUESTED = 'requested',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export const PATH = { main: '/' };

export const apiKey = 'KHsd6eb4m4Co5Sv4U6HICfAOcietjfD0MARB25WE';

const objectDate = new Date();
const day = objectDate.getDate() < 10 ? `0${ objectDate.getDate()}` : objectDate.getDate() ;
const month = objectDate.getMonth() < 10 ? `0${objectDate.getMonth() + 1}` : objectDate.getMonth() + 1;
const year = objectDate.getFullYear();
export const currentDate = `${year}-${month}-${day}`;
