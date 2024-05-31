import { Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface IconImageButton {
  name?: any;
  onPress?: () => void;
  style?: object;
  tintColor?: string;
}

function IconImageButton({ name, onPress, style, tintColor }: IconImageButton) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={name} style={[styles.image, { tintColor: tintColor }]} />
    </TouchableOpacity>
  );
}

export default IconImageButton;
