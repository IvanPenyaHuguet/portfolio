import { SectionWrapper } from '@components/index';
import styled from '@emotion/styled';

const BgContainer = styled.div({
  width: '100%',
  height: '100%'
});

const TextContainer = styled.div({});

const Container = styled.div({
  zIndex: 10
});

export default function ProjectsSection() {
  return (
    <SectionWrapper selector='projects'>
      <BgContainer>
        <Container>
          <span>{'projects'}</span>
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
