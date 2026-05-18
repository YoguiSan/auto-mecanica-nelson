import { render } from '@testing-library/react';
import TopMenu from '@amn/components/TopMenu';

describe('TopMenu component', () => {
  it('renders without crashing using the shared context', () => {
    const { container } = render(<TopMenu />);

    expect(container.firstChild).toBeTruthy();
  });
});
