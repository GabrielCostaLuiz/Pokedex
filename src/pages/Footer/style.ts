import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1.2rem;

  p {
    span {
      font-weight: bold;
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    li {
      a {
        color: black;
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.5rem;
        transition: all 0.5s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    li:first-of-type {
      a {
        svg {
          color: #0a66c2;
        }
      }
    }
  }
`;
