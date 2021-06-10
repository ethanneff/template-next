import {User, Users} from './types';

export const isUser = (data: any): data is User =>
  data &&
  typeof (data as User).id === 'number' &&
  typeof (data as User).email === 'string' &&
  typeof (data as User).name === 'string' &&
  typeof (data as User).username === 'string' &&
  typeof (data as User).website === 'string';

export const isUsers = (data: any): data is Users =>
  Array.isArray(data) &&
  data.length > 0 &&
  typeof (data[0] as User).id === 'number' &&
  typeof (data[0] as User).email === 'string' &&
  typeof (data[0] as User).name === 'string' &&
  typeof (data[0] as User).username === 'string' &&
  typeof (data[0] as User).website === 'string';
