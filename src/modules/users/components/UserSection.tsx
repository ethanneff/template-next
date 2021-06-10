import {NavLink} from '../../../components';

type Props = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const UserSection = ({id, name, email, phone}: Props) => (
  <div key={id}>
    {id} {email} {name} {phone}
    <NavLink href="/posts">
      <p>Posts</p>
    </NavLink>
    <NavLink href="/todos">
      <p>Todos</p>
    </NavLink>
  </div>
);
