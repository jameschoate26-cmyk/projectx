import styled from "styled-components";

export const MeetourTeam = styled.main`
  font-family: var(--font-body);
  margin-block: 2rem;
  .ourteams {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    gap: 10px;
    width: 50%;
    margin: auto;
    text-align: center;
    color: var(--text-secondary);
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
`;
