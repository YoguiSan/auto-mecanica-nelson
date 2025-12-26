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
};

export default styles.section<HeroBannerStylesType>`
${({
  image,
}) => `
  font-family: ${family.base};

  .hero-image {
    align-items: center;
    display: flex;
    height: 80vh;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;

    ${
      image ? `
      background: url(${image}) no-repeat center center / cover;
      `
      : `background: ${darkBlue};`
    }

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

        @media all and (max-width: ${tablet}) {
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
  
  width: 100%;
`}`;
