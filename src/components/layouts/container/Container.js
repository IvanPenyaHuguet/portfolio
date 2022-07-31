/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw, { css } from "twin.macro";

const styles = {
  container: () => [tw`container mx-auto`],
};

export default function Container({ children, additionalCss = css`` }) {
  return <div css={[styles.container(), additionalCss]}>{children}</div>;
}
