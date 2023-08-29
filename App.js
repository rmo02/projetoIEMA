import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Contatos } from './src/screens/Contatos';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contatos />
      <StatusBar backgroundColor={"transparent"} translucent />
    </ThemeProvider>

  );
}