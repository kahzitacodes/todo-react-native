import { Image, View } from 'react-native';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/logo.png')}
      />
    </View>
  );
}