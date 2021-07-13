import { Global, css } from "@emotion/react";

export default function GlobalStylesCustom() {
  return (
    <Global
      styles={css`
        ::-webkit-scrollbar {
          width: 12px;
          border-radius: 20px;
        }
        ::-webkit-scrollbar-track {
          background: #f0efef;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #c0c9cc;
          border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #a8bbbf;
        }
      `}
    />
  );
}
