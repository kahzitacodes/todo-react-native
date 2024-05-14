import { Alert, FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Badge } from '../../components/Badge';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import { ToDo, TodoProps } from '../../components/ToDo';
import { EmptyState } from '../../components/EmptyState';

export function Home() {
  const [selected, setSelected] = useState<string[]>([]);
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const onAdd = (value: string) => {
    if (todos.some(todo => todo.value === value)) {
      return Alert.alert('Essa tarefa já existe', 'Já existe uma tarefa com este nome na sua lista');
    }

    if (value.length === 0) {
      return Alert.alert('Insira uma tarefa', 'Escreva uma tarefa para ser inserida na lista');
    }

    setTodos(prevState => [{
      id: uuid.v4().toString(),
      value,
    }, ...prevState]);
  };

  const onDeleteOption = (id: string) => {
    const updatedOptions = todos.filter((option) => option.id !== id);
    const updatedSelected = selected.filter((selection) => selection !== id);
    setTodos(updatedOptions);
    setSelected(updatedSelected);
  };

  const onSelectOption = (id: string) => {
    const isSelected = (id: string) => selected.includes(id);

    const updatedSelection = isSelected(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id];
    setSelected(updatedSelection);
  };

  return (
    <View style={styles.container}>
      <Input onAdd={onAdd} />
      <View style={styles.headline}>
        <View style={styles.subtitle}>
          <Text style={styles['text-blue']}>Criadas</Text>
          <Badge count={todos.length} />
        </View>
        <View style={styles.subtitle}>
          <Text style={styles['text-purple']}>Concluídas</Text>
          <Badge count={selected.length} />
        </View>
      </View>

      {todos.length > 0 ?
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          keyExtractor={todo => todo.id}
          renderItem={({ item }) => (
            <ToDo
              key={item.id}
              todo={item}
              onChange={() => onSelectOption(item.id)}
              onDelete={() => onDeleteOption(item.id)}
              isSelected={selected.includes(item.id)}
            />
          )}
        />
        :
        <EmptyState
          title="Você ainda não tem tarefas cadastradas"
          copy="Crie tarefas e organize seus itens a fazer"
        />
      }
    </View>
  );
}