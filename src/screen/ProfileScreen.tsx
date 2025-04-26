import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={profileStyle.container}>
            <Text>Bem-vindo ao seu perfil!</Text>
        </View>
    )
}

const profileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});