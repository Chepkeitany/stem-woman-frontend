import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  description: {
      color: colors.black
  },

  pioneersTitle: {
    color: colors.primaryColor,
  },
  pioneersPhrase: {
      color: colors.primaryColor,
      fontWeight: 'bold'
  },

  modernWomenTitle: {
    color: colors.tertiaryColor,
  },
  modernWomenPhrase: {
    color: colors.tertiaryColor,
    fontWeight: 'bold'
  },


  untoldStoriesTitle: {
    color: colors.secondaryColor
  },
  untoldStoriesPhrase: {
    color: colors.secondaryColor,
    fontWeight: 'bold'
},

});


export default styles;