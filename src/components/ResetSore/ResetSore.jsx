import { Button } from "components";
import { Flex } from "shared";
import styled from "styled-components";

const Reset = styled.div`
  position: sticky;
  bottom: 20px;
  margin-right: 20px;

  ${Flex} {
    justify-content: flex-end;
  }
`;

const ResetSore = ({ onClick }) => {
  return (
    <Reset>
      <Flex>
        <Button title="Reset Score" onClick={onClick} />
      </Flex>
    </Reset>
  );
};

export default ResetSore;
