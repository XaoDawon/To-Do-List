import _tarefa from "../types/_tarefa"
import { Button, Text, View, StyleSheet } from "react-native"

type TarefaProp = {
    handleDeletePress(id: number): unknown;
    dados: _tarefa
}

export default function Tarefa(props: TarefaProp){
    return <View>
            <Text>{props.dados.texto}</Text>
            <Button title="Excluir" color={'red'} onPress={() => {props.handleDeletePress(props.dados.id)}}/>
        </View>;
}
const styles = StyleSheet.create({
    div:{
        borderWidth: 1
    }
})