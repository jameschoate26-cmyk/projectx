import styled from "styled-components";

export const Founder_ceo = styled.main`
  /* height: 300px; */

  display: flex;
  padding: 10px 0px;
  justify-content: center;
  background-color: var(--bg-main);
  width: var(--align-page);
  margin: auto;
  box-shadow: var(--shadow-sm);
  align-items: center;
  font-family: var(--font-body);
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  .CEO {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
  p {
    text-transform: capitalize;
    font-family: var(--font-heading);
    font-size: 1rem;
    line-height: 1.2;
    color: var(--text-main);
    position: relative;
  }

  .imges {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  .ceo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .span {
    text-align: center;
  }
  span {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
    padding: 0px 10px;
    font-family: var(--font-body);
  }

  @media (max-width: 900px) {
    height: auto;
    /* padding: 24px 16px; */

    .CEO {
      gap: 12px;
    }

    .imges,
    img {
      width: 80px;
      height: 80px;
    }

    p {
      font-size: 15px;
    }

    span {
      font-size: 13px;
      line-height: 1.5;
      /* padding: 0 10px 15px; */
    }

    .span {
      /* padding: 8px 15px; */
      padding: 10px;
    }
  }
`;
