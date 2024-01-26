import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Contatos } from "../screens/Contatos";
import { SplashScreen } from "../screens/splashScreen";

const Stack = createNativeStackNavigator();
export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false}} />
                <Stack.Screen name="Contatos" component={Contatos} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}