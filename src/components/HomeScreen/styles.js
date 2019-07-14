import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
        home: {
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        about: {
            display: 'flex',
            flex: 1,
            padding: 20
        },
        headingText: {
            fontWeight: "bold",
            fontSize: 15,
            backgroundColor: colors.tertiaryColor,
            padding: 5,
            color: colors.white
        },
        navItems: {
            margin: 5,
        }
});

export default styles;
