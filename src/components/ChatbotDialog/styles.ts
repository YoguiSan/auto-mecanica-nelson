'use client';

import styles from 'styled-components';
import {
  darkBlue,
} from '@amn/styles/Colors';
import {
  family,
  size,
} from '@amn/styles/Fonts';
// import { tablet } from '@amn/styles/Breakpoints';

type ChatbotDialogStylesType = {
  theme?: 'light' | 'dark',
  image?: string,
  open?: boolean,
  visible?: boolean,
};

export default styles.div<ChatbotDialogStylesType>`
background: white;
bottom: 1rem;
box-sizing: border-box;
box-shadow: 1rem 1rem 1rem 1rem gray;
display: flex;
flex-direction: column;
justify-content: flex-end;

padding: 1rem;
position: fixed;
right: 1rem;
z-index: 1;

${({ visible }) => !visible && 'display: none;'}

${({ open }) => open
  ? `
  height: fit-content;
  max-height: 25rem;
  min-height: 20rem;
  min-width: 15rem;
  width: fit-content;
  `
  : `
  max-height: 6rem;
  max-width: 6rem;
  `}

#chatbot-dialog-header {
  background: white;
  left: 0;
  padding: .5rem;
  position: absolute;
  top: 0;
  width: 100%;
  
  h3 {
    font-family: ${family.base};
    font-size: .9rem;
    font-weight: bold;
    margin: 0;
    width: 100%;
    
    &::after {
      background: linear-gradient(white, transparent);
      bottom: 0;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 100%;
      width: 100%;
    }
  }

  #chatbot-dialog-close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: .8rem;
    height: 1rem;
    // width: 1rem;

    &:hover {
      opacity: .8;
    }
  }
}

#chatbot-dialog-header, #chatbot-input-container {
  display: flex;
  margin-bottom: 1rem;
  width: 100%;

  #chatbot-input {
    width: 100%;
  }

  #chatbot-submit-button {
    background: ${darkBlue};
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }
}

#chatbot-history-container {
  display: flex;
  height: calc(100% - 1rem);
  flex-direction: column;
  font-size: .6rem;
  margin-top: 1rem;
  overflow: scroll;
  
  > p {
    background: lightgray;
    border-radius: .5rem;
    display: block;
    padding: .5rem;
    margin: 0;
    margin-bottom: .5rem;
    max-width: 80%;
    width: fit-content;
    // word-break: break-all;

    &.ai {
      margin-right: auto;
    }

    &.user {
      background: ${darkBlue};
      color: white;
      margin-left: auto;
    }
  }
}
  
#chatbot-open {
  background: ${darkBlue};
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  display: flex;
  padding: .5rem;
}
`;