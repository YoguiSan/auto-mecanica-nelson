'use client';

import { mobile } from '@amn/styles/Breakpoints';
import styles from 'styled-components';
import { darkBlue, vibrantOrange } from '@amn/styles/Colors';

export default styles.main`
.time-and-place {
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