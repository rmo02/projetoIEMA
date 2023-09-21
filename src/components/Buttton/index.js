import { ActivityIndicator } from "react-native";
import { Container, Text } from "./style";
import theme from "../../theme";

export function Botao({ title, onPress, loading }) {
  return (
    <Container onPress={onPress}>
      {title === "Salvar" ? (
        loading ? (
          <ActivityIndicator color={theme.GRAY_100} size={30} />
        ) : (
          <Text>{title}</Text>
        )
      ) : (
        <Text>{title}</Text>
      )}
    </Container>
  );
}
