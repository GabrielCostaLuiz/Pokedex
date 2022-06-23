import styled from "styled-components";

export const Container = styled.div`
  padding-left: 5rem;
  background: var(--yellow-gradient);
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 100vh;

  .containerText {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: clamp(2rem, 4vw, 5rem);
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }

    p {
      font-size: clamp(1rem, 2.5vw, 3rem);
      font-weight: 400;
    }

    a {
      width: fit-content;
      padding: 1rem;
      padding-top: 0.5rem;
      font-size: clamp(1rem, 2vw, 3rem);

      color: black;
      text-decoration: none;
      background: var(--green);
      border-radius: 11px;
      box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.18);
        background-color: var(--green-dark);
      }
    }
  }

  .containerImg {
    flex: 1;
    img {
      width: 100%;
      object-position: bottom;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;

    .containerText {
      order: 2;
      h1 {
        font-size: clamp(1.1rem, 4.5vw, 4rem);
      }
      a {
        margin: 0 auto;
      }
    }

    .containerImg {
      order: 1;
      width: 100%;
      img {
        width: clamp(23rem, 70vw, 100rem);
        height: 100%;
      }
    }
  }
`;
