import SectionWrapper from "./SectionWrapper";
import tw from "twin.macro";

const styles = { section: { color: tw`text-red-400` } };

export default function InitialSection() {
  return (
    <SectionWrapper>
      <section css={styles.section}>aabaa</section>
    </SectionWrapper>
  );
}
