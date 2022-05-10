import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Art Router tests', () => {
  it('is testing navigation from list to detail page with MemoryRouter', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // find an artwork in the list by it's alt text
    const link = await screen.findByAltText('Painting of eyes by Paul Klee');

    // have the user click on that artwork
    userEvent.click(link);

    // detail page should now display more information
    const materials = await screen.findByText('Painting, oil on canvas');

    expect(materials).toBeInTheDocument();
  });
});

