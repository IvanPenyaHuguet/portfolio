import { css } from "@emotion/react";

const globalEmotionStyles = css`
  ::-webkit-scrollbar {
    width: 12px;
    border-radius: 20px;
    z-index: 1000;
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
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 100;
    }
  }
  @keyframes fadeOutUp {
    from {
      opacity: 100;
    }
    to {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
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
    position: fixed;
    z-index: 50;
    left: 0;
    right: 0;
    border-radius: 4px;
    width: 100%;
    margin: 0 auto;
  }
  .closeAlert {
    position: absolute;
    left: initial;
    top: 35%;
    right: 1.5rem;
    cursor: pointer;
  }
  .closeAlert:hover {
    cursor: pointer;
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
  .svgShadow {
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
  }
  .p-dropdown-panel {
    z-index: 1500 !important;
  }
`;


export { globalEmotionStyles };
