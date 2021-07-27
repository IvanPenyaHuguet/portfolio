import tw, { styled } from "twin.macro";
import { CardJS, CardReact, CardJava, CardSpring } from "components/Exports";

const Container = styled.div({
  ...tw`container mx-auto flex flex-col justify-center items-center h-full gap-y-8 xs:w-full xs:max-w-full`,
});
const CardsContainer = styled.div({
  ...tw`mx-auto grid pt-20
  grid-cols-4 grid-rows-1 w-full h-3/5 gap-x-4
  xs:grid-cols-1 xs:grid-rows-4 xs:h-full xs:gap-y-4 xs:w-full xs:px-2 xs:pb-6 xs:pt-8
  sm:grid-cols-1 sm:grid-rows-4 sm:h-full sm:gap-y-4 sm:w-full sm:px-4 sm:pb-8 sm:pt-8
  smland:grid-cols-1 smland:grid-rows-4 smland:h-full smland:gap-y-4 smland:w-full smland:px-4 smland:pb-8 smland:pt-8
  md:grid-cols-2 md:grid-rows-2 md:h-full md:gap-x-4 md:gap-y-4
  mdland:grid-cols-2 mdland:grid-rows-2 mdland:h-full mdland:gap-x-4 mdland:gap-y-4
  lg:grid-cols-4 lg:grid-rows-1 lg:w-full lg:h-3/5 lg:gap-x-4
  xl:grid-cols-4 xl:grid-rows-1 xl:w-full xl:h-3/5 xl:gap-x-4`,
});
const TitleContainer = styled.div({
  ...tw`mx-auto mt-20 w-full h-2/5`,
});

export default function GroupCardKnowledge() {
  return (
    <Container>
      {/* <TitleContainer /> */}
      <CardsContainer>
        <CardJS />
        <CardReact />
        <CardJava />
        <CardSpring />
      </CardsContainer>
    </Container>
  );
}
