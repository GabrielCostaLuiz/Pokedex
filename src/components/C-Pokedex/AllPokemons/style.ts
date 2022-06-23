import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 5%;
  padding-bottom: 5%;

  .pokemons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    row-gap: 2rem;
    column-gap: 5rem;

    .returnPokedex {
      background-color: var(--red);
      border: 0;
      border-radius: 8px;
      box-shadow: inset 0px -8px 0px rgba(0, 0, 0, 0.2);
      height: 5rem;
      font-weight: 700;
      margin: auto;
      width: 100%;
      font-size: 1.6rem;

      transition: all 0.2s ease-in-out;
      &:hover {
        box-shadow: inset 2px 4px 0px rgba(0, 0, 0, 0.2);
        filter: brightness(105%);
        color: white;
      }

      @media (max-width: 330px) {
        width: 97%;
        margin: 0;
      }
    }
  }
  h1 {
    text-align: center;
    margin-block: 2rem;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }

  #procurarPokemon {
    width: 100%;

    background: #f2f2f2;
    border: 0;

    padding-block: 0.8rem;
    padding-left: 1.5rem;

    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 40px;

    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  .filtros {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    details {
      background: #f2f2f2;
      /* blur8 */

      box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
      border-radius: 8px;
      width: fit-content;
      margin-bottom: 3rem;
      padding: 1%;

      summary {
        cursor: pointer;
      }

      .divButton {
        position: absolute;
        background: #f2f2f2;
        box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
        width: 12.5rem;
        margin-top: 1rem;
        border-radius: 10px;
        text-align: center;
        padding-block: 0.5rem;
        z-index: 2;

        &.showButton {
          button {
            display: block;
            font-weight: 700;
          }
        }

        button {
          display: none;
          margin-inline: auto;
          margin-block: 1rem;
          width: 90%;
          height: 2rem;
          background-color: var(--red);
          border: 0;
          border-radius: 8px;
          box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.2);

          transition: all 0.1s ease-in-out;
          &:hover {
            box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.2);
            filter: brightness(105%);
          }
        }
      }

      .radiosButtons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-left: 1rem;

        .inputsRadio:checked & {
          background: red;
        }

        label {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-transform: capitalize;
          width: calc(100% - 2rem);
          border-radius: 10px;
          padding: 2%;

          &:hover {
            cursor: pointer;
            box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
          }
        }
        .inputsRadio {
          appearance: none;

          border-radius: 50%;
          width: 16px;
          height: 16px;

          border: 2px solid #999;
          transition: 0.1s all linear;

          &:hover {
            opacity: 0.5;
          }

          &:hover:not(:checked) {
            opacity: 0.5;
          }

          /* &:checked {
            background: radial-gradient(
              circle,
              var(--color-stats) 30%,
              rgba(255, 255, 255, 1) 100%
            );
            border: 0;
          } */
        }
      }
    }

    .footerTop {
      .divFooterTop {
        display: flex;
        gap: 1rem;
        justify-content: center;
        height: 2.9rem;
        align-items: flex-end;
        margin-bottom: 0.5rem;

        &.hidden {
          display: none;
        }
        p {
          width: calc(2rem + 4rem);
          white-space: nowrap;
          text-align: center;
          padding: 1%;
          color: var(--white);
          border-radius: 100px;
          background-color: var(--red);
          box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
        }

        button:first-of-type {
          svg {
            transform: rotate(180deg);
          }
        }

        button {
          width: 3rem;
          border: 0;
          gap: 0.2rem;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          border-radius: 100px;

          background-color: var(--white);
          box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
          padding: 1%;
        }
      }
      .buttonReturn {
        width: calc(10rem + 4rem);
        font-size: 1rem;
        font-weight: 700;
        white-space: nowrap;
        padding-block: 1.5%;
        margin-bottom: 1rem;

        border: 0;
        gap: 0.2rem;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 100px;

        background-color: var(--white);
        box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
        padding: 1%;
      }
    }
  }

  footer {
    div {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;

      &.hidden {
        display: none;
      }
    }

    p {
      width: fit-content;
      padding: 1%;
      color: var(--white);
      border-radius: 100px;
      background-color: var(--red);
      box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
    }

    button:first-of-type {
      svg {
        transform: rotate(180deg);
      }
    }

    button {
      border: 0;
      gap: 0.2rem;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      border-radius: 100px;

      background-color: var(--white);
      box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
      padding: 1%;
    }

    .emptyFilter {
      margin-top: 3rem;
      margin-inline: auto;
      background-color: var(--red);
      font-weight: bold;

      &:hover {
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.2);
        filter: brightness(105%);
      }
      &.hidden {
        display: none;
      }
    }
  }

  .errorDiv {
    text-align: center;
    margin-top: -2rem;
    img {
      width: 5rem;
    }
  }

  @media (max-width: 906px) {
    padding-inline: 1%;

    .filtros {
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      details {
        margin-bottom: 0;
      }
      .footerTop {
        .divFooterTop {
          margin-bottom: 1.5rem;
        }
      }
    }
    .pokemons {
      grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
      row-gap: 2rem;
      column-gap: 1rem;
    }
  }

  @media (max-width: 671px) {
    padding-inline: 2.5%;
  }

  @media (max-width: 350px) {
    padding-inline: 1.5%;
  }
`;
