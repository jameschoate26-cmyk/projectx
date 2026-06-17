import styled from "styled-components";

export const MeetourTeam = styled.main`
  font-family: var(--font-body);
  width: var(--align-page);
  margin: 2rem auto;

  .ourteams p {
    /* text-transform: capitalize; */
    font-family: var(--font-heading);
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 10px;
    color: var(--text-main);
    position: relative;
    text-align: center;
  }

  .image_box {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .image:hover {
    transform: scale(1.02);
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 8px;
    cursor: pointer;
  }

  .imagename {
    text-align: center;
    font-family: var(--font-heading);
    color: var(--text-main);
  }

  @media (max-width: 992px) {
    .image {
      height: 600px;
    }

    .image img {
    }

    .image_box {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 576px) {
    .image {
      max-width: 100%;
      height: 700px !important;
    }
    .image img {
      object-fit: fill;
      width: 100%;
    }
    .image_box {
      grid-template-columns: 1fr;
    }

    .image {
      height: 350px;
    }
  }
`;
