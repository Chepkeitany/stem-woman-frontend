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
    color: colors.modernWomen,
  },
  modernWomenPhrase: {
    color: colors.modernWomen,
    fontWeight: 'bold'
  },


  untoldStoriesTitle: {
    color: colors.untoldStories,
  },
  untoldStoriesPhrase: {
    color: colors.untoldStories,
    fontWeight: 'bold'
},

});


export default styles;