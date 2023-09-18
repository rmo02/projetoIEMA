import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import theme from "./src/theme";
import { Contatos } from "./src/screens/Contatos";
import { Routes } from "./src/routes";
import { UserProvider } from "./src/context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar backgroundColor={"transparent"} translucent />
      </ThemeProvider>
    </UserProvider>
  );
}
