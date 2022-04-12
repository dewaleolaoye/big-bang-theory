import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDir }) => flexDir};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
`;

export default Flex;
