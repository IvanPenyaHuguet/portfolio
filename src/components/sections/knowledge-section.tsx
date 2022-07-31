import { SectionWrapper, GroupCardKnowledge } from '@components/index';
import styled from '@emotion/styled';

const BgContainer = styled.div(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.white,
  backgroundImage: `radial-gradient(rgba(127, 127, 127, 0.3) 2px, ${theme.colors.white} 2px)`,
  backgroundSize: '40px 40px'
}));

const Container = styled.div({
  width: '100%',
  height: '100%',
  zIndex: 10
});

export default function KnowledgeSection() {
  return (
    <SectionWrapper selector='knowledge'>
      <BgContainer>
        <Container>
          <GroupCardKnowledge />
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
