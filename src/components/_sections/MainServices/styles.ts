import { darkBlue, metallicGray } from '@amn/styles/Colors';
import styles from 'styled-components';

export default styles.section`
eui-card {
  height: 100%;
  .eui-card-icon {
    background: color-mix(in oklab, ${darkBlue} 80%, transparent);
    > img {
      margin: auto;
    }
  }

  .eui-card-title {
    color: ${darkBlue};
    font-size: 1.5rem;
  }
  .eui-card-body {
    .description {
      color: ${metallicGray};
      font-size: 14px;
      padding-bottom: 1rem;
    }
    .price-container {
      border-top: solid 1px lightgray;
      padding-top: 1rem;
      width: calc(100% - 2rem);
      eui-button button {
        background: ${darkBlue};
        color: white;
      }
    }
  }
}
`;
