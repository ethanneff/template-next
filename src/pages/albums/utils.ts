import {User, Users} from './types';

export const isUsers = (data: any): data is Users => {
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    typeof (data[0] as User).id === 'number' &&
    typeof (data[0] as User).email === 'string' &&
    typeof (data[0] as User).first_name === 'string' &&
    typeof (data[0] as User).last_name === 'string' &&
    typeof (data[0] as User).avatar === 'string'
  );
};
