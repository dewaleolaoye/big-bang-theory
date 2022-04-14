import styled from "styled-components";
import PentagonPNG from "assets/pentagon.png";
import { ChoiceWrapper } from "components";
import { Flex } from "shared";

const Container = styled.div`
  width: 100%;
  margin: 0.5rem auto 0;
  max-width: fit-content;
  position: relative;
`;

const BgImage = styled.div`
  background: url(${PentagonPNG}) center no-repeat;
  background-size: contain;
  width: 512px;
  height: 512px;
`;

const Wrapper = styled.div`
  position: relative;
  ${Flex} {
    max-width: 455px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Choices = () => {
  return (
    <Container>
      <Wrapper>
        <BgImage />

        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="1rem"
          alignItems="center"
        >
          <ChoiceWrapper type="scissors" />
          <ChoiceWrapper type="paper" />
          <ChoiceWrapper type="spock" />
          <ChoiceWrapper type="lizard" />
          <ChoiceWrapper type="rock" />
        </Flex>
      </Wrapper>

      {/* <a
        href="https://www.flaticon.com/free-icons/pentagon"
        title="pentagon icons"
      >
        Pentagon icons created by designvector10 - Flaticon
      </a> */}
    </Container>
  );
};

export default Choices;
