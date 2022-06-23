import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  .menu-expanded {
    header {
      margin-top: -2rem;
    }
  }

  .Creditos {
    h1 {
      text-align: center;
      margin-block: 2rem;
    }
    ul {
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        a {
          word-wrap: break-word;
        }
      }
    }
  }

  footer {
    margin-top: 2rem;
  }
`;
