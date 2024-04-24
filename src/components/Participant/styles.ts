import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
        fontWeight: "700",
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        justifyContent: 'center',
        alignItems: 'center'
    }
})