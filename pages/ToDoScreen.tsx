import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from '../types/_tarefa';
import Tarefa from '../components/Tarefa';

export default function ToDoScreen({navigation}) {
  const [texto, setTexto] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionar(){
    if(texto == ''){
      alert('Insira um texto, bobo!');
      return;
    }
    let tarefa: _tarefa = {
      id: tarefas.length +1,
      texto,
    };

    setTarefas([...tarefas, tarefa])
  }

  function mostrar(){
    return tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={remover}/>);
  }

  function remover(id:number){
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);
    navigation.navigate('teste')
  }

  function buscaCep(){
    navigation.navigate('buscaCep')
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={texto} onChangeText={setTexto}/><br></br>
      <Button title='Adicionar Tarefa' onPress={adicionar} color={'#acdae3'}/><br></br>
      <Button title='Busca Cep' onPress={buscaCep} color={'#acdae3'}/>
      {mostrar()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b93d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 3,
    borderColor: '#4169E1',
  },
});
