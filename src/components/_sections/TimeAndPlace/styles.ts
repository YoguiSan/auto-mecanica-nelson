import styles from 'styled-components';
import { darkBlue, metallicGray, vibrantOrange } from '@amn/styles/Colors';

export default styles.section`
eui-grid {
  &.eui-grid-container {
    box-sizing: border-box;
    eui-card {
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
        height: fit-content;
        .eui-card-icon {
          background: ${vibrantOrange};
        }
      }
    }
  }
  .address-container {
    p {
      color: ${metallicGray};
      font-size: 0.875rem;
      padding: 0;
      margin: 0;
    }
    .map-container {
      margin-top: 1rem;
      min-height: 10rem;
      width: calc(100% - 3rem);
    }
  }
}
`;
