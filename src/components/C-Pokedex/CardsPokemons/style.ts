import styled from "styled-components";

export const Container = styled.article`
  display: grid;
  grid-template-columns: 14.2rem 1fr;
  box-shadow: 0 0.5rem 0.3rem rgba(0, 0, 0, 0.2);
  border-radius: 11px;

  &.moreDetails {
    animation: rotateCard 2s;
    @keyframes rotateCard {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  }

  .contentInfos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.2rem;
    background: #f6f7f9;
    padding-block: 3%;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    text-align: center;

    .name {
      text-transform: capitalize;
      font-weight: 700;
    }

    .moreDetails {
      a,
      button {
        font-size: 1.2rem;
        color: black;
        background-color: #00aaff;
        text-decoration: none;
        font-weight: 700;
        border-radius: 10px;
        padding: 0.3rem;
        border: 0;
        box-shadow: inset 0 -0.4rem 0.1rem rgba(0, 0, 0, 0.2);
        transition: all 0.1s ease-in-out;

        &:hover {
          box-shadow: inset 0 0.4rem 0.1rem rgba(0, 0, 0, 0.2);
          filter: brightness(105%);
        }
      }
    }
  }

  .contentImg {
    height: 19rem;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .types,
  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .types {
    font-size: 1.1rem;
    gap: 0.5rem;
    margin-inline: 2px;
    p {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      text-align: center;
      box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);
      border-radius: 11px;
      padding: 0.2rem 0.7rem;
      text-transform: capitalize;
    }
  }

  .stats {
    text-align: center;
    display: flex;
    justify-content: space-around;
    width: 100%;

    p {
      display: flex;
      flex-direction: column;
    }

    p:first-of-type {
      width: 3rem;
      height: 3rem;

      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 3px solid black;
      border-radius: 50%;
    }

    p:nth-of-type(2) {
      font-size: 1.2rem;
    }
  }

  .carregando {
    background-color: var(--yellow);
  }

  @media (max-width: 350px) {
    width: 97vw;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 11px;

    .contentInfos {
      border-top-left-radius: 0;
      border-bottom-right-radius: 11px;
      border-bottom-left-radius: 11px;
    }

    .contentImg {
      border-top-left-radius: 11px;
      border-top-right-radius: 11px;
      border-bottom-right-radius: 0;
    }
  }
`;
