import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  position: relative;

  .wrapper {
    padding: 1%;
    height: 100%;

    .contImgPokemonMobile {
      .contInfoPokemon {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .buttonBack {
          background-color: transparent;
          border: 0;
          width: fit-content;
          svg {
            color: white;
          }
        }

        p,
        h1 {
          color: white;
          text-transform: capitalize;
        }

        h1 {
          margin: 0;
        }

        p {
          font-size: 1.6rem;
          font-weight: 700;
        }
      }

      .contentImg {
        text-align: center;
        width: 20rem;
        margin-inline: auto;
        img {
          width: 100%;
        }
      }
    }

    .contentInfoMobile {
      height: calc(100% - 275px);
      background-color: white;
      border-radius: 10px;
      margin-top: -4.5rem;

      .statsPokemonMobile {
        .navLinks {
          ul {
            display: flex;
            list-style: none;
            justify-content: space-around;

            li {
              button {
                border: 0;
                background-color: transparent;
                color: white;
                font-size: 1.6rem;

                &:active {
                  border-bottom: 1px solid black;
                }
              }
            }
          }
        }
      }

      .divContent {
        padding-inline: 3%;
        .divTypes {
          display: flex;
          justify-content: center;
          gap: 1rem;

          p {
            width: 8rem;
            padding: 0.2rem 1rem;
            border-radius: 50px;
            text-align: center;
            border: 1px solid white;
            font-weight: 500;
            color: white;
            text-transform: capitalize;
          }
        }

        div {
          .contentInfo {
            ul {
              height: auto;
              color: white;
              box-shadow: none;
              li {
                p {
                  color: white;
                }
              }
            }
          }
        }
      }
    }
  }
`;
