import { useState } from "react";
import ReactTilt from "react-universal-tilt";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import CVPhoto from "media/images/fotoCVWeb.jpg";
import { useResponsiveContext } from "hooks/HookExports";

const PhotoContainer = styled.div({
  ...tw`p-3 bg-white shadow-md rounded-md`,
  transformStyle: "preserve-3d",
});
const PositionContainer = styled.div({
  ...tw`absolute top-36 right-36`,
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
            alt="Personnal photo"
            css={photoStyles}
            width={size.width}
            height={size.height}
          />
        </PhotoContainer>
      </ReactTilt>
    </PositionContainer>
  );
}
