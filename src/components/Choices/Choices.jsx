import styled from "styled-components";
import PentagonPNG from "assets/pentagon.png";
import { ChoiceWrapper } from "components";

const Container = styled.div`
  width: 100%;
  margin: 5rem auto 0;
  max-width: fit-content;
  position: relative;
`;

const BgImage = styled.div`
  background: url(${PentagonPNG}) center no-repeat;
  background-size: contain;
  width: 512px;
  height: 512px;
  position: relative;
`;

const Choices = () => {
  return (
    <Container>
      <ChoiceWrapper type="scissors" />
      <ChoiceWrapper type="paper" />
      <ChoiceWrapper type="spock" />
      <ChoiceWrapper type="lizard" />
      <ChoiceWrapper type="rock" />

      <BgImage></BgImage>
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
