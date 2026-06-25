'use client';

import styles from 'styled-components';
import { mobile, tablet } from '@amn/styles/Breakpoints';
import { family } from '@amn/styles/Fonts';
import { darkBlue, metallicGray, vibrantOrange } from '@amn/styles/Colors';

export default styles.main`
font-family: ${family.base};

* {
  box-sizing: border-box;
}

h2 {
  color: ${darkBlue};
}

section {
  margin: auto;
  max-width: 1200px;
}

#section-more-services {
  eui-card {
    background: ${darkBlue};
    color: white;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 2rem;

    .eui-card-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    div[slot="body"] {
      p {
        margin-bottom: 1.5rem;
      }
    }

    > *, eui-button {
      display: flex;
      margin: auto;
      width: fit-content;
    }
  }
}

.contact-cards-container {
  eui-card {
    margin-bottom: 1rem;
  }
}

@media all and (max-width: ${tablet}px) {
  .eui-card-icon {
    min-height: 3rem;
    min-width: 3rem;
  }
}
`;