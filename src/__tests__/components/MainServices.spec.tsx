import { render, screen } from '@testing-library/react';
import MainServicesSection from '@amn/components/_sections/MainServices';

describe('MainServicesSection component', () => {
  it('renders the heading, subtitle, and the list of service cards', () => {
    const { container } = render(<MainServicesSection />);

    expect(screen.getByText('Nossos Serviços Principais')).toBeInTheDocument();
    expect(
      screen.getByText(/Oferecemos uma ampla gama de serviços automotivos/i),
    ).toBeInTheDocument();

    const cards = container.querySelectorAll('eui-card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
