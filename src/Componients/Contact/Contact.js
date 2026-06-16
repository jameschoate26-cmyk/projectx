import styled from "styled-components";

export const Contact = styled.main`
  width: min(100%, var(--align-page));
  margin: auto;
  padding: 100px 20px;

  .contact-section {
    background: var(--bg-main);
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  }

  .contact-section h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 12px;
    color: var(--text-main);
  }

  .contact-section p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 700px;
  }

  .contact-form {
    display: grid;
    gap: 24px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-secondary);
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    border: 1px solid #d1d5db;
    color: var(--text-main);
    font-size: 16px;
    border-radius: 14px;
    padding: 14px 18px;
    font-size: 1rem;
    font-family: inherit;
    background-color: #111827;
    transition: all 0.25s ease;
    outline: none;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .form-group textarea {
    min-height: 180px;
    resize: vertical;
  }

  .contact-form button {
    width: fit-content;
    min-width: 180px;
    padding: 14px 28px;
    border: none;
    border-radius: 14px;
    background: #111827;
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .contact-form button:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 60px 16px;

    .contact-section {
      padding: 24px;
      border-radius: 18px;
    }

    .contact-form button {
      width: 100%;
    }
  }
`;
