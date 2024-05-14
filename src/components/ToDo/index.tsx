import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export type TodoProps = {
  value: string;
  id: string;
};

type TodosProp = {
  todo: TodoProps;
  onChange: (selection: string) => void;
  onDelete: (id: string) => void;
  isSelected: boolean;
};

export function ToDo({
  todo,
  onChange,
  onDelete,
  isSelected,
}: TodosProp) {
  const { id, value } = todo;

  return (
    <View style={styles.radioContainer}>
      <TouchableOpacity style={styles.radioContent} onPress={() => onChange(id)}>
        <View style={[styles.radio, isSelected ? styles.radioSelected : styles.radioDefault]}>
          {isSelected &&
            <Image
              source={require('../../../assets/ic_check.png')}
              style={styles.radioCheck}
            />
          }
        </View>
        <Text style={[styles.label, isSelected && styles.labelSelected]}>{value}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.trashButton} onPress={() => onDelete(id)}>
        <Image source={require('../../../assets/ic_trash.png')} />
      </TouchableOpacity>
    </View>
  );
}