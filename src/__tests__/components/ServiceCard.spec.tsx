import { render, screen } from '@testing-library/react';
import ServiceCard from '@amn/components/_sections/MainServices/ServiceCard';

describe('ServiceCard component', () => {
  it('renders the title, description, formatted price and the request quote action', () => {
    const requestQuoteAction = jest.fn();

    render(
      <ServiceCard
        title="Revisão básica"
        description="Troca de óleo, filtros e fluidos"
        price={120}
        estimatedTime="45 min"
        icon="/wrench.svg"
        requestQuoteAction={requestQuoteAction}
      />,
    );

    expect(screen.getByText('Revisão básica')).toBeInTheDocument();
    expect(screen.getByText('Troca de óleo, filtros e fluidos')).toBeInTheDocument();
    expect(screen.getByText('R$ 120,00')).toBeInTheDocument();
    expect(screen.getByText('45 min')).toBeInTheDocument();

    const button = document.querySelector('eui-button');
    expect(button).toBeTruthy();
    expect(button?.getAttribute('text')).toBe('Solicitar Orçamento');
  });
});
