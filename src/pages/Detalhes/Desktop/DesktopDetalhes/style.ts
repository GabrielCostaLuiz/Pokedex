import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 19rem;
  background: #f6f7f9;
  box-shadow: 0 0.5rem 0.3rem rgba(0, 0, 0, 0.2);
  border-radius: 11px;

  &.closeDetails {
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

  header {
    display: flex;
    align-items: center;
    padding-inline: 0.5rem;
    justify-content: space-between;

    div:first-child {
      display: flex;
      align-items: center;
      gap: 1rem;

      p {
        color: white;
        text-decoration: underline;
        border-radius: 50px;

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }

      h3 {
        text-transform: capitalize;
        font-size: 1.6rem;
      }
    }

    div:last-child {
      button {
        background-color: transparent;
        border: 0;
        font-weight: 700;
        font-size: 1.6rem;
        color: white;
      }
    }
  }

  .navLinks {
    margin-top: 1rem;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      width: 100%;
      margin-left: auto;

      li {
        & + li {
          margin-left: 1.5rem;
        }
        button {
          background-color: white;
          border: 0;
          font-size: 1.3rem;
          border-radius: 10px;
          padding: 0.2rem 1rem;
          box-shadow: inset 0 -0.3rem 0.1rem rgba(0, 0, 0, 0.2);
          transition: all 0.1s ease-in-out;
          font-weight: 700;

          &.active {
            color: blue;
          }

          &:hover {
            box-shadow: inset 0 0.3rem 0.1rem rgba(0, 0, 0, 0.2);
            filter: brightness(99%);
            cursor: pointer;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    width: 97vw;
  }
`;
