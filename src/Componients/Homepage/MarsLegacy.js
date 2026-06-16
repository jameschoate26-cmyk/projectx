import styled from "styled-components";

export const Mars_Legacy = styled.main`
  font-family: var(--font-body);
  margin-top: 30px;

  .boxs {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: stretch;
    padding: 20px 0px;
  }

  .MARS {
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    height: auto;
    text-align: center;
    background-color: var(--bg-main);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    height: 320px;
    padding: 10px 10px;
  }

  .IMG {
    width: 100%;
    height: 320px;
    overflow: hidden;
    border-radius: 8px;
  }

  .IMG img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    display: block;
  }

  .MARS h1 {
    font-size: 18px;
    color: var(--main-color);
    margin-top: 18px;
    margin-bottom: 10px;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  .MARS p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
    padding: 0 15px 20px;
    font-family: var(--font-body);
  }

  @media (max-width: 768px) {
    .boxs {
      flex-direction: column;
    }

    .IMG {
      height: 240px;
    }
  }
`;
