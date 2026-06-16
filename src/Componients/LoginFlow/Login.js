import styled from "styled-components";

export const Login_page = styled.main`
  /* height: 100%; */
  width: var(--align-page);
  margin: auto;
  padding: 0 1rem;
  color: var(--text-main);

  .loginView {
    margin-top: 100px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
  }

  .login,
  .register {
    flex: 1 1 400px;
    border: 1px solid var(--border-color);
    min-height: 400px;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
    background-color: var(--bg-main);
  }

  .login div label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input[type="email"],
  input[type="password"],
  input[type="text"] {
    font-size: 16px;
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    outline: none;
    margin-bottom: 10px;
    background-color: #1f2937; /* dark input background */
    color: var(--text-main);
  }

  input::placeholder {
    color: var(--text-muted);
  }

  .passwords {
    position: relative;
  }

  .eyes {
    position: absolute;
    right: 15px;
    top: 60%;
    transform: translateY(-50%);
    font-size: 22px;
    color: var(--main-color);
    /* color: var(--text-main); */
    cursor: pointer;
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    color: var(--text-secondary);
    font-size: 14px;
  }

  button {
    padding: 12px;
    border: none;
    background-color: var(--main-color);
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    color: var(--text-main);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #a3370c;
  }

  p {
    font-family: var(--font-heading);
    font-size: 28px;
    margin: 0;
  }

  span {
    font-family: var(--font-body);
    font-size: 14px;
  }

  a {
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 900;
    text-decoration: underline;
  }

  /* Responsive Styles */
  @media (max-width: 900px) {
    margin-top: 120px;
    .loginView {
      flex-direction: column;
      align-items: stretch;
    }

    .login,
    .register {
      width: 100%;
      min-height: auto;
    }

    .eyes {
      right: 10px;
    }
  }

  @media (max-width: 500px) {
    .loginView {
      gap: 10px;
    }

    input[type="email"],
    input[type="password"],
    input[type="text"] {
      padding: 10px;
      font-size: 14px;
    }

    button {
      font-size: 14px;
    }

    p {
      font-size: 24px;
    }

    span {
      font-size: 12px;
    }
  }
`;
