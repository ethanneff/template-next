import {render, screen} from '@testing-library/react';
import {NavButtonLink} from '..';

describe('navButtonLink', () => {
  it('renders the children', () => {
    expect.hasAssertions();
    render(
      <NavButtonLink href="#">
        <p>hello</p>
      </NavButtonLink>,
    );
    const text = screen.getByText('hello');
    expect(text).toBeInTheDocument();
  });
});
