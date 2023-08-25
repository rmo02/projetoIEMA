import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { CriarContatos } from './src/screens/CriarContatos';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CriarContatos />
      <StatusBar backgroundColor={"transparent"} translucent />
    </ThemeProvider>

  );
}

