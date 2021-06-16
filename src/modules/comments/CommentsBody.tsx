import {ReactElement} from 'react';
import useSWR from 'swr';
import {Constants, fetchJson} from '../../utils';
import {isComments} from './utils';

export const CommentsBody = (): ReactElement => {
  const {data, error} = useSWR(`${Constants.baseUrl}/comments`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isComments(data)) return <div>invalid data</div>;

  return (
    <div>
      {data.map(({id, postId, name, email, body}) => (
        <div key={id}>
          {id} {postId} {name} {email} {body}
        </div>
      ))}
    </div>
  );
};
