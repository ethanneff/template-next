import {User, Users} from './types';

export const isUser = (data: unknown): data is User =>
  typeof data === 'object' &&
  typeof (data as User).id === 'number' &&
  typeof (data as User).email === 'string' &&
  typeof (data as User).name === 'string' &&
  typeof (data as User).username === 'string' &&
  typeof (data as User).website === 'string';

export const isUsers = (data: unknown): data is Users =>
  Array.isArray(data) && data.every(isUser);
