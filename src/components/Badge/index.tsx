import { Text, View } from 'react-native';
import { styles } from './styles';

type BadgeProps = {
  count: number;
};

export function Badge({ count }: BadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{count}</Text>
    </View>
  );
}