import { useState } from "react";
import ReactTilt from "react-universal-tilt";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import CVPhoto from "media/images/fotoCVWeb.jpg";
import { useResponsiveContext } from "hooks/HookExports";

const PhotoContainer = styled.div({
  ...tw`p-3 bg-white rounded-md`,
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.30), 0 2px 4px -1px rgba(0, 0, 0, 0.15)",
  transformStyle: "preserve-3d",
});
const PositionContainer = styled.div({
  ...tw`absolute 
    top-0 right-0 transform-none 
    xs:static xs:self-center  
    sm:static sm:self-center
    smland:static  
    mdland:static
    lg:top-0 lg:right-0     
  `,
});
const photoStyles = {
  transform: "translateZ(40px)",
  ...tw`rounded-md`,
};

export default function MyPhoto() {
  const [size, setSize] = useState({ width: 200, height: 300 });
  const deviceSize = useResponsiveContext();

  return (
    <PositionContainer>
      <ReactTilt shine="true" shine-opacity="0.5" scale="1.2">
        <PhotoContainer>
          <Image
            src={CVPhoto}
            alt="Personal photo"
            css={photoStyles}
            width={size.width}
            height={size.height}
          />
        </PhotoContainer>
      </ReactTilt>
    </PositionContainer>
  );
}
