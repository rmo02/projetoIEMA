import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Contatos } from "../screens/Contatos";

const Stack = createNativeStackNavigator();
export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown:false }}/>
                <Stack.Screen name="Contatos" component={Contatos} options={{ headerShown:false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}