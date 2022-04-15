import styled from "styled-components";
import { Flex } from "shared";
import { useSelector } from "react-redux";

const HeaderWrapper = styled.div`
  border: 1px solid #505050;
  border-radius: 8px;
  color: #fff;
  padding: 0rem 2rem;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  max-width: 100px;
  text-transform: uppercase;
`;

const ScoreCard = styled.div`
  border-radius: 8px;
  font-size: 3rem;
  height: 100px;
  width: 100px;
  background-color: #fff;
  color: #000;
  text-align: center;
  font-weight: 500;
`;

const Header = () => {
  const { score } = useSelector((state) => state.score);

  return (
    <HeaderWrapper>
      <Flex alignItems="center" justifyContent="space-between">
        <Title>Rock Paper Scissors Lizard Spock</Title>

        <ScoreCard>
          <Flex alignItems="center" justifyContent="center" height="100%">
            {score}
          </Flex>
        </ScoreCard>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
