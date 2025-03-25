import _tarefa from "../types/_tarefa"
import { Button, Text, View, StyleSheet } from "react-native"

type TarefaProp = {
    dados: _tarefa
}

export default function Tarefa(props: TarefaProp){
    return <View>
            <Text>{props.dados.texto}</Text>
            <Button title="Excluir" color={'red'}/>
        </View>;
}
const styles = StyleSheet.create({
    div:{
        borderWidth: 1
    }
})