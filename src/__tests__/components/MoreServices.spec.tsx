import { render, screen } from '@testing-library/react';
import MoreServicesSection from '@amn/components/_sections/MoreServices';

describe('MoreServicesSection component', () => {
  it('renders the contact callout card and CTA button', () => {
    const { container } = render(<MoreServicesSection />);

    const card = container.querySelector('eui-card');
    expect(card).toBeTruthy();
    expect(card?.getAttribute('title')).toBe('Não encontrou o que precisa?');
    expect(
      screen.getByText(/Entre em contato conosco! Realizamos diversos outros serviços/i),
    ).toBeInTheDocument();

    const button = container.querySelector('eui-button');
    expect(button).toBeTruthy();
    expect(button?.getAttribute('text')).toBe('Fale com Especialista');
  });
});
