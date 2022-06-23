import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--yellow);
  padding-inline: 5%;
  padding-block: 0.7rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      gap: 2rem;

      li {
        a {
          color: black;
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: bold;
          transition: all 0.2s ease-in-out;
          font-size: 1.4rem;
        }
      }
    }

    .open-menu,
    .close-menu {
      display: none;
      background: transparent;
      border: 0;
    }
  }

  @media (max-width: 700px) {
    z-index: 40;
    nav {
      .menu {
        display: none;
      }

      .open-menu,
      .close-menu {
        display: block;
      }
    }
  }
`;
