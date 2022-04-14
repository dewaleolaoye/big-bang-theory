import styled from "styled-components";
import PentagonPNG from "assets/pentagon.png";
import { ChoiceResult, ChoiceWrapper } from "components";
import { Flex } from "shared";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  /* margin: 0.5rem auto 0; */
  /* max-width: fit-content; */
  /* position: relative; */
`;

const BgImage = styled.div`
  background: url(${PentagonPNG}) center no-repeat;
  background-size: contain;
  width: 512px;
  height: 512px;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: fit-content;
  margin: 0.5rem auto 0;
  /* ${Flex} { */
  /* max-width: 455px; */
  /* width: 100%; */
  /* margin: 0 auto; */
  /* } */
`;

const Choices = () => {
  const [selected, setSelected] = useState("");

  const handleSelectedChoice = (value) => {
    setSelected(value);
  };

  const handlePlayAgain = () => {
    setSelected("");
  };

  return (
    <Container>
      {selected.length > 3 ? (
        <ChoiceResult handlePlayAgain={handlePlayAgain} />
      ) : (
        <Wrapper>
          <BgImage />

          <Flex
            flexWrap="wrap"
            justifyContent="center"
            gap="1rem"
            alignItems="center"
          >
            <ChoiceWrapper
              onClick={() => handleSelectedChoice("scissors")}
              type="scissors"
              position="absolute"
            />

            <ChoiceWrapper
              onClick={() => handleSelectedChoice("paper")}
              type="paper"
              position="absolute"
            />

            <ChoiceWrapper
              onClick={() => handleSelectedChoice("spock")}
              type="spock"
              position="absolute"
            />

            <ChoiceWrapper
              onClick={() => handleSelectedChoice("lizard")}
              type="lizard"
              position="absolute"
            />

            <ChoiceWrapper
              onClick={() => handleSelectedChoice("rock")}
              type="rock"
              position="absolute"
            />
          </Flex>
        </Wrapper>
      )}

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
