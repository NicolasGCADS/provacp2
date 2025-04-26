import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../screen/DetailsScreen";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

export type RootStackParamList = {
    Root: undefined;
    Home: undefined;
    Detalhes: undefined;
    Perfil: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={BottomTabsNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detalhes" component={DetailsScreen} />
                <Stack.Screen name="Perfil" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
