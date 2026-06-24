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

#section-time-and-place {
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
}

#section-about-us {
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
}

#section-main-services {
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

    .description {
      color: ${metallicGray};
      font-size: 14px;
    }
  }
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