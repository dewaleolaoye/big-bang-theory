import { Button, ChoiceWrapper } from "components";
import { Flex } from "shared";
import styled, { css } from "styled-components";

const Result = styled.div`
  ${Flex} {
    height: 85vh;

    span,
    p {
      color: #fff;
      text-align: center;
      display: block;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1rem;
      margin-bottom: 8px;
    }

    p {
      font-size: 2rem;
    }
  }
`;

const WinWrapper = styled.div`
  ${({ type }) =>
    type === "active" &&
    css`
      border: 20px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      box-shadow: 0 30px 20px -5px rgba(255, 255, 255, 0.2),
        0 10px 10px -5px rgba(0, 0, 0, 0.4);

      & > div {
        border: 15px solid rgba(255, 255, 255, 0.15);
        border-radius: 50%;
      }
    `};
`;

const ChoiceResult = ({ handlePlayAgain, dataResult }) => {
  return (
    <Result>
      <Flex justifyContent="space-between" alignItems="center">
        <div>
          <span>You picked</span>
          <WinWrapper>
            <ChoiceWrapper type={dataResult?.player} />
          </WinWrapper>
        </div>

        <WinWrapper>
          <p>You {dataResult?.results}</p>
          <Button onClick={handlePlayAgain} title="Play Again" />
        </WinWrapper>

        <div>
          <span>The house picked</span>
          <WinWrapper type="active">
            <div>
              <ChoiceWrapper type={dataResult?.computer} />
            </div>
          </WinWrapper>
        </div>
      </Flex>
    </Result>
  );
};

export default ChoiceResult;
