import { SectionWrapper, MyPhoto, IntroductionText } from '@components/index';
import styled from '@emotion/styled';

const BgContainer = styled.div({
  width: '100%',
  height: '100%',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(#f00, #f0f)',
    clipPath: 'circle(25% at right 60%)'
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(#2196f3, #e91e63)',
    clipPath: 'circle(20% at 10% 15%)'
  }
});

const Container = styled.div(({ theme }) => ({
  zIndex: 10,
  position: 'relative',
  margin: 'auto',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '66.6666%',
  height: '60%',
  [theme.media.mobile]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '91.6666%',
    height: '83.33333%'
  },
  [theme.media.smland]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '83.33333%',
    padding: `0 ${theme.spacings.medium}`
  },
  [theme.media.mdland]: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '91.6666%'
  },
  [theme.media.lg]: {
    width: '75%',
    height: '60%'
  }
}));

export default function InitialSection() {
  return (
    <SectionWrapper>
      <BgContainer>
        <Container>
          <MyPhoto />
          <IntroductionText />
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
