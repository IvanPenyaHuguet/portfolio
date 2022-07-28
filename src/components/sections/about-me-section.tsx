import { SectionWrapper, AboutMeText } from '@components/index';
import styled from '@emotion/styled';
import { useResponsive } from '@hooks/index';
import { Theme } from '@emotion/react';

const BgContainer = styled.div({
  width: '100%',
  height: '100%',
  position: 'relative',
  '&:before': {
    content: "''",
    position: 'absolute',
    top: '10%',
    right: '0',
    left: '0',
    bottom: '0',
    height: '80%',
    backgroundImage: 'linear-gradient(45deg, #6303B1, #ff0099)',
    transform: 'skewY(11deg)'
  }
});

const containerVariants = {
  xs: {
    width: '100%',
    padding: '130px 0'
  },
  sm: {
    width: '400px',
    padding: '130px 0'
  },
  md: {
    width: '700px',
    padding: '170px 0'
  },
  lg: {
    width: '1000px',
    padding: '190px 0'
  }
};

type ContainerProps = {
  theme?: Theme;
  deviceSize: 'xs' | 'sm' | 'lg' | 'md';
};

const Container = styled.div(({ deviceSize }: ContainerProps) => ({
  zIndex: 10,
  position: 'relative',
  margin: '0 auto',
  height: '100%',
  ...(containerVariants[deviceSize] as { width: string; padding: string })
}));

const InsideContainer = styled.div({
  height: '100%'
});

export default function InitialSection() {
  const deviceSize = useResponsive();
  return (
    <SectionWrapper selector='about'>
      <BgContainer>
        <Container deviceSize={deviceSize}>
          <InsideContainer>
            <AboutMeText />
          </InsideContainer>
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
