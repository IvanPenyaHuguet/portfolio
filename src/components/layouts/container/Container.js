import tw from "twin.macro";

const styles = {
  container: () => [tw`container mx-auto`],
};

export default function Container({ children }) {
  return <div css={styles.container()}>{children}</div>;
}
