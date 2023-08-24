import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/screens/Home';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar backgroundColor={"transparent"} translucent />
    </ThemeProvider>

  );
}

