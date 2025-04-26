import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
    return (
        <View style={detailsStyle.container}>
            <Text>Esta é a tela de detalhes.</Text>
        </View>
    )
}

const detailsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});