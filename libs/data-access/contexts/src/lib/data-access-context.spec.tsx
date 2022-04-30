import { render } from '@testing-library/react';

import DataAccessContext from './data-access-context';

describe('DataAccessContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessContext />);
    expect(baseElement).toBeTruthy();
  });
});
