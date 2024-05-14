import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

type InputProps = {
  onAdd: (value: string) => void;
};

export function Input({ onAdd }: InputProps) {
  const [todo, setTodo] = useState<string>('');

  const handleAddTodo = () => {
    onAdd(todo);
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
        onChangeText={setTodo}
        value={todo}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Image source={require('../../../assets/ic_plus.png')} />
      </TouchableOpacity>
    </View>
  );
};