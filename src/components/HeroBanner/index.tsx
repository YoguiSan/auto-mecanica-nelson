'use client';

import { useContext, useEffect, useState } from 'react';
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
  image?: string | string[],
  imageRotateInterval?: number,
  imageRotateTransitionDuration?: number,
};

const HeroBanner: React.FC<Props> = ({
  title,
  callout,
  subtitle,
  ctas,
  image,
  imageRotateInterval = 5000,
  imageRotateTransitionDuration = 300,
}) => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [className, setClassName] = useState<string>('');
  const { theme } = useContext(Context);
  const router = useRouter();

  let currentImageIndex = 0;

  const rotateImages = () => {
    setInterval(() => {
      if (currentImageIndex + 1 < (image as Array<string>).length) {
        currentImageIndex += 1;
      } else {
        currentImageIndex = 0;
      }

      setClassName('fading-out');

      setTimeout(() => {
        setClassName('fading-in');
        setCurrentImage((image as Array<string>)[currentImageIndex]);
      }, imageRotateTransitionDuration);
    }, imageRotateInterval + imageRotateTransitionDuration);
  };

  useEffect(() => {
    if (typeof (image) === 'string') {
      setCurrentImage(image);
    }

    else if (Array.isArray(image)) {
      setCurrentImage(image[0]);

      rotateImages();
    }
  }, [image]);

  return (
    <Section
      theme={theme.mode}
      image={currentImage}
      className={className}
      fadeDuration={imageRotateTransitionDuration}
    >
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
                padding={16}
              >
                  <Image slot="icon" width="32" height="32" src={icon as string} alt="" />
                </eui-button>
            ))}
          </div>
        </div>
      </figure>
    </Section>
  );
};

export default HeroBanner;
