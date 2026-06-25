import style from 'styled-components';
import { darkBlue } from '@amn/styles/Colors';

export default style.section`
max-width: 100vw !important;

eui-card {
  background: ${darkBlue};
  border-radius: 0;
  border: none;
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
`;
