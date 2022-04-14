import styled from "styled-components";

const Container = styled.button`
  border-radius: 8px;
  color: #252525;
  padding: 0.75rem 0;
  border: 1px solid #252525;
  cursor: pointer;
  background-color: #fff;
  outline: 0;
  text-align: center;
  max-width: 100%;
  width: ${({ width }) => (width ? width : "180px")};
  font-size: 1.25rem;
  font-weight: 500;
  transition: 0.5s;

  &:hover {
    font-weight: 600;
    transform: scale(1.1);
  }
`;

const Button = ({ title, onClick, width }) => {
  return (
    <Container width={width} onClick={onClick}>
      {title}
    </Container>
  );
};

export default Button;
