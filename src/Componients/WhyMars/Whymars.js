import styled from "styled-components";

export const Why_mars = styled.main`
  /* width: min(100%, var(--align-page)); */
  font-family: var(--font-body);
  margin: auto;

  .images {
    width: 100%;
    margin-top: 68px;
    /* height: 500px; */
  }

  .images img {
    width: 100%;
    /* height: 500px; */
  }

  .body {
    width: var(--align-page);
    margin: 5rem auto;
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .main {
    background: var(--bg-main);
    border: 1px solid var(--border-color);
    border-radius: 24px;
    padding: 3rem;
  }

  .main h2 {
    font-family: var(--font-heading);
    color: var(--text-main);
    font-size: 3rem;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
    line-height: 1.2;
    position: relative;
  }

  .main h2:first-child {
    margin-top: 0;
  }

  .main h2::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    margin-top: 12px;
    border-radius: 20px;
    background: var(--main-color);
  }

  .main h3 {
    font-family: var(--font-heading);
    color: var(--main-color);
    font-size: 1.4rem;
    margin: 2rem 0 1rem;
  }

  .main p {
    color: var(--text-secondary);
    font-family: var(--font-body);
    font-size: 1.05rem;
    line-height: 1.9;
    margin-bottom: 1.2rem;
  }

  .main ul {
    margin: 1.5rem 0;
    padding-left: 1.8rem;
  }

  .main li {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 0.8rem;
  }

  .main li::marker {
    color: var(--main-color);
  }

  .image {
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .image img {
    width: 100%;
    display: block;
    border-radius: 18px;
    border: 1px solid var(--border-color);
    object-fit: cover;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    transition: 0.3s ease;
  }

  .image img:hover {
    transform: translateY(-5px);
  }

  /* ========================= */
  /* Large Tablets */
  /* ========================= */

  @media (max-width: 1200px) {
    .body {
      width: 95%;
      gap: 2.5rem;
    }

    .main h2 {
      font-size: 2.5rem;
    }
  }

  /* ========================= */
  /* Tablets */
  /* ========================= */

  @media (max-width: 992px) {
    .body {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .main {
      padding: 2rem;
    }

    .image {
      position: static;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .main h2 {
      font-size: 2.2rem;
    }

    .main h3 {
      font-size: 1.3rem;
    }
  }

  /* ========================= */
  /* Mobile */
  /* ========================= */

  @media (max-width: 768px) {
    .body {
      width: 95%;
      margin: 3rem auto;
    }

    .main {
      padding: 1.5rem;
      border-radius: 18px;
    }

    .main h2 {
      font-size: 1.9rem;
    }

    .main h3 {
      font-size: 1.15rem;
    }

    .main p,
    .main li {
      font-size: 1rem;
      line-height: 1.7;
    }

    .image {
      grid-template-columns: 1fr;
    }
  }

  /* ========================= */
  /* Small Phones */
  /* ========================= */

  @media (max-width: 480px) {
    .body {
      width: 92%;
      margin: 2rem auto;
    }

    .main {
      padding: 1.2rem;
    }

    .main h2 {
      font-size: 1.6rem;
    }

    .main h3 {
      font-size: 1rem;
    }

    .main p,
    .main li {
      font-size: 0.95rem;
    }

    .image img {
      border-radius: 14px;
    }
  }
`;
