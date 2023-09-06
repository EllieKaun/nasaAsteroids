import { PATH, REQUEST_STATUSES } from './constants';


interface IQueryCases<T> {
  status: T,
  data: T,
  error: T,
  options?: { concat: boolean, mergeResults?: boolean }
}


interface Builder {
  addCase: (actionCreator: string, reducer: (...arg: any) => void) => Builder
}

const getNestedKey = (obj: any, keyString: string) => {
  const keys = keyString.split('.');
  let value = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[ i ];
    value = value[ key ];
    if (value === undefined) {
      break;
    }
  }
  return value;
};

const splitString = (str: string) => {
  const separator = '.';

  const parts = str.split(separator);
  const allButLast = parts.slice(0, -1).join(separator);
  const last = parts[ parts.length - 1 ];
  return [ allButLast, last ];
};

export const addQueryCases = (
  builder: Builder,
  thunk: any,
  { status, data, error, options = { concat: false, mergeResults: false } }: IQueryCases<string>,
) => {
  builder
    .addCase(thunk.pending, (state: any) => {
      state[ status ] = REQUEST_STATUSES.REQUESTED;
    })
    .addCase(thunk.fulfilled, (state: any, { payload }: any) => {
      const [ allButLast, last ] = splitString(data);

      const nestedValue: {current: any} = { current: {} };

      if (allButLast) {
        nestedValue.current = getNestedKey(state, allButLast);
      } else {
        nestedValue.current = state;
      }

      state[ status ] = REQUEST_STATUSES.SUCCEEDED;
      if (options.mergeResults) {
        nestedValue.current[ last ] = {
          ...payload,
          results: [ ...nestedValue.current[ last ]?.results || [], ...payload.results || [] ],
        };
      } else if (options.concat) {
        nestedValue.current[ last ] = [ ...nestedValue.current[ last ], ...payload ];
      } else {
        nestedValue.current[ last ] = payload;
      }
    })
    .addCase(thunk.rejected, (state: any, action: any) => {
      state[ status ] = REQUEST_STATUSES.FAILED;
      state[ error ] = action.error;
    });
};
