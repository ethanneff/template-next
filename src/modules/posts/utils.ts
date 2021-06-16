import {Post, Posts} from './types';

export const isPost = (data: unknown): data is Post =>
  typeof data === 'object' &&
  typeof (data as Post).id === 'number' &&
  typeof (data as Post).userId === 'number' &&
  typeof (data as Post).title === 'string' &&
  typeof (data as Post).body === 'string';

export const isPosts = (data: unknown): data is Posts =>
  Array.isArray(data) && data.every(isPost);
