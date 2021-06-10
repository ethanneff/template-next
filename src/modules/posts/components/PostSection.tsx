type Props = {
  id: number;
  title: string;
  body: string;
};

export const PostSection = ({id, title, body}: Props) => (
  <div key={id}>
    {id} {title} {body}
  </div>
);
