import { render, screen } from '@testing-library/react';
import TimeAndPlaceSection from '@amn/components/_sections/TimeAndPlace';

describe('TimeAndPlaceSection component', () => {
  it('renders the location and business hours content', () => {
    const { container } = render(<TimeAndPlaceSection />);

    expect(screen.getByText('Localização')).toBeInTheDocument();
    expect(screen.getByText('Horário de Funcionamento')).toBeInTheDocument();
    expect(screen.getByText('Rua Lourenço Saporito, 332')).toBeInTheDocument();
    expect(screen.getByText('Jardim Ana Maria, São Paulo - SP')).toBeInTheDocument();
    expect(screen.getByText('CEP: 05757-200')).toBeInTheDocument();
    expect(screen.getByText('Segunda a sexta: 9-18h')).toBeInTheDocument();
    expect(screen.getByText('Sábados, domingos e feriados: fechado')).toBeInTheDocument();

    const iframe = container.querySelector('iframe');
    expect(iframe).toBeTruthy();
    expect(iframe?.getAttribute('src')).toContain('google.com/maps');
  });
});
