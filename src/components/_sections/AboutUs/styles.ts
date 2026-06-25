import styles from 'styled-components';
import { darkBlue, metallicGray, vibrantOrange } from '@amn/styles/Colors';

export default styles.section`
.about-us-qualities {
  eui-card {
    border: none;
    border-left: solid 5px ${vibrantOrange};
    box-shadow: 3px 3px 10px lightgray;
    .eui-card-header {
      height: 0;
    }

    .quote {
      color: ${darkBlue};
      font-size: 1.2rem;
      font-style: italic;
    }

    /*
    .author {
      color: ${metallicGray};
      font-size: 14px;
    }
    */
  }
}

`;
