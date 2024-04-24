import styled from 'styled-components';

export const SliderDiv = styled.div`
  width: 310px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 50px;

  .slick-dots li {
    width: 50px;
    height: 40px;
    border-radius: 6px;
  }

  .slick-dots {
    height: 40px;
    bottom: -38px;
  }

  .slick-list {
    cursor: grab;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    width: 518px;
    height: 390px;
    margin-bottom: 95px;

    .slick-dots {
      height: 60px;
      bottom: -65px;
    }

    .slick-dots li {
      width: 80px;
      height: 60px;
      border-radius: 12px;
    }

    .slick-prev:before,
    .slick-next:before {
      font-size: 40px;
    }

    .slick-prev {
      left: -45px;
    }
  }
`;

export const Image = styled.img`
  width: 320px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    min-width: 518px;
    height: 390px;
    border-radius: 20px;
    margin-bottom: 30px;
  }
`;

export const ImageBig = styled.img`
  width: 310px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;

  @media screen and (min-width: 1280px) {
    min-width: 518px;
    height: 390px;
    border-radius: 20px;
  }
`;

export const ImageSmall = styled.img`
  width: 50px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 60px;
    border-radius: 8px;
  }
`;
