import styled from "styled-components";

export const Footers = styled.main`
  background-color: var(--footer-background);
  color: var(--text-secondary);

  .main {
    width: var(--align-page);
    margin: auto;
    padding: 40px 0px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
  }

  .logo {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
    color: var(--text-secondary);
    font-size: 16px;
  }
  .logo div img {
    width: 250px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 150px;
    color: var(--text-secondary);
  }
  li {
    font-size: 16px;
    cursor: pointer;
    list-style-type: none;
  }

  .icon {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
    color: var(--text-secondary);
  }

  .icon p {
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 18px;
  }

  .icon div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: var(--text-secondary);
  }

  span {
    cursor: pointer;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .main {
      flex-direction: column;
      align-items: flex-start;
      gap: 25px;
      padding: 30px 0px;
    }

    .icon div {
      justify-content: flex-start;
    }
  }
`;
