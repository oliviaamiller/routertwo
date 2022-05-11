import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Art Router tests', () => {
  it('should navigate from list to detail page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await screen.getByText(/loading.../i);

    // find an artwork in the list by it's alt text
    const link = await screen.findByAltText('Painting of eyes by Paul Klee');

    // have the user click on that artwork
    userEvent.click(link);

    // detail page should now display more information
    const materials = await screen.findByText('Painting, oil on canvas');

    expect(materials).toBeInTheDocument();
  });

  it('should render a specific detail page given a url with an id', async () => {
    render(
      <MemoryRouter
        initialEntries={['/', '/art', '/art/61608']}
        initialIndex={2}
      >
        <App />
      </MemoryRouter>
    );

    const title = await screen.findByText('Sunset');

    const date = await screen.findByText('1930, Germany');

    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
