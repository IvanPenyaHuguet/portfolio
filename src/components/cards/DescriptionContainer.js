import { Transition } from "react-transition-group";
import tw, { styled, theme } from "twin.macro";

const duration = 500;

const DescriptionContainer = styled.div({
  ...tw`h-full w-full overflow-hidden`,
  opacity: "1",
  transform: "translate3d(0, 0, 0)",
  transition: `all ${duration}ms ease-out`,
  padding: "6rem 0rem 0rem",
  textIndentation: "0.25rem",
});

const transitionStyles = {
  entering: { opacity: 0, transform: "translate3d(0, 200%, 0)" },
  entered: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  exiting: { opacity: 1, transform: "translate3d(0,  0, 0)" },
  exited: { opacity: 0, transform: "translate3d(0, 200%, 0)" },
};

export default function CardJS({ children, inProp }) {
  return (
    <Transition
      in={inProp}
      timeout={{
        enter: duration,
        exit: duration - 300,
      }}
    >
      {(state) => (
        <DescriptionContainer
          style={{
            ...transitionStyles[state],
          }}
        >
          {children}
        </DescriptionContainer>
      )}
    </Transition>
  );
}
