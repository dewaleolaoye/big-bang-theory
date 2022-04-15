import styled, { css } from "styled-components";
import ScissorsSVG from "assets/scissors.svg";
import PaperSVG from "assets/paper.svg";
import RockSVG from "assets/rock.svg";
import LizardSVG from "assets/lizard.svg";
import SpockSVG from "assets/spock.svg";

const Icon = styled.i`
  display: block;
  width: 100%;
  height: 100%;
  background: no-repeat center;
`;

const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: 10px solid #fff;
  cursor: pointer;
  transition: 0.5s;
  position: ${({ position }) => position};

  &:hover {
    transform: rotate(-25deg) scale(1.15);
  }

  &:active {
    transform: scale(1.05);
  }

  ${({ type }) =>
    type === 1 &&
    css`
      background: ${({ theme }) => theme.rock};
      top: 25%;
      left: 0;

      & > ${Icon} {
        background-image: url(${RockSVG});
      }
    `};

  ${({ type }) =>
    type === 2 &&
    css`
      background: ${({ theme }) => theme.paper};

      top: 3%;

      & > ${Icon} {
        background-image: url(${PaperSVG});
      }
    `};

  ${({ type }) =>
    type === 3 &&
    css`
      background: ${({ theme }) => theme.scissors};
      top: 25%;
      right: 0;

      & > ${Icon} {
        background-image: url(${ScissorsSVG});
      }
    `};

  ${({ type }) =>
    type === 4 &&
    css`
      background: ${({ theme }) => theme.lizard};
      left: 10%;
      bottom: 1%;

      & > ${Icon} {
        background-image: url(${LizardSVG});
      }
    `};

  ${({ type }) =>
    type === 5 &&
    css`
      background: ${({ theme }) => theme.spock};

      right: 10%;
      bottom: 1%;

      & > ${Icon} {
        background-image: url(${SpockSVG});
      }
    `};
`;

const ChoiceWrapper = ({ type, onClick, position }) => {
  return (
    <Wrapper type={type} onClick={onClick} position={position}>
      <Icon />
    </Wrapper>
  );
};

export default ChoiceWrapper;
