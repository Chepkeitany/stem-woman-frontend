import { StyleSheet } from 'react-native';
import sizes from '../../constants/sizes';

const styles = StyleSheet.create({
  profilePhoto: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: sizes.profilePhotoSize, height: sizes.profilePhotoSize, borderRadius: (sizes.profilePhotoSize) / 2 }

});

export default styles;