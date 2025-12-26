'use client';

import { useContext } from 'react';
import Context from '@amn/stores';
import Section from './styles';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    variant?: 'text' | 'outlined' | 'black' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'fatal',
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

  const router = useRouter();

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
              variant,
            },
              index,
            ) => (
              <eui-button
                key={`hero-cta-${index}`}
                text={text}
                onClick={typeof (action) === 'string'
                  ? () => router.push(action)
                  : (event) => action(event)}
                color={color}
                variant={variant}
                padding={16}>
                  <Image slot="icon" src={icon as unknown} alt="" />
                </eui-button>
            ))}
          </div>
        </div>
      </figure>
    </Section>
  );
};

export default HeroBanner;
