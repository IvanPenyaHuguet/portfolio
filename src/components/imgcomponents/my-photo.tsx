import ReactTilt from 'react-parallax-tilt';
import styled from '@emotion/styled';
import CVPhoto from '@media/images/fotoCVWeb.jpg';

const PhotoContainer = styled.div(({ theme }) => ({
  padding: theme.spacings.medium,
  backgroundColor: theme.colors.white,
  borderRadius: theme.borders.radius.large,
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.30), 0 2px 4px -1px rgba(0, 0, 0, 0.15)',
  transformStyle: 'preserve-3d'
}));
const PositionContainer = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'none',
  [theme.media.mobile]: {
    position: 'static',
    alignSelf: 'center'
  },
  [theme.media.smland]: {
    position: 'static'
  },
  [theme.media.mdland]: {
    position: 'static'
  }
}));

const Image = styled.img(({ theme }) => ({
  borderRadius: theme.borders.radius.large,
  width: '200px',
  height: '300px'
}));

export default function MyPhoto() {
  return (
    <PositionContainer>
      <ReactTilt
        glareEnable={true}
        glareMaxOpacity={0.5}
        scale={1.2}
        gyroscope={false}
        perspective={1000}
      >
        <PhotoContainer>
          <Image src={CVPhoto} alt='Personal' />
        </PhotoContainer>
      </ReactTilt>
    </PositionContainer>
  );
}
