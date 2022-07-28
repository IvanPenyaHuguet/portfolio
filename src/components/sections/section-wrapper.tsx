import styled from '@emotion/styled';
import { ReactElement } from 'react';

const Section = styled.section({
  position: 'relative',
  boxSizing: 'border-box',
  height: '100vh',
  display: 'block'
});

type SectionWrapperProps = {
  children?: ReactElement;
  selector: string;
};

export default function SectionWrapper({
  children,
  selector
}: SectionWrapperProps) {
  return (
    <Section className='section' id={selector}>
      {children}
    </Section>
  );
}
