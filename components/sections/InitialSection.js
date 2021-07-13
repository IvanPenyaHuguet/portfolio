import { SectionWrapper } from "../Exports";
import css from "styled-jsx/css";

const styles = css`
  section {
    background-color: red;
  }
`;

export default function InitialSection() {
  return (
    <SectionWrapper>
      <style jsx>{styles}</style>
      <section>aaaa</section>
    </SectionWrapper>
  );
}
