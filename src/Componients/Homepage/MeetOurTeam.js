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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    flex-wrap: wrap;
    width: 100%;
  }

  .image {
    /* width: 380px; */
    /* height: 420px; */
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease-in-out;
  }

  img {
    width: 100%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15);
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
  }

  .image:hover {
    transform: scale(1.02);
  }

  .imagename {
    text-align: center;
    margin-block: 1rem;
    line-height: 4px;
    color: var(--text-secondary);
  }

  @media screen and (max-width: 660px) {
    .image_box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 420px) {
    .image_box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
