import { Button } from "components";
import { useDispatch } from "react-redux";
import { Flex } from "shared";
import { resetScore } from "store/score.slice";
import styled from "styled-components";

const Reset = styled.div`
  position: sticky;
  bottom: 20px;
  margin-right: -7rem;

  ${Flex} {
    justify-content: flex-end;
  }
`;

const ResetSore = ({ handlePlayAgain }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetScore());

    handlePlayAgain();
  };
  return (
    <Reset>
      <Flex>
        <Button title="Reset Score" onClick={handleReset} />
      </Flex>
    </Reset>
  );
};

export default ResetSore;
