import styles from 'styled-components';
import { darkBlue, metallicGray, vibrantOrange } from '@amn/styles/Colors';

export default styles.section`
.image-container {
  display: flex;
  height: 100%;

  img {
    height: auto;
    margin: auto;
    width: 100%;
  }
}

.about-us-qualities {
  .icon-container {
    background: ${darkBlue};
    border-radius: 10rem;
    display: flex;
    height: 56px;
    padding: 1rem;
    width: 56px;

    img {
      filter: invert(100%);
    }
  }

  p {
    color: ${metallicGray};
  }

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
  }
}
`;
