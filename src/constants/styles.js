import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    twoColumnWidth: {
        width: '50%'
    },
    bold: {
        fontWeight: "bold"
    },
    name: {
        color: colors.white,
        backgroundColor: colors.secondaryColor
    }
});

export default styles;
