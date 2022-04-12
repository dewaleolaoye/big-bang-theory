import styled from "styled-components";
import { Header } from "components";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
