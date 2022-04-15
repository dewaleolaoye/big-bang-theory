import styled from "styled-components";
import { Choices, Header, ResetSore } from "components";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import { Provider } from "react-redux";
import { store } from "store/store";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />

          <Choices />
        </Container>
        <ResetSore />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
