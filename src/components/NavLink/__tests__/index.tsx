import {render, screen} from '@testing-library/react';
import {NavLink} from '..';

describe('navLink', () => {
  it('renders the children', () => {
    expect.hasAssertions();
    render(
      <NavLink href="#">
        <p>hello</p>
      </NavLink>,
    );
    const text = screen.getByText('hello');
    expect(text).toBeInTheDocument();
  });
});
