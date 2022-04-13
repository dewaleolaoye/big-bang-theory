import styled from "styled-components";
import { Choices, Header } from "components";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />

        <Choices />
      </Container>
    </ThemeProvider>
  );
}

export default App;
