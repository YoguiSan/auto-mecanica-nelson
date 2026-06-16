import { render, screen } from '@testing-library/react';
import HeroBanner from '@amn/components/HeroBanner';

describe('HeroBanner component', () => {
  it('renders title, subtitle, and CTA buttons', () => {
    const { container } = render(
      <HeroBanner
        title="Welcome"
        subtitle="This is a subtitle"
        callout="Call out"
        image="/hero.png"
        ctas={[{
          text: 'Start',
          action: '/start',
          icon: '/icon.svg',
          color: 'primary',
          variant: 'primary',
        }]}
      />,
    );

    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('This is a subtitle')).toBeInTheDocument();
    // the CTA is rendered as a custom element with `text` attribute
    const cta = container.querySelector('eui-button');
    expect(cta).toBeTruthy();
    expect(cta?.getAttribute('text')).toBe('Start');
  });
});
