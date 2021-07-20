import { useState, useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";

const Wrapper = styled.div({});

export default function LinkWrapper({
  setIndicator,
  children,
  link,
  refActive,
  ...props
}) {
  const router = useRouter();
  const wrapperRef = useRef(null);
  const { href } = link;

  useEffect(() => {
    if (
      router.asPath === href ||
      (router.asPath === "/" && href === "/#introduction")
    ) {
      // Some hydration problem on dev, plus 10 to minimize it
      const object = {
        width:
          router.asPath === "/"
            ? wrapperRef.current.offsetWidth + 10
            : wrapperRef.current.offsetWidth,
        left: wrapperRef.current.offsetLeft,
      };
      setIndicator(object);
      refActive.current = object;
    }
  }, [router, href, setIndicator, refActive]);

  return (
    <Wrapper ref={wrapperRef} {...props}>
      {children}
    </Wrapper>
  );
}
