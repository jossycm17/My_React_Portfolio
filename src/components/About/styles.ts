import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 0rem;
      margin-bottom: -1rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  .aboutpage-image-wrapper {
    overflow: hidden;
    border-radius: 10%;
    transform: rotate(3deg);
  }

  .aboutpage-image-wrapper img {
    width: 110%;
  }

  /* ✅ Mobile Image Above Text */
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    .about-image {
      order: -1; /* Move image to appear before the text */
      display: flex;
      justify-content: center;
      width: 100%;

      img {
        width: 100%;
        margin-top: 0rem;
      }
    }

    .hard-skills {
      justify-content: center;
    }
  }
`;
