'use client';

import styles from 'styled-components';
import {
  darkBlue,
  vibrantOrange,
  white,
} from '@amn/styles/Colors';
import {
  family,
  size,
} from '@amn/styles/Fonts';
import { tablet } from '@amn/styles/Breakpoints';

type HeroBannerStylesType = {
  theme?: 'light' | 'dark',
  image?: string,
  fadeDuration: number,
};

const setBackground = (img?: string) => {
  return img
    ? `url("${img}") no-repeat center center / cover`
    : `${darkBlue}`
};

export default styles.section<HeroBannerStylesType>`
${({
  image,
  fadeDuration,
}) => `
  @keyframes fadeIn {
    from {
      background: transparent;
    }

    to {
      background: ${setBackground(image)};
    }
  }

  @keyframes fadeOut {
    from {
      background: ${setBackground(image)};
    }

    to {
      background: transparent;
    }
  }

  .hero-image {
    align-items: center;
    display: flex;
    height: 80vh;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;

    background: ${setBackground(image)};

    .hero-text-container {
      align-items: center;
      background: ${white};
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      height: fit-content;
      margin: auto;
      padding: 1rem;
      text-align: center;
      width: 100%;

      > * {
        margin: 0;
      }

      .hero-title {
        color: ${darkBlue};
        font-size: 3rem;

        @media all and (max-width: ${tablet}px) {
          font-size: 1.875rem;
        }

        &.callout {
          color: ${vibrantOrange};
        }
      }
  
      .hero-subtitle {
        font-size: ${size.base};
      }
  
      .hero-ctas {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        @media all and (max-width: ${tablet}) {
          flex-direction: column;
        }
      }
    }
  }    
  
  font-family: ${family.base};
  max-width: 100% !important;
  width: 100%;

  &.fading-in figure {
    animation-name: fadeIn;
    animation-duration: ${fadeDuration / 1000}s;
  }

  &.fading-out figure {
    animation-name: fadeOut;
    animation-duration: ${fadeDuration / 1000}s;
  }

  @media all and (max-width: ${tablet}px) {
    #card-localizacao {
    .eui-card-header,
    .eui-card-body {
      grid-column: span 16 !important;
    }
      .eui-card-body {
        padding-left: 0;
      }
    }

    .hero-image {
      height: fit-content;
    }
  }
`}`;
