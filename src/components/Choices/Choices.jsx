import styled from "styled-components";
import PentagonPNG from "assets/pentagon.png";
import { ChoiceResult, ChoiceWrapper, ResetSore } from "components";
import { Flex } from "shared";
import { useState } from "react";
import {
  useGetChoicesQuery,
  usePlayRoundMutation,
} from "store/choiceApi.service";
import { useDispatch } from "react-redux";
import { decrementScore, incrementScore } from "store/score.slice";

const Container = styled.div`
  width: 100%;
`;

const BgImage = styled.div`
  background: url(${PentagonPNG}) center no-repeat;
  background-size: contain;
  width: 512px;
  height: 512px;
  opacity: 0.1;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: fit-content;
  margin: 0.5rem auto 0;
`;

const Choices = () => {
  const [choiceId, setChoiceId] = useState("");
  const [choiceName, setChoiceName] = useState("");

  const { data, isSuccess, isError, error } = useGetChoicesQuery();

  const [_playRound, { data: dataResult }] = usePlayRoundMutation();

  const dispatch = useDispatch();

  const handleSelectedChoice = async (id, name) => {
    setChoiceId(id);
    setChoiceName(name);

    try {
      const response = await _playRound({ choice_id: id }).unwrap();

      if (response.results === "win") {
        dispatch(incrementScore());
      }

      if (response.results === "lose") {
        dispatch(decrementScore());
      }
    } catch (error) {}
  };

  const handlePlayAgain = async () => {
    setChoiceId("");
  };

  return (
    <>
      <Container>
        {choiceId > 0 ? (
          <ChoiceResult
            dataResult={dataResult}
            handlePlayAgain={handlePlayAgain}
            selectedChoice={choiceName}
          />
        ) : (
          <Wrapper>
            <BgImage />

            <Flex
              flexWrap="wrap"
              justifyContent="center"
              gap="1rem"
              alignItems="center"
            >
              {isSuccess &&
                data.map(({ id, name }) => {
                  return (
                    <ChoiceWrapper
                      key={id}
                      onClick={() => handleSelectedChoice(id, name)}
                      type={id}
                      position="absolute"
                    />
                  );
                })}

              {isError && <p>{error || error?.message}</p>}
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

      <ResetSore handlePlayAgain={handlePlayAgain} />
    </>
  );
};

export default Choices;
