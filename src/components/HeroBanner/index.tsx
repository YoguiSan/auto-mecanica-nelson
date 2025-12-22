'use client';

import { useContext } from 'react';
import Context from '@amn/stores';
import Section from './styles';

type Props = {
  title: string,
  callout?: string,
  subtitle: string,
  ctas: {
    text: string,
    action: string | (() => void),
    // FIXME: Define proper type
    icon?: unknown,
    color?: string,
  }[],
  image: string,
};

const HeroBanner: React.FC<Props> = ({
  title,
  callout,
  subtitle,
  ctas,
  image,
}) => {
  const { theme } = useContext(Context);

  return (
    <Section theme={theme.mode} image={image}>
      <figure className="hero-image">
        <div className="hero-text-container">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-title callout">{callout}</p>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-ctas">
            {ctas.map(({
              text,
              action,
              icon,
              color,
            },
              index,
            ) => (
              <eui-button
                key={`hero-cta-${index}`}
                text={text}
                onClick={action}
                icon={icon}
                color={color}
              />
            ))}
          </div>
        </div>
      </figure>
    </Section>
  );
};

export default HeroBanner;
