import { keyframes } from "@emotion/react";
import { styled } from "twin.macro";

const animation = keyframes`
  0% {
    opacity: 0;
    filter: blur(20px); 
    transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(-30deg)
  }
  25% {
    opacity: 1;    
    filter: blur(0); 
    transform: translateY(0) skewY(0) skewX(0) rotateZ(0)
  }
  50% {
    opacity: 1; 
    filter: blur(0); 
    transform: translateY(0)   
  }
  75% {
    opacity: 1;  
    filter: blur(0);  
    transform: translateY(0)  
  }
  100% {
    opacity: 0;
    filter: blur(20px); 
    transform: translateY(100px)
  }
`;

const Wrapper = styled.span({
  display: "inline-block",
  animationName: animation,
  animationDuration: "6s",
  animationFillMode: "forwards",
  animationIterationCount: "infinite",
  animationTimingFunction: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  opacity: "0",
});

export default function TextGhostAnimation({ text }) {
  return <Wrapper>{text}</Wrapper>;
}
