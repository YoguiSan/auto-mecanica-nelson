'use client';

import styles from 'styled-components';
import { mobile } from '@amn/styles/Breakpoints';
import { family } from '@amn/styles/Fonts';
import { darkBlue, vibrantOrange } from '@amn/styles/Colors';

export default styles.main`
font-family: ${family.base};

h2 {
  color: ${darkBlue};
}

#section-time-and-place {
  eui-grid {
    &.eui-grid-container {
      box-sizing: border-box;

      eui-card {
        box-sizing: border-box;
        height: 100%;

        .eui-card-icon {
          img {
            margin: auto;
          }
        }

        .eui-card-title {
          color: ${darkBlue};
        }

        &#card-localizacao {
          .eui-card-icon {
            background: ${darkBlue};
          }
        }

        &#card-horario-funcionamento {
          .eui-card-icon {
            background: ${vibrantOrange};
          }
        }
      }
    }
  }
}

@media all and (max-width: ${mobile}px) {
    
}
`;