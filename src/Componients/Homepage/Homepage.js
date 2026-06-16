import styled from "styled-components";

export const Home_page = styled.main`
  font-family: var(--font-body);

  margin: auto;

  .video-write {
    position: relative;
    margin-top: 0px;
  }

  .home-video {
    width: 100%;
    display: block;
    filter: brightness(70%);
  }

  .video-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
    width: 90%;
    margin-top: -250px;
  }

  .video-content h1 {
    font-size: 50px;
    margin-bottom: 10px;
    font-family: "Playwrite GB S Guides", cursive;
    font-weight: 400;
    font-style: normal;
    color: var(--bg-soft);
  }

  .content-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 9;
    width: var(--align-page);
    margin: auto;
    gap: 20px;
  }
  .box-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-items: stretch;
  }

  .box {
    text-align: center;
    margin-top: -200px;
    /* background-color: var(--bg-main); */
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 10px;
    height: 320px;
    width: 100%;
    background-color: var(--bg-main);
    /* background-color: #273244; */
  }

  .box div {
    padding: 20px 10px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    height: 100%;
  }

  .box h1 {
    font-size: 12px;
    color: var(--text-main);
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .box p {
    font-size: 13px;
    width: 100%;
    color: var(--text-secondary);
    /* color: var(--text-secondary); */
    line-height: 1.6;
  }

  @media (max-width: 1200px) {
    .video-content {
      display: none;
    }
    .video-write {
      margin-top: 90px;
    }
    .box {
      margin: 0;
      height: 230px;
    }

    .content-box {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 830px) {
    .content-box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    .box {
      height: 250px;
    }
  }
`;
