import {Comment, Comments} from './types';

export const isComment = (data: unknown): data is Comment =>
  typeof data === 'object' &&
  typeof (data as Comment).id === 'number' &&
  typeof (data as Comment).postId === 'number' &&
  typeof (data as Comment).name === 'string' &&
  typeof (data as Comment).email === 'string' &&
  typeof (data as Comment).body === 'string';

export const isComments = (data: unknown): data is Comments =>
  Array.isArray(data) && data.every(isComment);
