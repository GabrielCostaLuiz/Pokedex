import styled from "styled-components";

export const Container = styled.div`
  height: 12rem;
  background: #f2f2f2;
  margin: auto;
  padding: 0;

  width: 98%;
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  padding: 1%;

  .baseStats {
    display: flex;
    gap: 2.5rem;

    .statsTitles {
      ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 0.48rem;

        li {
          h5 {
            text-transform: uppercase;
          }
        }
      }
    }

    .stats {
      display: flex;
      gap: 0.8rem;
      width: 100%;

      ul {
        list-style: none;
        margin-top: -0.26rem;
        display: flex;
        flex-direction: column;
        gap: 0.181rem;

        @media (max-width: 768px) {
          gap: 0.06rem;
        }
      }

      .statsBars {
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        margin-top: 0.2rem;
        width: 100%;

        .groupStatsBars {
          display: flex;

          .statsBar {
            height: 0.9rem;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            border-radius: 1rem;

            box-shadow: inset 0px -0.3rem 0px rgba(0, 0, 0, 0.2);

            position: relative;
            z-index: 10;
          }
          .fillBar {
            width: 100%;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            filter: brightness(45%);
            margin-left: -1rem;
          }
        }
      }
    }
  }
`;
