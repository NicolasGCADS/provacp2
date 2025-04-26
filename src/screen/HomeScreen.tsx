import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={homeStyle.container}>
            <Text>Aqui é a Home</Text>
        </View>
    )
}

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});