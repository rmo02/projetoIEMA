import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
import { CriarContatos } from './src/screens/CriarContatos';
=======
import { Contatos } from './src/screens/Contatos';
>>>>>>> 5885176a12e9d38e25dbc080e68eb8f94a556a10
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <CriarContatos />
=======
      <Contatos />
>>>>>>> 5885176a12e9d38e25dbc080e68eb8f94a556a10
      <StatusBar backgroundColor={"transparent"} translucent />
    </ThemeProvider>

  );
}

