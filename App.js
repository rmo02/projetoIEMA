import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/screens/Home';
import theme from './src/theme';
import { Contatos } from './src/screens/Contatos';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
      <StatusBar backgroundColor={"transparent"} translucent />
    </ThemeProvider>
    
  );
}
