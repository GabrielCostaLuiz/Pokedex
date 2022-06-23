import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--red);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  div {
    text-align: center;

    figure {
      position: relative;
      height: calc(100vh / 1.5);

      img {
        height: 100%;
        position: relative;
        image-rendering: pixelated;
        z-index: 2;
      }
      figcaption {
        position: absolute;
        top: -15%;
        left: -30%;

        font-size: 30rem;
        margin: -25px 0 0 -25px;
        font-weight: 700;
      }
    }

    h1 {
      font-size: 2rem;
      color: var(--white);
      margin-top: 3rem;

      span {
        color: black;
      }
    }

    button {
      width: 10rem;
      height: 3rem;
      border-radius: 11px;
      background-color: var(--yellow);
      box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.18);
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.3rem;
      font-weight: 700;

      margin: 3rem auto 0;

      transition: all 0.3s;

      &:hover {
        box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.18);
        background-color: var(--yellow-dark);
      }
    }
  }

  @media (max-width: 768px) {
    div {
      figure {
        height: calc(100vh / 2);

        figcaption {
          top: -25%;
        }
      }
      h1 {
        font-size: min(2rem, 6vw);
      }
    }
  }

  @media (max-width: 700px) {
    div {
      figure {
        margin-bottom: 5rem;
        figcaption {
          position: initial;
          font-size: 3rem;
          margin: 0;
          text-align: center;
          display: flex;
          justify-content: center;
          gap: 0.5rem;

          &:before {
            content: "Error";
          }
        }
      }
    }
  }
`;
