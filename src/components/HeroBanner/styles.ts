'use client';

import styles from 'styled-components';
import {
  darkBlue,
  vibrantOrange,
  white,
} from '@amn/styles/Colors';
import { base } from '@amn/styles/Fonts';

type HeroBannerStylesType = {
  theme?: 'light' | 'dark',
  image?: string,
};

export default styles.section<HeroBannerStylesType>`
${({
  image,
}) => `
  font-family: ${base};

  .hero-image {
    height: 80vh;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
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

      > * {
        margin: 0;
      }

      .hero-title {
        color: ${darkBlue};
        font-size: 4rem;

        &.callout {
          color: ${vibrantOrange};
        }
      }
  
      .hero-subtitle {
      }
  
      .hero-ctas {
      }
    }
  }    
  
  width: 100%;
`}`;
