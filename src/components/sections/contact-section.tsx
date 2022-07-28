import { SectionWrapper } from '@components/index';
import styled from '@emotion/styled';

const BgContainer = styled.div({
  widtth: '100%',
  height: '100%',
  backgroundColor: '#3b82f6'
});

const TextContainer = styled.div({});
const Container = styled.div({
  zIndex: 10
});

export default function ContactSection() {
  return (
    <SectionWrapper selector='contact'>
      <BgContainer>
        <Container>
          <span>{'contact'}</span>
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
