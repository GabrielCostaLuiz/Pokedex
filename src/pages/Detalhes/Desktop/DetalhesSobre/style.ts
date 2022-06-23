import styled from "styled-components";

export const Container = styled.div`
  .contentInfo {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-right: 5px;

    .contentImg {
      width: 20vw;
      img {
        width: 100%;
        height: 100%;
      }
    }

    ul {
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      list-style: none;
      width: 100%;
      margin: auto;
      background: #f2f2f2;
      border-radius: 8px;
      box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
      padding: 1%;

      li {
        display: flex;
        align-items: center;
        /* justify-content: space-between; */

        .weaks {
          display: flex;
          justify-content: space-between;
          gap: 1vw;

          img {
            width: 0.8em;
            height: 0.8em;
            border-radius: 50px;
            padding: 0.2rem;
            box-sizing: content-box;
          }
        }

        details {
          summary {
            cursor: pointer;
            text-transform: capitalize;
            background: #e0e0e0;
            box-shadow: inset 2px -3px 0px rgba(1, 28, 64, 0.2);
            border-radius: 8px;
            padding-inline: 0.5rem;
            white-space: nowrap;
          }
          ul {
            height: initial;
            display: initial;
            flex-direction: initial;
            gap: initial;
            list-style: none;
            margin: 0;
            width: initial;
            border-radius: initial;
            box-shadow: initial;
            position: absolute;
            margin-top: 0.2rem;
            background: #e0e0e0;
            box-shadow: inset 3px -3px 0px rgba(1, 28, 64, 0.2);
            border-radius: 8px;
            padding: 1%;

            li {
              padding-left: initial;
              display: flex;
              align-items: center;
              text-transform: capitalize;
            }
          }
        }

        h5 {
          width: 8rem;
        }

        p {
          font-weight: 500;
        }
      }
    }
  }

  @media (min-width: 1405px) {
    .contentInfo {
      padding-right: 0;

      .contentImg {
        display: none;
      }

      ul {
        width: 98%;
        margin: auto;
      }
    }
  }

  @media (max-width: 1024px) {
    .contentInfo {
      padding-inline: 5px;

      .contentImg {
        display: none;
      }
    }
  }

  @media (max-width: 670px) {
    .contentInfo {
      .contentImg {
        width: 30vw;

        display: block;
      }
    }
  }

  @media (max-width: 350px) {
    .contentInfo {
      .contentImg {
        display: none;
      }
    }
  }
`;
