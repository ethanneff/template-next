import {ReactElement} from 'react';

type Props = {
  id: number;
  title: string;
  body: string;
};

export const PostSection = ({id, title, body}: Props): ReactElement => (
  <div key={id}>
    {id} {title} {body}
  </div>
);
