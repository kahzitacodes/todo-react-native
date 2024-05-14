import { Image, Text, View } from 'react-native';
import { styles } from './styles';

type EmptyStateProps = {
  title: string;
  copy: string;
};

export function EmptyState({ title, copy }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/ic_list.png')} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.copy}>{copy}</Text>
      </View>
    </View>
  );
}