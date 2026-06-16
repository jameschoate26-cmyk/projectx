import styled from "styled-components";

export const Project = styled.main`
  /* height: 100vh; */
  /* width: min(100%, var(--align-page)); */
  margin: auto;

  .images {
    width: 100%;
    margin-top: 68px;
    height: 500px;
  }

  .images img {
    width: 100%;
    height: 500px;
  }

  .body {
    width: var(--align-page);
    margin: 5rem auto;
    display: flex;
    gap: 4rem;
    align-items: flex-start;
  }

  .investment-content {
    flex: 1;
  }

  .investment-content h2 {
    font-family: var(--font-heading);
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    color: var(--text-main);
    position: relative;
  }

  .investment-content h2::after {
    content: "";
    display: block;
    width: 90px;
    height: 4px;
    background: var(--main-color);
    margin-top: 12px;
    border-radius: 10px;
  }

  .investment-content h3 {
    font-family: var(--font-heading);
    font-size: 2rem;
    margin: 3rem 0 1rem;
    color: var(--main-color);
  }

  .investment-content p {
    font-family: var(--font-body);
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.9;
    margin-bottom: 1.3rem;
  }

  .investment-content ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }

  .investment-content li {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    line-height: 1.8;
  }

  .investment-content li::marker {
    color: var(--main-color);
  }

  .investment-content strong {
    color: var(--text-main);
  }

  .investment-content blockquote {
    margin: 2rem 0;
    padding: 1.5rem;
    background: var(--bg-main);
    border-left: 5px solid var(--main-color);
    border-radius: 12px;
    color: var(--text-main);
    font-size: 1.2rem;
    line-height: 1.7;
    font-style: italic;
  }

  .imges {
    flex: 0 0 420px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: sticky;
    top: 100px;
  }

  .imges img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }

  .imges img:hover {
    transform: translateY(-5px);
  }

  /* Large Tablets */
  @media (max-width: 1200px) {
    .body {
      gap: 2rem;
    }

    .imges {
      flex-basis: 350px;
    }

    .investment-content h2 {
      font-size: 2.5rem;
    }
  }

  /* Tablets */
  @media (max-width: 992px) {
    .body {
      flex-direction: column;
    }

    .imges {
      position: static;
      width: 100%;
      flex-basis: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .body {
      width: 95%;
      margin: 3rem auto;
    }

    .investment-content h2 {
      font-size: 2rem;
    }

    .investment-content h3 {
      font-size: 1.5rem;
    }

    .investment-content p,
    .investment-content li {
      font-size: 1rem;
    }

    .imges {
      grid-template-columns: 1fr;
    }
  }

  /* Small Phones */
  @media (max-width: 480px) {
    .investment-content h2 {
      font-size: 1.7rem;
    }

    .investment-content h3 {
      font-size: 1.3rem;
    }

    .investment-content blockquote {
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;
