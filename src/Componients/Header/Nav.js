import styled from "styled-components";

export const Navbar = styled.main`
  font-family: var(--font-heading);
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  left: 0;
  color: var(--text-secondary);
  background-color: var(--nav-background);
  z-index: 99999;
  color: black;
  background: linear-gradient(90deg, #0f172a, #1e293b);

  .nav_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--align-page);
    margin: auto;
    padding: 20px 0px;
  }

  .logo_tag {
    display: flex;
    align-items: center;
  }

  .logo_tag img {
    width: 200px; /* controlled logo size */
    height: auto;
    object-fit: contain;
    color: var(--text-secondary);
  }

  .middle_tag {
    display: flex;
    justify-content: center;
    flex: 1;
  }

  .right_tag {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    list-style-type: none;
  }

  li {
    text-transform: capitalize;
    cursor: pointer;
    color: var(--text-secondary);
  }

  li:hover {
    text-decoration: underline var(--underline-color);
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .nav_bar {
      flex-direction: column;
      gap: 8px;
      padding: 15px 0px;
    }

    .middle_tag > ul > li:nth-child(1) {
      display: none;
    }

    .logo_tag img {
      width: 200px;
    }

    ul {
      flex-wrap: wrap;
      gap: 30px;
    }
  }
`;
