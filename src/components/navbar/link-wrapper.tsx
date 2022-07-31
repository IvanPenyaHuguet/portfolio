import {
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject
} from 'react';
import styled from '@emotion/styled';
import { LinkType } from '@lib/index';
import { LinkPosition } from './nav-models';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div({});

type Props = {
  children: React.ReactNode;
  setIndicator: Dispatch<SetStateAction<LinkPosition>>;
  link: LinkType;
  refActive: MutableRefObject<LinkPosition>;
};

export default function LinkWrapper({
  setIndicator,
  children,
  link,
  refActive,
  ...props
}: Props) {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { href } = link;

  useEffect(() => {
    if (
      location.pathname + location.hash === href ||
      (location.pathname === '/' &&
        location.hash === '' &&
        href === '/#introduction')
    ) {
      const object = {
        width:
          location.hash === ''
            ? wrapperRef.current?.offsetWidth ?? 0 + 10
            : wrapperRef.current?.offsetWidth ?? 0,
        left: wrapperRef.current?.offsetLeft ?? 0
      };
      setIndicator(object);
      refActive.current = object;
    }
  }, [location, href, setIndicator, refActive]);

  return (
    <Wrapper ref={wrapperRef} {...props}>
      {children}
    </Wrapper>
  );
}
