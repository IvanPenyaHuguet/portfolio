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
        @keyframes fadeInDown {
          from {
            transform: translate3d(0, -100%, 0);
            @apply opacity-0;
          }
          to {
            transform: translate3d(0, 0, 0);
            @apply opacity-100;
          }
        }
        @keyframes fadeOutUp {
          from {
            @apply opacity-100;
          }
          to {
            transform: translate3d(0, -100%, 0);
            @apply opacity-0;
          }
        }
        .animationAlert {
          animation-duration: 0.5s;
          animation-fill-mode: both;
        }
        .fadeOutUp {
          animation-name: fadeOutUp;
        }
        .fadeInDown {
          animation-name: fadeInDown;
        }
        .containerAlert {
          max-width: 25rem;
          @apply fixed;
          @apply z-50;
          @apply inset-x-0;
          @apply flex;
          @apply rounded;
          @apply w-full;
          @apply mx-auto;
        }
        .closeAlert {
          position: absolute;
          left: initial;
          top: 35%;
          right: 1.5rem;
          @apply cursor-pointer;
        }
        .closeAlert:hover {
          @apply cursor-pointer;
        }
        @-webkit-keyframes hvr-icon-pulse-grow {
          to {
            transform: scale(1.3);
          }
        }
        @keyframes hvr-icon-pulse-grow {
          to {
            transform: scale(1.3);
          }
        }
        .hvr-icon-pulse-grow {
          display: inline-block;
          vertical-align: middle;
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        }
        .hvr-icon-pulse-grow .hvr-icon {
          transform: translateZ(0);
          transition-timing-function: ease-out;
        }
        .hvr-icon-pulse-grow:hover .hvr-icon,
        .hvr-icon-pulse-grow:focus .hvr-icon,
        .hvr-icon-pulse-grow:active .hvr-icon {
          animation-name: hvr-icon-pulse-grow;
          animation-duration: 0.3s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      `}
    />
  );
}
